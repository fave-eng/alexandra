(() => {
  'use strict';

  const SUPPORTED_DIAGNOSTIC_VERSIONS = new Set(['multi-student-diagnostics-v1', 'multi-student-diagnostics-v2']);
  const config = window.APP_CONFIG || {};
  const student = config.student || {};
  const studentId = String(student.id || 'alexandra').trim().toLowerCase();
  const checksEl = document.getElementById('checks');
  const summaryEl = document.getElementById('main-summary');
  const rawEl = document.getElementById('raw-output');
  const configInfoEl = document.getElementById('config-info');
  const telegramInfoEl = document.getElementById('telegram-info');
  const dbWriteResultEl = document.getElementById('db-write-result');
  const sendResultEl = document.getElementById('send-result');
  const runAllBtn = document.getElementById('run-all');
  const dbWriteBtn = document.getElementById('test-db-write');
  const sendBtn = document.getElementById('send-test-report');
  const cloudWriteBtn = document.getElementById('test-progress-write');
  const cloudWriteResultEl = document.getElementById('progress-write-result');
  let supabaseClient = null;
  let lastReport = { startedAt: null, checks: [], health: null, directRows: [], progress: null, errors: [] };
  const isProbe = (id) => String(id || '').startsWith('__diagnostic_probe__');

  const esc = (value) => String(value ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  function addKV(target, key, value, mono = false) {
    target.insertAdjacentHTML('beforeend', `<div class="kv"><span>${esc(key)}</span><strong class="${mono ? 'mono' : ''}">${esc(value)}</strong></div>`);
  }

  function renderConfig() {
    configInfoEl.innerHTML = '';
    addKV(configInfoEl, 'student_id', studentId || '—', true);
    addKV(configInfoEl, 'Name', student.nameRu || student.nameEn || '—');
    addKV(configInfoEl, 'Supabase URL', config.supabase?.url || 'not set', true);
    addKV(configInfoEl, 'Anon key', config.supabase?.anonKey ? 'present' : 'NO');
    addKV(configInfoEl, 'cloudSync', String(config.features?.cloudSync !== false));
    addKV(configInfoEl, 'telegramNotifications', String(config.features?.telegramNotifications !== false));
    addKV(configInfoEl, 'Origin', window.location.origin, true);
  }

  function resetChecks() {
    checksEl.innerHTML = '';
    lastReport = { startedAt: new Date().toISOString(), checks: [], health: null, directRows: [], progress: null, errors: [] };
    const progressEl = document.getElementById('saved-progress');
    if (progressEl) progressEl.textContent = 'Reading saved progress from Supabase…';
    const comparisonEl = document.getElementById('local-cloud-progress');
    if (comparisonEl) comparisonEl.textContent = 'Comparing local data with Supabase…';
  }

  function addCheck(name, status, detail) {
    const icon = status === 'ok' ? '✓' : status === 'bad' ? '!' : status === 'warn' ? '!' : '…';
    checksEl.insertAdjacentHTML('beforeend', `<div class="check ${status}"><div class="ico">${icon}</div><div><div class="name">${esc(name)}</div><div class="detail">${esc(detail || '')}</div></div></div>`);
    lastReport.checks.push({ name, status, detail: detail || '' });
  }

  function setSummary(status, text) {
    summaryEl.className = `summary ${status || ''}`.trim();
    summaryEl.textContent = text;
  }

  function getClient() {
    if (supabaseClient) return supabaseClient;
    if (!window.supabase?.createClient) throw new Error('Supabase JS SDK did not load');
    const url = String(config.supabase?.url || '').trim();
    const anonKey = String(config.supabase?.anonKey || '').trim();
    if (!url || !anonKey) throw new Error('config.js is missing supabase.url or supabase.anonKey');
    supabaseClient = window.supabase.createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
    });
    return supabaseClient;
  }

  function functionUrl() {
    const base = String(config.supabase?.url || '').replace(/\/+$/, '');
    return `${base}/functions/v1/notify-telegram`;
  }

  async function invokeDiagnostic(body) {
    const anonKey = String(config.supabase?.anonKey || '').trim();
    const response = await fetch(functionUrl(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'apikey': anonKey
      },
      body: JSON.stringify(body)
    });
    const text = await response.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = { raw: text }; }
    return { ok: response.ok, status: response.status, data };
  }

  function explainFunctionFailure(result) {
    const message = String(result?.data?.error || result?.data?.message || result?.data?.raw || '').trim();
    if (result?.status === 404) return 'Edge Function notify-telegram was not found or has not been deployed.';
    if (result?.status === 401 && /Unauthorized diagnostics request/i.test(message)) {
      const version = result?.data?.diagnosticVersion ? ` Function version: ${result.data.diagnosticVersion}.` : '';
      return `The Edge Function responds, but does not accept the public key from config.js.${version} Deploy the current notify-telegram function from this project.`;
    }
    if (result?.status === 401 && /Unauthorized/i.test(message)) return 'The Edge Function rejected the authorization request. Check that the current notify-telegram function is deployed and verify_jwt=false.';
    if (result?.status === 403) return message || 'Diagnostics are not allowed for this student_id.';
    if (/Failed to fetch/i.test(message)) return 'The browser could not call the Edge Function: check the network, project URL, and CORS.';
    return `HTTP ${result?.status || '—'}${message ? `: ${message}` : ''}`;
  }

  function formatError(error) {
    if (!error) return 'Unknown error';
    const code = error.code ? `${error.code}: ` : '';
    const message = error.message || error.error_description || String(error);
    if (/homework_progress_final_dates_check/i.test(message)) {
      return `${code}${message}. Final submission rule failed: Supabase requires submitted_at and locked_at for submitted homework.`;
    }
    if (/homework_progress_report_check/i.test(message)) {
      return `${code}${message}. Report state machine failed: draft/not_sent → submitted_pending_report/pending|failed → submitted/sent.`;
    }
    if (/Final homework submission is immutable|Submitted homework cannot be changed|Invalid homework status transition/i.test(message)) {
      return `${code}${message}. Protection against editing submitted homework was triggered.`;
    }
    if (/row-level security|permission denied|42501/i.test(message)) {
      return `${code}${message}. Supabase permissions / RLS error.`;
    }
    return `${code}${message}`;
  }

  function nonEmptyAnswerCount(value) {
    if (Array.isArray(value)) return value.reduce((total, item) => total + nonEmptyAnswerCount(item), 0);
    if (value && typeof value === 'object') return Object.values(value).reduce((total, item) => total + nonEmptyAnswerCount(item), 0);
    if (value == null) return 0;
    if (typeof value === 'string') return value.trim() ? 1 : 0;
    return 1;
  }

  async function readPublishedHomework() {
    const result = { published: [], note: '' };
    try {
      const response = await fetch('data/lessons/index.json', { cache: 'no-store' });
      if (!response.ok) throw new Error(`index.json HTTP ${response.status}`);
      const index = await response.json();
      const ids = (Array.isArray(index.lessons) ? index.lessons : [])
        .map((entry) => typeof entry === 'string' ? entry : entry?.id)
        .filter((id) => /^lesson-\d+$/.test(String(id || '')));
      const uniqueIds = [...new Set(ids)];
      const lessons = await Promise.all(uniqueIds.map(async (id) => {
        try {
          const file = await fetch(`data/lessons/${id}.json`, { cache: 'no-store' });
          if (!file.ok) return null;
          const lesson = await file.json();
          return lesson && lesson.id === id ? lesson : null;
        } catch { return null; }
      }));
      result.published = lessons.filter((lesson) => lesson && ['available', 'completed', 'locked'].includes(lesson.status))
        .map(({ id, title, status }) => ({ id, title, status }));
      const missing = uniqueIds.length - lessons.filter(Boolean).length;
      if (missing) result.note = `${missing} lesson file(s) listed in the catalogue could not be loaded.`;
      return result;
    } catch (error) {
      result.note = `The published lesson list could not be read: ${error.message || error}`;
      return result;
    }
  }

  function localProgressSnapshot() {
    const snapshot = {
      available: true,
      grammar: { present: false, passed: 0, attempted: 0, topics: {} },
      vocabulary: { present: false, known: 0, difficult: 0, testedTopics: 0, words: {}, topics: {} },
      problems: []
    };
    try {
      for (const section of ['grammar', 'vocabulary']) {
        const item = window.localStorage.getItem(`english_space_${studentId}_${section}`);
        if (!item) continue;
        let data;
        try { data = JSON.parse(item); } catch {
          snapshot.problems.push(`${section}: local JSON is damaged; do not clear browser data.`);
          continue;
        }
        snapshot[section].present = true;
        if (section === 'grammar') {
          const topics = data?.topics && typeof data.topics === 'object' ? data.topics : {};
          snapshot.grammar.topics = topics;
          snapshot.grammar.passed = Object.values(topics).filter((t) => t?.passed === true).length;
          snapshot.grammar.attempted = Object.values(topics).filter((t) => Number(t?.attempts || 0) > 0).length;
        } else {
          const words = data?.words && typeof data.words === 'object' ? data.words : {};
          const topics = data?.topics && typeof data.topics === 'object' ? data.topics : {};
          snapshot.vocabulary.words = words;
          snapshot.vocabulary.topics = topics;
          snapshot.vocabulary.known = Object.values(words).filter((w) => w?.status === 'known').length;
          snapshot.vocabulary.difficult = Object.values(words).filter((w) => w?.status === 'difficult').length;
          snapshot.vocabulary.testedTopics = Object.values(topics).filter((t) => Array.isArray(t?.tests) && t.tests.length > 0).length;
        }
      }
    } catch (e) {
      snapshot.available = false;
      snapshot.problems.push(`Browser storage unavailable: ${e?.message || String(e)}`);
    }
    return snapshot;
  }

  function compareLocalAndCloud({ vocabularyRows, vocabularyTestRows, grammarRows, errors }) {
    const local = localProgressSnapshot();
    const cloudWords = new Map(vocabularyRows.map((row) => [row.word_key, row]));
    const cloudTopics = new Map(vocabularyTestRows.map((row) => [row.topic_id, row]));
    const cloudGrammar = new Map(grammarRows.map((row) => [row.topic_id, row]));
    const missingWords = Object.entries(local.vocabulary.words)
      .filter(([key, state]) => state?.status === 'known' && cloudWords.get(key)?.status !== 'known')
      .map(([key]) => key);
    const missingGrammar = Object.entries(local.grammar.topics)
      .filter(([key, state]) => state?.passed === true && !cloudGrammar.get(key)?.passed)
      .map(([key]) => key);
    const missingAttempts = Object.entries(local.grammar.topics)
      .filter(([key, state]) => Number(state?.attempts || 0) > Number(cloudGrammar.get(key)?.attempts || 0))
      .map(([key]) => key);
    const missingTests = Object.entries(local.vocabulary.topics)
      .filter(([key, state]) => {
        const localTests = Array.isArray(state?.tests) ? state.tests : [];
        const remoteTests = Array.isArray(cloudTopics.get(key)?.tests) ? cloudTopics.get(key).tests : [];
        const remoteIds = new Set(remoteTests.map((t) => t?.completedAt || JSON.stringify(t)));
        return localTests.some((t) => !remoteIds.has(t?.completedAt || JSON.stringify(t)));
      })
      .map(([key]) => key);
    return {
      device: 'current browser on this device only',
      local: {
        available: local.available,
        grammarSaved: local.grammar.present,
        vocabularySaved: local.vocabulary.present,
        passedGrammar: local.grammar.passed,
        attemptedGrammar: local.grammar.attempted,
        learnedWords: local.vocabulary.known,
        difficultWords: local.vocabulary.difficult,
        testedVocabularyTopics: local.vocabulary.testedTopics,
        problems: local.problems
      },
      cloud: {
        passedGrammar: grammarRows.filter((x) => x.passed).length,
        attemptedGrammar: grammarRows.filter((x) => Number(x.attempts || 0) > 0).length,
        learnedWords: vocabularyRows.filter((x) => x.status === 'known').length,
        testedVocabularyTopics: vocabularyTestRows.filter((x) => Array.isArray(x.tests) && x.tests.length).length
      },
      mismatches: {
        missingKnownWordCount: missingWords.length,
        missingKnownWordKeys: missingWords.slice(0, 10),
        missingPassedGrammarCount: missingGrammar.length,
        missingPassedGrammarTopics: missingGrammar.slice(0, 10),
        missingGrammarAttemptsCount: missingAttempts.length,
        missingGrammarAttemptsTopics: missingAttempts.slice(0, 10),
        missingVocabularyTestCount: missingTests.length,
        missingVocabularyTestTopics: missingTests.slice(0, 10)
      },
      cloudReadFailed: errors.length > 0,
      localDataPresent: local.grammar.present || local.vocabulary.present
    };
  }

  function renderLocalCloudComparison(comparison) {
    const target = document.getElementById('local-cloud-progress');
    if (!target) return;
    if (!comparison) { target.textContent = 'Comparison unavailable. Run the diagnostics again.'; return; }
    const { local, cloud, mismatches: m } = comparison;
    const row = (label, a, b) => `<div class="compare-row"><span>${esc(label)}</span><strong>${esc(a)}</strong><strong>${esc(b)}</strong></div>`;
    const issues = m.missingKnownWordCount + m.missingPassedGrammarCount + m.missingGrammarAttemptsCount + m.missingVocabularyTestCount;
    let msg = '';
    let severity = 'warn';
    if (comparison.cloudReadFailed) msg = 'Cloud read failed. Check the table permissions and connection errors above.';
    else if (!local.available) msg = 'This browser does not permit reading local progress. Do not clear its storage.';
    else if (issues) msg = `Unsynced data on this device: ${m.missingKnownWordCount} learned words, ${m.missingPassedGrammarCount} passed grammar topics, ${m.missingGrammarAttemptsCount} grammar attempt histories and ${m.missingVocabularyTestCount} vocabulary test histories are missing or behind in the cloud. Open the normal site while online to trigger synchronization; then run the checks again.`;
    else if (!comparison.localDataPresent) msg = 'This browser has no local Grammar/Vocabulary record. That does NOT mean the student has no progress on her phone. Run these same diagnostics inside the original Telegram browser on her phone.';
    else { msg = 'No missing local Grammar/Vocabulary results were detected in the cloud for this browser. Other devices must be checked separately.'; severity = 'ok'; }
    target.innerHTML = `
      <div class="compare-table" role="table" aria-label="Local and cloud progress comparison">
        <div class="compare-row compare-head" role="row"><span>Progress</span><span>This browser</span><span>Supabase</span></div>
        ${row('Learned words', local.learnedWords, cloud.learnedWords)}
        ${row('Grammar passed', local.passedGrammar, cloud.passedGrammar)}
        ${row('Grammar attempted', local.attemptedGrammar, cloud.attemptedGrammar)}
        ${row('Vocabulary topics tested', local.testedVocabularyTopics, cloud.testedVocabularyTopics)}
      </div>
      <div class="summary ${severity}">${esc(msg)}</div>
      <p class="note" style="margin-top:12px">This page reads only this browser's localStorage. A teacher's computer cannot inspect the student's Telegram browser localStorage remotely. Local progress is not deleted or overwritten by these checks.</p>
      ${local.problems.length ? `<p class="progress-alert">${esc(local.problems.join(' | '))}</p>` : ''}`;
  }

  async function readSavedProgress(client, homeworkRows) {
    const [vocab, vocabTopics, grammar, catalog] = await Promise.all([
      client.from(config.supabase?.tables?.vocabulary || 'vocabulary_progress')
        .select('word_key,status,source_topic_id').eq('student_id', studentId).limit(2000),
      client.from(config.supabase?.tables?.vocabularyTopics || 'vocabulary_topic_progress')
        .select('topic_id,tests').eq('student_id', studentId).limit(200),
      client.from(config.supabase?.tables?.grammar || 'grammar_progress')
        .select('topic_id,passed,attempts,best_score').eq('student_id', studentId).limit(200),
      readPublishedHomework()
    ]);
    const errors = [
      ['Vocabulary', vocab.error],
      ['Vocabulary tests', vocabTopics.error],
      ['Grammar', grammar.error]
    ].filter(([, error]) => error).map(([name, error]) => `${name}: ${formatError(error)}`);
    const rows = Array.isArray(homeworkRows) ? homeworkRows.filter((row) => !String(row.lesson_id || '').startsWith('__diagnostic_probe__')) : [];
    const submitted = rows.filter((row) => ['submitted', 'submitted_pending_report'].includes(row.status));
    const drafts = rows.filter((row) => row.status === 'draft');
    const vocabularyRows = (vocab.data || []).filter((row) => !isProbe(row.word_key));
    const vocabularyTestRows = (vocabTopics.data || []).filter((row) => !isProbe(row.topic_id));
    const grammarRows = (grammar.data || []).filter((row) => !isProbe(row.topic_id));
    const known = vocab.error ? null : vocabularyRows.filter((row) => row.status === 'known').length;
    const difficult = vocab.error ? null : vocabularyRows.filter((row) => row.status === 'difficult').length;
    const passed = grammar.error ? null : grammarRows.filter((row) => row.passed === true).length;
    const tested = grammar.error ? null : grammarRows.filter((row) => Number(row.attempts || 0) > 0).length;
    const comparison = compareLocalAndCloud({ vocabularyRows, vocabularyTestRows, grammarRows, errors });
    const progress = {
      homework: { saved: rows.length, drafts: drafts.length, submitted: submitted.length, published: catalog.published.length },
      vocabulary: { known, difficult, topicTestRecords: vocabTopics.error ? null : vocabularyTestRows.length },
      grammar: { passed, attemptedTopics: tested },
      publishedLessons: catalog.published,
      catalogWarning: catalog.note,
      readErrors: errors,
      comparison,
      savedLessons: rows.map((row) => ({
        id: row.lesson_id,
        title: row.lesson_title || row.lesson_id,
        status: row.status || 'unknown',
        filledAnswers: nonEmptyAnswerCount(row.answers),
        scoreCorrect: row.score_correct,
        scoreTotal: row.score_total,
        checkedAt: row.checked_at,
        submittedAt: row.submitted_at
      }))
    };
    return progress;
  }

  function renderSavedProgress(progress) {
    const target = document.getElementById('saved-progress');
    if (!target) return;
    if (!progress) {
      target.textContent = 'Cloud progress could not be read. See the connection errors above.';
      return;
    }
    const metric = (label, value) => `<div class="progress-metric"><strong>${esc(value == null ? '—' : value)}</strong><span>${esc(label)}</span></div>`;
    const statusText = { draft: 'Draft (not submitted)', submitted: 'Submitted', submitted_pending_report: 'Submitted, report pending' };
    const lessons = progress.savedLessons.length ? progress.savedLessons.map((lesson) => `
      <div class="progress-lesson">
        <div><strong>${esc(lesson.title)}</strong><div class="progress-muted">${esc(lesson.id)} · ${esc(statusText[lesson.status] || lesson.status)}</div></div>
        <div class="progress-lesson-info"><strong>${esc(lesson.filledAnswers)} saved answer field(s)</strong><span>${lesson.scoreTotal == null ? 'No grade saved' : `${esc(lesson.scoreCorrect)} / ${esc(lesson.scoreTotal)} correct`}</span></div>
      </div>`).join('') : '<p class="progress-muted">No homework rows saved in Supabase for this student.</p>';
    target.innerHTML = `
      <div class="progress-metrics">
        ${metric('Published homework (files on this site)', progress.homework.published)}
        ${metric('Submitted homework (Supabase)', progress.homework.submitted)}
        ${metric('Saved drafts (Supabase)', progress.homework.drafts)}
        ${metric('Words learned (Supabase)', progress.vocabulary.known)}
        ${metric('Grammar topics passed (Supabase)', progress.grammar.passed)}
      </div>
      <h3 class="progress-subheading">Homework saved in Supabase</h3>
      <div class="progress-lessons">${lessons}</div>
      <p class="note">This is <strong>cloud progress only</strong>. Work saved solely in another browser's local storage is not visible here. Drafts are not completed homework. A blank draft does not prove that the student never worked on the lesson.</p>
      ${progress.catalogWarning ? `<p class="progress-alert">${esc(progress.catalogWarning)}</p>` : ''}
      ${progress.readErrors.length ? `<p class="progress-alert">Some progress tables could not be read: ${esc(progress.readErrors.join('; '))}</p>` : ''}`;
  }

  async function runAll() {
    runAllBtn.disabled = true;
    resetChecks();
    setSummary('', 'Checking connections...');
    telegramInfoEl.innerHTML = '';

    try {
      const hasConfig = Boolean(config.supabase?.url && config.supabase?.anonKey && studentId);
      addCheck('1. config.js', hasConfig ? 'ok' : 'bad', hasConfig ? `Configuration loaded for ${studentId}.` : 'Missing student_id / Supabase URL / anon key.');
      if (!hasConfig) throw new Error('Invalid config.js');

      const sdkOk = Boolean(window.supabase?.createClient);
      addCheck('2. Supabase JS SDK', sdkOk ? 'ok' : 'bad', sdkOk ? '@supabase/supabase-js is loaded.' : 'Supabase JS CDN did not load.');
      if (!sdkOk) throw new Error('Supabase SDK did not load');

      const client = getClient();
      const homeworkTable = config.supabase?.tables?.homework || 'homework_progress';
      const readResponse = await client
        .from(homeworkTable)
        .select('student_id,lesson_id,lesson_title,status,checked_at,submitted_at,locked_at,report_status,report_sent_at,report_error,score_correct,score_total,score_percent,answers,legacy_answers,migrated_from_legacy')
        .eq('student_id', studentId)
        .order('lesson_id', { ascending: false })
        .limit(50);

      if (readResponse.error) {
        renderSavedProgress(null);
        renderLocalCloudComparison(null);
        const detail = formatError(readResponse.error);
        addCheck('3. Supabase Database / read homework_progress', 'bad', detail);
        lastReport.errors.push({ stage: 'database_read', error: detail });
      } else {
        lastReport.directRows = readResponse.data || [];
        addCheck('3. Supabase Database / read homework_progress', 'ok', `Access works. Rows received: ${(readResponse.data || []).length}.`);

        try {
          lastReport.progress = await readSavedProgress(client, readResponse.data || []);
          renderSavedProgress(lastReport.progress);
          renderLocalCloudComparison(lastReport.progress.comparison);
          const pub = lastReport.progress.homework.published;
          const saved = lastReport.progress.homework.saved;
          addCheck('4. Published lessons and saved progress', 'ok',
            `Published lesson files found: ${pub}. Supabase homework rows: ${saved}; submitted: ${lastReport.progress.homework.submitted}; drafts: ${lastReport.progress.homework.drafts}.`);
          if (lastReport.progress.catalogWarning) {
            addCheck('4a. Lesson catalogue', 'warn', lastReport.progress.catalogWarning);
          }
          const compare = lastReport.progress.comparison;
          for (const [name, table] of [['Vocabulary words', 'vocabulary'], ['Vocabulary test history', 'vocabularyTopics'], ['Grammar topics', 'grammar']]) {
            const problem = lastReport.progress.readErrors.find((e) => e.startsWith(name === 'Vocabulary words' ? 'Vocabulary:' : name === 'Vocabulary test history' ? 'Vocabulary tests:' : 'Grammar:'));
            addCheck(`4c. Supabase SELECT · ${name}`, problem ? 'bad' : 'ok', problem || `Read access works for ${studentId}.`);
          }
          const mismatches = compare.mismatches;
          const missing = mismatches.missingKnownWordCount + mismatches.missingPassedGrammarCount + mismatches.missingGrammarAttemptsCount + mismatches.missingVocabularyTestCount;
          const needsStudentDevice = !compare.localDataPresent && !compare.cloudReadFailed && compare.cloud.passedGrammar === 0 && compare.cloud.learnedWords === 0;
          addCheck('4d. Phone progress vs cloud', compare.cloudReadFailed || missing || needsStudentDevice ? 'warn' : 'ok',
            compare.cloudReadFailed ? 'The cloud tables could not all be read.' : missing ? `${missing} local/cloud differences found in this browser. View the comparison below.` : needsStudentDevice ? 'No cloud Grammar/Vocabulary results. This browser has no local data. Run the diagnostics on the original phone browser.' : 'No missing locally learned items, completed topics or test attempts were detected for this browser.');
          if (lastReport.progress.readErrors.length) {
            addCheck('4b. Other progress tables', 'warn', lastReport.progress.readErrors.join('; '));
          }
        } catch (error) {
          renderSavedProgress(null);
          renderLocalCloudComparison(null);
          addCheck('4. Progress overview', 'warn', `The overview could not be built: ${formatError(error)}`);
        }
      }

      let edgeResult;
      try {
        edgeResult = await invokeDiagnostic({ kind: 'diagnostics_health', studentId });
      } catch (error) {
        edgeResult = { ok: false, status: 0, data: { error: error.message || String(error) } };
      }

      if (!edgeResult.ok || !SUPPORTED_DIAGNOSTIC_VERSIONS.has(edgeResult.data?.diagnosticVersion)) {
        const detail = edgeResult.ok
          ? `The function responds with an unrecognized diagnostics version: ${edgeResult.data?.diagnosticVersion || 'not specified'}. Verify server compatibility before redeploying.`
          : explainFunctionFailure(edgeResult);
        addCheck('5. Supabase Edge Function notify-telegram', 'bad', detail);
        lastReport.errors.push({ stage: 'edge_function', error: detail, response: edgeResult });
      } else {
        lastReport.health = edgeResult.data;
        addCheck('5. Supabase Edge Function notify-telegram', 'ok', `The required version is deployed: ${edgeResult.data.diagnosticVersion}.`);

        const h = edgeResult.data;
        const browserRows = Array.isArray(lastReport.directRows) ? lastReport.directRows.length : 0;
        const serviceRows = Number(h.database?.homeworkRows || 0);
        const removedProbes = Number(h.database?.staleDiagnosticProbesRemoved || 0);
        const browserRowsAfterCleanup = Math.max(0, browserRows - removedProbes);
        const visibilityOk = !readResponse.error && browserRowsAfterCleanup === serviceRows;
        addCheck(
          '6. RLS / same read in browser and service role',
          visibilityOk ? 'ok' : 'bad',
          visibilityOk
            ? `Browser and server see the same number of homework rows: ${serviceRows}${removedProbes ? ` (another ${removedProbes} technical probe rows removed by the server)` : ''}.`
            : `The browser sees ${browserRowsAfterCleanup} working rows after cleanup, while Edge Function sees ${serviceRows}. Check the SELECT policy for student_id=${studentId}.`
        );

        addCheck('7. Edge Function → Supabase (service role)', h.database?.ok ? 'ok' : 'bad', h.database?.ok ? `The server reads Supabase tables. Homework rows: ${h.database.homeworkRows}.` : (h.database?.error || 'The server cannot read Supabase.'));
        addCheck('8. Telegram recipient', h.recipient?.ok ? 'ok' : 'bad', h.recipient?.ok ? `Recipient found and enabled (${h.recipient.source || 'server'}).` : (h.recipient?.error || 'Recipient not found or disabled.'));
        addCheck('9. Telegram topic', h.recipient?.ok ? 'ok' : 'bad', h.recipient?.ok ? (h.recipient.threadId == null ? 'No separate topic is configured (message_thread_id=NULL).' : `message_thread_id=${h.recipient.threadId}.`) : 'Cannot check the topic without a configured recipient.');
        addCheck('10. Telegram Bot API / bot', h.telegram?.bot?.ok ? 'ok' : 'bad', h.telegram?.bot?.ok ? `Telegram sees the bot @${h.telegram.bot.username || 'no username'}.` : (h.telegram?.bot?.error || 'getMe failed.'));
        addCheck('11. Telegram Bot API / group', h.telegram?.chat?.ok ? 'ok' : 'bad', h.telegram?.chat?.ok ? `The bot has access to the target chat (${h.telegram.chat.type || 'chat'}).` : (h.telegram?.chat?.error || 'The bot does not have access to the target chat.'));

        if (Array.isArray(h.database?.suspiciousHomework) && h.database.suspiciousHomework.length) {
          addCheck('12. Saved homework state', 'warn', `Some rows do not match the current state machine: ${h.database.suspiciousHomework.join(', ')}. They should be checked.`);
        } else {
          const legacyCount = Array.isArray(h.database?.legacyHomework) ? h.database.legacyHomework.length : 0;
          addCheck(
            '12. Saved homework state',
            'ok',
            legacyCount
              ? `New rows match the state machine. Old migrated rows: ${legacyCount}; diagnostics does not change them.`
              : 'Rows match the draft → submitted_pending_report → submitted state machine.'
          );
        }

        const pendingHomework = Array.isArray(h.database?.pendingHomework) ? h.database.pendingHomework : [];
        if (pendingHomework.length) {
          addCheck(
            '13. Telegram homework reports',
            'warn',
            `Waiting to be sent or retried: ${pendingHomework.map((item) => `${item.lessonId} (${item.reportStatus || 'pending'})`).join(', ')}. The new site version will retry automatically after sync.`
          );
        } else {
          addCheck('13. Telegram homework reports', 'ok', 'There are no stuck submitted_pending_report rows.');
        }

        if (removedProbes > 0) {
          addCheck('14. Diagnostics cleanup', 'ok', `Old technical probe rows removed: ${removedProbes}.`);
        }

        telegramInfoEl.innerHTML = '';
        addKV(telegramInfoEl, 'Edge version', h.diagnosticVersion || '—', true);
        addKV(telegramInfoEl, 'Recipient', h.recipient?.ok ? 'found' : 'error');
        addKV(telegramInfoEl, 'Source', h.recipient?.source || '—', true);
        addKV(telegramInfoEl, 'Enabled', String(Boolean(h.recipient?.enabled)));
        addKV(telegramInfoEl, 'message_thread_id', h.recipient?.threadId ?? 'NULL', true);
        addKV(telegramInfoEl, 'Bot API', h.telegram?.bot?.ok ? 'OK' : 'ERROR');
        addKV(telegramInfoEl, 'Chat access', h.telegram?.chat?.ok ? 'OK' : 'ERROR');
      }

      const bad = lastReport.checks.filter((item) => item.status === 'bad');
      const warn = lastReport.checks.filter((item) => item.status === 'warn');
      if (bad.length) {
        setSummary('bad', `Problem found: ${bad[0].name}. See the first red row above.`);
      } else if (warn.length) {
        setSummary('warn', 'The main connections work, but there is a warning about saved data.');
      } else {
        setSummary('ok', 'All checked connections work. Now you can separately test Supabase write and the Telegram test report.');
      }
    } catch (error) {
      const detail = formatError(error);
      addCheck('Check stopped', 'bad', detail);
      lastReport.errors.push({ stage: 'fatal', error: detail });
      setSummary('bad', detail);
    } finally {
      lastReport.finishedAt = new Date().toISOString();
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      runAllBtn.disabled = false;
    }
  }

  async function bestEffortDeleteProbe(client, table, probeId) {
    try {
      await client.from(table).delete().eq('student_id', studentId).eq('lesson_id', probeId);
    } catch {}
  }

  async function testDatabaseWrite() {
    dbWriteBtn.disabled = true;
    dbWriteResultEl.innerHTML = '<div class="summary">Checking the full homework save path...</div>';

    const client = getClient();
    const table = config.supabase?.tables?.homework || 'homework_progress';
    const probeId = `__diagnostic_probe__${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    try {
      const { error: insertError } = await client.from(table).insert({
        student_id: studentId,
        student_name: student.nameRu || student.nameEn || studentId,
        lesson_id: probeId,
        lesson_title: 'Diagnostics homework write probe',
        status: 'draft',
        answers: {},
        legacy_answers: null,
        migrated_from_legacy: false,
        score_correct: null,
        score_total: null,
        score_percent: null,
        checked_at: null,
        submitted_at: null,
        locked_at: null,
        report_status: 'not_sent',
        report_sent_at: null,
        report_error: null
      });

      if (insertError) throw new Error(`browser_draft_insert: ${formatError(insertError)}`);

      const probe = await invokeDiagnostic({
        kind: 'diagnostics_homework_probe',
        studentId,
        lessonId: probeId
      });

      if (!probe.ok || !probe.data?.ok) {
        throw new Error(probe.data?.error || explainFunctionFailure(probe));
      }

      dbWriteResultEl.innerHTML = '<div class="summary ok">✓ The full homework_progress path works: browser draft → submitted_pending_report → submitted → cleanup. Real homework was not changed.</div>';
      lastReport.databaseWriteProbe = { ok: true, lessonId: probeId, stages: probe.data.stages || null };
    } catch (error) {
      const detail = formatError(error);
      dbWriteResultEl.innerHTML = `<div class="summary bad">✕ homework_progress path error: ${esc(detail)}</div>`;
      lastReport.errors.push({ stage: 'database_write_probe', error: detail, lessonId: probeId });
      try { await invokeDiagnostic({ kind: 'diagnostics_cleanup_probe', studentId, lessonId: probeId }); } catch {}
      await bestEffortDeleteProbe(client, table, probeId);
    } finally {
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      dbWriteBtn.disabled = false;
    }
  }

  async function testProgressWrite() {
    cloudWriteBtn.disabled = true;
    cloudWriteResultEl.innerHTML = '<div class="summary">Checking temporary Grammar and Vocabulary records…</div>';
    const probeId = `__diagnostic_probe__${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    const specs = [
      { name: 'Grammar', table: config.supabase?.tables?.grammar || 'grammar_progress', key: 'topic_id',
        create: { student_id: studentId, topic_id: probeId, passed: false, attempts: 1, best_score: 0 },
        update: { attempts: 2 }, verify: (row) => Number(row?.attempts) === 2 },
      { name: 'Vocabulary words', table: config.supabase?.tables?.vocabulary || 'vocabulary_progress', key: 'word_key',
        create: { student_id: studentId, word_key: probeId, word_id: probeId, en: 'diagnostic temporary record', ru: '', status: 'difficult' },
        update: { status: 'known', learned_at: new Date().toISOString() }, verify: (row) => row?.status === 'known' },
      { name: 'Vocabulary tests', table: config.supabase?.tables?.vocabularyTopics || 'vocabulary_topic_progress', key: 'topic_id',
        create: { student_id: studentId, topic_id: probeId, tests: [] },
        update: { tests: [{ completedAt: new Date().toISOString(), diagnostic: true }] },
        verify: (row) => Array.isArray(row?.tests) && row.tests.length === 1 }
    ];
    const result = { startedAt: new Date().toISOString(), operations: [] };
    try {
      const client = getClient();
      for (const spec of specs) {
        let error = null;
        let cleanupError = null;
        let rowWasCreated = false;
        try {
          const inserted = await client.from(spec.table).insert(spec.create).select(spec.key).single();
          if (inserted.error) throw new Error(`INSERT: ${formatError(inserted.error)}`);
          rowWasCreated = true;
          const updated = await client.from(spec.table).update(spec.update)
            .eq('student_id', studentId).eq(spec.key, probeId).select('*').single();
          if (updated.error) throw new Error(`UPDATE: ${formatError(updated.error)}`);
          if (!spec.verify(updated.data)) throw new Error('UPDATE verification returned incorrect values');
          const readBack = await client.from(spec.table).select('*')
            .eq('student_id', studentId).eq(spec.key, probeId).single();
          if (readBack.error || !spec.verify(readBack.data)) throw new Error(`SELECT verification: ${formatError(readBack.error || 'record not found')}`);
        } catch (e) { error = e?.message || String(e); }
        finally {
          // Deletion is restricted in Supabase RLS to __diagnostic_probe__ records only.
          // We never delete or update a real student's progress record.
          try {
            const deleted = await client.from(spec.table).delete()
              .eq('student_id', studentId).eq(spec.key, probeId);
            if (deleted.error) throw deleted.error;
            const remaining = await client.from(spec.table).select(spec.key)
              .eq('student_id', studentId).eq(spec.key, probeId);
            if (remaining.error || (remaining.data || []).length) throw new Error('Temporary row could not be confirmed deleted');
          } catch (e) { cleanupError = formatError(e); }
        }
        result.operations.push({ table: spec.table, name: spec.name, ok: !error && !cleanupError, error, cleanupError, rowWasCreated });
      }
      const good = result.operations.filter((item) => item.ok).length;
      cloudWriteResultEl.innerHTML = `
        <div class="summary ${good === 3 ? 'ok' : 'bad'}">${good}/3 tables passed the INSERT → UPDATE → SELECT → DELETE test.</div>
        ${result.operations.map((item) => `<div class="check ${item.ok ? 'ok' : 'bad'}"><div class="ico">${item.ok ? '✓' : '!'}</div><div><div class="name">${esc(item.name)}</div><div class="detail">${esc(item.ok ? 'Read, write, and cleanup confirmed. No student data changed.' : [item.error, item.cleanupError && `Cleanup: ${item.cleanupError}`].filter(Boolean).join(' | '))}</div></div></div>`).join('')}`;
    } catch (e) {
      result.error = formatError(e);
      cloudWriteResultEl.innerHTML = `<div class="summary bad">The progress-write test could not start: ${esc(result.error)}</div>`;
    } finally {
      result.finishedAt = new Date().toISOString();
      lastReport.cloudProgressWriteProbe = result;
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      cloudWriteBtn.disabled = false;
    }
  }

  async function sendTestReport() {
    sendBtn.disabled = true;
    sendResultEl.innerHTML = '<div class="summary">Sending a test report...</div>';
    try {
      const result = await invokeDiagnostic({ kind: 'diagnostics_send_report', studentId, pageUrl: window.location.href });
      if (!result.ok || !result.data?.ok) {
        const message = result.data?.error || explainFunctionFailure(result);
        const retry = result.data?.retryAfterSeconds ? ` Try again in ${result.data.retryAfterSeconds} sec.` : '';
        throw new Error(`${message}${retry}`);
      }
      if (result.data.skipped) {
        const retry = Number(result.data.retryAfterSeconds || 30);
        sendResultEl.innerHTML = `<div class="summary warn">A test was sent very recently. Try again in about ${retry} sec.</div>`;
      } else {
        sendResultEl.innerHTML = `<div class="summary ok">✓ Telegram accepted the test report. message_id=${esc(result.data.telegramMessageId)}; thread_id=${esc(result.data.threadId ?? 'NULL')}.</div>`;
      }
      lastReport.telegramSendProbe = result.data || null;
    } catch (error) {
      const detail = formatError(error);
      sendResultEl.innerHTML = `<div class="summary bad">✕ The test report was not sent: ${esc(detail)}</div>`;
      lastReport.errors.push({ stage: 'telegram_test_send', error: detail });
    } finally {
      rawEl.textContent = JSON.stringify(lastReport, null, 2);
      sendBtn.disabled = false;
    }
  }

  async function copyReport() {
    const text = rawEl.textContent || '';
    try {
      await navigator.clipboard.writeText(text);
      const button = document.getElementById('copy-report');
      const old = button.textContent;
      button.textContent = 'Copied ✓';
      setTimeout(() => { button.textContent = old; }, 1300);
    } catch {
      window.prompt('Copy the report manually:', text);
    }
  }

  document.getElementById('run-all').addEventListener('click', runAll);
  document.getElementById('test-db-write').addEventListener('click', testDatabaseWrite);
  cloudWriteBtn.addEventListener('click', testProgressWrite);
  document.getElementById('send-test-report').addEventListener('click', sendTestReport);
  document.getElementById('copy-report').addEventListener('click', copyReport);
  document.getElementById('reload-page').addEventListener('click', () => window.location.reload());
  renderConfig();
})();

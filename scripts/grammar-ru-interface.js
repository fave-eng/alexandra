/* Localises grammar section UI without changing lesson IDs, quiz keys or progress storage. */
(() => {
  'use strict';
  const isGrammar = ['grammar', 'grammar-topic'].includes(document.body?.dataset?.view);
  if (!isGrammar) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const set = (selector, label, root = document) => {
    const el = $(selector, root);
    if (el && el.textContent !== label) el.textContent = label;
  };
  const replace = (selector, fn, root = document) => {
    $$(selector, root).forEach(el => {
      const original = el.textContent || '';
      const result = fn(original);
      if (result && result !== original) el.textContent = result;
    });
  };
  const taskCount = 16;
  let running = false;
  let observer = null;
  function translate() {
    if (running) return;
    running = true;
    if (observer) observer.disconnect();
    try {
      replace('#app-toast', s => ({'Topic passed.':'Тема изучена.','There are mistakes in the tasks.':'В заданиях есть ошибки.'})[s] || s);
      if (document.body.dataset.view === 'grammar') {
        replace('#grammar-overall-progress *', s => s === 'Overall progress' ? 'Общий прогресс' : s);
        replace('#grammar-list .item-main p', s => s.replace(/\b(\d+) attempts\b/g, '$1 попыток').replace(/\b(\d+) attempt\b/g, '$1 попытка').replace('The material has not been published yet.', 'Материал пока не опубликован.'));
        replace('#grammar-list .status-badge', s => ({Passed:'Пройдено', Locked:'Закрыто', Open:'Открыть'})[s] || s);
        replace('#grammar-list .item-main h3', s => s === '🔒 Coming soon' ? '🔒 Скоро' : s);
      }
      if (document.body.dataset.view === 'grammar-topic') {
        replace('#grammar-hero-subtitle', s => s.includes('Level · clear guide and mini-test') ? s.replace('Level · clear guide and mini-test','· объяснение и проверочный тест').replace(/^([A-Za-z0-9.]+) ·/,'Уровень $1 ·') : s);
        set('.grammar-guide-index > strong','Содержание темы');
        replace('.grammar-status-copy strong', s => ({'Topic passed':'Тема изучена','Topic not passed yet':'Тема ещё не изучена'})[s] || s);
        replace('.grammar-status-copy span', s => s.replace(/Best result:\s*(\d+)%\s*·\s*attempts:\s*(\d+)/, 'Лучший результат: $1% · попыток: $2').replace(/Study the guide and complete the mini-test of (\d+) tasks\./, 'Прочитай объяснение и выполни тест из $1 заданий.'));
        replace('.grammar-status-badge', s => s === 'Passed' ? 'Пройдено' : s.replace(/^Need (\d+) \/ (\d+)$/, 'Нужно $1 из $2'));
        replace('.grammar-test-intro .eyebrow', s => s === 'Mini-test' ? 'Проверочный тест' : s);
        replace('#mini-test-title', s => s.replace(/4 exercises × 4 tasks/, '4 упражнения × 4 задания').replace(/(\d+) tasks: from easier to harder/, '$1 заданий от простого к сложному'));
        replace('.grammar-test-intro p', s => s.replace(/Answer all questions\. To pass, you need (\d+) of (\d+)\. After a successful check, answers are locked\./,'Ответь на все вопросы. Чтобы изучить тему, нужно набрать $1 из $2. После успешной проверки ответы будут заблокированы.'));
        replace('.grammar-practice-heading .eyebrow', s => s.replace(/^Exercise (\d+)$/, 'Упражнение $1'));
        replace('select.grammar-select option:first-child', s => s === 'Choose an answer' ? 'Выбери ответ' : s);
        $$('.grammar-reorder-tokens + input[placeholder], input.grammar-text-answer[placeholder]').forEach(el => {
          if (el.getAttribute('placeholder') === 'Write the complete sentence') el.setAttribute('placeholder','Напиши полное предложение');
        });
        replace('#grammar-result strong', s => s.replace('Topic passed. Answers are locked.','Тема изучена. Ответы сохранены.').replace(/Complete all (\d+) tasks\./,'Выполни все $1 заданий.').replace('Complete all four tasks.','Выполни все четыре задания.').replace('Topic passed ✓','Тема изучена ✓').replace(/^(\d+) of (\d+) · (\d+)%$/,'Результат: $1 из $2 · $3%'));
        replace('#grammar-result span', s => s.replace(/Best result: (\d+)%/,'Лучший результат: $1%').replace('The check button becomes active after you complete the test.','Кнопка проверки станет доступна после заполнения всех ответов.').replace(/(\d+) of (\d+) · (\d+)%\. Answers are locked\./,'$1 из $2 · $3%. Ответы сохранены и заблокированы.').replace('There are mistakes. Correct answers are not shown; check the rule and correct the tasks.','Есть ошибки. Правильные ответы не показываются. Повтори правило и исправь свои ответы.'));
        replace('#check-grammar', s => s.replace(/^Check tasks$/, 'Проверить').replace(/^Answers: (\d+) \/ (\d+)$/, 'Ответов: $1 из $2').replace(/^Topic learned$/, 'Тема изучена').replace(/^Checked$/, 'Проверено'));
        replace('#retry-grammar', s => ({'Correct answers':'Исправить ответы','Clear answers':'Очистить ответы'})[s] || s);
        replace('#grammar-quiz .feedback', s => s === 'Correct.' ? 'Верно.' : s === 'There is a mistake. Check the rule and try again.' ? 'Есть ошибка. Повтори правило и попробуй снова.' : s);
        $$('.grammar-gaps [aria-label^="Gap "]').forEach(el => el.setAttribute('aria-label',el.getAttribute('aria-label').replace('Gap ', 'Пропуск ')));

        // Show Russian meanings beside the original English test prompts; never alter questions or keys.
        const topicId = new URLSearchParams(location.search).get('id');
        const topic = (window.GRAMMAR_DATA || []).find(item => item.id === topicId);
        if (topic) {
          const questions = (topic.quizExercises || []).flatMap(e => e.items || []);
          $$('#grammar-quiz [data-grammar-question]').forEach(card => {
            if ($('.grammar-prompt-translation',card)) return;
            const index = Number(card.getAttribute('data-grammar-question'));
            const meaning = questions[index]?.promptRu;
            const h3 = $('h3', card);
            if (!meaning || !h3) return;
            const p = document.createElement('p');
            p.className = 'grammar-prompt-translation';
            p.textContent = meaning;
            h3.insertAdjacentElement('afterend',p);
          });
        }
      }
    } catch(error) {
      console.warn('Russian grammar labels could not be updated:',error);
    } finally {
      running = false;
      if (observer) observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:false});
    }
  }
  let pending = false;
  function queueTranslate() {
    if (pending) return;
    pending = true;
    Promise.resolve().then(() => {pending = false;translate();});
  }
  function init() {
    if (!document.body || !['grammar','grammar-topic'].includes(document.body.dataset.view)) return;
    if (document.getElementById('grammar-ru-style')) return;
    const style = document.createElement('style');
    style.id = 'grammar-ru-style';
    style.textContent = '.grammar-prompt-translation{margin:.45rem 0 .9rem;color:#46556a;font-size:.94rem;line-height:1.5;padding-left:.75rem;border-left:2px solid #c9d7e7}';
    document.head.append(style);
    observer = new MutationObserver(queueTranslate);
    translate();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

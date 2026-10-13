(() => {
  'use strict';
  const grammar = Array.isArray(window.GRAMMAR_DATA) ? window.GRAMMAR_DATA.filter(t => t.status !== 'draft' && t.status !== 'locked') : [];
  const vocabulary = Array.isArray(window.VOCABULARY_DATA) ? window.VOCABULARY_DATA.filter(t => Array.isArray(t.words) && t.words.length) : [];
  const notes = Array.isArray(window.KNOWLEDGE_BASE_NOTES) ? window.KNOWLEDGE_BASE_NOTES : [];
  const $ = (id) => document.getElementById(id);
  const escape = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const byId = (items, id) => items.find(item => item.id === id);
  const pageLink = (type, id) => `${type === 'grammar' ? 'grammar-topic' : 'vocabulary'}.html?id=${encodeURIComponent(id)}`;
  const validHref = (type, topic) => pageLink(type, topic.id);
  const noteSearch = (note) => [note.title,note.description,note.unit,...note.sections.flatMap(section => [section.heading,section.text,section.left,section.right,...(section.rows || []).flat(),...(section.lines || []).flat()])].join(' ');
  const resources = [
    ...notes.map(note=>({type:'reference',unit:note.unit,title:note.title,search:noteSearch(note),value:note})),
    ...grammar.map(topic=>({type:'grammar',unit:topic.linkedLessonId,title:topic.title,search:[topic.title, topic.overview?.lead, ...(topic.guide || []).map(x=>x.title+' '+x.lead)].join(' '),value:topic})),
    ...vocabulary.map(topic=>({type:'vocabulary',unit:topic.label,title:topic.title,search:[topic.title,topic.label,...topic.words.flatMap(w=>[w.en,w.ru])].join(' '),value:topic}))
  ];
  let filter='all';
  let search='';
  const lower = s => String(s||'').toLocaleLowerCase().trim().replace(/ё/g,'е');

  function noteSection(section) {
    const heading = `<h4>${escape(section.heading)}</h4>`;
    if (section.kind === 'table') return `<section class="kb-note-section">${heading}<div class="kb-table-scroll"><table class="kb-table"><thead><tr>${(section.columns||[]).map(c=>`<th scope="col">${escape(c)}</th>`).join('')}</tr></thead><tbody>${(section.rows||[]).map(row=>`<tr>${row.map(cell=>`<td>${escape(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`;
    if (section.kind === 'compare') return `<section class="kb-note-section">${heading}<div class="kb-compare"><div><strong>${escape(section.leftTitle)}</strong><p>${escape(section.left)}</p></div><div><strong>${escape(section.rightTitle)}</strong><p>${escape(section.right)}</p></div></div></section>`;
    if (section.kind === 'pattern') return `<section class="kb-note-section">${heading}<div class="kb-pattern">${(section.lines||[]).map(([key, value])=>`<div><span>${escape(key)}</span><strong>${escape(value)}</strong></div>`).join('')}</div></section>`;
    return `<section class="kb-note-section">${heading}<p>${escape(section.text)}</p></section>`;
  }
  function noteCard(note) {
    const related = byId(grammar,note.grammarId) || byId(vocabulary,note.vocabId);
    const type = note.grammarId ? 'grammar' : 'vocabulary';
    return `<details class="kb-note-card" data-entry="${escape(note.id)}"><summary><span class="kb-note-icon" aria-hidden="true">≡</span><span class="kb-note-heading"><small>${escape(note.unit)} · QUICK REFERENCE</small><strong>${escape(note.title)}</strong><span>${escape(note.description)}</span></span><span class="kb-chevron" aria-hidden="true">⌄</span></summary><div class="kb-note-body">${note.sections.map(noteSection).join('')}${related ? `<a class="kb-deep-link" href="${validHref(type,related)}">${type === 'grammar' ? 'Read the full grammar guide' : 'Practise these words'} <span aria-hidden="true">↗</span></a>` : ''}</div></details>`;
  }
  function grammarCard(topic) {
    const short = topic.guide?.[0]?.lead || topic.overview?.lead || 'Learn the rule and practise it.';
    return `<a class="kb-resource" href="${validHref('grammar',topic)}"><span class="kb-resource-icon kb-grammar-icon" aria-hidden="true">G</span><span class="kb-resource-text"><small>GRAMMAR · ${escape(topic.level || 'A1')}</small><strong>${escape(topic.title)}</strong><span>${escape(short)}</span></span><span class="kb-link-arrow" aria-hidden="true">↗</span></a>`;
  }
  function vocabCard(topic) {
    const examples = topic.words.slice(0,5).map(w=>w.en).join(' · ');
    return `<a class="kb-resource" href="${validHref('vocabulary',topic)}"><span class="kb-resource-icon kb-vocab-icon" aria-hidden="true">V</span><span class="kb-resource-text"><small>VOCABULARY · ${escape(topic.label || '')} · ${topic.words.length} words</small><strong>${escape(topic.title)}</strong><span>${escape(examples)}</span></span><span class="kb-link-arrow" aria-hidden="true">↗</span></a>`;
  }
  function draw() {
    const match = item => (filter === 'all' || filter === item.type) && lower(item.search).includes(lower(search));
    const matches = resources.filter(match);
    const per = type => matches.filter(item=>item.type===type);
    const groups = [
      ['reference','kb-reference-section','kb-reference-list',noteCard],
      ['grammar','kb-grammar-section','kb-grammar-list',grammarCard],
      ['vocabulary','kb-vocabulary-section','kb-vocabulary-list',vocabCard]
    ];
    groups.forEach(([type,sectionId,listId,render])=>{
      const items=per(type);
      $(sectionId).hidden = items.length===0;
      $(listId).innerHTML = items.map(item=>render(item.value)).join('');
    });
    $('kb-result-count').textContent = `${matches.length} ${matches.length===1?'topic':'topics'} found`;
    $('kb-empty').hidden = matches.length>0;
    $('kb-reset').hidden = !search && filter==='all';
    document.querySelectorAll('[data-kb-filter]').forEach(button=>{
      const active=button.dataset.kbFilter===filter;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-pressed',String(active));
    });
  }
  function reset() { search=''; filter='all';$('kb-search').value=''; draw();$('kb-search').focus(); }
  document.addEventListener('DOMContentLoaded', () => {
    $('kb-count-notes').textContent = String(notes.length);
    $('kb-count-grammar').textContent = String(grammar.length);
    $('kb-count-vocabulary').textContent = String(vocabulary.length);
    $('kb-search').addEventListener('input',e=>{ search=e.target.value; draw(); });
    document.querySelectorAll('[data-kb-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.kbFilter;draw();}));
    $('kb-reset').addEventListener('click',reset);
    $('kb-empty-reset').addEventListener('click',reset);
    draw();
  });
})();

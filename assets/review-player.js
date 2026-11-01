/* ==================================================================
   ВІКНО «ПОВТОРЕННЯ УРОКУ» (дані — assets/lesson-reviews.js)
   openLessonReview(review, { storeKey }) — відкриває повторення
   поверх сторінки. storeKey — щоб запам'ятати найкращий результат
   у цьому браузері (необов'язково).
================================================================== */
function rvMark(s){
  return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');
}
function rvNorm(s){
  return String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?;:]/g, '').trim().replace(/\s+/g, ' ');
}
function rvTotal(review){
  return review.sections.reduce((a, s) => a + s.items.length, 0);
}
function rvBestGet(key){
  try{ const v = localStorage.getItem('lessonReview:' + key); return v == null ? null : +v; }catch(e){ return null; }
}
function rvBestSet(key, val){
  try{
    const prev = rvBestGet(key);
    if(prev == null || val > prev) localStorage.setItem('lessonReview:' + key, String(val));
  }catch(e){}
}

function openLessonReview(review, opts = {}){
  const storeKey = opts.storeKey || null;
  const total = rvTotal(review);
  let answered = {}, correct = 0;

  const ov = document.createElement('div');
  ov.className = 'rv-overlay';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-modal', 'true');
  document.body.appendChild(ov);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  function close(){
    ov.remove();
    document.body.style.overflow = prevOverflow;
    document.removeEventListener('keydown', onKey);
    if(opts.onClose) opts.onClose();
  }
  function onKey(e){ if(e.key === 'Escape') close(); }
  document.addEventListener('keydown', onKey);

  const qHtml = (q, id) => {
    const parts = rvMark(q).split('___');
    if(parts.length < 2) return rvMark(q);
    return parts[0] + `<span class="rv-blank" data-blank="${id}">_____</span>` + parts.slice(1).join('_____');
  };

  function itemHtml(it, id, n){
    if(it.type === 'choice'){
      return `
        <div class="rv-item" data-item="${id}">
          <div class="rv-q"><span class="rv-n">${n}</span><span>${qHtml(it.q, id)}</span></div>
          <div class="rv-opts">${it.options.map((o, i) => `<button class="rv-opt" data-i="${i}">${esc(o)}</button>`).join('')}</div>
          <div class="rv-explain" hidden></div>
        </div>`;
    }
    return `
      <div class="rv-item" data-item="${id}">
        <div class="rv-q"><span class="rv-n">${n}</span><span>${qHtml(it.q, id)}${it.hint ? ` <span class="muted">(${esc(it.hint)})</span>` : ''}</span></div>
        <form class="rv-gap">
          <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Відповідь">
          <button class="btn small" type="submit">Перевірити</button>
        </form>
        <div class="rv-explain" hidden></div>
      </div>`;
  }

  function render(){
    answered = {}; correct = 0;
    const best = storeKey ? rvBestGet(storeKey) : null;
    let n = 0;
    ov.innerHTML = `
      <div class="rv-sheet">
        <div class="rv-top">
          <div>
            <div class="rv-kicker">Повторення уроку</div>
            <h2 class="rv-title">${esc(review.title)}</h2>
          </div>
          <button class="pill-btn" data-close>✕ Закрити</button>
        </div>
        <div class="rv-score" id="rvScore"></div>

        <h3 class="rv-h">Коротко про урок</h3>
        <div class="rv-rules">
          ${review.rules.map(r => `
            <details class="rv-rule">
              <summary>${rvMark(r.title)}</summary>
              ${r.text ? `<p>${rvMark(r.text)}</p>` : ''}
              ${r.examples && r.examples.length ? `<ul>${r.examples.map(e => `<li>${rvMark(e)}</li>`).join('')}</ul>` : ''}
            </details>`).join('')}
        </div>

        ${review.sections.map((s, si) => `
          <h3 class="rv-h">${esc(s.title)}</h3>
          ${s.intro ? `<p class="rv-intro">${rvMark(s.intro)}</p>` : ''}
          <div class="rv-items">${s.items.map((it, ii) => itemHtml(it, si + '-' + ii, ++n)).join('')}</div>`).join('')}

        ${review.speaking ? `
          <h3 class="rv-h">Говоримо 🗣</h3>
          <div class="rv-speak">
            ${review.speaking.intro ? `<p class="rv-intro">${rvMark(review.speaking.intro)}</p>` : ''}
            <ol>${review.speaking.questions.map(q => `<li>${rvMark(q)}</li>`).join('')}</ol>
            ${review.speaking.phrases && review.speaking.phrases.length ? `
              <div class="rv-phrases-title">Корисні фрази</div>
              <div class="rv-phrases">${review.speaking.phrases.map(p => `<span>${rvMark(p)}</span>`).join('')}</div>` : ''}
          </div>` : ''}

        <div class="rv-bottom">
          <button class="btn secondary" data-restart>Пройти ще раз</button>
          <button class="btn" data-close>Готово</button>
        </div>
        ${best != null ? `<p class="small muted" style="text-align:center;margin:10px 0 0;">Твій найкращий результат: ${best} з ${total}</p>` : ''}
      </div>`;

    ov.querySelectorAll('[data-close]').forEach(b => b.onclick = close);
    ov.querySelector('[data-restart]').onclick = () => { render(); ov.scrollTop = 0; };
    ov.querySelectorAll('.rv-item').forEach(bindItem);
    updateScore();
    ov.scrollTop = 0;
  }

  function itemById(id){
    const [si, ii] = id.split('-').map(Number);
    return review.sections[si].items[ii];
  }

  function finish(el, it, ok, shown){
    const id = el.dataset.item;
    answered[id] = true;
    if(ok) correct++;
    el.classList.add(ok ? 'ok' : 'bad');
    const blank = el.querySelector('[data-blank]');
    if(blank){ blank.textContent = shown; blank.classList.add(ok ? 'ok' : 'bad'); }
    const ex = el.querySelector('.rv-explain');
    ex.innerHTML = (ok ? '<b class="rv-good">Правильно!</b> ' : '<b class="rv-wrong">Не зовсім.</b> ') + rvMark(it.explain || '');
    ex.hidden = false;
    updateScore();
  }

  function bindItem(el){
    const it = itemById(el.dataset.item);
    if(it.type === 'choice'){
      el.querySelectorAll('.rv-opt').forEach(b => b.onclick = () => {
        if(answered[el.dataset.item]) return;
        const i = +b.dataset.i;
        const ok = i === it.answer;
        el.querySelectorAll('.rv-opt').forEach(x => x.disabled = true);
        b.classList.add(ok ? 'correct' : 'wrong');
        if(!ok) el.querySelector(`.rv-opt[data-i="${it.answer}"]`).classList.add('correct');
        finish(el, it, ok, it.options[it.answer]);
      });
    } else {
      const form = el.querySelector('form');
      const input = form.querySelector('input');
      form.onsubmit = (e) => {
        e.preventDefault();
        if(answered[el.dataset.item]) return;
        const val = rvNorm(input.value);
        if(!val){ input.focus(); return; }
        const ok = it.answer.map(rvNorm).includes(val);
        input.disabled = true; form.querySelector('button').disabled = true;
        input.classList.add(ok ? 'correct' : 'wrong');
        finish(el, it, ok, it.answer[0]);
      };
    }
  }

  function updateScore(){
    const done = Object.keys(answered).length;
    const box = ov.querySelector('#rvScore');
    const pct = Math.round(done / total * 100);
    let msg = `Виконано ${done} з ${total} · правильно: <b>${correct}</b>`;
    if(done === total){
      const r = correct / total;
      msg = `Готово! Правильно <b>${correct} з ${total}</b> — ${r >= 0.9 ? 'чудово! 🎉' : r >= 0.7 ? 'добре, ще трохи практики 💪' : 'переглянь правила вгорі й спробуй ще раз 🙂'}`;
      if(storeKey) rvBestSet(storeKey, correct);
    }
    box.innerHTML = `<div>${msg}</div><div class="progress"><div style="width:${pct}%"></div></div>`;
  }

  render();
}

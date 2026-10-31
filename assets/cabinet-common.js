/* ==================================================================
   Спільний код для cabinet.html (учень) і teacher.html (викладач)
================================================================== */
const SUPABASE_URL = 'https://lkvactsotpbkwuacepgq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_7neWEfMeG57I_wYOvrcEuw_Wg-kJSfv';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Інтервальне повторення: днів до наступного повторення на кожному рівні */
const INTERVALS = [1, 2, 4, 7, 14, 30];
const MAX_BOX = INTERVALS.length - 1;

/* ---------- Дрібні помічники ---------- */
function esc(s){
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function todayStr(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function addDays(dateStr, days){
  const [y,m,d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m-1, d + days);
  return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
}
function fmtDate(dateStr){
  if(!dateStr) return '';
  const [y,m,d] = String(dateStr).slice(0,10).split('-').map(Number);
  return new Date(y, m-1, d).toLocaleDateString('uk-UA', { day:'numeric', month:'long', year:'numeric' });
}
function safeUrl(u){
  u = String(u || '').trim();
  return /^https?:\/\//i.test(u) ? u : '';
}
function shuffled(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function plural(n, one, few, many){
  const n10 = n % 10, n100 = n % 100;
  if(n10 === 1 && n100 !== 11) return one;
  if(n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return few;
  return many;
}
let toastTimer;
function toast(msg){
  let el = document.getElementById('toast');
  if(!el){ el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* Завантажує всі рядки (Supabase віддає максимум 1000 за раз) */
async function fetchAll(buildQuery){
  const page = 1000;
  let from = 0, all = [];
  while(true){
    const { data, error } = await buildQuery().range(from, from + page - 1);
    if(error) throw error;
    all = all.concat(data);
    if(data.length < page) break;
    from += page;
  }
  return all;
}

/* ---------- Вхід ---------- */
async function getMyProfile(){
  const { data: { session } } = await sb.auth.getSession();
  if(!session) return null;
  const { data, error } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
  if(error){ console.error(error); }
  return data || { id: session.user.id, email: session.user.email, full_name: '', role: 'student' };
}

function renderLogin(container, { title, subtitle, onSuccess }){
  container.innerHTML = `
    <div class="login-box card">
      <h1>${esc(title)}</h1>
      <p>${esc(subtitle)}</p>
      <form id="loginForm">
        <div class="field"><label for="loginEmail">Email</label>
          <input type="email" id="loginEmail" autocomplete="username" required></div>
        <div class="field"><label for="loginPass">Пароль</label>
          <input type="password" id="loginPass" autocomplete="current-password" required></div>
        <button class="btn" type="submit" id="loginBtn">Увійти</button>
        <div class="form-msg err" id="loginMsg"></div>
      </form>
      <p class="small muted" style="margin:16px 0 0;">Забули пароль? Напишіть викладачу — він встановить новий.</p>
    </div>`;
  const form = document.getElementById('loginForm');
  form.onsubmit = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    const msg = document.getElementById('loginMsg');
    btn.disabled = true; btn.textContent = 'Вхід…'; msg.textContent = '';
    const { error } = await sb.auth.signInWithPassword({
      email: document.getElementById('loginEmail').value.trim(),
      password: document.getElementById('loginPass').value
    });
    if(error){
      btn.disabled = false; btn.textContent = 'Увійти';
      msg.textContent = /invalid/i.test(error.message)
        ? 'Невірний email або пароль.'
        : (/confirm/i.test(error.message) ? 'Акаунт ще не підтверджено.' : 'Не вдалося увійти: ' + error.message);
      return;
    }
    onSuccess();
  };
}

/* ---------- Тренажер слів ---------- */
async function gradeWord(word, correct){
  const box = correct ? Math.min((word.box || 0) + 1, MAX_BOX) : 0;
  const due = correct ? addDays(todayStr(), INTERVALS[box]) : addDays(todayStr(), 1);
  word.box = box; word.due = due;
  const { error } = await sb.from('cabinet_words').update({ box, due }).eq('id', word.id);
  if(error){ console.error(error); toast('Не вдалося зберегти результат'); }
}

function doneScreen(container, count, onRestart){
  container.innerHTML = `
    <div class="empty">
      <div class="big">Готово! 🎉</div>
      <p>Ти повторив(-ла) ${count} ${plural(count,'слово','слова','слів')}.</p>
      <button class="btn secondary small" id="againBtn">До слів</button>
    </div>`;
  document.getElementById('againBtn').onclick = onRestart;
}

function runCards(container, queue, onDone){
  let idx = 0;
  function show(){
    if(idx >= queue.length){ onDone(queue.length); return; }
    const w = queue[idx];
    container.innerHTML = `
      <div class="progress-text">Слово ${idx+1} із ${queue.length}</div>
      <div class="flip-card" id="flipCard" role="button" tabindex="0" aria-label="Перевернути картку">
        <div class="flip-inner">
          <div class="flip-face flip-front"><div class="word">${esc(w.en)}</div><div class="hint">натисни, щоб перевірити</div></div>
          <div class="flip-face flip-back"><div class="word">${esc(w.ua)}</div>${w.example ? `<div class="example">${esc(w.example)}</div>` : ''}</div>
        </div>
      </div>
      <div class="review-actions">
        <button class="hard-btn" id="hardBtn">Складно</button>
        <button class="easy-btn" id="easyBtn">Знаю</button>
      </div>`;
    const card = document.getElementById('flipCard');
    card.onclick = () => card.classList.toggle('flipped');
    card.onkeydown = (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); card.classList.toggle('flipped'); } };
    const hard = document.getElementById('hardBtn'), easy = document.getElementById('easyBtn');
    const grade = async (ok) => { hard.disabled = easy.disabled = true; await gradeWord(w, ok); idx++; show(); };
    hard.onclick = () => grade(false);
    easy.onclick = () => grade(true);
  }
  show();
}

function runQuiz(container, queue, allWords, onDone){
  let idx = 0;
  function show(){
    if(idx >= queue.length){ onDone(queue.length); return; }
    const w = queue[idx];
    const pool = [...new Set(allWords.filter(x => x.id !== w.id && x.ua !== w.ua).map(x => x.ua))];
    const options = shuffled([w.ua, ...shuffled(pool).slice(0,3)]);
    container.innerHTML = `
      <div class="quiz-wrap">
        <div class="progress-text">Питання ${idx+1} із ${queue.length}</div>
        <div class="quiz-word">${esc(w.en)}</div>
        <div class="quiz-options">${options.map((o,i) => `<button class="quiz-option" data-i="${i}">${esc(o)}</button>`).join('')}</div>
      </div>`;
    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.onclick = async () => {
        container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        const correct = options[btn.dataset.i] === w.ua;
        btn.classList.add(correct ? 'correct' : 'wrong');
        if(!correct) container.querySelectorAll('.quiz-option').forEach(b => { if(options[b.dataset.i] === w.ua) b.classList.add('correct'); });
        await gradeWord(w, correct);
        setTimeout(() => { idx++; show(); }, correct ? 700 : 1300);
      };
    });
  }
  show();
}

function runTyping(container, queue, onDone){
  let idx = 0;
  const norm = s => String(s).toLowerCase().replace(/\([^)]*\)/g,'').replace(/[.,!?;:]/g,'').replace(/ё/g,'е').trim().replace(/\s+/g,' ');
  const accepted = ua => String(ua).split(/[,;/]/).map(norm).filter(Boolean).concat([norm(ua)]);
  function show(){
    if(idx >= queue.length){ onDone(queue.length); return; }
    const w = queue[idx];
    container.innerHTML = `
      <div class="type-wrap">
        <div class="progress-text">Слово ${idx+1} із ${queue.length}</div>
        <div class="type-word">${esc(w.en)}</div>
        <input type="text" class="type-input" id="typeInput" placeholder="Переклад українською" autocomplete="off" autocapitalize="off">
        <div class="type-feedback" id="typeFeedback"></div>
        <button class="btn" id="typeSubmit">Перевірити</button>
      </div>`;
    const input = document.getElementById('typeInput');
    const fb = document.getElementById('typeFeedback');
    const submit = document.getElementById('typeSubmit');
    input.focus();
    let answered = false;
    async function check(){
      if(answered || !input.value.trim()) return;
      answered = true;
      const correct = accepted(w.ua).includes(norm(input.value));
      input.classList.add(correct ? 'correct' : 'wrong');
      input.disabled = submit.disabled = true;
      fb.className = 'type-feedback ' + (correct ? 'correct' : 'wrong');
      fb.textContent = correct ? 'Правильно!' : `Правильна відповідь: ${w.ua}`;
      await gradeWord(w, correct);
      setTimeout(() => { idx++; show(); }, correct ? 900 : 1800);
    }
    submit.onclick = check;
    input.addEventListener('keydown', e => { if(e.key === 'Enter') check(); });
  }
  show();
}

function runMatch(container, queue, onDone){
  const words = queue.slice(0, 6);
  let selected = null, matched = 0;
  const tiles = shuffled([
    ...words.map(w => ({ id: w.id, label: w.en, w })),
    ...words.map(w => ({ id: w.id, label: w.ua, w }))
  ]);
  container.innerHTML = `
    <div class="progress-text" id="matchProgress">Знайдено пар: 0 із ${words.length}</div>
    <div class="match-grid" id="matchGrid"></div>
    ${queue.length > 6 ? `<p class="small muted" style="text-align:center;margin-top:12px;">Після цього набору залишиться ще ${queue.length - 6} — запусти вправу знову.</p>` : ''}`;
  const grid = document.getElementById('matchGrid');
  tiles.forEach(t => {
    const el = document.createElement('div');
    el.className = 'match-tile';
    el.textContent = t.label;
    el.onclick = async () => {
      if(t.done || el === selected?.el) return;
      if(!selected){ selected = { el, t }; el.classList.add('selected'); return; }
      if(selected.t.id === t.id){
        t.done = selected.t.done = true;
        selected.el.classList.remove('selected');
        selected.el.classList.add('matched'); el.classList.add('matched');
        selected = null; matched++;
        document.getElementById('matchProgress').textContent = `Знайдено пар: ${matched} із ${words.length}`;
        await gradeWord(t.w, true);
        if(matched === words.length) setTimeout(() => onDone(words.length), 500);
      } else {
        const prev = selected; selected = null;
        el.classList.add('shake'); prev.el.classList.add('shake');
        setTimeout(() => { el.classList.remove('shake'); prev.el.classList.remove('shake','selected'); }, 400);
      }
    };
    grid.appendChild(el);
  });
}

function boxDots(box){
  return `<div class="box-dots" title="Рівень ${box} з ${MAX_BOX}">${Array.from({length: MAX_BOX+1}).map((_,i) => `<span class="box-dot ${i<=box?'filled':''}"></span>`).join('')}</div>`;
}

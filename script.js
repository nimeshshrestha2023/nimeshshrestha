'use strict';
/* ---------- DATA: paste your Google Drive share links in notes / model ----------
   Leave '' for "coming soon". Links must start with https://drive.google.com/ or https://docs.google.com/ */
const s = (name, notes = '', model = '') => ({ name, notes, model });
const SEMESTERS = {
  1: [s('Fundamentals of IT','https://drive.google.com/file/d/1asMzJK-AM4rJOTWlytcGs41IK4aQkHMm/view?usp=sharing','https://drive.google.com/file/d/1bfPEABKB3u8pA1pqtcmNDuOFdIUOMXnr/view?usp=sharing'), s('Basic Mathematics','','https://drive.google.com/file/d/1TJw3tRHtPLStDCGPG9nZ_wj3QDfvzkBL/view?usp=sharing'), s('Principles of Management','https://drive.google.com/file/d/1pHkyelV4U_fcGJFoMOmBL7-ACUNwDOof/view?usp=sharing','https://drive.google.com/file/d/1mNPPTx-I3jDNlSz0NT1ICFu0IPZnkfT2/view?usp=sharing'), s('Programming in C','https://drive.google.com/file/d/128GXvWAnKeOlYvElOBYR22b17KaKUOyc/view?usp=sharing','https://drive.google.com/file/d/1opy4YPIwisdWzRWuw8Pd-OA0NkUQBg7K/view?usp=sharing'), s('English Composition','','https://drive.google.com/file/d/1H0gVPwugorDBz9nS6v4FPy8PGu2GAF0u/view?usp=sharing')],

  2: [s('Digital Logic','https://drive.google.com/file/d/1JnFjbvm34FW1qrHO955VHW6Sf0PxkiSN/view?usp=sharing','https://drive.google.com/file/d/1q8xYaGl4fWUMa4XoNKHB96XCsECSGx2x/view?usp=sharing'), s('Discrete Structure','https://drive.google.com/file/d/1aY3wjMAwuGf3YOaH5LFcS_3vK9EQKvMt/view?usp=sharing','https://drive.google.com/file/d/1TLM3_6KwMvEUW5ecQkWTqVlrz7Iv_1Sy/view?usp=sharing'), s('OOP in Java','https://drive.google.com/file/d/1KxfxIT61SAiaOXAhOoVdZnblyLP5NeQt/view?usp=sharing','https://drive.google.com/file/d/14BgT_SciRMelow_XnqyCVXTntM3eLo7-/view?usp=sharing'), s('Organizational Behavior & Human Resource Management','https://drive.google.com/file/d/1MowKhPbz5BdcWywYkKxd8t50GcT-lUV4/view?usp=sharing','https://drive.google.com/file/d/1WaiB9UuMri9m6wz14iCo4drVl9CaU_lL/view?usp=sharing'), s('Business Communications','','https://drive.google.com/file/d/1MRE0I78trhGBsIP-jxV9m9QaSHK6Fcb6/view?usp=sharing')],

  3: [s('Web Technology-I','https://drive.google.com/file/d/1oh-xTuehGDFo484zw8GbJgqCavoZ9opq/view?usp=sharing','https://drive.google.com/file/d/1D8D3P1CQPlpmgBf-NluZHIcM3wmYMCYT/view?usp=sharing'), s('Data Structure & Algorithm','https://drive.google.com/file/d/1kPatmLBW9GTLT26R5B3NjYwzZCoye8Nv/view?usp=sharing','https://drive.google.com/file/d/1baGglG6UzC5QWLm1EVYrWMLciHOJvtIE/view?usp=sharing'), s('Business Statistics','https://drive.google.com/file/d/1TEapavg3P5lTDy4oDM1cR4LuPB9cD1IN/view?usp=sharing','https://drive.google.com/file/d/1FtR2gX2WDG18SOVjX2uLBc5Qy0zSMlgA/view?usp=sharing'), s('Financial Accounting','https://drive.google.com/file/d/1sveLdcNkOP1z27ynB0C8h0Y1lYo1e-jf/view?usp=sharing','https://drive.google.com/file/d/1omOUSCprfQqQltIIbnu8nYpro5khafsA/view?usp=sharing'), s('Microprocessor & Computer Architecture','https://drive.google.com/file/d/1tft7iIxrvAmq-Sdg8A-lekqZUnaYQCVb/view?usp=sharing','https://drive.google.com/file/d/1XZL0JawuFkbrHSSuqFv2WC8ogFXUHgqQ/view?usp=sharing')],

  4: [s('Data Communication & Computer Network','https://drive.google.com/file/d/1MfpzTBaRTRTHEW_FeVTfMdofeF6Ysexl/view?usp=sharing','https://drive.google.com/file/d/10jHT6zIDPqy4z2kC89z01-HRBQN7jLPs/view?usp=sharing'), s('Operating Systems','https://drive.google.com/file/d/1z3CEvkEGYuOJWcNbtUl1TnfYcnipDW2K/view?usp=sharing','https://drive.google.com/file/d/1K3-gZlfQkaou3PIxGWG16W-HryL5XRay/view?usp=sharing'), s('Web Technology-II','','https://drive.google.com/file/d/1OBj7-npbOOD7YYAFQ1ER0HPEzfwK-vhy/view?usp=sharing'), s('Economics for Business','https://drive.google.com/file/d/1Ihk50-aSK2gLhBVCYDUM_gTwxKlWaQwy/view?usp=sharing','https://drive.google.com/file/d/1OuUlsKkQd_jSGy6xrVE0HpLcV4cCbpvg/view?usp=sharing'), s('Cost & Management Accounting','','https://drive.google.com/file/d/1tsgXR-PSAhmGEipoEqMG3pAdHrtuxP-t/view?usp=sharing'), s('Database Management System','https://drive.google.com/file/d/1vbTEabVIf5NCGmkFwgp5rxH3qYbFOOxP/view?usp=sharing','https://drive.google.com/file/d/1zGOGdnP598hWsaDYakD7l3ihqhheaerQ/view?usp=sharing')],

  5: [], 6: [], 7: [], 8: []
};

/* ---------- Validation ---------- */
const DRIVE_RE = /^https:\/\/(drive|docs)\.google\.com\/[^\s]+$/;
const isValidDriveUrl = (u) => {
  if (typeof u !== 'string' || !DRIVE_RE.test(u)) return false;
  try { return ['drive.google.com', 'docs.google.com'].includes(new URL(u).hostname); } catch { return false; }
};
const cleanQuery = (v) => v.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 60).toLowerCase();

for (const [sem, list] of Object.entries(SEMESTERS))
  list.forEach((x) => ['notes', 'model'].forEach((k) => {
    if (x[k] && !isValidDriveUrl(x[k])) { console.warn(`Invalid Drive link (Sem ${sem}, ${x.name}, ${k}) — ignored.`); x[k] = ''; }
  }));

/* ---------- State & helpers ---------- */
const state = { sem: 'all', q: '' };
const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; };

function linkBtn(label, url, primary) {
  const base = 'flex-1 text-center rounded-lg px-3 py-2 text-sm font-medium transition ';
  if (!url) {
    const b = el('span', base + 'bg-slate-100 dark:bg-slate-800 text-slate-600 cursor-not-allowed', label + ' · Soon');
    b.setAttribute('aria-disabled', 'true'); return b;
  }
  const a = el('a', base + (primary ? 'bg-brand text-white hover:bg-indigo-700' : 'border border-brand text-brand dark:text-brand-soft dark:border-brand-soft hover:bg-brand/10'), label);
  a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.title = 'Opens in Google Drive';
  return a;
}

function card(sem, sub) {
  const c = el('article', 'rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition');
  c.append(el('div', 'text-xs font-medium text-brand dark:text-brand-soft', `BIM · Semester ${sem}`), el('h3', 'mt-1 font-semibold', sub.name));
  const row = el('div', 'mt-4 flex gap-2');
  row.append(linkBtn('Reference Notes', sub.notes, true), linkBtn('Model Set', sub.model, false));
  c.append(row); return c;
}

function render() {
  const grid = $('grid'); grid.replaceChildren();
  let n = 0;
  for (const [sem, list] of Object.entries(SEMESTERS)) {
    if (state.sem !== 'all' && state.sem !== sem) continue;
    list.filter((x) => x.name.toLowerCase().includes(state.q)).forEach((x) => { grid.append(card(sem, x)); n++; });
  }
  $('count').textContent = `${n} subject${n === 1 ? '' : 's'} found`;
  $('empty').classList.toggle('hidden', n > 0);
  $('clear').classList.toggle('hidden', state.sem === 'all' && !state.q);
  if (n === 0 && !state.q && state.sem !== 'all') $('empty').textContent = `Semester ${state.sem} materials are coming soon.`;
  else $('empty').textContent = 'No subjects match your search. Try a shorter keyword or choose “All”.';
  document.querySelectorAll('#sems button').forEach((b) => {
    const on = b.dataset.sem === state.sem; b.setAttribute('aria-selected', on);
    b.className = 'rounded-full px-4 py-1.5 text-sm border transition ' + (on ? 'bg-brand text-white border-brand' : 'border-slate-300 dark:border-slate-700 hover:border-brand');
  });
}

/* ---------- Init ---------- */
['all', ...Object.keys(SEMESTERS)].forEach((k) => {
  const b = el('button', '', k === 'all' ? 'All' : `Semester ${k}`); b.dataset.sem = k; b.setAttribute('role', 'tab');
  b.onclick = () => { state.sem = k; render(); }; $('sems').append(b);
});
$('q').addEventListener('input', (e) => { state.q = cleanQuery(e.target.value); render(); });
$('searchForm').addEventListener('submit', (e) => { e.preventDefault(); state.q = cleanQuery($('q').value); render(); $('library').scrollIntoView({ behavior: 'smooth' }); });
$('clear').onclick = () => { state.sem = 'all'; state.q = ''; $('q').value = ''; render(); };
$('theme').onclick = () => { const d = document.documentElement.classList.toggle('dark'); localStorage.theme = d ? 'dark' : 'light'; };
$('menu').onclick = () => $('mobile').classList.toggle('hidden');
$('yr').textContent = new Date().getFullYear();
render();

const musicTracks = [
  { title: 'Warriyo - Mortals', src: 'audio/Warriyo - Mortals (feat. Laura Brehm) Future Trap NCS - Copyright Free Music.mp3' },
  { title: 'Spektrum - Keep You', src: 'audio/spektrum-sara-skinner-keep-you-trap-ncs-copyright-free-music-128-ytshorts.savetube.me.mp3' },
  { title: 'Lemon Fight - Stronger', src: 'audio/Lemon Fight - Stronger (feat. Jessica Reynoso) [Champion Remix] DnB NCS - Copyright Free Music.mp3' },
  { title: 'Different Heaven - Safe and Sound', src: 'audio/different-heaven-safe-and-sound-house-ncs-copyright-free-music-128-ytshorts.savetube.me.mp3' }
];
const music = new Audio();
const musicToggle = $('music-toggle');
const musicStatus = $('music-status');
let currentTrack = 0;
let musicStarting = false;
music.preload = 'none';
music.src = encodeURI(musicTracks[currentTrack].src);

function updateMusicButton(playing) {
  musicToggle.textContent = playing ? '❚❚ Pause' : '▶ Play';
  musicToggle.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
  musicToggle.setAttribute('aria-pressed', String(playing));
}

music.addEventListener('play', () => {
  musicStatus.textContent = `Playing: ${musicTracks[currentTrack].title}`;
  updateMusicButton(true);
});
music.addEventListener('pause', () => {
  if (!music.ended) {
    musicStatus.textContent = 'Music is paused';
    updateMusicButton(false);
  }
});
music.addEventListener('error', () => {
  musicStatus.textContent = 'Could not load music. Check the audio files.';
  updateMusicButton(false);
});
music.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % musicTracks.length;
  music.src = encodeURI(musicTracks[currentTrack].src);
  startMusic();
});

function startMusic() {
  if (!music.paused || musicStarting) return;
  musicStarting = true;
  music.play().then(() => {
    musicStarting = false;
  }).catch((error) => {
    musicStarting = false;
    if (error.name === 'NotAllowedError') {
      musicStatus.textContent = 'Tap or press any key to start music';
    } else {
      musicStatus.textContent = 'Could not play music. Check the audio files.';
    }
    updateMusicButton(false);
  });
}

function startMusicOnFirstInteraction() {
  document.removeEventListener('pointerdown', startMusicOnFirstInteraction);
  document.removeEventListener('keydown', startMusicOnFirstInteraction);
  startMusic();
}

document.addEventListener('pointerdown', startMusicOnFirstInteraction);
document.addEventListener('keydown', startMusicOnFirstInteraction);
startMusic();

musicToggle.addEventListener('click', () => {
  if (music.paused) {
    startMusic();
  } else {
    music.pause();
  }
});

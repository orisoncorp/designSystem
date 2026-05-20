import './tokens/tokens.css';
import './tokens/motion-tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/sidebar.css';
import './styles/motion-animations.css';
import './styles/motion-components.css';

import symbolSprite from './assets/symbol.svg?raw';

import section0  from './sections/00-cover.html?raw';
import section1  from './sections/01-symbol.html?raw';
import section2  from './sections/02-lockup-h.html?raw';
import section3  from './sections/03-lockup-v.html?raw';
import section4  from './sections/04-scale.html?raw';
import section5  from './sections/05-favicon.html?raw';
import section6  from './sections/06-palette.html?raw';
import section7  from './sections/07-typography.html?raw';
import section8  from './sections/08-spacing.html?raw';
import section9  from './sections/09-clearspace.html?raw';
import section10 from './sections/10-donts.html?raw';
import section11 from './sections/11-voice.html?raw';
import section12 from './sections/12-applications.html?raw';
import section13 from './sections/13-components.html?raw';

import section14 from './sections/14-motion-cover.html?raw';
import section15 from './sections/15-easing.html?raw';
import section16 from './sections/16-duration.html?raw';
import section17 from './sections/17-transform.html?raw';
import section18 from './sections/18-stagger.html?raw';
import section19 from './sections/19-entrances.html?raw';
import section20 from './sections/20-exits.html?raw';
import section21 from './sections/21-states.html?raw';
import section22 from './sections/22-micro.html?raw';
import section23 from './sections/23-loading.html?raw';
import section24 from './sections/24-organisms.html?raw';
import section25 from './sections/25-templates.html?raw';
import section26 from './sections/26-governance.html?raw';
import section27 from './sections/27-motion-donts.html?raw';
import section28 from './sections/28-logo-motion.html?raw';
import section29 from './sections/29-typewriter.html?raw';

/* ── Sidebar nav config ── */
const NAV_ITEMS = [
  { id: 'sec-cover',    num: '00', label: 'Capa',             group: 'design' },
  { id: 'sec-symbol',   num: '01', label: 'Símbolo',          group: 'design' },
  { id: 'sec-lockup-h', num: '02', label: 'Lockup Horizontal',group: 'design' },
  { id: 'sec-lockup-v', num: '03', label: 'Lockup Vertical',  group: 'design' },
  { id: 'sec-scale',    num: '04', label: 'Escala',           group: 'design' },
  { id: 'sec-favicon',  num: '05', label: 'Favicon',          group: 'design' },
  { id: 'sec-palette',  num: '06', label: 'Paleta',           group: 'design' },
  { id: 'sec-type',     num: '07', label: 'Tipografia',       group: 'design' },
  { id: 'sec-spacing',  num: '08', label: 'Espaçamento',      group: 'design' },
  { id: 'sec-clear',    num: '09', label: 'Clearspace',       group: 'design' },
  { id: 'sec-donts',    num: '10', label: "Don'ts",           group: 'design' },
  { id: 'sec-voice',    num: '11', label: 'Voz e Tom',        group: 'design' },
  { id: 'sec-apps',        num: '12', label: 'Aplicações',    group: 'design' },
  { id: 'sec-components',  num: '13', label: 'Componentes UI',group: 'design' },

  { id: 'sec-motion-cover', num: '14', label: 'Overview',     group: 'motion' },
  { id: 'sec-easing',       num: '15', label: 'Easing',       group: 'motion' },
  { id: 'sec-duration',     num: '16', label: 'Duration',     group: 'motion' },
  { id: 'sec-transform',    num: '17', label: 'Transform',    group: 'motion' },
  { id: 'sec-stagger',      num: '18', label: 'Stagger',      group: 'motion' },
  { id: 'sec-entrances',    num: '19', label: 'Entrances',    group: 'motion' },
  { id: 'sec-exits',        num: '20', label: 'Exits',        group: 'motion' },
  { id: 'sec-states',       num: '21', label: 'States',       group: 'motion' },
  { id: 'sec-micro',        num: '22', label: 'Micro',        group: 'motion' },
  { id: 'sec-loading',      num: '23', label: 'Loading',      group: 'motion' },
  { id: 'sec-organisms',    num: '24', label: 'Organisms',    group: 'motion' },
  { id: 'sec-templates',    num: '25', label: 'Templates',    group: 'motion' },
  { id: 'sec-governance',   num: '26', label: 'Governance',   group: 'motion' },
  { id: 'sec-motion-donts', num: '27', label: "Do's & Don'ts",group: 'motion' },
  { id: 'sec-logo-motion',  num: '28', label: 'Logo Motion',   group: 'motion' },
  { id: 'sec-typewriter',   num: '29', label: 'Typewriter',    group: 'motion' },
];

/* ── Build sidebar HTML ── */
function buildSidebar() {
  let navHtml = '';
  let lastGroup = null;

  NAV_ITEMS.forEach(item => {
    if (item.group !== lastGroup) {
      if (item.group === 'design') {
        navHtml += `<div class="sidebar-group">Design System</div>`;
      } else if (item.group === 'motion') {
        navHtml += `<div class="sidebar-group sidebar-group--motion">Motion System</div>`;
      }
      lastGroup = item.group;
    }
    navHtml += `
      <a class="sidebar-item" href="#${item.id}" data-target="${item.id}">
        <span class="sidebar-num">${item.num}</span>
        <span class="sidebar-label">${item.label}</span>
      </a>
    `;
  });

  return `
    <aside class="sidebar" id="sidebar" role="navigation" aria-label="Seções do Design System">
      <div class="sidebar-header">
        <span class="sidebar-brand">Orison</span>
        <span class="sidebar-version">Brand System · V 2.0</span>
        <span class="sidebar-count">${NAV_ITEMS.length} seções</span>
      </div>
      <nav class="sidebar-nav">${navHtml}</nav>
    </aside>
    <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Abrir navegação" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `;
}

/* ── Mount everything ── */
const app = document.getElementById('app');

document.body.insertAdjacentHTML('afterbegin', buildSidebar());
document.body.insertAdjacentHTML('afterbegin', symbolSprite);

app.innerHTML = [
  section0, section1, section2, section3, section4,
  section5, section6, section7, section8, section9,
  section10, section11, section12, section13,
  section14, section15, section16, section17, section18,
  section19, section20, section21, section22, section23,
  section24, section25, section26, section27, section28,
  section29,
].join('');

/* ── Sidebar toggle (mobile) ── */
const sidebar   = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle');
const overlay   = document.getElementById('sidebar-overlay');

function openSidebar() {
  sidebar.classList.add('is-open');
  overlay.classList.add('is-visible');
  toggleBtn.classList.add('is-open');
  toggleBtn.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  sidebar.classList.remove('is-open');
  overlay.classList.remove('is-visible');
  toggleBtn.classList.remove('is-open');
  toggleBtn.setAttribute('aria-expanded', 'false');
}

toggleBtn.addEventListener('click', () => {
  sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', closeSidebar);

sidebar.querySelectorAll('.sidebar-item').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) closeSidebar();
  });
});

/* ── Scroll-spy ── */
const sidebarItems = document.querySelectorAll('.sidebar-item');

function setActive(id) {
  sidebarItems.forEach(el => {
    el.classList.toggle('sidebar-item--active', el.dataset.target === id);
  });
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { threshold: 0.2, rootMargin: '0px 0px -40% 0px' });

NAV_ITEMS.forEach(({ id }) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

/* ── Scroll animations (design system sections) ── */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 80);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.cover, .block-2col, .scale-bar, .favicon-bar, .palette-wrap, ' +
  '.type-wrap, .spacing-wrap, .clearspace-wrap, .dont-wrap, ' +
  '.vt-wrap, .app-wrap, .full-block, .sec-div, ' +
  '.comp-wrap, .motion-wrap'
).forEach(el => animObserver.observe(el));

setTimeout(() => {
  document.querySelector('.cover')?.classList.add('in-view');
}, 80);

/* ── m-reveal (motion sections) ── */
const mRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      mRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.m-reveal').forEach(el => mRevealObserver.observe(el));

/* ── Scroll-reveal cards (organisms demo) ── */
function revealScrollCard(card) {
  card.style.opacity = '1';
  card.style.transform = 'translateY(0)';
}

const scrollRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      revealScrollCard(entry.target);
      scrollRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.scroll-reveal-card').forEach(el => scrollRevealObserver.observe(el));

/* ── Organisms: data table scroll reveal ── */
const orgTableObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      triggerOrgTableRows();
      orgTableObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const orgTable = document.getElementById('org-data-table');
if (orgTable) orgTableObserver.observe(orgTable);

function triggerOrgTableRows() {
  const rows = document.querySelectorAll('.org-table-row');
  rows.forEach((row, i) => {
    row.style.transitionDelay = `${i * 40}ms`;
    setTimeout(() => {
      row.style.opacity = '1';
      row.style.transform = 'translateY(0)';
    }, i * 40);
  });
}

document.getElementById('org-table-play')?.addEventListener('click', () => {
  document.querySelectorAll('.org-table-row').forEach(row => {
    row.style.transitionDelay = '0ms';
    row.style.opacity = '0';
    row.style.transform = 'translateY(var(--motion-ty-sm))';
  });
  setTimeout(triggerOrgTableRows, 80);
});

/* ── Organisms: chart bars ── */
const chartBarsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      triggerChartBars();
      chartBarsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const chartWrap = document.getElementById('chart-bars-demo');
if (chartWrap) chartBarsObserver.observe(chartWrap);

function triggerChartBars() {
  const bars = document.querySelectorAll('#chart-bars-demo .chart-bar');
  bars.forEach((bar, i) => {
    bar.style.transitionDelay = `${i * 60}ms`;
    bar.style.transitionDuration = '400ms';
    bar.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => {
      bar.style.transform = 'scaleY(1)';
    }, i * 60);
  });
}

document.getElementById('chart-bars-play')?.addEventListener('click', () => {
  const bars = document.querySelectorAll('#chart-bars-demo .chart-bar');
  bars.forEach(bar => {
    bar.style.transitionDelay = '0ms';
    bar.style.transform = 'scaleY(0)';
  });
  setTimeout(triggerChartBars, 80);
});

/* ── Color swatch copy ── */
let notification = document.querySelector('.copy-notification');
if (!notification) {
  notification = document.createElement('div');
  notification.className = 'copy-notification';
  document.body.appendChild(notification);
}

document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const hex = swatch.dataset.hex || swatch.style.background;
    if (!hex) return;
    navigator.clipboard.writeText(hex).then(() => {
      notification.textContent = `Copiado: ${hex}`;
      notification.classList.add('show');
      setTimeout(() => notification.classList.remove('show'), 2000);
    });
  });
});

/* ── Motion demos (section 13 legacy) ── */
document.querySelectorAll('.motion-demo').forEach(demo => {
  demo.addEventListener('click', () => {
    if (demo.classList.contains('is-playing')) return;
    demo.classList.add('is-playing');
    demo.addEventListener('animationend', () => {
      demo.classList.remove('is-playing');
    }, { once: true });
  });
});

/* ════════════════════════════════════════════
   MOTION SYSTEM — Interactive demos
   ════════════════════════════════════════════ */

/* ── Easing demos (section 15) ── */
function playEasingBall(id) {
  const ball = document.getElementById(`easing-ball-${id}`);
  if (!ball || ball.classList.contains('is-playing')) return;
  ball.classList.remove('is-playing');
  void ball.offsetWidth;
  ball.classList.add('is-playing');
  ball.addEventListener('animationend', () => {
    setTimeout(() => ball.classList.remove('is-playing'), 300);
  }, { once: true });
}

document.querySelectorAll('[data-easing-card]').forEach(card => {
  card.addEventListener('click', () => {
    playEasingBall(card.dataset.easingCard);
  });
});

document.getElementById('easing-play-all')?.addEventListener('click', () => {
  ['enter', 'exit', 'state', 'emphasis', 'linear', 'micro'].forEach((id, i) => {
    setTimeout(() => playEasingBall(id), i * 80);
  });
});

/* ── Duration demos (section 16) ── */
function playDurationBar(row) {
  const bar = row.querySelector('.duration-bar');
  const exitBar = row.querySelector('.duration-exit-bar');
  if (!bar) return;
  bar.classList.remove('is-playing');
  if (exitBar) exitBar.classList.remove('is-playing');
  void bar.offsetWidth;
  bar.classList.add('is-playing');
  if (exitBar) {
    void exitBar.offsetWidth;
    exitBar.classList.add('is-playing');
  }
}

document.getElementById('duration-play-all')?.addEventListener('click', () => {
  document.querySelectorAll('.duration-row').forEach((row, i) => {
    setTimeout(() => playDurationBar(row), i * 120);
  });
});

/* ── Stagger demo (section 18) ── */
let staggerBase = 60;

const staggerDelays = (base) => {
  const delays = [];
  let acc = 0;
  for (let i = 0; i < 8; i++) {
    delays.push(Math.round(acc));
    acc += base * Math.pow(0.9, i);
    if (acc > 480) acc = 480;
  }
  return delays;
};

function updateStaggerLabels(base) {
  const delays = staggerDelays(base);
  delays.forEach((d, i) => {
    const el = document.getElementById(`stagger-delay-${i}`);
    if (el) el.textContent = `${d}ms`;
  });
}

function triggerStagger(base) {
  const cards = document.querySelectorAll('.stagger-card');
  cards.forEach(c => c.classList.remove('is-visible'));
  const delays = staggerDelays(base);
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${delays[i]}ms`;
    setTimeout(() => card.classList.add('is-visible'), delays[i]);
  });
}

document.querySelectorAll('.stagger-mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.stagger-mode-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const mode = btn.dataset.staggerMode;
    staggerBase = mode === 'base' ? 60 : mode === 'dense' ? 40 : 120;
    updateStaggerLabels(staggerBase);
  });
});

document.getElementById('stagger-play')?.addEventListener('click', () => {
  triggerStagger(staggerBase);
});

document.getElementById('stagger-reset')?.addEventListener('click', () => {
  document.querySelectorAll('.stagger-card').forEach(c => {
    c.classList.remove('is-visible');
    c.style.transitionDelay = '0ms';
  });
});

updateStaggerLabels(60);

/* ── Entrance demos (section 19) ── */
const ENTRANCE_MAP = {
  reveal:      { el: 'demo-reveal',     cls: 'play-reveal',      dur: 700 },
  materialize: { el: 'demo-materialize',cls: 'play-materialize', dur: 500 },
  'slide-x':   { el: 'demo-slide-x',   cls: 'play-slide-x',     dur: 700 },
  fade:        { el: 'demo-fade',       cls: 'play-fade',        dur: 350 },
  data:        { el: 'demo-data',       cls: 'play-data',        dur: 250 },
};

document.querySelectorAll('[data-entrance-trigger]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.entranceTrigger;
    const cfg = ENTRANCE_MAP[key];
    if (!cfg) return;
    const el = document.getElementById(cfg.el);
    if (!el) return;
    el.classList.remove(...Object.values(ENTRANCE_MAP).map(c => c.cls));
    el.style.opacity = '0';
    void el.offsetWidth;
    el.classList.add(cfg.cls);
    setTimeout(() => {
      el.classList.remove(cfg.cls);
      el.style.opacity = '1';
    }, cfg.dur + 300);
  });
});

/* ── Exit demos (section 20) ── */
const EXIT_MAP = {
  dismiss:       { el: 'demo-dismiss',       cls: 'play-dismiss',    dur: 200 },
  'exit-fade':   { el: 'demo-exit-fade',     cls: 'play-exit-fade',  dur: 200 },
  'exit-slide-x':{ el: 'demo-exit-slide-x',  cls: 'play-exit-fade',  dur: 350 },
};

document.querySelectorAll('[data-exit-trigger]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.exitTrigger;
    const cfg = EXIT_MAP[key];
    if (!cfg) return;
    const el = document.getElementById(cfg.el);
    if (!el) return;
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.classList.remove(cfg.cls, 'play-dismiss', 'play-exit-fade');
    void el.offsetWidth;

    if (key === 'exit-slide-x') {
      el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateX(-16px)';
    } else {
      el.classList.add(cfg.cls);
    }

    setTimeout(() => {
      el.classList.remove(cfg.cls);
      el.style.cssText = 'opacity: 1; transform: none; transition: none;';
      void el.offsetWidth;
      el.style.transition = '';
    }, cfg.dur + 800);
  });
});

/* ── Micro-interactions (section 22) ── */
document.getElementById('toggle-1')?.addEventListener('click', function() {
  this.classList.toggle('is-on');
  const label = document.getElementById('toggle-1-label');
  if (label) label.textContent = this.classList.contains('is-on') ? 'Ligado' : 'Desligado';
});

document.getElementById('check-1')?.addEventListener('click', function() {
  const box = document.getElementById('check-box-1');
  if (box) box.classList.toggle('is-checked');
});

document.getElementById('check-2')?.addEventListener('click', function() {
  const box = document.getElementById('check-box-2');
  if (box) box.classList.toggle('is-checked');
});

let progressRunning = false;
let progressFrame = null;

function resetMicroProgress() {
  const fill = document.getElementById('progress-fill');
  const pct = document.getElementById('progress-pct');
  const btn = document.getElementById('progress-play');
  if (progressFrame) cancelAnimationFrame(progressFrame);
  progressFrame = null;
  progressRunning = false;
  if (fill) {
    fill.classList.remove('is-running');
    fill.style.width = '0%';
  }
  if (pct) pct.textContent = '0%';
  if (btn) btn.textContent = 'Iniciar';
}

document.getElementById('progress-play')?.addEventListener('click', function() {
  if (progressRunning) return;
  progressRunning = true;
  const playBtn = this;
  const fill = document.getElementById('progress-fill');
  const pct  = document.getElementById('progress-pct');
  if (!fill) return;
  fill.classList.remove('is-running');
  fill.style.width = '0%';
  playBtn.textContent = 'Processando...';
  void fill.offsetWidth;
  fill.style.width = '';
  fill.classList.add('is-running');
  let start = null;
  const dur = 900;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min(((ts - start) / dur) * 100, 100);
    if (pct) pct.textContent = `${Math.round(p)}%`;
    if (p < 100) {
      progressFrame = requestAnimationFrame(step);
    } else {
      playBtn.textContent = 'Completo';
      progressRunning = false;
      progressFrame = null;
    }
  }
  progressFrame = requestAnimationFrame(step);
});

document.getElementById('progress-reset')?.addEventListener('click', resetMicroProgress);

function animateCounter(el, from, to, dur) {
  const start = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  function step(ts) {
    const t = Math.min((ts - start) / dur, 1);
    const val = Math.round(from + (to - from) * easeOut(t));
    el.textContent = val >= 1000
      ? 'R$ ' + (val / 1000).toFixed(0) + 'k'
      : 'R$ ' + val.toString();
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.getElementById('kpi-play')?.addEventListener('click', () => {
  const el = document.getElementById('kpi-counter');
  const arrow = document.getElementById('kpi-trend-arrow');
  if (arrow) arrow.classList.add('is-active');
  if (el) animateCounter(el, 0, 100000, 900);
  setTimeout(() => {
    if (arrow) arrow.classList.remove('is-active');
  }, 1200);
});

document.getElementById('kpi-reset')?.addEventListener('click', () => {
  const el = document.getElementById('kpi-counter');
  const arrow = document.getElementById('kpi-trend-arrow');
  if (el) el.textContent = 'R$ 0';
  if (arrow) arrow.classList.remove('is-active');
});

/* ── Loading bar toggle (section 23) ── */
let loadingBarRunning = true;
document.getElementById('loading-bar-toggle')?.addEventListener('click', function() {
  const fill = document.querySelector('.loading-bar-fill');
  if (!fill) return;
  loadingBarRunning = !loadingBarRunning;
  if (loadingBarRunning) {
    fill.classList.add('is-running');
    this.textContent = 'Stop';
  } else {
    fill.classList.remove('is-running');
    this.textContent = 'Play';
  }
});

/* ── Modal demo (section 24) ── */
const modalOverlay = document.getElementById('modal-demo-overlay');

document.getElementById('modal-open-btn')?.addEventListener('click', () => {
  if (modalOverlay) modalOverlay.classList.add('is-open');
});

document.getElementById('modal-close-btn')?.addEventListener('click', () => {
  if (modalOverlay) modalOverlay.classList.remove('is-open');
});

modalOverlay?.addEventListener('click', (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('is-open');
});

/* ── Reduced motion toggle (section 26) ── */
const rmToggle = document.getElementById('rm-toggle');
const rmStatus = document.getElementById('rm-status');
let rmActive = false;

rmToggle?.addEventListener('click', function() {
  rmActive = !rmActive;
  this.classList.toggle('is-on', rmActive);
  document.documentElement.classList.toggle('reduced-motion', rmActive);
  if (rmStatus) {
    rmStatus.textContent = rmActive ? 'Ativo' : 'Inativo';
    rmStatus.classList.toggle('is-active', rmActive);
  }
});

/* ── Do's & Don'ts demos (section 27) ── */
const dndDo1  = document.getElementById('dnd-do-1');
const dndDont1 = document.getElementById('dnd-dont-1');

dndDo1?.addEventListener('click', () => {
  dndDo1.style.opacity = '0';
  dndDo1.style.transform = 'translateY(24px)';
  dndDo1.style.transition = 'none';
  void dndDo1.offsetWidth;
  dndDo1.style.transition = 'opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)';
  dndDo1.style.opacity = '1';
  dndDo1.style.transform = 'translateY(0)';
});

dndDont1?.addEventListener('click', () => {
  dndDont1.style.opacity = '0';
  dndDont1.style.transform = 'translateY(60px) scale(0.5)';
  dndDont1.style.transition = 'none';
  void dndDont1.offsetWidth;
  dndDont1.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
  dndDont1.style.opacity = '1';
  dndDont1.style.transform = 'translateY(0) scale(1.04)';
  setTimeout(() => {
    dndDont1.style.transition = 'transform 0.2s cubic-bezier(0.16,1,0.3,1)';
    dndDont1.style.transform = 'translateY(0) scale(1)';
  }, 600);
});

function triggerStaggerGroup(items, delays, reverse = false) {
  items.forEach((el, i) => {
    el.style.transition = 'none';
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    void el.offsetWidth;
    const d = delays[i];
    setTimeout(() => {
      el.style.transition = `opacity 0.6s cubic-bezier(0.25,0.1,0.25,1) ${d}ms, transform 0.6s cubic-bezier(0.25,0.1,0.25,1) ${d}ms`;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 20);
  });
}

document.getElementById('dnd-do-2-btn')?.addEventListener('click', () => {
  const items = ['dnd-do-2-a', 'dnd-do-2-b', 'dnd-do-2-c'].map(id => document.getElementById(id)).filter(Boolean);
  triggerStaggerGroup(items, [0, 60, 114]);
});

document.getElementById('dnd-dont-2-btn')?.addEventListener('click', () => {
  const items = ['dnd-dont-2-a', 'dnd-dont-2-b', 'dnd-dont-2-c'].map(id => document.getElementById(id)).filter(Boolean);
  triggerStaggerGroup(items, [0, 200, 400]);
});

const dndDo3  = document.getElementById('dnd-do-3');
const dndDont3 = document.getElementById('dnd-dont-3');

dndDo3?.addEventListener('click', () => {
  dndDo3.style.transition = 'opacity 0.15s ease';
  dndDo3.style.opacity = '0';
  setTimeout(() => { dndDo3.style.opacity = '1'; }, 600);
});

dndDont3?.addEventListener('click', () => {
  dndDont3.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  dndDont3.style.opacity = '0';
  dndDont3.style.transform = 'scale(0)';
  setTimeout(() => {
    dndDont3.style.opacity = '1';
    dndDont3.style.transform = 'scale(1)';
  }, 900);
});

/* ════════════════════════════════════════════
   LOGO MOTION — Section 28 (concept: "Incisão")
   Strategy: JavaScript timeouts and inline styles.
   CSS only owns layout and initial hidden state.
   ════════════════════════════════════════════ */

// Logo Motion - Section 28 - JS animation
function lmAnimate(el, props, duration, easing, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      el.style.transition = Object.keys(props).map(p =>
        `${p.replace(/[A-Z]/g, match => '-' + match.toLowerCase())} ${duration}ms ${easing}`
      ).join(', ');
      Object.entries(props).forEach(([prop, value]) => {
        if (prop === 'stroke-dashoffset') {
          el.setAttribute('stroke-dashoffset', value);
          el.style.strokeDashoffset = value;
        } else {
          el.style[prop] = value;
        }
      });
      setTimeout(resolve, duration);
    }, delay);
  });
}

function lmResetElement(el, props) {
  el.style.transition = 'none';
  Object.entries(props).forEach(([prop, value]) => {
    if (prop === 'stroke-dashoffset') {
      el.setAttribute('stroke-dashoffset', value);
      el.style.strokeDashoffset = value;
    } else {
      el.style[prop] = value;
    }
  });
}

function lmFireSymbol(svgEl) {
  const outer = svgEl.querySelector('.lm-outer');
  const inner = svgEl.querySelector('.lm-inner');
  const line = svgEl.querySelector('.lm-line');

  lmResetElement(line, { opacity: '0', transform: 'scaleY(0)' });
  lmResetElement(inner, { opacity: '0', 'stroke-dashoffset': '182.21' });
  lmResetElement(outer, { opacity: '0', 'stroke-dashoffset': '289.03' });

  void svgEl.getBoundingClientRect();

  lmAnimate(line, {
    opacity: '0.9',
    transform: 'scaleY(1)'
  }, 80, 'cubic-bezier(0.0, 0.0, 0.2, 1.0)', 0);

  lmAnimate(inner, {
    opacity: '0.28',
    'stroke-dashoffset': '0'
  }, 900, 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', 280);

  lmAnimate(outer, {
    opacity: '1',
    'stroke-dashoffset': '0'
  }, 900, 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', 480);

  setTimeout(() => {
    line.style.transition = 'opacity 100ms cubic-bezier(0.4, 0.0, 0.2, 1.0)';
    line.style.opacity = '0.5';
    setTimeout(() => {
      line.style.transition = 'opacity 100ms cubic-bezier(0.4, 0.0, 0.2, 1.0)';
      line.style.opacity = '0.9';
    }, 100);
  }, 1380);
}

function lmResetAll(svgEl) {
  const outer = svgEl.querySelector('.lm-outer');
  const inner = svgEl.querySelector('.lm-inner');
  const line = svgEl.querySelector('.lm-line');

  lmResetElement(line, { opacity: '0', transform: 'scaleY(0)' });
  lmResetElement(inner, { opacity: '0', 'stroke-dashoffset': '182.21' });
  lmResetElement(outer, { opacity: '0', 'stroke-dashoffset': '289.03' });
}

function lmFireVariant(variant) {
  if (variant === 'symbol') {
    lmFireSymbol(document.getElementById('lm-symbol-a'));
  }
  else if (variant === 'horizontal') {
    lmFireSymbol(document.getElementById('lm-symbol-b'));
    const div = document.getElementById('lm-h-divider');
    const wm = document.getElementById('lm-h-wordmark');
    const st = document.getElementById('lm-h-subtitle');

    lmResetElement(div, { opacity: '0' });
    lmResetElement(wm, { opacity: '0', letterSpacing: '12px' });
    lmResetElement(st, { opacity: '0' });

    lmAnimate(div, { opacity: '1' }, 250, 'cubic-bezier(0.4, 0.0, 0.2, 1.0)', 1600);
    lmAnimate(wm, { opacity: '1', letterSpacing: '6px' }, 600, 'cubic-bezier(0.16, 1, 0.3, 1)', 1800);
    lmAnimate(st, { opacity: '1' }, 400, 'cubic-bezier(0.4, 0.0, 0.2, 1.0)', 2200);
  }
  else if (variant === 'vertical') {
    lmFireSymbol(document.getElementById('lm-symbol-c'));
    const rl = document.getElementById('lm-v-rule');
    const wm = document.getElementById('lm-v-wordmark');

    lmResetElement(rl, { opacity: '0', transform: 'scaleX(0)' });
    lmResetElement(wm, { opacity: '0', letterSpacing: '14px' });

    lmAnimate(rl, { opacity: '1', transform: 'scaleX(1)' }, 250, 'cubic-bezier(0.0, 0.0, 0.2, 1.0)', 1600);
    lmAnimate(wm, { opacity: '1', letterSpacing: '8px' }, 600, 'cubic-bezier(0.16, 1, 0.3, 1)', 1850);
  }
}

function lmResetVariant(variant) {
  if (variant === 'symbol') {
    lmResetAll(document.getElementById('lm-symbol-a'));
  }
  else if (variant === 'horizontal') {
    lmResetAll(document.getElementById('lm-symbol-b'));
    lmResetElement(document.getElementById('lm-h-divider'), { opacity: '0' });
    lmResetElement(document.getElementById('lm-h-wordmark'), { opacity: '0', letterSpacing: '12px' });
    lmResetElement(document.getElementById('lm-h-subtitle'), { opacity: '0' });
  }
  else if (variant === 'vertical') {
    lmResetAll(document.getElementById('lm-symbol-c'));
    lmResetElement(document.getElementById('lm-v-rule'), { opacity: '0', transform: 'scaleX(0)' });
    lmResetElement(document.getElementById('lm-v-wordmark'), { opacity: '0', letterSpacing: '14px' });
  }
}

document.querySelectorAll('[data-lm-fire]').forEach(btn => {
  btn.addEventListener('click', () => lmFireVariant(btn.dataset.lmFire));
});

document.querySelectorAll('[data-lm-reset]').forEach(btn => {
  btn.addEventListener('click', () => lmResetVariant(btn.dataset.lmReset));
});

document.querySelectorAll('[data-lm-theme]').forEach(btn => {
  btn.addEventListener('click', () => {
    const variant = btn.dataset.lmTheme;
    const stageId = variant === 'symbol' ? 'lm-stage-symbol' :
                    variant === 'horizontal' ? 'lm-stage-horizontal' : 'lm-stage-vertical';
    const stage = document.getElementById(stageId);
    if (stage) {
      stage.classList.toggle('lm-light');
      btn.textContent = stage.classList.contains('lm-light') ? 'Fundo escuro' : 'Fundo claro';
    }
  });
});

setTimeout(() => {
  document.querySelectorAll('#sec-logo-motion .lm-outer, #sec-logo-motion .lm-inner, #sec-logo-motion .lm-line').forEach(el => {
    el.style.transition = 'none';
    el.style.opacity = '0';
  });
  document.querySelectorAll('#sec-logo-motion .lm-h-divider, #sec-logo-motion .lm-wordmark, #sec-logo-motion .lm-subtitle, #sec-logo-motion .lm-v-rule, #sec-logo-motion .lm-v-wordmark').forEach(el => {
    el.style.transition = 'none';
    el.style.opacity = '0';
  });
}, 100);

/* ════════════════════════════════════════════
   TYPEWRITER — Section 29
   Pure JS DOM manipulation, same pattern as Logo Motion.
   CSS owns only layout and cursor blink keyframe.
   ════════════════════════════════════════════ */

function twIsReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || document.documentElement.classList.contains('reduced-motion');
}

function twCreateCursor() {
  const cursor = document.createElement('span');
  cursor.className = 'tw-cursor';
  return cursor;
}

function twType(el, text, charDelay, onComplete) {
  if (twIsReducedMotion()) {
    el.textContent = text;
    if (onComplete) onComplete();
    return { cancel: () => {} };
  }

  el.textContent = '';
  const cursor = twCreateCursor();
  el.appendChild(cursor);

  let i = 0;
  let cancelled = false;

  const interval = setInterval(() => {
    if (cancelled) { clearInterval(interval); return; }
    if (i < text.length) {
      cursor.before(document.createTextNode(text[i]));
      i++;
    } else {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, charDelay);

  return {
    cancel: () => {
      cancelled = true;
      clearInterval(interval);
    }
  };
}

function twClear(el, clearDelay, onComplete) {
  const cursor = el.querySelector('.tw-cursor');
  if (cursor) cursor.remove();

  const text = el.textContent;
  const chars = text.split('');
  let i = chars.length;

  const cursorEl = twCreateCursor();
  el.textContent = '';
  el.appendChild(cursorEl);

  if (i === 0) {
    if (onComplete) onComplete();
    return;
  }

  el.insertBefore(document.createTextNode(chars.join('')), cursorEl);

  const interval = setInterval(() => {
    i--;
    const textNode = el.firstChild;
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      textNode.textContent = chars.slice(0, i).join('');
    }
    if (i <= 0) {
      clearInterval(interval);
      if (textNode) textNode.remove();
      if (onComplete) onComplete();
    }
  }, clearDelay);
}

function twFadeCursor(el) {
  const cursor = el.querySelector('.tw-cursor');
  if (!cursor) return;
  cursor.classList.add('tw-cursor--fading');
  setTimeout(() => {
    if (cursor.parentNode) cursor.remove();
  }, 800);
}

const twActive = {};

function twFire(variant) {
  if (twActive[variant]) twActive[variant].cancel();

  const configs = {
    display: { id: 'tw-display', charDelay: 30,  fadeCursor: true,  rewrite: false },
    label:   { id: 'tw-label',   charDelay: 30,  fadeCursor: true,  rewrite: false },
    kpi:     { id: 'tw-kpi',     charDelay: 30,  fadeCursor: true,  rewrite: true, clearDelay: 20 },
    cli:     { id: 'tw-cli',     charDelay: 20,  fadeCursor: false, rewrite: false },
  };

  const cfg = configs[variant];
  if (!cfg) return;
  const el = document.getElementById(cfg.id);
  if (!el) return;
  const fullText = el.getAttribute('data-tw-full');

  const startTyping = () => {
    twActive[variant] = twType(el, fullText, cfg.charDelay, () => {
      if (cfg.fadeCursor) twFadeCursor(el);
    });
  };

  if (el.textContent.trim().length > 0) {
    // Clear any existing text before typing (rewrite or residual content)
    twClear(el, cfg.clearDelay || 20, startTyping);
  } else {
    startTyping();
  }
}

function twReset(variant) {
  if (twActive[variant]) twActive[variant].cancel();

  const ids = { display: 'tw-display', label: 'tw-label', kpi: 'tw-kpi', cli: 'tw-cli' };
  const el = document.getElementById(ids[variant]);
  if (!el) return;
  const cursor = el.querySelector('.tw-cursor');
  if (cursor) cursor.remove();
  el.textContent = el.dataset.twInitial || '';
}

document.querySelectorAll('[data-tw-fire]').forEach(btn => {
  btn.addEventListener('click', () => twFire(btn.dataset.twFire));
});

document.querySelectorAll('[data-tw-reset]').forEach(btn => {
  btn.addEventListener('click', () => twReset(btn.dataset.twReset));
});

// Proteção contra scroll-reveal: forçar estado inicial correto após mount
setTimeout(() => {
  document.querySelectorAll('#sec-typewriter .tw-text').forEach(el => {
    const cursor = el.querySelector('.tw-cursor');
    if (cursor) cursor.remove();
    el.textContent = el.dataset.twInitial || '';
  });
}, 100);

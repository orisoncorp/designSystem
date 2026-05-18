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
const scrollRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
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
    setTimeout(() => row.classList.add('in-view'), i * 40);
  });
}

document.getElementById('org-table-play')?.addEventListener('click', () => {
  document.querySelectorAll('.org-table-row').forEach(row => {
    row.classList.remove('in-view');
    row.style.transitionDelay = '0ms';
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
    setTimeout(() => bar.classList.add('in-view'), i * 60);
  });
}

document.getElementById('chart-bars-play')?.addEventListener('click', () => {
  const bars = document.querySelectorAll('#chart-bars-demo .chart-bar');
  bars.forEach(bar => {
    bar.classList.remove('in-view');
    bar.style.transitionDelay = '0ms';
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
document.getElementById('progress-play')?.addEventListener('click', function() {
  if (progressRunning) return;
  progressRunning = true;
  const fill = document.getElementById('progress-fill');
  const pct  = document.getElementById('progress-pct');
  if (!fill) return;
  fill.style.width = '0%';
  this.textContent = 'Processando…';
  void fill.offsetWidth;
  fill.classList.add('is-running');
  let start = null;
  const dur = 900;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min(((ts - start) / dur) * 100, 100);
    if (pct) pct.textContent = `${Math.round(p)}%`;
    if (p < 100) {
      requestAnimationFrame(step);
    } else {
      this.textContent = 'Completo';
      setTimeout(() => {
        fill.classList.remove('is-running');
        fill.style.width = '0%';
        if (pct) pct.textContent = '0%';
        this.textContent = 'Iniciar';
        progressRunning = false;
      }, 1200);
    }
  }
  requestAnimationFrame(step.bind(this));
});

function animateCounter(el, from, to, dur) {
  const start = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  function step(ts) {
    const t = Math.min((ts - start) / dur, 1);
    const val = Math.round(from + (to - from) * easeOut(t));
    el.textContent = val >= 1000
      ? 'R$ ' + (val / 1000).toFixed(0) + 'k'
      : val.toString();
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.getElementById('kpi-play')?.addEventListener('click', () => {
  const el = document.getElementById('kpi-counter');
  if (el) animateCounter(el, 0, 100000, 400);
});

document.getElementById('kpi-reset')?.addEventListener('click', () => {
  const el = document.getElementById('kpi-counter');
  if (el) el.textContent = '0';
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
   ════════════════════════════════════════════ */

const LM_EASING = {
  micro:    'cubic-bezier(0.0, 0.0, 0.2, 1.0)',
  enter:    'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
  emphasis: 'cubic-bezier(0.16, 1, 0.3, 1)',
  state:    'cubic-bezier(0.4, 0.0, 0.2, 1.0)',
};

const LM_DUR = {
  instant:  80,
  fast:     150,
  base:     250,
  moderate: 400,
  slow:     600,
  dramatic: 900,
};

function isReducedMotion() {
  return document.documentElement.classList.contains('reduced-motion')
    || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ── Core symbol animation (3 SVG elements) ──
   line    = Beat 1 (incision)
   inner   = Beat 3 (inner circle draw)
   outer   = Beat 4 (outer circle draw)
   Returns a promise that resolves after Beat 5 (settle) completes.
*/
function animateSymbol(lineEl, innerEl, outerEl) {
  return new Promise(resolve => {
    if (isReducedMotion()) {
      // Show everything immediately at final state
      lineEl.style.transition = 'none';
      lineEl.style.transform = 'scaleY(1)';
      innerEl.style.transition = 'none';
      innerEl.style.strokeDashoffset = '0';
      outerEl.style.transition = 'none';
      outerEl.style.strokeDashoffset = '0';
      resolve();
      return;
    }

    // Reset to initial state
    lineEl.style.transition = 'none';
    lineEl.style.transform = 'scaleY(0)';
    innerEl.style.transition = 'none';
    innerEl.style.strokeDashoffset = '182.21';
    outerEl.style.transition = 'none';
    outerEl.style.strokeDashoffset = '289.03';
    void lineEl.getBoundingClientRect(); // force reflow

    // Beat 1 — Incision: line grows from center (80ms, micro easing)
    lineEl.style.transition = `transform ${LM_DUR.instant}ms ${LM_EASING.micro}`;
    lineEl.style.transform = 'scaleY(1)';

    // Beat 2 — Pause 200ms, then Beat 3 starts at 280ms
    const t3Start = LM_DUR.instant + 200; // 280ms

    setTimeout(() => {
      // Beat 3 — Inner circle draws (900ms, enter easing)
      innerEl.style.transition = `stroke-dashoffset ${LM_DUR.dramatic}ms ${LM_EASING.enter}`;
      innerEl.style.strokeDashoffset = '0';
    }, t3Start);

    // Beat 4 — Outer circle draws, delay 200ms after Beat 3 (starts at 480ms)
    const t4Start = t3Start + 200; // 480ms
    setTimeout(() => {
      outerEl.style.transition = `stroke-dashoffset ${LM_DUR.dramatic}ms ${LM_EASING.enter}`;
      outerEl.style.strokeDashoffset = '0';
    }, t4Start);

    // Beat 5 — Settle: line pulse (starts at end of outer circle = 480+900=1380ms)
    const t5Start = t4Start + LM_DUR.dramatic; // 1380ms
    setTimeout(() => {
      lineEl.style.transition = `opacity 100ms ${LM_EASING.state}`;
      lineEl.style.opacity = '0.55';
      setTimeout(() => {
        lineEl.style.transition = `opacity 100ms ${LM_EASING.state}`;
        lineEl.style.opacity = '0.9';
        setTimeout(resolve, 100);
      }, 100);
    }, t5Start);
  });
}

/* ── Reset a symbol SVG to initial state ── */
function resetSymbolEls(lineEl, innerEl, outerEl) {
  lineEl.style.transition = 'none';
  lineEl.style.transform = 'scaleY(0)';
  lineEl.style.opacity = '0.9';
  innerEl.style.transition = 'none';
  innerEl.style.strokeDashoffset = '182.21';
  outerEl.style.transition = 'none';
  outerEl.style.strokeDashoffset = '289.03';
}

/* ── Theme toggle ── */
function applyLmTheme(stageInner, svgEl, theme, wordmarkEl, subtitleEl, dividerEl, vRuleEl, vWordmarkEl) {
  const isLight = theme === 'light';
  stageInner.classList.toggle('lm-stage-inner--light', isLight);

  if (svgEl) {
    svgEl.style.color = isLight ? 'var(--color-midnight)' : 'var(--color-offwhite)';
  }
  if (wordmarkEl) {
    wordmarkEl.classList.toggle('lm-wordmark--light', isLight);
    wordmarkEl.style.color = isLight ? 'var(--color-midnight)' : '';
  }
  if (subtitleEl) {
    subtitleEl.classList.toggle('lm-subtitle--light', isLight);
  }
  if (dividerEl) {
    dividerEl.style.background = isLight ? 'var(--color-slate)' : '';
  }
  if (vRuleEl) {
    // crimson rule stays crimson on both themes
  }
  if (vWordmarkEl) {
    vWordmarkEl.classList.toggle('lm-v-wordmark--light', isLight);
    vWordmarkEl.style.color = isLight ? 'var(--color-midnight)' : '';
  }
}

/* ── Variation 1: Symbol ── */
(function setupLogoSymbol() {
  const lineEl  = document.getElementById('lm-s-line');
  const innerEl = document.getElementById('lm-s-inner');
  const outerEl = document.getElementById('lm-s-outer');
  const stageEl = document.getElementById('lm-stage-symbol');
  const svgEl   = document.getElementById('lm-svg-symbol');
  if (!lineEl || !innerEl || !outerEl) return;

  let running = false;
  let theme = 'dark';

  document.querySelector('[data-lm-fire="symbol"]')?.addEventListener('click', () => {
    if (running) return;
    running = true;
    resetSymbolEls(lineEl, innerEl, outerEl);
    void lineEl.getBoundingClientRect();
    animateSymbol(lineEl, innerEl, outerEl).then(() => { running = false; });
  });

  document.querySelector('[data-lm-reset="symbol"]')?.addEventListener('click', () => {
    running = false;
    resetSymbolEls(lineEl, innerEl, outerEl);
  });

  document.querySelector('[data-lm-theme="symbol"]')?.addEventListener('click', function() {
    theme = theme === 'dark' ? 'light' : 'dark';
    this.textContent = theme === 'light' ? 'Fundo escuro' : 'Fundo claro';
    applyLmTheme(stageEl, svgEl, theme);
  });
})();

/* ── Variation 2: Lockup Horizontal ── */
(function setupLogoHorizontal() {
  const lineEl     = document.getElementById('lm-h-line');
  const innerEl    = document.getElementById('lm-h-inner');
  const outerEl    = document.getElementById('lm-h-outer');
  const dividerEl  = document.getElementById('lm-h-divider');
  const wordmarkEl = document.getElementById('lm-h-wordmark');
  const subtitleEl = document.getElementById('lm-h-subtitle');
  const stageEl    = document.getElementById('lm-stage-horizontal');
  const svgEl      = document.getElementById('lm-svg-horizontal');
  if (!lineEl || !innerEl || !outerEl) return;

  let running = false;
  let theme = 'dark';

  function resetH() {
    running = false;
    resetSymbolEls(lineEl, innerEl, outerEl);
    if (dividerEl)  { dividerEl.style.transition = 'none'; dividerEl.style.opacity = '0'; }
    if (wordmarkEl) { wordmarkEl.style.transition = 'none'; wordmarkEl.style.opacity = '0'; wordmarkEl.style.letterSpacing = '12px'; }
    if (subtitleEl) { subtitleEl.style.transition = 'none'; subtitleEl.style.opacity = '0'; }
  }

  document.querySelector('[data-lm-fire="horizontal"]')?.addEventListener('click', () => {
    if (running) return;
    running = true;
    resetH();
    void lineEl.getBoundingClientRect();
    running = true;

    animateSymbol(lineEl, innerEl, outerEl).then(() => {
      if (isReducedMotion()) {
        if (dividerEl)  { dividerEl.style.transition = 'none'; dividerEl.style.opacity = '1'; }
        if (wordmarkEl) { wordmarkEl.style.transition = 'none'; wordmarkEl.style.opacity = '1'; wordmarkEl.style.letterSpacing = '6px'; }
        if (subtitleEl) { subtitleEl.style.transition = 'none'; subtitleEl.style.opacity = '1'; }
        running = false;
        return;
      }

      // Beat 6 — Divider fade (250ms, state easing), starts at ~1580ms
      if (dividerEl) {
        dividerEl.style.transition = `opacity ${LM_DUR.base}ms ${LM_EASING.state}`;
        dividerEl.style.opacity = '1';
      }

      // Beat 7 — Wordmark converge (600ms, emphasis), delay 200ms after beat 6
      setTimeout(() => {
        if (wordmarkEl) {
          wordmarkEl.style.transition = `opacity ${LM_DUR.slow}ms ${LM_EASING.emphasis}, letter-spacing ${LM_DUR.slow}ms ${LM_EASING.emphasis}`;
          wordmarkEl.style.opacity = '1';
          wordmarkEl.style.letterSpacing = '6px';
        }
      }, 200);

      // Beat 8 — Subtitle fade (400ms, state), delay 600ms after beat 6
      setTimeout(() => {
        if (subtitleEl) {
          subtitleEl.style.transition = `opacity ${LM_DUR.moderate}ms ${LM_EASING.state}`;
          subtitleEl.style.opacity = '1';
        }
        running = false;
      }, 600);
    });
  });

  document.querySelector('[data-lm-reset="horizontal"]')?.addEventListener('click', resetH);

  document.querySelector('[data-lm-theme="horizontal"]')?.addEventListener('click', function() {
    theme = theme === 'dark' ? 'light' : 'dark';
    this.textContent = theme === 'light' ? 'Fundo escuro' : 'Fundo claro';
    applyLmTheme(stageEl, svgEl, theme, wordmarkEl, subtitleEl, dividerEl);
  });
})();

/* ── Variation 3: Lockup Vertical ── */
(function setupLogoVertical() {
  const lineEl     = document.getElementById('lm-v-line');
  const innerEl    = document.getElementById('lm-v-inner');
  const outerEl    = document.getElementById('lm-v-outer');
  const vRuleEl    = document.getElementById('lm-v-rule');
  const vWordEl    = document.getElementById('lm-v-wordmark');
  const stageEl    = document.getElementById('lm-stage-vertical');
  const svgEl      = document.getElementById('lm-svg-vertical');
  if (!lineEl || !innerEl || !outerEl) return;

  let running = false;
  let theme = 'dark';

  function resetV() {
    running = false;
    resetSymbolEls(lineEl, innerEl, outerEl);
    if (vRuleEl) { vRuleEl.style.transition = 'none'; vRuleEl.style.transform = 'scaleX(0)'; vRuleEl.style.opacity = '0'; }
    if (vWordEl) { vWordEl.style.transition = 'none'; vWordEl.style.opacity = '0'; vWordEl.style.letterSpacing = '14px'; }
  }

  document.querySelector('[data-lm-fire="vertical"]')?.addEventListener('click', () => {
    if (running) return;
    running = true;
    resetV();
    void lineEl.getBoundingClientRect();
    running = true;

    animateSymbol(lineEl, innerEl, outerEl).then(() => {
      if (isReducedMotion()) {
        if (vRuleEl) { vRuleEl.style.transition = 'none'; vRuleEl.style.transform = 'scaleX(1)'; vRuleEl.style.opacity = '1'; }
        if (vWordEl) { vWordEl.style.transition = 'none'; vWordEl.style.opacity = '1'; vWordEl.style.letterSpacing = '8px'; }
        running = false;
        return;
      }

      // Beat 6v — Horizontal rule grows from center (250ms, micro easing)
      if (vRuleEl) {
        vRuleEl.style.transition = `transform ${LM_DUR.base}ms ${LM_EASING.micro}, opacity ${LM_DUR.base}ms ${LM_EASING.micro}`;
        vRuleEl.style.transform = 'scaleX(1)';
        vRuleEl.style.opacity = '1';
      }

      // Beat 7v — Wordmark (600ms, emphasis), after rule completes (250ms)
      setTimeout(() => {
        if (vWordEl) {
          vWordEl.style.transition = `opacity ${LM_DUR.slow}ms ${LM_EASING.emphasis}, letter-spacing ${LM_DUR.slow}ms ${LM_EASING.emphasis}`;
          vWordEl.style.opacity = '1';
          vWordEl.style.letterSpacing = '8px';
        }
        setTimeout(() => { running = false; }, LM_DUR.slow);
      }, LM_DUR.base);
    });
  });

  document.querySelector('[data-lm-reset="vertical"]')?.addEventListener('click', resetV);

  document.querySelector('[data-lm-theme="vertical"]')?.addEventListener('click', function() {
    theme = theme === 'dark' ? 'light' : 'dark';
    this.textContent = theme === 'light' ? 'Fundo escuro' : 'Fundo claro';
    applyLmTheme(stageEl, svgEl, theme, null, null, null, null, vWordEl);
  });
})();

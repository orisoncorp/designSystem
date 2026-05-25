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

import section30 from './sections/30-dataviz-overview.html?raw';
import section31 from './sections/31-data-palette.html?raw';
import section32 from './sections/32-chart-styles.html?raw';
import section33 from './sections/33-kpi-cards.html?raw';
import section34 from './sections/34-command-layout.html?raw';
import section35 from './sections/35-hero-3d.html?raw';
import section36 from './sections/36-realtime-motion.html?raw';

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

  { id: 'sec-dataviz-overview', num: '30', label: 'Overview',       group: 'dataviz' },
  { id: 'sec-data-palette',     num: '31', label: 'Data Palette',   group: 'dataviz' },
  { id: 'sec-chart-styles',     num: '32', label: 'Chart Styles',   group: 'dataviz' },
  { id: 'sec-kpi-cards',        num: '33', label: 'KPI Cards',      group: 'dataviz' },
  { id: 'sec-command-layout',   num: '34', label: 'Command Layout', group: 'dataviz' },
  { id: 'sec-hero-3d',          num: '35', label: 'Hero 3D',        group: 'dataviz' },
  { id: 'sec-realtime-motion',  num: '36', label: 'Real-time',      group: 'dataviz' },
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
      } else if (item.group === 'dataviz') {
        navHtml += `<div class="sidebar-group sidebar-group--dataviz">Data Viz</div>`;
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
  section30, section31, section32, section33, section34,
  section35, section36,
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
const MANUAL_ANIM_SECTIONS = ['#sec-logo-motion', '#sec-typewriter', '#sec-kpi-cards', '#sec-realtime-motion'];
function inManualSection(el) {
  return MANUAL_ANIM_SECTIONS.some(sel => el.closest(sel));
}

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting && !inManualSection(entry.target)) {
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
    if (entry.isIntersecting && !inManualSection(entry.target)) {
      entry.target.classList.add('in-view');
      mRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.m-reveal').forEach(el => mRevealObserver.observe(el));

// Manual sections: force their .m-reveal wrappers visible immediately (observer is excluded)
MANUAL_ANIM_SECTIONS.forEach(sel => {
  document.querySelectorAll(`${sel} .m-reveal`).forEach(el => el.classList.add('in-view'));
});

/* ── Scroll-reveal cards (organisms demo) ── */
function revealScrollCard(card) {
  card.style.opacity = '1';
  card.style.transform = 'translateY(0)';
}

const scrollRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !inManualSection(entry.target)) {
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
const rmLabel  = document.querySelector('.rm-toggle-label');

// Bidirectional: if OS has reduced-motion, toggle forces animations; otherwise it reduces them.
const osReduces = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (rmLabel) {
  rmLabel.textContent = osReduces
    ? 'Forçar animações (override reduced-motion do OS)'
    : 'Simular reduced-motion (afeta toda a página)';
}

rmToggle?.addEventListener('click', function() {
  const html = document.documentElement;
  let active;
  if (osReduces) {
    html.classList.toggle('force-motion');
    html.classList.remove('reduced-motion');
    active = html.classList.contains('force-motion');
  } else {
    html.classList.toggle('reduced-motion');
    html.classList.remove('force-motion');
    active = html.classList.contains('reduced-motion');
  }
  this.classList.toggle('is-on', active);
  if (rmStatus) {
    rmStatus.textContent = active ? 'Ativo' : 'Inativo';
    rmStatus.classList.toggle('is-active', active);
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


/* ════════════════════════════════════════════
   TYPEWRITER — Section 29
   All logic in JS. Cursor uses setInterval blink
   (immune to CSS cascade). No CSS animations for
   the effect itself — only layout CSS is needed.
   ════════════════════════════════════════════ */

function isReducedMotion() {
  if (document.documentElement.classList.contains('force-motion')) return false;
  if (document.documentElement.classList.contains('reduced-motion')) return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Create cursor with full inline styles + JS blink — immune to CSS cascade
function twCreateCursor() {
  const cursor = document.createElement('span');
  cursor.style.display = 'inline-block';
  cursor.style.width = '2px';
  cursor.style.height = '1.1em';
  cursor.style.backgroundColor = '#8B1A1A';
  cursor.style.verticalAlign = 'text-bottom';
  cursor.style.marginLeft = '1px';
  cursor.style.opacity = '1';

  let visible = true;
  cursor._blinkInterval = setInterval(() => {
    visible = !visible;
    cursor.style.opacity = visible ? '1' : '0';
  }, 530);

  return cursor;
}

// Kill blink interval and optionally fade the cursor out
function twKillCursor(cursor, fade) {
  if (!cursor) return;
  if (cursor._blinkInterval) {
    clearInterval(cursor._blinkInterval);
    cursor._blinkInterval = null;
  }
  if (!fade) return;
  // 500ms hold, then 250ms fade
  cursor.style.opacity = '1';
  setTimeout(() => {
    cursor.style.transition = 'opacity 250ms cubic-bezier(0.4, 0.0, 0.2, 1.0)';
    cursor.style.opacity = '0';
    setTimeout(() => { if (cursor.parentNode) cursor.remove(); }, 260);
  }, 500);
}

// Kill any live cursor inside el (from a previous run)
function twPurgeCursor(el) {
  el.querySelectorAll('span').forEach(s => {
    if (s._blinkInterval) {
      clearInterval(s._blinkInterval);
      s._blinkInterval = null;
    }
    s.remove();
  });
}

// Speed state per variant
const twSpeeds = {
  display: { slow: 80,  default: 55, fast: 30, current: 55, clearRatio: 0.55 },
  label:   { slow: 70,  default: 45, fast: 25, current: 45, clearRatio: 0.55 },
  kpi:     { slow: 80,  default: 55, fast: 30, current: 55, clearRatio: 0.55 },
  cli:     { slow: 45,  default: 25, fast: 15, current: 25, clearRatio: 0.6  },
};

const twIds = { display: 'tw-display', label: 'tw-label', kpi: 'tw-kpi', cli: 'tw-cli' };

// Core rewrite engine: handles both clear→type and type-only paths
function twRewrite(el, newText, typeDelay, clearDelay, keepCursor) {
  if (isReducedMotion()) {
    el.textContent = newText;
    return { cancel: () => {} };
  }

  let cancelled = false;
  const handles = [];

  const existingText = el.textContent.trim();
  twPurgeCursor(el);

  const cursor = twCreateCursor();

  if (existingText.length > 0) {
    // ── REWRITE MODE: cursor → pause → clear → pause → type ──
    el.textContent = existingText;
    el.appendChild(cursor);

    const t1 = setTimeout(() => {
      if (cancelled) return;

      // CLEAR PHASE
      let chars = existingText.split('');
      let ci = chars.length;

      const clearIv = setInterval(() => {
        if (cancelled) { clearInterval(clearIv); return; }
        ci--;
        el.textContent = chars.slice(0, ci).join('');
        el.appendChild(cursor);
        if (ci <= 0) {
          clearInterval(clearIv);
          // PAUSE after clear
          const t2 = setTimeout(() => {
            if (cancelled) return;
            // TYPE PHASE
            let ti = 0;
            const typeIv = setInterval(() => {
              if (cancelled) { clearInterval(typeIv); return; }
              ti++;
              el.textContent = newText.slice(0, ti);
              el.appendChild(cursor);
              if (ti >= newText.length) {
                clearInterval(typeIv);
                if (!keepCursor) twKillCursor(cursor, true);
              }
            }, typeDelay);
            handles.push({ type: 'interval', ref: typeIv });
          }, 200);
          handles.push({ type: 'timeout', ref: t2 });
        }
      }, clearDelay);
      handles.push({ type: 'interval', ref: clearIv });
    }, 300);
    handles.push({ type: 'timeout', ref: t1 });

  } else {
    // ── TYPE ONLY MODE ──
    el.textContent = '';
    el.appendChild(cursor);

    let ti = 0;
    const typeIv = setInterval(() => {
      if (cancelled) { clearInterval(typeIv); return; }
      ti++;
      el.textContent = newText.slice(0, ti);
      el.appendChild(cursor);
      if (ti >= newText.length) {
        clearInterval(typeIv);
        if (!keepCursor) twKillCursor(cursor, true);
      }
    }, typeDelay);
    handles.push({ type: 'interval', ref: typeIv });
  }

  return {
    cancel: () => {
      cancelled = true;
      handles.forEach(h => {
        if (h.type === 'interval') clearInterval(h.ref);
        else clearTimeout(h.ref);
      });
      twKillCursor(cursor, false);
    }
  };
}

const twActive = {};

function twFire(variant) {
  if (twActive[variant]) twActive[variant].cancel();

  const el = document.getElementById(twIds[variant]);
  if (!el) return;
  const fullText = el.getAttribute('data-tw-full');
  const speed = twSpeeds[variant];
  const clearDelay = Math.round(speed.current * speed.clearRatio);

  twActive[variant] = twRewrite(el, fullText, speed.current, clearDelay, variant === 'cli');
}

function twReset(variant) {
  if (twActive[variant]) twActive[variant].cancel();

  const el = document.getElementById(twIds[variant]);
  if (!el) return;
  twPurgeCursor(el);
  el.textContent = el.dataset.twInitial || '';
}

// Speed toggle
document.querySelectorAll('[data-tw-speed]').forEach(btn => {
  btn.addEventListener('click', () => {
    const variant = btn.dataset.twSpeed;
    const speed = btn.dataset.speed;
    twSpeeds[variant].current = twSpeeds[variant][speed];
    document.querySelectorAll(`[data-tw-speed="${variant}"]`).forEach(b => b.classList.remove('tw-speed-btn--active'));
    btn.classList.add('tw-speed-btn--active');
  });
});

document.querySelectorAll('[data-tw-fire]').forEach(btn => {
  btn.addEventListener('click', () => twFire(btn.dataset.twFire));
});

document.querySelectorAll('[data-tw-reset]').forEach(btn => {
  btn.addEventListener('click', () => twReset(btn.dataset.twReset));
});

/* ════════════════════════════════════════════
   DATA VIZ — Interactive demos (sections 32–36)
   ════════════════════════════════════════════ */

/* ── Bar Chart (section 32) ── */
function dvAnimateBars() {
  const bars = document.querySelectorAll('#dv-bar-chart .dv-bar');
  bars.forEach((bar, i) => {
    bar.style.transition = 'none';
    bar.style.transform = 'scaleY(0)';
    void bar.offsetWidth;
    setTimeout(() => {
      bar.style.transition = `transform 400ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`;
      bar.style.transform = 'scaleY(1)';
    }, 20);
  });
}

function dvResetBars() {
  document.querySelectorAll('#dv-bar-chart .dv-bar').forEach(bar => {
    bar.style.transition = 'none';
    bar.style.transform = 'scaleY(0)';
  });
}

document.getElementById('dv-bar-play')?.addEventListener('click', dvAnimateBars);
document.getElementById('dv-bar-reset')?.addEventListener('click', dvResetBars);

/* ── Line Chart (section 32) ── */
function dvAnimateLine() {
  const l1 = document.getElementById('dv-line-1');
  const l2 = document.getElementById('dv-line-2');
  if (!l1 || !l2) return;
  l1.style.transition = 'none';
  l2.style.transition = 'none';
  l1.style.strokeDashoffset = '600';
  l2.style.strokeDashoffset = '600';
  void l1.getBoundingClientRect();
  l1.style.transition = 'stroke-dashoffset 900ms cubic-bezier(0.25,0.1,0.25,1)';
  l2.style.transition = 'stroke-dashoffset 900ms cubic-bezier(0.25,0.1,0.25,1) 200ms';
  l1.style.strokeDashoffset = '0';
  l2.style.strokeDashoffset = '0';
}

function dvResetLine() {
  const l1 = document.getElementById('dv-line-1');
  const l2 = document.getElementById('dv-line-2');
  if (!l1 || !l2) return;
  l1.style.transition = 'none';
  l2.style.transition = 'none';
  l1.style.strokeDashoffset = '600';
  l2.style.strokeDashoffset = '600';
}

document.getElementById('dv-line-play')?.addEventListener('click', dvAnimateLine);
document.getElementById('dv-line-reset')?.addEventListener('click', dvResetLine);

/* ── Donut Chart (section 32) ── */
// Segment data: [color, portion-of-circumference(377), rotation-start-deg]
const DONUT_SEGS = [
  { id: 'dv-seg-1', len: 132, rot: -90 },        // 35% of 377 ≈ 132
  { id: 'dv-seg-2', len: 94,  rot: -90 + 126 },  // 25% offset after seg1 (35%×360=126°)
  { id: 'dv-seg-3', len: 75,  rot: -90 + 216 },  // 20% offset (25%×360=90°, cumulative 216°)
  { id: 'dv-seg-4', len: 75,  rot: -90 + 288 },  // 20% offset (20%×360=72°, cumulative 288°)
];

function dvAnimateDonut() {
  // Reset all to hidden state first (no transition)
  DONUT_SEGS.forEach(seg => {
    const el = document.getElementById(seg.id);
    if (!el) return;
    el.style.transition = 'none';
    el.setAttribute('stroke-dasharray', `${seg.len} ${377 - seg.len}`);
    el.setAttribute('stroke-dashoffset', String(seg.len));
    el.setAttribute('transform', `rotate(${seg.rot} 80 80)`);
  });
  // Force layout flush
  document.getElementById('dv-donut-svg')?.getBoundingClientRect();
  // Animate each segment with stagger
  DONUT_SEGS.forEach((seg, i) => {
    const el = document.getElementById(seg.id);
    if (!el) return;
    setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 400ms cubic-bezier(0.4,0,0.2,1)';
      el.setAttribute('stroke-dashoffset', '0');
    }, i * 80);
  });
}

function dvResetDonut() {
  DONUT_SEGS.forEach(seg => {
    const el = document.getElementById(seg.id);
    if (!el) return;
    el.style.transition = 'none';
    el.setAttribute('stroke-dasharray', `${seg.len} ${377 - seg.len}`);
    el.setAttribute('stroke-dashoffset', String(seg.len));
    el.setAttribute('transform', `rotate(${seg.rot} 80 80)`);
  });
}

document.getElementById('dv-donut-play')?.addEventListener('click', dvAnimateDonut);
document.getElementById('dv-donut-reset')?.addEventListener('click', dvResetDonut);

/* ── KPI Cards (section 33) ── */
function dvAnimateCounter(elId, from, to, dur, prefix, suffix) {
  const el = document.getElementById(elId);
  if (!el) return;
  const start = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  function step(ts) {
    const t = Math.min((ts - start) / dur, 1);
    const val = Math.round(from + (to - from) * easeOut(t));
    const formatted = val >= 1000
      ? (prefix || '') + (val / 1000).toFixed(1) + 'k' + (suffix || '')
      : (prefix || '') + val + (suffix || '');
    el.textContent = formatted;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function dvAnimateRing(pct) {
  const arc = document.getElementById('kpi-ring-arc');
  const label = document.getElementById('kpi-ring-pct');
  if (!arc) return;
  const circ = 113.1; // 2π×18
  const offset = circ - (circ * pct / 100);
  arc.style.transition = 'none';
  arc.setAttribute('stroke-dashoffset', circ);
  void arc.getBoundingClientRect();
  arc.style.transition = 'stroke-dashoffset 900ms cubic-bezier(0.16,1,0.3,1)';
  arc.setAttribute('stroke-dashoffset', offset);
  if (label) {
    let cur = 0;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    function step(ts) {
      const t = Math.min((ts - start) / 900, 1);
      cur = Math.round(pct * easeOut(t));
      label.textContent = cur + '%';
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
}

function dvAnimateSpark() {
  const line = document.getElementById('spark-line');
  if (!line) return;
  line.style.transition = 'none';
  line.setAttribute('stroke-dashoffset', '180');
  void line.getBoundingClientRect();
  line.style.transition = 'stroke-dashoffset 400ms cubic-bezier(0.4,0,0.2,1) 200ms';
  line.setAttribute('stroke-dashoffset', '0');
}

function dvKpiCardsPopulate() {
  // Stagger card entrance
  const cards = document.querySelectorAll('.dv-kpi-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.96)';
    card.style.transition = 'none';
    void card.offsetWidth;
    setTimeout(() => {
      card.style.transition = `opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)`;
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, i * 60);
  });

  // Animate values
  setTimeout(() => {
    dvAnimateCounter('kpi-s-value', 0, 94200, 900, 'R$ ');
    dvAnimateCounter('kpi-k-value', 0, 47, 900, '', '');
    dvAnimateSpark();
    dvAnimateRing(68);
    dvAnimateCounter('kpi-m-value', 0, 21, 900, '', '%');
    dvAnimateCounter('kpi-m-prev', 0, 28, 900, '', '%');

    // Show badges after counter
    setTimeout(() => {
      document.getElementById('kpi-s-badge')?.style.setProperty('opacity', '1');
      document.getElementById('kpi-k-badge')?.style.setProperty('opacity', '1');
    }, 950);
  }, 300);
}

function dvKpiCardsReset() {
  ['kpi-s-value', 'kpi-k-value', 'kpi-r-value', 'kpi-m-value', 'kpi-m-prev'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '—';
  });
  ['kpi-s-badge', 'kpi-k-badge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.opacity = '0';
  });
  const arc = document.getElementById('kpi-ring-arc');
  if (arc) { arc.style.transition = 'none'; arc.setAttribute('stroke-dashoffset', '113.1'); }
  const label = document.getElementById('kpi-ring-pct');
  if (label) label.textContent = '0%';
  const spark = document.getElementById('spark-line');
  if (spark) { spark.style.transition = 'none'; spark.setAttribute('stroke-dashoffset', '180'); }
}

document.getElementById('kpi-cards-play')?.addEventListener('click', dvKpiCardsPopulate);
document.getElementById('kpi-cards-reset')?.addEventListener('click', dvKpiCardsReset);

/* ── Real-time stream (section 36) ── */
let rtInterval = null;
let rtTick = 0;

const RT_EVENTS = [
  { type: 'Contrato', company: 'Acme Corp',         value: '+R$ 4.200', cls: 'dv-td-positive' },
  { type: 'Renovação', company: 'Beta Industries',  value: '+R$ 8.100', cls: 'dv-td-positive' },
  { type: 'Churn',    company: 'Gamma SA',           value: '−R$ 3.100', cls: 'dv-td-negative' },
  { type: 'Upsell',   company: 'Delta Corp',         value: '+R$ 1.500', cls: 'dv-td-positive' },
  { type: 'Trial',    company: 'Epsilon Ltda',       value: 'R$ 0',       cls: '' },
  { type: 'Contrato', company: 'Zeta SA',            value: '+R$ 6.800', cls: 'dv-td-positive' },
  { type: 'Alerta',   company: 'Eta Industries',     value: '−R$ 900',  cls: 'dv-td-negative' },
];

const RT_MRR_VALS   = [94200, 94480, 95200, 92100, 95200, 97400, 98200];
const RT_CONTRACT_VALS = [47, 48, 48, 47, 47, 48, 49];

function rtPulse(dotId) {
  const dot = document.getElementById(dotId);
  if (!dot) return;
  dot.classList.remove('is-pulsing');
  void dot.offsetWidth;
  dot.classList.add('is-pulsing');
  dot.addEventListener('animationend', () => dot.classList.remove('is-pulsing'), { once: true });
}

function rtInsertRow(event) {
  const tbody = document.getElementById('rt-table-body');
  if (!tbody) return;

  // Remove oldest row if > 5
  const rows = tbody.querySelectorAll('.dv-rt-row');
  if (rows.length >= 5) {
    const oldest = rows[rows.length - 1];
    oldest.style.transition = 'opacity 150ms ease';
    oldest.style.opacity = '0';
    setTimeout(() => oldest.remove(), 160);
  }

  const now = new Date();
  const ts = now.toTimeString().slice(0, 8);
  const row = document.createElement('div');
  row.className = 'dv-rt-row';
  row.innerHTML = `<span>${ts}</span><span>${event.type}</span><span>${event.company}</span><span class="${event.cls}">${event.value}</span>`;
  tbody.insertBefore(row, tbody.firstChild);
  void row.offsetWidth;
  requestAnimationFrame(() => row.classList.add('is-visible'));
}

function rtUpdateKpis() {
  const mrrEl = document.getElementById('rt-mrr-val');
  const contractsEl = document.getElementById('rt-contracts-val');
  if (!mrrEl || !contractsEl) return;

  const mrr = RT_MRR_VALS[rtTick % RT_MRR_VALS.length];
  const contracts = RT_CONTRACT_VALS[rtTick % RT_CONTRACT_VALS.length];

  mrrEl.textContent = 'R$ ' + mrr.toLocaleString('pt-BR');
  contractsEl.textContent = contracts;
  rtPulse('rt-pulse-mrr');
  rtPulse('rt-pulse-contracts');
  rtPulse('rt-pulse-feed');

  // Trigger alert on churn-related events
  const event = RT_EVENTS[rtTick % RT_EVENTS.length];
  if (event.type === 'Churn' || event.type === 'Alerta') {
    const alertCard = document.getElementById('rt-alert-card');
    if (alertCard) {
      alertCard.classList.remove('is-alert');
      void alertCard.offsetWidth;
      alertCard.classList.add('is-alert');
    }
  }
}

function rtTick_fn() {
  const event = RT_EVENTS[rtTick % RT_EVENTS.length];
  rtUpdateKpis();
  rtInsertRow(event);
  rtTick++;
}

function rtStart() {
  if (rtInterval) return;
  rtTick_fn(); // immediate first tick
  rtInterval = setInterval(rtTick_fn, 3000);
}

function rtStop() {
  if (rtInterval) { clearInterval(rtInterval); rtInterval = null; }
}

function rtReset() {
  rtStop();
  rtTick = 0;
  const tbody = document.getElementById('rt-table-body');
  if (tbody) tbody.innerHTML = '';
  const mrrEl = document.getElementById('rt-mrr-val');
  const contractsEl = document.getElementById('rt-contracts-val');
  if (mrrEl) mrrEl.textContent = 'R$ 94.200';
  if (contractsEl) contractsEl.textContent = '47';
  document.getElementById('rt-alert-card')?.classList.remove('is-alert');
}

document.getElementById('rt-start')?.addEventListener('click', rtStart);
document.getElementById('rt-stop')?.addEventListener('click', rtStop);
document.getElementById('rt-reset')?.addEventListener('click', rtReset);


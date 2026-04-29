import './tokens/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/sidebar.css';

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

/* ── Sidebar nav config ── */
const NAV_ITEMS = [
  { id: 'sec-cover',    num: '00', label: 'Capa' },
  { id: 'sec-symbol',   num: '01', label: 'Símbolo' },
  { id: 'sec-lockup-h', num: '02', label: 'Lockup Horizontal' },
  { id: 'sec-lockup-v', num: '03', label: 'Lockup Vertical' },
  { id: 'sec-scale',    num: '04', label: 'Escala' },
  { id: 'sec-favicon',  num: '05', label: 'Favicon' },
  { id: 'sec-palette',  num: '06', label: 'Paleta' },
  { id: 'sec-type',     num: '07', label: 'Tipografia' },
  { id: 'sec-spacing',  num: '08', label: 'Espaçamento' },
  { id: 'sec-clear',    num: '09', label: 'Clearspace' },
  { id: 'sec-donts',    num: '10', label: "Don'ts" },
  { id: 'sec-voice',    num: '11', label: 'Voz e Tom' },
  { id: 'sec-apps',        num: '12', label: 'Aplicações' },
  { id: 'sec-components',  num: '13', label: 'Componentes UI' },
];

/* ── Build sidebar HTML ── */
function buildSidebar() {
  const navLinks = NAV_ITEMS.map(item => `
    <a class="sidebar-item" href="#${item.id}" data-target="${item.id}">
      <span class="sidebar-num">${item.num}</span>
      <span class="sidebar-label">${item.label}</span>
    </a>
  `).join('');

  return `
    <aside class="sidebar" id="sidebar" role="navigation" aria-label="Seções do Design System">
      <div class="sidebar-header">
        <span class="sidebar-brand">Orison</span>
        <span class="sidebar-version">Brand System · V 2.0</span>
        <span class="sidebar-count">${NAV_ITEMS.length} seções</span>
      </div>
      <nav class="sidebar-nav">${navLinks}</nav>
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
].join('');

/* ── Sidebar toggle (mobile) ── */
const sidebar        = document.getElementById('sidebar');
const toggleBtn      = document.getElementById('sidebar-toggle');
const overlay        = document.getElementById('sidebar-overlay');

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

/* Close sidebar on nav link click (mobile) */
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

/* ── Scroll animations ── */
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

/* Trigger cover immediately */
setTimeout(() => {
  document.querySelector('.cover')?.classList.add('in-view');
}, 80);

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

/* ── Motion demos (section 13) ── */
document.querySelectorAll('.motion-demo').forEach(demo => {
  demo.addEventListener('click', () => {
    if (demo.classList.contains('is-playing')) return;
    demo.classList.add('is-playing');
    demo.addEventListener('animationend', () => {
      demo.classList.remove('is-playing');
    }, { once: true });
  });
});

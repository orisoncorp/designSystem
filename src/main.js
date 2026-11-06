/* ═══════════════════════════════════════════════════════════════════
   ORISON DESIGN SYSTEM · v4.0.0 — ponto de entrada único

   Monta o site a partir das seções em src/sections/, injeta o sprite do
   logo, constrói o índice e liga os poucos comportamentos da página:
   tema, valores de token gerados, amostras de cor, contraste medido,
   ícones, abas, switch, toast e gráficos. Sem framework.
   ═══════════════════════════════════════════════════════════════════ */

import './tokens/tokens.css';
import './tokens/motion-tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/docs.css';
import './styles/components.css';
import './styles/patterns.css';
import './styles/dataviz.css';
import './styles/sidebar.css';
import './styles/brand.css';

import symbolSprite from './assets/symbol.svg?raw';

/* Seções e ícones carregados por convenção de pasta: adicionar um arquivo
   basta, desde que ele tenha uma entrada em NAV_ITEMS. */
const SECTIONS = import.meta.glob('./sections/*.html', { query: '?raw', import: 'default', eager: true });
const ICONS = Object.fromEntries(
  Object.entries(import.meta.glob('./assets/icons/*.svg', { query: '?raw', import: 'default', eager: true }))
    .map(([path, svg]) => [path.split('/').pop().replace('.svg', ''), svg.replace(/<!--[\s\S]*?-->\s*/, '')])
);

/* ── Índice ── */
const NAV_ITEMS = [
  { id: 'sec-capa',           num: '00', label: 'Capa',                      group: 'inicio' },
  { id: 'sec-como-usar',      num: '01', label: 'Como usar',                 group: 'inicio' },
  { id: 'sec-simbolo',        num: '02', label: 'Símbolo',                   group: 'marca' },
  { id: 'sec-lockups',        num: '03', label: 'Lockups',                   group: 'marca' },
  { id: 'sec-uso',            num: '04', label: 'Proteção e usos',           group: 'marca' },
  { id: 'sec-cor',            num: '05', label: 'Cor',                       group: 'fundamentos' },
  { id: 'sec-tipografia',     num: '06', label: 'Tipografia',                group: 'fundamentos' },
  { id: 'sec-espaco',         num: '07', label: 'Espaço e layout',           group: 'fundamentos' },
  { id: 'sec-forma',          num: '08', label: 'Forma e profundidade',      group: 'fundamentos' },
  { id: 'sec-iconografia',    num: '09', label: 'Iconografia',               group: 'fundamentos' },
  { id: 'sec-acessibilidade', num: '10', label: 'Acessibilidade',            group: 'fundamentos' },
  { id: 'sec-botoes',         num: '11', label: 'Botões',                    group: 'componentes' },
  { id: 'sec-campos',         num: '12', label: 'Campos e seleção',          group: 'componentes' },
  { id: 'sec-feedback',       num: '13', label: 'Tags, alertas e avisos',    group: 'componentes' },
  { id: 'sec-navegacao',      num: '14', label: 'Abas, filtros e navegação', group: 'componentes' },
  { id: 'sec-tabela',         num: '15', label: 'Tabela',                    group: 'componentes' },
  { id: 'sec-semantica',      num: '16', label: 'Semântica operacional',     group: 'padroes' },
  { id: 'sec-bancada',        num: '17', label: 'Bancada de operação',       group: 'padroes' },
  { id: 'sec-dados',          num: '18', label: 'Visualização de dados',     group: 'padroes' },
  { id: 'sec-conteudo',       num: '19', label: 'Texto de interface',        group: 'conteudo' },
  { id: 'sec-recursos',       num: '20', label: 'Tokens e arquivos',         group: 'recursos' },
];

const GROUP_LABELS = {
  inicio: 'Início',
  marca: 'Marca',
  fundamentos: 'Fundamentos',
  componentes: 'Componentes',
  padroes: 'Padrões',
  conteudo: 'Conteúdo',
  recursos: 'Recursos',
};

function buildSidebar() {
  const groups = [];
  NAV_ITEMS.forEach((item) => {
    const last = groups[groups.length - 1];
    if (!last || last.key !== item.group) groups.push({ key: item.group, items: [item] });
    else last.items.push(item);
  });

  const nav = groups.map((g) => `
    <button type="button" class="sidebar-group" data-group="${g.key}" aria-expanded="true" aria-controls="grp-${g.key}">
      <span class="sidebar-group-caret" aria-hidden="true"></span><span>${GROUP_LABELS[g.key]}</span>
      <span class="sidebar-group-count">${g.items.length}</span>
    </button>
    <div class="sidebar-group-items" id="grp-${g.key}">
      ${g.items.map((i) => `<a class="sidebar-item" href="#${i.id}" data-target="${i.id}" data-search="${(i.num + ' ' + i.label).toLowerCase()}"><span class="sidebar-num">${i.num}</span><span>${i.label}</span></a>`).join('')}
    </div>`).join('');

  return `
    <nav class="sidebar" id="sidebar" aria-label="Seções do design system">
      <div class="sidebar-header">
        <a class="sidebar-brand" href="#sec-capa">
          <svg role="img" aria-label="Símbolo Orison"><use href="#symbol-small"/></svg>
          <svg class="wordmark" viewBox="0 -2 398.51 74" role="img" aria-label="Orison"><use href="#wordmark"/></svg>
        </a>
        <span class="sidebar-version">Design System · v4.0.0 · ${NAV_ITEMS.length} seções</span>
        <button type="button" class="theme-toggle" id="theme-toggle" aria-pressed="false">Tema escuro</button>
      </div>
      <div class="sidebar-search">
        <input type="search" id="sidebar-filter" autocomplete="off" placeholder="Filtrar  /" aria-label="Filtrar seções">
      </div>
      <div class="sidebar-nav" id="sidebar-nav">${nav}<p class="sidebar-search-empty">Nenhuma seção corresponde ao filtro.</p></div>
    </nav>
    <div class="sidebar-topbar">
      <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Abrir navegação" aria-expanded="false" aria-controls="sidebar"><span></span><span></span><span></span></button>
      <svg role="img" aria-label="Símbolo Orison"><use href="#symbol-small"/></svg>
    </div>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <div class="toast-region" id="toast-region" aria-live="polite"></div>`;
}

/* ── Montagem ── */
document.body.insertAdjacentHTML('afterbegin', buildSidebar());
document.body.insertAdjacentHTML('afterbegin', symbolSprite);
document.getElementById('app').innerHTML = Object.keys(SECTIONS).sort().map((k) => SECTIONS[k]).join('');

/* Ícones por convenção: <i class="ico" data-icon="nome"></i>. */
function renderIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const svg = ICONS[el.dataset.icon];
    if (!svg) return;
    el.innerHTML = svg.replace('<svg ', '<svg aria-hidden="true" focusable="false" ');
    el.setAttribute('aria-hidden', 'true');
  });
}

/* Grade da iconografia, gerada do próprio catálogo. */
const iconGrid = document.getElementById('icon-grid');
if (iconGrid) {
  iconGrid.innerHTML = Object.keys(ICONS).sort().map((name) => `
    <div class="icon-cell"><span class="icon-sizes"><i class="ico" data-icon="${name}"></i><i class="ico" data-icon="${name}"></i><i class="ico" data-icon="${name}"></i></span><code>${name}</code></div>`).join('');
}
renderIcons();

/* ── Tema ──
   Um conjunto de tokens, dois temas. O tema escolhido vale para a página
   inteira; as seções de marca já nascem escuras. */
const THEME_KEY = 'orison-ds-theme';
const themeBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  else document.documentElement.removeAttribute('data-theme');
  themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
  themeBtn.textContent = theme === 'dark' ? 'Tema claro' : 'Tema escuro';
  localStorage.setItem(THEME_KEY, theme);
  refreshComputed();
}

themeBtn.addEventListener('click', () => applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

/* ── Valores computados ──
   Nada é digitado: valores de token, amostras e contrastes são lidos do
   elemento, que herda o tema do seu escopo. */
const tokenOf = (el, name) => getComputedStyle(el).getPropertyValue(name).trim();

function toHex(color) {
  const probe = document.createElement('span');
  probe.style.color = color;
  document.body.appendChild(probe);
  const rgb = getComputedStyle(probe).color.match(/\d+(\.\d+)?/g)?.slice(0, 3).map(Number) || [0, 0, 0];
  probe.remove();
  return '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
}

function luminance(hex) {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

function ratio(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

function refreshComputed() {
  document.querySelectorAll('[data-token-value]').forEach((el) => {
    const v = tokenOf(el, el.dataset.tokenValue);
    if (v) el.textContent = v;
  });

  document.querySelectorAll('.swatch[data-token]').forEach((sw) => {
    const hex = toHex(tokenOf(sw, sw.dataset.token));
    sw.dataset.hex = hex;
    sw.innerHTML = `<span class="swatch-chip" style="background:var(${sw.dataset.token})"></span>
      <span class="swatch-info"><span class="swatch-name">${sw.dataset.name}</span><span class="swatch-token">${sw.dataset.token}</span><span class="swatch-hex">${hex}</span></span>`;
    sw.setAttribute('aria-label', `${sw.dataset.name}, ${sw.dataset.token}, ${hex}. Copiar token.`);
  });

  document.querySelectorAll('[data-contrast]').forEach((cell) => {
    const [fg, bg, min = '4.5'] = cell.dataset.contrast.split('|');
    const r = ratio(toHex(tokenOf(cell, fg)), toHex(tokenOf(cell, bg)));
    const ok = r >= Number(min);
    cell.innerHTML = `<span class="${ok ? 'pass' : 'fail'}">${r.toFixed(2).replace('.', ',')}:1 ${ok ? '' : '· abaixo de ' + min.replace('.', ',') + ':1'}</span>`;
  });

  drawCharts();
}

/* ── Toast (F07 · T1) ──
   Sucesso some em 5 s, com pausa em hover ou foco; falha fica até fechar. */
const toastRegion = document.getElementById('toast-region');

function toast(message, kind = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${kind === 'danger' ? 'toast-danger' : ''}`;
  el.setAttribute('role', kind === 'danger' ? 'alert' : 'status');
  el.innerHTML = `<i class="ico" data-icon="${kind === 'danger' ? 'falha-fechar' : 'confirmado'}"></i><span>${message}</span>
    <button type="button" class="btn btn-minimal btn-icon" aria-label="Fechar aviso"><i class="ico" data-icon="falha-fechar"></i></button>`;
  renderIcons(el);
  el.querySelector('button').addEventListener('click', () => el.remove());
  toastRegion.appendChild(el);
  if (kind === 'danger') return;
  let timer = setTimeout(() => el.remove(), 5000);
  const pause = () => clearTimeout(timer);
  const resume = () => { timer = setTimeout(() => el.remove(), 5000); };
  el.addEventListener('mouseenter', pause);
  el.addEventListener('mouseleave', resume);
  el.addEventListener('focusin', pause);
  el.addEventListener('focusout', resume);
}

document.querySelectorAll('[data-toast]').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.toast === 'danger') toast('<b>Writeback do SKU-88 falhou.</b> Owner: Operações.', 'danger');
  else toast('Proposta PC-20481 aprovada.');
}));

/* Amostras copiam o token; Alt ou Shift copia o hexadecimal. */
document.querySelectorAll('.swatch[data-token]').forEach((sw) => sw.addEventListener('click', (e) => {
  const value = e.altKey || e.shiftKey ? sw.dataset.hex : `var(${sw.dataset.token})`;
  if (!navigator.clipboard?.writeText) { toast('Cópia indisponível fora de HTTPS', 'danger'); return; }
  navigator.clipboard.writeText(value).then(() => toast(`Copiado: <code>${value}</code>`)).catch(() => toast('Não foi possível copiar', 'danger'));
}));

/* ── Abas com tabindex itinerante (WAI-ARIA) ── */
document.querySelectorAll('[data-tabs]').forEach((list) => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const select = (tab) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.focus();
  };
  tabs.forEach((t) => { t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1; });
  list.addEventListener('click', (e) => { const t = e.target.closest('[role="tab"]'); if (t) select(t); });
  list.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); select(tabs[(i + 1) % tabs.length]); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); select(tabs[(i - 1 + tabs.length) % tabs.length]); }
  });
});

/* ── Switch com rótulo de estado ── */
document.querySelectorAll('[data-switch]').forEach((sw) => sw.addEventListener('click', () => {
  const on = sw.getAttribute('aria-checked') !== 'true';
  sw.setAttribute('aria-checked', String(on));
  const label = sw.parentElement.querySelector('[data-switch-state]');
  if (label) label.textContent = on ? 'ligado' : 'desligado';
}));

/* ── Gráficos (F09) ──
   SVG desenhado dos tokens --data-*; redesenhado quando o tema muda.
   Linha: dica com linha-guia. Barra: dica por barra. Ambos com tabela. */
const MONTHS = ['mai', 'jun', 'jul', 'ago', 'set', 'out'];
const SERIES = [
  { name: 'CD Guarulhos', v: [6.8, 6.4, 5.9, 5.1, 4.2, 3.6] },
  { name: 'CD Campinas', v: [5.2, 5.4, 5.0, 4.9, 4.6, 4.4] },
  { name: 'CD Curitiba', v: [4.1, 4.5, 4.8, 4.4, 4.0, 3.9] },
  { name: 'CD Recife', v: [7.4, 7.1, 7.3, 6.6, 6.1, 5.8] },
];
const BARS = [41.2, 48.9, 52.3, 61.0, 70.4, 94.2];
const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const showTable = {};

function placeTip(fig, tip, e) {
  const box = fig.getBoundingClientRect();
  tip.style.display = 'block';
  tip.style.left = Math.min(e.clientX - box.left + 14, box.width - 200) + 'px';
  tip.style.top = (e.clientY - box.top + 14) + 'px';
}

function lineChart(fig) {
  const W = 640, H = 280, m = { l: 40, r: 150, t: 12, b: 28 }, iw = W - m.l - m.r, ih = H - m.t - m.b;
  const x = (i) => m.l + (i / (MONTHS.length - 1)) * iw, y = (v) => m.t + ih - (v / 8) * ih;
  const col = SERIES.map((_, i) => `var(--data-${i + 1})`);
  let g = '';
  for (let t = 0; t <= 8; t += 2) g += `<line x1="${m.l}" x2="${m.l + iw}" y1="${y(t)}" y2="${y(t)}" stroke="var(--data-grid)"/><text x="${m.l - 8}" y="${y(t) + 4}" text-anchor="end">${t}%</text>`;
  MONTHS.forEach((mo, i) => { g += `<text x="${x(i)}" y="${H - 6}" text-anchor="middle">${mo}</text>`; });
  SERIES.forEach((s, i) => {
    const pts = s.v.map((v, k) => `${x(k)},${y(v)}`).join(' ');
    g += `<polyline points="${pts}" fill="none" stroke="var(--color-surface)" stroke-width="5" stroke-linejoin="round"/><polyline points="${pts}" fill="none" stroke="${col[i]}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  });
  const ends = SERIES.map((s, i) => ({ i, y: y(s.v[5]) })).sort((a, b) => a.y - b.y);
  for (let k = 1; k < ends.length; k++) if (ends[k].y - ends[k - 1].y < 18) ends[k].y = ends[k - 1].y + 18;
  ends.forEach((e) => { const s = SERIES[e.i]; g += `<circle cx="${x(5)}" cy="${y(s.v[5])}" r="4" fill="${col[e.i]}" stroke="var(--color-surface)" stroke-width="2"/><text x="${x(5) + 10}" y="${e.y + 4}" class="label-strong">${s.name} ${fmt(s.v[5])}%</text>`; });
  g += `<line class="xh" x1="0" x2="0" y1="${m.t}" y2="${m.t + ih}" stroke="var(--data-axis)" stroke-dasharray="3 3" visibility="hidden"/><g class="xhdots"></g><rect class="hit" x="${m.l}" y="${m.t}" width="${iw}" height="${ih}" fill="transparent"/>`;
  const legend = `<div class="legend">${SERIES.map((s, i) => `<span><span class="legend-dot" style="background:${col[i]}"></span>${s.name}</span>`).join('')}</div>`;
  fig.querySelector('.chart-body').innerHTML = legend + `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Ruptura de estoque por CD, de maio a outubro de 2026">${g}</svg>`;
  const svg = fig.querySelector('svg'), tip = fig.querySelector('.chart-tip');
  svg.querySelector('.hit').addEventListener('mousemove', (e) => {
    const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    const i = Math.max(0, Math.min(5, Math.round(((p.x - m.l) / iw) * 5)));
    const xh = svg.querySelector('.xh'); xh.setAttribute('x1', x(i)); xh.setAttribute('x2', x(i)); xh.setAttribute('visibility', 'visible');
    svg.querySelector('.xhdots').innerHTML = SERIES.map((s, k) => `<circle cx="${x(i)}" cy="${y(s.v[i])}" r="5" fill="${col[k]}" stroke="var(--color-surface)" stroke-width="2"/>`).join('');
    tip.innerHTML = `<b>${MONTHS[i]}/2026</b>` + SERIES.map((s, k) => ({ s, k })).sort((a, b) => b.s.v[i] - a.s.v[i])
      .map(({ s, k }) => `<div><span><span class="legend-dot" style="background:${col[k]}"></span>${s.name}</span><span class="num">${fmt(s.v[i])}%</span></div>`).join('');
    placeTip(fig, tip, e);
  });
  svg.querySelector('.hit').addEventListener('mouseleave', () => { tip.style.display = 'none'; svg.querySelector('.xh').setAttribute('visibility', 'hidden'); svg.querySelector('.xhdots').innerHTML = ''; });
}

function barChart(fig) {
  const W = 460, H = 280, m = { l: 40, r: 8, t: 22, b: 28 }, iw = W - m.l - m.r, ih = H - m.t - m.b;
  const y = (v) => m.t + ih - (v / 100) * ih, step = iw / BARS.length, bw = step - 16, r = 4;
  let g = '';
  for (let t = 0; t <= 100; t += 25) g += `<line x1="${m.l}" x2="${m.l + iw}" y1="${y(t)}" y2="${y(t)}" stroke="var(--data-grid)"/><text x="${m.l - 8}" y="${y(t) + 4}" text-anchor="end">${t}</text>`;
  BARS.forEach((v, i) => {
    const bx = m.l + i * step + 8, by = y(v), base = m.t + ih;
    g += `<path d="M${bx},${base} V${by + r} Q${bx},${by} ${bx + r},${by} H${bx + bw - r} Q${bx + bw},${by} ${bx + bw},${by + r} V${base} Z" fill="var(--data-1)"/>`;
    g += `<text x="${bx + bw / 2}" y="${H - 6}" text-anchor="middle">${MONTHS[i]}</text>`;
    if (i === BARS.length - 1) g += `<text x="${bx + bw / 2}" y="${by - 6}" text-anchor="middle" class="label-strong">${fmt(v)}</text>`;
    g += `<rect data-i="${i}" x="${m.l + i * step}" y="${m.t}" width="${step}" height="${ih}" fill="transparent"/>`;
  });
  g += `<line x1="${m.l}" x2="${m.l + iw}" y1="${m.t + ih}" y2="${m.t + ih}" stroke="var(--data-axis)"/>`;
  fig.querySelector('.chart-body').innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Valor reconciliado por mês, em milhares de reais">${g}</svg>`;
  const tip = fig.querySelector('.chart-tip');
  fig.querySelectorAll('rect[data-i]').forEach((rc) => {
    rc.addEventListener('mousemove', (e) => { const i = +rc.dataset.i; tip.innerHTML = `<b>${MONTHS[i]}/2026</b><div><span>Reconciliado</span><span class="num">R$ ${fmt(BARS[i])} mil</span></div>`; placeTip(fig, tip, e); });
    rc.addEventListener('mouseleave', () => { tip.style.display = 'none'; });
  });
}

function tableFor(kind) {
  if (kind === 'line') return `<table class="table"><thead><tr><th scope="col">CD</th>${MONTHS.map((mo) => `<th scope="col" class="r">${mo}</th>`).join('')}</tr></thead><tbody>${SERIES.map((s) => `<tr><td>${s.name}</td>${s.v.map((v) => `<td class="r">${fmt(v)}%</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  return `<table class="table"><thead><tr><th scope="col">Mês</th><th scope="col" class="r">R$ mil</th></tr></thead><tbody>${BARS.map((v, i) => `<tr><td>${MONTHS[i]}</td><td class="r">${fmt(v)}</td></tr>`).join('')}</tbody></table>`;
}

function drawCharts() {
  document.querySelectorAll('[data-chart]').forEach((fig) => {
    const kind = fig.dataset.chart;
    const btn = fig.querySelector('[data-chart-table]');
    btn.textContent = showTable[kind] ? 'Ver gráfico' : 'Ver tabela';
    if (showTable[kind]) fig.querySelector('.chart-body').innerHTML = `<div class="table-wrap">${tableFor(kind)}</div>`;
    else if (kind === 'line') lineChart(fig);
    else barChart(fig);
  });
}

document.querySelectorAll('[data-chart-table]').forEach((btn) => btn.addEventListener('click', () => {
  const kind = btn.closest('[data-chart]').dataset.chart;
  showTable[kind] = !showTable[kind];
  drawCharts();
}));

/* ── Índice: gaveta, filtro, grupos, scroll-spy ── */
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle');
const overlay = document.getElementById('sidebar-overlay');
let lastFocus = null;

const drawerIsModal = () => window.innerWidth <= 900 && sidebar.classList.contains('is-open');

function openSidebar() {
  lastFocus = document.activeElement;
  sidebar.classList.add('is-open');
  overlay.classList.add('is-visible');
  toggleBtn.setAttribute('aria-expanded', 'true');
  document.getElementById('sidebar-filter')?.focus();
}

function closeSidebar() {
  const wasOpen = sidebar.classList.contains('is-open');
  sidebar.classList.remove('is-open');
  overlay.classList.remove('is-visible');
  toggleBtn.setAttribute('aria-expanded', 'false');
  if (wasOpen && lastFocus) { lastFocus.focus(); lastFocus = null; }
}

toggleBtn.addEventListener('click', () => (sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar()));
overlay.addEventListener('click', closeSidebar);
sidebar.addEventListener('click', (e) => { if (e.target.closest('.sidebar-item') && window.innerWidth <= 900) closeSidebar(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('is-open')) { closeSidebar(); toggleBtn.focus(); return; }
  if (e.key === 'Tab' && drawerIsModal()) {
    const f = [...sidebar.querySelectorAll('a[href], button, input')].filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
  const tag = document.activeElement?.tagName;
  if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
    e.preventDefault();
    if (window.innerWidth <= 900 && !sidebar.classList.contains('is-open')) openSidebar();
    else document.getElementById('sidebar-filter')?.focus();
  }
});

const filterInput = document.getElementById('sidebar-filter');
const sidebarNav = document.getElementById('sidebar-nav');
filterInput.addEventListener('input', () => {
  const q = filterInput.value.trim().toLowerCase();
  let visible = 0;
  sidebarNav.querySelectorAll('.sidebar-group-items').forEach((box) => {
    let hits = 0;
    box.querySelectorAll('.sidebar-item').forEach((item) => { const hit = !q || item.dataset.search.includes(q); item.hidden = !hit; if (hit) { hits++; visible++; } });
    const header = sidebarNav.querySelector(`[aria-controls="${box.id}"]`);
    if (q) { box.hidden = hits === 0; header.hidden = hits === 0; }
    else { header.hidden = false; box.hidden = header.getAttribute('aria-expanded') === 'false'; }
  });
  sidebarNav.classList.toggle('is-empty', visible === 0);
});

const GROUP_KEY = 'orison-ds-groups';
const groupState = JSON.parse(localStorage.getItem(GROUP_KEY) || '{}');
sidebarNav.querySelectorAll('.sidebar-group').forEach((header) => {
  const box = document.getElementById(header.getAttribute('aria-controls'));
  if (groupState[header.dataset.group] === false) { header.setAttribute('aria-expanded', 'false'); box.hidden = true; }
  header.addEventListener('click', () => {
    const open = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', String(!open));
    box.hidden = open;
    groupState[header.dataset.group] = !open;
    localStorage.setItem(GROUP_KEY, JSON.stringify(groupState));
  });
});

const sidebarItems = document.querySelectorAll('.sidebar-item');
const spy = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  sidebarItems.forEach((el) => {
    const on = el.dataset.target === entry.target.id;
    if (on) {
      el.setAttribute('aria-current', 'page');
      if (window.innerWidth > 900 || sidebar.classList.contains('is-open')) el.scrollIntoView({ block: 'nearest' });
    } else el.removeAttribute('aria-current');
  });
}), { threshold: 0.2, rootMargin: '0px 0px -40% 0px' });
NAV_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) spy.observe(el); });

/* Espaço e Enter operam qualquer role="switch" ou role="checkbox". */
document.addEventListener('keydown', (e) => {
  const el = e.target.closest?.('[role="switch"]:not(button), [role="checkbox"]:not(input)');
  if (el && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); el.click(); }
});

applyTheme(localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light');

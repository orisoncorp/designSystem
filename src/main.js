/* ═══════════════════════════════════════════════════════════════════
   ORISON DESIGN SYSTEM · v4 — ponto de entrada único

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
import { version } from '../package.json';

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
  { id: 'sec-pecas',          num: '05', label: 'Peças de marca',            group: 'marca' },
  { id: 'sec-cor',            num: '06', label: 'Cor',                       group: 'fundamentos' },
  { id: 'sec-tipografia',     num: '07', label: 'Tipografia',                group: 'fundamentos' },
  { id: 'sec-espaco',         num: '08', label: 'Espaço e layout',           group: 'fundamentos' },
  { id: 'sec-forma',          num: '09', label: 'Forma e profundidade',      group: 'fundamentos' },
  { id: 'sec-iconografia',    num: '10', label: 'Iconografia',               group: 'fundamentos' },
  { id: 'sec-acessibilidade', num: '11', label: 'Acessibilidade',            group: 'fundamentos' },
  { id: 'sec-botoes',         num: '12', label: 'Botões',                    group: 'componentes' },
  { id: 'sec-campos',         num: '13', label: 'Campos e seleção',          group: 'componentes' },
  { id: 'sec-feedback',       num: '14', label: 'Avisos e confirmação',      group: 'componentes' },
  { id: 'sec-navegacao',      num: '15', label: 'Abas, filtros e menus',     group: 'componentes' },
  { id: 'sec-tabela',         num: '16', label: 'Tabela',                    group: 'componentes' },
  { id: 'sec-semantica',      num: '17', label: 'Semântica operacional',     group: 'padroes' },
  { id: 'sec-bancada',        num: '18', label: 'Bancada de operação',       group: 'padroes' },
  { id: 'sec-objeto',         num: '19', label: 'Página do objeto',          group: 'padroes' },
  { id: 'sec-dados',          num: '20', label: 'Visualização de dados',     group: 'padroes' },
  { id: 'sec-conteudo',       num: '21', label: 'Texto de interface',        group: 'conteudo' },
  { id: 'sec-recursos',       num: '22', label: 'Tokens e arquivos',         group: 'recursos' },
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
        <span class="sidebar-version">Design System · v${version} · ${NAV_ITEMS.length} seções</span>
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

function toast(message, kind = 'success', { undo } = {}) {
  const el = document.createElement('div');
  el.className = `toast ${kind === 'danger' ? 'toast-danger' : ''}`;
  el.setAttribute('role', kind === 'danger' ? 'alert' : 'status');
  el.innerHTML = `<i class="ico" data-icon="${kind === 'danger' ? 'falha-fechar' : 'confirmado'}"></i><span>${message}</span>
    ${undo ? '<button type="button" class="btn btn-minimal toast-action" data-undo>Desfazer</button>' : ''}
    <button type="button" class="btn btn-minimal btn-icon" aria-label="Fechar aviso" data-close><i class="ico" data-icon="falha-fechar"></i></button>`;
  renderIcons(el);
  el.querySelector('[data-close]').addEventListener('click', () => el.remove());
  el.querySelector('[data-undo]')?.addEventListener('click', () => { el.remove(); undo(); });
  toastRegion.appendChild(el);
  if (kind === 'danger') return;
  // Desfazer (F10 · U1): janela de 10 s, que é o atraso antes do writeback.
  const life = undo ? 10000 : 5000;
  let timer = setTimeout(() => el.remove(), life);
  const pause = () => clearTimeout(timer);
  const resume = () => { timer = setTimeout(() => el.remove(), life); };
  el.addEventListener('mouseenter', pause);
  el.addEventListener('mouseleave', resume);
  el.addEventListener('focusin', pause);
  el.addEventListener('focusout', resume);
}

document.querySelectorAll('[data-toast]').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.toast === 'danger') toast('<b>Writeback do SKU-88 falhou.</b> Owner: Operações.', 'danger');
  else if (b.dataset.toast === 'undo') toast('PC-20481 aprovada. Writeback em 10 s.', 'success', { undo: () => toast('Aprovação desfeita. Nada foi enviado.') });
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
    document.dispatchEvent(new Event('orison:layout'));
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

/* ── Grupo com tabindex itinerante e setas (segmentado e menu) ──
   Só o item ativo entra na ordem de Tab; aplicado em tempo de execução. */
function roving(items, keys, onMove) {
  const [prev, next] = keys;
  items.forEach((it, i) => { it.tabIndex = i === 0 ? 0 : -1; });
  items.forEach((it) => it.addEventListener('keydown', (e) => {
    const i = items.indexOf(it);
    let j = -1;
    if (e.key === next) j = (i + 1) % items.length;
    if (e.key === prev) j = (i - 1 + items.length) % items.length;
    if (e.key === 'Home') j = 0;
    if (e.key === 'End') j = items.length - 1;
    if (j < 0) return;
    e.preventDefault();
    items.forEach((x, k) => { x.tabIndex = k === j ? 0 : -1; });
    items[j].focus();
    onMove?.(items[j]);
  }));
}

/* Controle segmentado (F10 · S1): radiogroup; a seta seleciona. */
document.querySelectorAll('[data-segmented]').forEach((group) => {
  const segs = [...group.querySelectorAll('[role="radio"]')];
  const select = (seg) => {
    segs.forEach((s) => { const on = s === seg; s.setAttribute('aria-checked', String(on)); s.tabIndex = on ? 0 : -1; });
    group.dispatchEvent(new CustomEvent('segment-change', { detail: seg }));
  };
  roving(segs, ['ArrowLeft', 'ArrowRight'], select);
  select(segs.find((s) => s.getAttribute('aria-checked') === 'true') || segs[0]);
  group.addEventListener('click', (e) => { const s = e.target.closest('[role="radio"]'); if (s) select(s); });
});

/* Menu de ações (F10 · M3): setas percorrem os itens. */
document.querySelectorAll('[data-menu]').forEach((menu) => roving([...menu.querySelectorAll('[role="menuitem"]')], ['ArrowUp', 'ArrowDown']));

/* Dica (F10 · D1): Esc fecha até o ponteiro ou o foco saírem. */
document.querySelectorAll('[data-tip]').forEach((wrap) => {
  wrap.addEventListener('keydown', (e) => { if (e.key === 'Escape') wrap.classList.add('is-dismissed'); });
  const reset = () => wrap.classList.remove('is-dismissed');
  wrap.addEventListener('mouseleave', reset);
  wrap.addEventListener('focusout', reset);
});

/* Tag removível (F10 · R2): o foco volta ao campo. */
document.querySelectorAll('[data-multi]').forEach((multi) => multi.addEventListener('click', (e) => {
  const x = e.target.closest('.tag-remove');
  if (!x) return;
  x.closest('.tag').remove();
  multi.querySelector('input')?.focus();
}));

/* Confirmação digitada: o botão só habilita quando o texto confere. */
document.querySelectorAll('[data-typed-confirm]').forEach((input) => {
  const target = input.closest('.dialog').querySelector('[data-typed-target]');
  input.addEventListener('input', () => { target.disabled = input.value.trim() !== input.dataset.typedConfirm; });
});

/* Seleção em massa (F10 · X3): parcial no cabeçalho; filtros viram ações. */
document.querySelectorAll('[data-bulk]').forEach((box) => {
  const all = box.querySelector('[data-bulk-all]');
  const rows = [...box.querySelectorAll('[data-bulk-row]')];
  const sync = () => {
    const n = rows.filter((r) => r.checked).length;
    all.checked = n === rows.length;
    all.indeterminate = n > 0 && n < rows.length;
    rows.forEach((r) => r.closest('tr').setAttribute('aria-selected', String(r.checked)));
    box.querySelector('[data-bulk-bar]').hidden = n === 0;
    box.querySelector('[data-bulk-filters]').hidden = n > 0;
    box.querySelector('[data-bulk-count]').textContent = `${n} ${n === 1 ? 'selecionada' : 'selecionadas'}`;
    box.querySelector('[data-bulk-approve]').lastChild.textContent = `Aprovar ${n}`;
  };
  all.addEventListener('change', () => { rows.forEach((r) => { r.checked = all.checked; }); sync(); });
  rows.forEach((r) => r.addEventListener('change', sync));
  box.querySelector('[data-bulk-clear]').addEventListener('click', () => { rows.forEach((r) => { r.checked = false; }); sync(); all.focus(); });
  rows[0].checked = true; rows[1].checked = true;
  sync();
});

/* ── Peças de marca (F12) ──
   Cada peça tem o tamanho de entrega; aqui ela é reduzida para a largura
   disponível, sem perder a proporção. */
function fitPieces() {
  document.querySelectorAll('[data-piece-w]').forEach((fit) => {
    const scale = fit.clientWidth / Number(fit.dataset.pieceW);
    fit.style.height = `${Number(fit.dataset.pieceH) * scale}px`;
    fit.firstElementChild.style.transform = `scale(${scale})`;
  });
}
fitPieces();
document.fonts?.ready.then(fitPieces);
addEventListener('resize', () => requestAnimationFrame(fitPieces));

/* ── Página do objeto (F11) ── */

/* Grafo em colunas (linhagem L2 e rede aprofundada R2): liga os nós
   depois do layout; refaz ao trocar de aba, de tema ou de largura. */
function drawGraphs() {
  document.querySelectorAll('[data-graph]').forEach((g) => {
    if (!g.offsetParent) return;
    const box = g.getBoundingClientRect();
    const svg = g.querySelector('.graph-edges');
    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
    svg.innerHTML = g.dataset.graph.split(',').map((edge) => {
      const hot = edge.endsWith('*');
      const [a, b] = edge.replace('*', '').split('>').map((k) => g.querySelector(`[data-node="${k}"]`).getBoundingClientRect());
      const x1 = a.right - box.left, y1 = a.top + a.height / 2 - box.top;
      const x2 = b.left - box.left, y2 = b.top + b.height / 2 - box.top, m = (x1 + x2) / 2;
      return `<path class="${hot ? 'is-path' : ''}" d="M${x1} ${y1} C ${m} ${y1} ${m} ${y2} ${x2} ${y2}"/>`;
    }).join('');
  });
}
document.addEventListener('orison:layout', () => requestAnimationFrame(drawGraphs));
addEventListener('resize', () => requestAnimationFrame(drawGraphs));
themeBtn.addEventListener('click', () => requestAnimationFrame(drawGraphs));

/* Seleção na rede: atualiza o painel; no grafo simples, acende as arestas. */
function selectNetNode(net, node) {
  const [name, type, links] = node.dataset.detail.split('|');
  net.querySelector('[data-sel-name]').textContent = name;
  net.querySelector('[data-sel-type]').textContent = type;
  net.querySelector('[data-sel-links]').textContent = links;
  net.querySelectorAll('.net-lines line').forEach((l) => l.classList.toggle('is-hot', [l.dataset.a, l.dataset.b].includes(node.dataset.node)));
}

/* Nó clicável: um selecionado por grafo. */
document.addEventListener('click', (e) => {
  const node = e.target.closest('.graph-node, .net-node');
  if (!node) return;
  const canvas = node.closest('[data-graph], [data-network-canvas]');
  canvas.querySelectorAll('[aria-pressed]').forEach((n) => n.setAttribute('aria-pressed', String(n === node)));
  const net = node.closest('[data-network]');
  if (net) selectNetNode(net, node);
  else node.closest('.object-panel')?.querySelector('[data-graph-detail]')?.replaceChildren(node.dataset.detail);
});

/* Trace: “Ver dados” abre o bruto da etapa. */
document.querySelectorAll('[data-trace-toggle]').forEach((b) => b.addEventListener('click', () => {
  const pre = b.closest('.stack-1').querySelector('.chain-data');
  pre.hidden = !pre.hidden;
  b.setAttribute('aria-expanded', String(!pre.hidden));
  b.textContent = pre.hidden ? 'Ver dados' : 'Ocultar dados';
}));

/* Rede (R3 → R1 / R2): lista primeiro; o segmentado troca a profundidade. */
document.querySelectorAll('[data-network]').forEach((net) => {
  const list = net.querySelector('[data-network-list]');
  const view = net.querySelector('[data-network-view]');
  const caption = net.querySelector('[data-network-caption]');
  const show = (mode) => {
    net.querySelectorAll('[data-network-canvas]').forEach((c) => { c.hidden = c.dataset.networkCanvas !== mode; });
    caption.textContent = mode === 'deep' ? 'Primeiro e segundo grau, com o estado de cada objeto.' : 'Vínculos diretos do SKU-88.';
    const current = net.querySelector(`[data-network-canvas="${mode}"] [aria-pressed="true"]`);
    if (current) selectNetNode(net, current);
    requestAnimationFrame(drawGraphs);
  };
  net.querySelector('[data-network-mode]').addEventListener('segment-change', (e) => show(e.detail.dataset.value));
  net.querySelector('[data-network-open]').addEventListener('click', () => {
    list.hidden = true; view.hidden = false;
    show(net.querySelector('[data-network-mode] [aria-checked="true"]').dataset.value);
    view.querySelector('[role="radio"][aria-checked="true"]').focus();
  });
  net.querySelector('[data-network-close]').addEventListener('click', () => {
    view.hidden = true; list.hidden = false;
    net.querySelector('[data-network-open]').focus();
  });
});

/* Histórico (H1): clicar escolhe um dia; arrastar ou Shift estende a janela. */
document.querySelectorAll('[data-timeline]').forEach((tl) => {
  const bars = [...tl.querySelectorAll('.timeline-bar')];
  const items = [...tl.querySelectorAll('.timeline-list li')];
  const label = tl.querySelector('[data-timeline-label]');
  const days = bars.map((b) => b.getAttribute('aria-label').split(':')[0]);
  let anchor = null;
  let dragging = false;
  const apply = (a, b) => {
    const [lo, hi] = a === null ? [-1, -1] : [Math.min(a, b), Math.max(a, b)];
    tl.classList.toggle('has-window', a !== null);
    bars.forEach((bar, i) => bar.setAttribute('aria-pressed', String(i >= lo && i <= hi)));
    let n = 0;
    items.forEach((li) => { const d = Number(li.dataset.day); li.hidden = a !== null && (d < lo || d > hi); if (!li.hidden) n += 1; });
    label.textContent = a === null ? 'Todos os dias' : `Janela: ${days[lo]}${hi > lo ? ` a ${days[hi]}` : ''} · ${n} ${n === 1 ? 'evento listado' : 'eventos listados'}`;
  };
  bars.forEach((bar, i) => {
    bar.addEventListener('pointerdown', (e) => { if (e.shiftKey && anchor !== null) return; anchor = i; dragging = true; apply(i, i); });
    bar.addEventListener('click', (e) => { if (e.shiftKey && anchor !== null) apply(anchor, i); else if (e.detail === 0) { anchor = i; apply(i, i); } });
  });
  // Ponteiro de toque fica preso ao primeiro alvo; o dia sob o dedo vem da posição.
  tl.querySelector('[data-timeline-hist]').addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const bar = document.elementFromPoint(e.clientX, e.clientY)?.closest('.timeline-bar');
    if (bar && bars.includes(bar)) apply(anchor, bars.indexOf(bar));
  });
  addEventListener('pointerup', () => { dragging = false; });
  tl.querySelector('[data-timeline-clear]').addEventListener('click', () => { anchor = null; apply(null); });
});

/* ── Componentes e estados da F13 ── */

const brl = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const nowHM = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

/* Seções recolhíveis (S1): cada uma abre e fecha sozinha. */
document.querySelectorAll('[data-section-toggle]').forEach((b) => b.addEventListener('click', () => {
  const open = b.getAttribute('aria-expanded') !== 'true';
  b.setAttribute('aria-expanded', String(open));
  document.getElementById(b.getAttribute('aria-controls')).hidden = !open;
}));

/* Facetas no chip (F2): marcar valores atualiza rótulo e estatística. */
document.querySelectorAll('[data-facet]').forEach((f) => {
  const toggle = f.querySelector('[data-facet-toggle]');
  const pop = f.querySelector('.facet-pop');
  const values = [...f.querySelectorAll('.facet-value')];
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    pop.hidden = !open;
  });
  values.forEach((v) => v.addEventListener('click', () => {
    v.setAttribute('aria-pressed', String(v.getAttribute('aria-pressed') !== 'true'));
    const on = values.filter((x) => x.getAttribute('aria-pressed') === 'true');
    const n = on.reduce((t, x) => t + Number(x.dataset.n), 0);
    const sum = on.reduce((t, x) => t + Number(x.dataset.sum), 0);
    f.querySelector('[data-facet-label]').textContent = on.length ? on.map((x) => x.children[1].textContent.toLowerCase()).join(', ') : 'todos';
    toggle.setAttribute('aria-pressed', String(on.length > 0));
    f.querySelector('[data-facet-stats]').textContent = n ? `n ${n} · soma R$ ${(sum / 1000).toFixed(1).replace('.', ',')} mil · média R$ ${(sum / n / 1000).toFixed(1).replace('.', ',')} mil` : 'Nenhum valor marcado';
  }));
});

/* Período (P3): “Personalizado” abre De e Até, com máscara dd/mm/aaaa. */
document.querySelectorAll('[data-period]').forEach((g) => {
  const custom = g.closest('.specimen').querySelector('[data-period-custom]');
  g.addEventListener('segment-change', (e) => { custom.hidden = e.detail.dataset.value !== 'custom'; });
});
document.querySelectorAll('[data-date-mask]').forEach((i) => i.addEventListener('input', () => {
  const d = i.value.replace(/\D/g, '').slice(0, 8);
  i.value = [d.slice(0, 2), d.slice(2, 4), d.slice(4)].filter(Boolean).join('/');
}));

/* Seletor de pessoa: escolher marca a opção. */
document.querySelectorAll('.person-option').forEach((o) => o.addEventListener('click', () => {
  o.parentElement.querySelectorAll('.person-option').forEach((x) => x.setAttribute('aria-selected', String(x === o)));
}));

/* Formulário de action (A1): o impacto acompanha o valor digitado. */
document.querySelectorAll('[data-action-form]').forEach((form) => {
  const input = form.querySelector('[data-action-price]');
  const current = Number(input.dataset.current);
  input.addEventListener('input', () => {
    const v = Number(input.value.replace(/\./g, '').replace(',', '.'));
    if (!Number.isFinite(v) || v <= 0) return;
    const pct = ((v - current) / current) * 100;
    form.querySelector('[data-action-new]').textContent = `R$ ${brl(v)}`;
    form.querySelector('[data-action-delta]').textContent = `${pct >= 0 ? '+' : '−'}${Math.abs(pct).toFixed(1).replace('.', ',')}%`;
  });
  form.addEventListener('submit', () => toast('Proposta criada. Aguardando aprovação.'));
});

/* Dado pessoal (M2): revelar mostra o valor e registra no histórico. */
document.querySelectorAll('[data-reveal]').forEach((b) => b.addEventListener('click', () => {
  const field = b.closest('[data-reveal-field]');
  field.querySelector('[data-masked]').hidden = true;
  field.querySelector('[data-real]').hidden = false;
  b.remove();
  const log = field.closest('.block').querySelector('[data-reveal-log]');
  if (log) log.textContent = `Revelado por você às ${nowHM()}; registrado no histórico do objeto.`;
}));

/* Comentários (K1): publicar acrescenta à conversa; @nome vira menção. */
document.querySelectorAll('[data-comment-form]').forEach((form) => form.addEventListener('submit', () => {
  const input = form.querySelector('[data-comment-input]');
  const text = input.value.trim();
  if (!text) return;
  const list = form.parentElement.querySelector('[data-comments]');
  const el = document.createElement('div');
  el.className = 'comment';
  el.innerHTML = '<span class="avatar">VC</span><div><b>Você</b> <span class="meta num"></span><p></p></div>';
  el.querySelector('.meta').textContent = nowHM();
  const p = el.querySelector('p');
  text.split(/(@\w+)/).forEach((part) => {
    if (part.startsWith('@')) { const m = document.createElement('span'); m.className = 'mention'; m.textContent = part; p.append(m); } else p.append(part);
  });
  list.append(el);
  input.value = '';
  const count = document.querySelector('[data-comment-count]');
  if (count) count.textContent = list.children.length;
}));

/* Anexos (U2): o arquivo escolhido entra na lista. */
document.querySelectorAll('[data-attach-input]').forEach((input) => input.addEventListener('change', () => {
  const box = input.closest('[data-attach]');
  [...input.files].forEach((f) => {
    const row = document.createElement('div');
    row.className = 'file-row';
    row.innerHTML = '<i class="ico" data-icon="evidencia"></i><b></b><span class="meta num"></span>';
    row.querySelector('b').textContent = f.name;
    row.querySelector('.meta').textContent = `${Math.max(1, Math.round(f.size / 1024))} KB`;
    renderIcons(row);
    box.insertBefore(row, input.closest('label'));
  });
  input.value = '';
}));

/* Frescor (D1) e recarga (C3): o número fica, a barra corre, o carimbo atualiza. */
document.querySelectorAll('[data-reload]').forEach((b) => b.addEventListener('click', () => {
  const stamp = b.closest('[data-stamp]');
  const block = stamp.closest('.kpi');
  block.classList.add('is-loading');
  block.setAttribute('aria-busy', 'true');
  setTimeout(() => {
    block.classList.remove('is-loading');
    block.removeAttribute('aria-busy');
    stamp.classList.remove('is-stale');
    stamp.innerHTML = `<i class="ico" data-icon="aguardando"></i>Lido às <span class="num">${nowHM()}</span>`;
    renderIcons(stamp);
  }, 1200);
}));

/* Gaveta (G1): véu, Esc, foco preso e devolvido. */
document.querySelectorAll('[data-drawer-open]').forEach((opener) => opener.addEventListener('click', () => {
  const id = opener.dataset.drawerOpen;
  const drawer = document.getElementById(id);
  const scrim = document.querySelector(`[data-drawer-scrim="${id}"]`);
  const focusables = () => [...drawer.querySelectorAll('button, [href], input, select, textarea')].filter((el) => !el.disabled && el.offsetParent);
  const close = () => {
    drawer.hidden = true; scrim.hidden = true;
    document.removeEventListener('keydown', onKey);
    opener.focus();
  };
  const onKey = (e) => {
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    const f = focusables();
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  };
  drawer.hidden = false; scrim.hidden = false;
  document.addEventListener('keydown', onKey);
  scrim.onclick = close;
  drawer.querySelector('[data-drawer-close]').onclick = close;
  focusables()[0]?.focus();
}));

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

/* A largura do SVG acompanha o bloco: o texto fica em 13 px em qualquer
   tela, em vez de crescer ou encolher com o viewBox. */
const chartWidth = (fig, min) => Math.max(min, Math.round(fig.querySelector('.chart-body').clientWidth || min));

function lineChart(fig) {
  const W = chartWidth(fig, 320), H = 280, m = { l: 40, r: 150, t: 12, b: 28 }, iw = W - m.l - m.r, ih = H - m.t - m.b;
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
  const W = chartWidth(fig, 280), H = 280, m = { l: 40, r: 8, t: 22, b: 28 }, iw = W - m.l - m.r, ih = H - m.t - m.b;
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
let chartWidthSeen = 0;
addEventListener('resize', () => requestAnimationFrame(() => {
  const w = document.querySelector('[data-chart] .chart-body')?.clientWidth || 0;
  if (Math.abs(w - chartWidthSeen) > 8) { chartWidthSeen = w; drawCharts(); }
}));

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

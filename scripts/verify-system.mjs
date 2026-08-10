#!/usr/bin/env node
/**
 * Verifica as invariantes do Orison Design System v3.0.
 *
 * A v2.0 acumulou 301 declarações abaixo de 12px e 287 letter-spacings em px
 * ao longo de dois anos, um arquivo de cada vez, sem que ninguém percebesse.
 * Estas checagens levam menos de um segundo e pegam exatamente essa classe de
 * regressão antes que ela entre.
 *
 *   npm run verify
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'src';
const failures = [];
const notes = [];

/* ── util ── */
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );

const files = walk(SRC);
const css = files.filter((f) => f.endsWith('.css'));
const html = files.filter((f) => f.endsWith('.html'));
const read = (f) => readFileSync(f, 'utf8');

function check(name, hits, hint) {
  if (hits.length) {
    failures.push({ name, hits, hint });
  } else {
    notes.push(name);
  }
}

function scan(fileList, regex, label) {
  const hits = [];
  for (const f of fileList) {
    read(f).split('\n').forEach((line, i) => {
      if (regex.test(line)) hits.push(`${f}:${i + 1}  ${line.trim().slice(0, 84)}`);
    });
  }
  return hits;
}

/* ── 1. Piso tipográfico de 12px ── */
check(
  'Piso de 12px',
  scan([...css, ...html], /font-size:\s*([0-9]|1[01])(\.\d+)?px/),
  'Nada abaixo de --text-label (12px). Se a informação não cabe, ela não pertence àquele bloco.'
);

/* ── 2. Tracking sempre em em ── */
check(
  'Tracking em em',
  scan([...css, ...html], /letter-spacing:\s*[0-9.]+px/),
  '3px vale 43% do em a 7px e 9% a 32px. Use os tokens --tracking-*.'
);

/* ── 3. Crimson nunca como cor de texto ── */
check(
  'Crimson não é cor de texto',
  scan([...css, ...html], /(?:^|[;\s"])color:\s*var\(--color-crimson\)(?!-)/),
  '#8B1A1A mede 2,09:1 sobre escuro. Use --color-crimson-text.'
);

/* ── 4. --color-midnight é superfície, nunca tinta ── */
check(
  'Midnight não é tinta',
  scan([...css, ...html], /color:\s*var\(--color-midnight\)/),
  'É token de superfície e inverte sob [data-ground="light"]. Use --text-primary.'
);

/* ── 5. Sem raio em superfície ── */
{
  const allowed = /border-radius:\s*(0|50%|9999px|999px)/;
  const hits = [];
  for (const f of css) {
    read(f).split('\n').forEach((line, i) => {
      if (/border-radius:/.test(line) && !allowed.test(line))
        hits.push(`${f}:${i + 1}  ${line.trim().slice(0, 84)}`);
    });
  }
  check('Sem raio em superfície', hits, 'Só 0 (superfície) e 50%/9999px (marca circular).');
}

/* ── 6. Todo token de motion é consumido ── */
{
  const tokenFile = read('src/tokens/motion-tokens.css');
  const root = tokenFile.slice(tokenFile.indexOf(':root'), tokenFile.indexOf('\n}'));
  const declared = [...root.matchAll(/(--motion-[\w-]+):/g)].map((m) => m[1]);
  const body = [...css, ...html, 'src/main.js'].map(read).join('\n');
  const unused = declared.filter(
    (t) => !body.includes(`var(${t})`) && !body.includes(`'${t}'`) && !body.includes(`"${t}"`)
  );
  check(
    'Tokens de motion consumidos',
    unused.map((t) => `${t} — declarado e nunca lido`),
    'Um token que ninguém lê é documentação, não sistema. Consuma ou remova.'
  );
}

/* ── 7. Contraste de texto ── */
{
  const DARK = {
    'color-black': '#0a0a0a', 'color-midnight': '#111113', 'color-surface': '#0d0d0f',
    'color-slate': '#3a3a3a', 'color-border': '#2e2e2e', 'color-gray': '#5a5a5a',
    'color-subtle': '#484848', 'color-crimson': '#8B1A1A', 'color-red': '#A52020',
    'color-offwhite': '#e8e6e1', 'color-crimson-text': '#F06070', 'color-focus': '#F06070',
    'text-primary': '#f7f5f0', 'text-body': '#edeae4', 'text-secondary': '#d4d2cd',
    'text-muted': '#bcbab5', 'color-positive-tx': '#7ddfa7', 'color-positive-br': '#3AAA62',
    'color-negative-md': '#C0392B', 'color-alert-md': '#C0622B', 'color-positive-md': '#27834A',
  };
  const LIGHT = {
    ...DARK, 'text-primary': '#0d0d0f', 'text-body': '#1f1f22',
    'text-secondary': '#3a3a3a', 'text-muted': '#5a5a5a',
    'color-crimson-text': '#8B1A1A', 'color-focus': '#8B1A1A',
  };
  const lum = (h) => {
    const c = [1, 3, 5]
      .map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
      .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const ratio = (a, b) => {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const LIGHT_SEL = /(-light\b|--light\b|\.lm-light|panel-light|ground-light)/;

  const hits = [];
  for (const f of css) {
    const src = read(f);
    for (const m of src.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const sel = m[1].trim().replace(/\s+/g, ' ');
      const cm = m[2].match(/(?:^|[;\s])color:\s*var\(--([a-z0-9-]+)\)/);
      if (!cm) continue;
      const onLight = LIGHT_SEL.test(sel);
      const fg = (onLight ? LIGHT : DARK)[cm[1]];
      if (!fg) continue;
      const bgs = onLight ? ['#e8e6e1', '#edebe6'] : ['#0a0a0a', '#111113', '#0d0d0f'];
      const worst = Math.min(...bgs.map((b) => ratio(fg, b)));
      if (worst < 4.5)
        hits.push(`${f}  ${sel.slice(0, 48)}  --${cm[1]} = ${worst.toFixed(2)}:1`);
    }
  }
  check('Contraste de texto ≥ 4.5:1', hits, 'Seletores -light medem contra off-white, não contra a chapa escura.');
}

/* ── 8. Semântica ── */
{
  const hits = [];
  let h1 = 0;
  for (const f of html) {
    const src = read(f).replace(/<!--[\s\S]*?-->/g, '');
    h1 += (src.match(/<h1[\s>]/g) || []).length;
    const hasSection = /<section\b/.test(src);
    if (hasSection && !/aria-labelledby=/.test(src))
      hits.push(`${f} — <section> sem aria-labelledby`);
    for (const m of src.matchAll(/<svg\b([^>]*)>/g))
      if (!/aria-label|aria-hidden|role="presentation"|role="img"/.test(m[1]))
        hits.push(`${f} — <svg> sem rótulo nem aria-hidden`);
  }
  if (h1 !== 1) hits.push(`${h1} elementos <h1> — deve haver exatamente 1`);
  check('Semântica', hits, 'Um <h1>, aria-labelledby por seção, todo SVG rotulado ou oculto.');
}

/* ── 9. Sem tabindex="-1" em espécime ── */
check(
  'Sem tabindex negativo em espécime',
  scan(html, /tabindex="-1"/),
  'Foi isso que tornou as regras :focus-visible da v2.0 código morto.'
);

/* ── Relatório ── */
const pad = (s) => s.padEnd(34);
console.log('\n  ORISON DESIGN SYSTEM — verificação de invariantes\n');
for (const n of notes) console.log(`  \x1b[32m✓\x1b[0m ${pad(n)}`);
for (const f of failures) {
  console.log(`  \x1b[31m✗\x1b[0m ${pad(f.name)} ${f.hits.length} ocorrência(s)`);
  console.log(`      \x1b[2m${f.hint}\x1b[0m`);
  for (const h of f.hits.slice(0, 8)) console.log(`      ${h}`);
  if (f.hits.length > 8) console.log(`      … e mais ${f.hits.length - 8}`);
}

if (failures.length) {
  console.log(`\n  \x1b[31m${failures.length} invariante(s) violada(s)\x1b[0m\n`);
  process.exit(1);
}
console.log(`\n  \x1b[32m${notes.length} invariantes íntegras\x1b[0m\n`);

#!/usr/bin/env node
/**
 * Verifica as invariantes do Orison Design System v4.0.
 *
 * Cada checagem guarda uma decisão aprovada nas rodadas F01–F09
 * (docs/fusao-palantir.md) ou um defeito que já custou um refactor.
 * Leva menos de um segundo e imprime arquivo:linha de cada violação.
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
const js = ['src/main.js'];
const read = (f) => readFileSync(f, 'utf8');
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' ')).replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));

function check(name, hits, hint) {
  if (hits.length) failures.push({ name, hits, hint });
  else notes.push(name);
}

function scan(fileList, regex) {
  const hits = [];
  for (const f of fileList) {
    stripComments(read(f)).split('\n').forEach((line, i) => {
      if (regex.test(line)) hits.push(`${f}:${i + 1}  ${line.trim().slice(0, 84)}`);
    });
  }
  return hits;
}

/* ── 1. Piso de 12 px ── */
check(
  'Piso de 12px',
  scan([...css, ...html, ...js], /font-size:\s*([0-9]|1[01])(\.\d+)?px/),
  'Nenhum texto abaixo de 12px (F02).'
);

/* ── 2. Tracking em em ── */
check(
  'Tracking em em',
  scan([...css, ...html], /letter-spacing:\s*-?[0-9.]+px/),
  'letter-spacing sempre em em: px não escala com o corpo.'
);

/* ── 3. Crimson é identidade ── */
{
  const allowed = (f) => f.endsWith('brand.css') || f.endsWith('tokens.css') || /sections\/0[0-4]-/.test(f) || /sections\/05-cor/.test(f);
  check(
    'Crimson só na marca',
    scan([...css, ...html, ...js].filter((f) => !allowed(f)), /--color-crimson/),
    'Crimson não marca ação, erro, risco, dado nem texto (F01, DESIGN.md).'
  );
}

/* ── 4. Cor só por token ── */
{
  const allowed = (f) => f.endsWith('tokens.css') || f.endsWith('brand.css');
  check(
    'Cor só por token',
    scan([...css, ...html].filter((f) => !allowed(f)), /#[0-9a-fA-F]{3,8}\b(?![\w-])/),
    'Hexadecimal só em tokens.css (e nos palcos fixos de brand.css). Use var(--token).'
  );
}

/* ── 5. Raio só de controle ── */
{
  const ok = /^(0|0px|3px|4px|50%|9999px|inherit|var\(--radius-[a-z]+\)|var\(--data-bar-radius\))$/;
  const hits = [];
  for (const f of [...css, ...html]) {
    stripComments(read(f)).split('\n').forEach((line, i) => {
      for (const m of line.matchAll(/border-radius:\s*([^;"]+)/g)) {
        const vals = m[1].trim().split(/\s+/);
        if (!vals.every((v) => ok.test(v))) hits.push(`${f}:${i + 1}  ${line.trim().slice(0, 84)}`);
      }
    });
  }
  check('Raio só de controle', hits, 'Superfície 0; controle 4px; tag 3px; marca circular 9999px/50% (F04).');
}

/* ── 6. Tokens de motion consumidos ── */
{
  const tokenFile = read('src/tokens/motion-tokens.css');
  const declared = [...tokenFile.slice(tokenFile.indexOf(':root'), tokenFile.indexOf('\n}')).matchAll(/(--motion-[\w-]+):/g)].map((m) => m[1]);
  const body = [...css.filter((f) => !f.endsWith('motion-tokens.css')), ...html, ...js].map(read).join('\n');
  check(
    'Tokens de motion consumidos',
    declared.filter((t) => !body.includes(`var(${t})`)).map((t) => `${t} — declarado e nunca lido`),
    'Um token que ninguém lê é documentação, não sistema.'
  );
}

/* ── 7. Contraste dos tokens nos dois temas ──
   Mede os pares que a norma promete, a partir de tokens.css. */
{
  const src = stripComments(read('src/tokens/tokens.css'));
  const block = (start) => { const i = src.indexOf(start); return src.slice(i, src.indexOf('\n}', i)); };
  const parse = (b) => Object.fromEntries([...b.matchAll(/(--[\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)].map((m) => [m[1], m[2].toLowerCase()]));
  // Tokens que apontam para outro token: var() resolve onde é declarado,
  // então o bloco escuro precisa redeclará-los (senão um trecho escuro dentro
  // de página clara herda o valor claro).
  const refs = (b) => Object.fromEntries([...b.matchAll(/(--[\w-]+):\s*var\((--[\w-]+)\)\s*;/g)].map((m) => [m[1], m[2]]));
  const lightBlock = block(':root {');
  const darkBlock = block("[data-theme='dark'] {");
  const lightRefs = refs(lightBlock);
  const darkRefs = refs(darkBlock);
  const light = parse(lightBlock);
  const dark = { ...light, ...parse(darkBlock) };
  for (const [name, target] of Object.entries(lightRefs)) if (light[target]) light[name] = light[target];
  for (const [name, target] of Object.entries(darkRefs)) if (dark[target]) dark[name] = dark[target];
  const lum = (h) => { const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const PAIRS = [
    ['--text-primary', '--color-canvas', 4.5], ['--text-primary', '--color-surface', 4.5], ['--text-primary', '--color-raised', 4.5],
    ['--text-muted', '--color-canvas', 4.5], ['--text-muted', '--color-surface', 4.5], ['--text-muted', '--color-raised', 4.5],
    ['--color-action-fg', '--color-action', 4.5], ['--color-action-fg', '--color-action-hover', 4.5], ['--color-action-fg', '--color-action-active', 4.5],
    ['--color-action-fg', '--color-danger', 4.5], ['--color-action-fg', '--color-danger-hover', 4.5],
    ['--color-link', '--color-surface', 4.5], ['--color-link', '--color-selected', 4.5],
    ['--text-success', '--bg-success', 4.5], ['--text-warning', '--bg-warning', 4.5], ['--text-danger', '--bg-danger', 4.5],
    ['--text-info', '--bg-info', 4.5], ['--text-muted', '--color-neutral-fill', 4.5],
    ['--evidence-env-text', '--evidence-env-bg', 4.5], ['--color-nav-text', '--color-nav', 4.5], ['--color-nav-fg', '--color-nav-active', 4.5],
    ['--color-control', '--color-surface', 3], ['--color-focus', '--color-canvas', 3], ['--color-focus', '--color-surface', 3],
  ];
  PAIRS.push(['--risk-fill-fg', '--risk-fill', 4.5]);
  const hits = Object.keys(lightRefs).filter((n) => !darkRefs[n] && !(n in parse(darkBlock))).map((n) => `escuro: ${n} usa var() e não é redeclarado no tema escuro`);
  for (const [theme, t] of [['claro', light], ['escuro', dark]]) {
    for (const [fg, bg, min] of PAIRS) {
      if (!t[fg] || !t[bg]) { hits.push(`${theme}: ${fg} ou ${bg} sem valor hexadecimal`); continue; }
      const r = ratio(t[fg], t[bg]);
      if (r < min) hits.push(`${theme}: ${fg} sobre ${bg} = ${r.toFixed(2)}:1 (mínimo ${min}:1)`);
    }
  }
  check('Contraste dos tokens', hits, 'Texto ≥ 4,5:1; borda de controle e foco ≥ 3:1, nos dois temas.');
}

/* ── 8. Semântica ── */
{
  const hits = [];
  let h1 = 0;
  for (const f of html) {
    const src = stripComments(read(f));
    h1 += (src.match(/<h1[\s>]/g) || []).length;
    for (const m of src.matchAll(/<section\b([^>]*)>/g))
      if (!/aria-labelledby=/.test(m[1])) hits.push(`${f} — <section> sem aria-labelledby`);
    for (const m of src.matchAll(/<svg\b([^>]*)>/g))
      if (!/aria-label|aria-hidden|role="presentation"/.test(m[1])) hits.push(`${f} — <svg> sem rótulo nem aria-hidden`);
  }
  if (h1 !== 1) hits.push(`${h1} elementos <h1> — deve haver exatamente 1`);
  check('Semântica', hits, 'Um <h1>, aria-labelledby por seção, todo SVG rotulado ou oculto.');
}

/* ── 9. Sem tabindex negativo no markup ──
   O tabindex itinerante das abas é aplicado em tempo de execução. */
check(
  'Sem tabindex negativo no markup',
  scan(html, /tabindex="-1"/),
  'Foi isso que tornou as regras :focus-visible da v2.0 código morto.'
);

/* ── 10. Sem peso leve nem Cormorant ── */
check(
  'Sem peso 300 nem Cormorant',
  scan([...css, ...html, ...js, 'index.html'], /font-weight:\s*300\b|Cormorant/),
  'Peso 300 e Cormorant saíram do sistema (F02).'
);

/* ── Relatório ── */
const pad = (s) => s.padEnd(34);
console.log('\n  ORISON DESIGN SYSTEM v4 — verificação de invariantes\n');
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

/**
 * Exporta src/tokens/tokens.css para tokens/orison.tokens.json no formato
 * DTCG 2025.10 (Design Tokens Community Group, Format e Color Modules).
 *
 * O tema claro é o conjunto base; o escuro vai em $extensions, com os
 * mesmos nomes. Valores compostos (sombras, rgba, referências var())
 * saem em $extensions["org.orison.css-raw"] para não violar o schema.
 *
 * Uso: npm run tokens:export
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { version } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const src = readFileSync(join(root, 'src/tokens/tokens.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

const block = (start) => { const i = src.indexOf(start); return src.slice(i, src.indexOf('\n}', i)); };
const parse = (b) => Object.fromEntries([...b.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
const light = parse(block(':root'));
const dark = parse(block("[data-theme='dark'] {"));

function color(hex) {
  const h = hex.replace('#', '');
  const comps = [0, 2, 4].map((i) => Math.round((parseInt(h.slice(i, i + 2), 16) / 255) * 1e4) / 1e4);
  return { colorSpace: 'srgb', components: comps, hex: `#${h.toLowerCase()}` };
}

function toToken(value) {
  if (/^#[0-9a-fA-F]{6}$/.test(value)) return { $type: 'color', $value: color(value) };
  const px = value.match(/^(-?\d*\.?\d+)px$/);
  if (px) return { $type: 'dimension', $value: { value: Number(px[1]), unit: 'px' } };
  const ms = value.match(/^(\d*\.?\d+)(ms|s)$/);
  if (ms) return { $type: 'duration', $value: { value: Number(ms[1]), unit: ms[2] } };
  if (/^\d{3}$/.test(value)) return { $type: 'fontWeight', $value: Number(value) };
  if (/^-?\d*\.?\d+$/.test(value)) return { $type: 'number', $value: Number(value) };
  if (/^'.+'|system-ui|monospace/.test(value)) return { $type: 'fontFamily', $value: value.split(',').map((s) => s.trim().replace(/^'|'$/g, '')) };
  return null;   // composto (sombra, rgba, var): vai para $extensions
}

const raw = {};
const out = { $description: `Orison Design System v${version} · gerado de src/tokens/tokens.css · tema claro como base; escuro em $extensions["org.orison.theme.dark"]` };
for (const [name, value] of Object.entries(light)) {
  if (name === 'color-scheme') continue;
  const [group, ...rest] = name.split('-');
  const key = rest.join('-') || group;
  out[group] ??= {};
  const t = toToken(value);
  if (!t) {
    raw[name] = dark[name] && dark[name] !== value ? { light: value, dark: dark[name] } : value;
    continue;
  }
  if (dark[name] && dark[name] !== value) {
    const d = toToken(dark[name]);
    t.$extensions = { 'org.orison.theme.dark': d ? d.$value : dark[name] };
  }
  out[group][key] = t;
}

for (const g of Object.keys(out)) if (g !== '$description' && !Object.keys(out[g]).length) delete out[g];
out.$extensions = { 'org.orison.css-raw': raw };
mkdirSync(join(root, 'tokens'), { recursive: true });
writeFileSync(join(root, 'tokens/orison.tokens.json'), JSON.stringify(out, null, 2) + '\n');
console.log('Tokens exportados para tokens/orison.tokens.json');

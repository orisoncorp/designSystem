/**
 * Exports design tokens from tokens.css to tokens.json
 * Usage: node scripts/export-tokens.js
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensPath = join(__dirname, '../src/tokens/tokens.css');
const outputPath = join(__dirname, '../src/tokens/tokens.json');

const css = readFileSync(tokensPath, 'utf8');
const tokens = {};

const varRegex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;
let match;

while ((match = varRegex.exec(css)) !== null) {
  const [, name, value] = match;
  const parts = name.split('-');
  const category = parts[0];
  const key = parts.slice(1).join('-');

  if (!tokens[category]) tokens[category] = {};
  tokens[category][key] = value.trim();
}

writeFileSync(outputPath, JSON.stringify(tokens, null, 2));
console.log(`Tokens exported to ${outputPath}`);

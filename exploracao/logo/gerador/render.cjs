const { chromium } = require('/home/nobelhenrique/Palantir/piloto/frontend/node_modules/playwright-core');
const fs = require('fs');
(async () => {
  const q = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  const p = await b.newPage();
  for (const it of q) {
    await p.setViewportSize({ width: it.w, height: it.h });
    await p.setContent(`<html><body style="margin:0;background:transparent">${fs.readFileSync(it.svg, 'utf8')}</body></html>`);
    await p.screenshot({ path: it.png, omitBackground: true, clip: { x: 0, y: 0, width: it.w, height: it.h } });
    fs.unlinkSync(it.svg);
  }
  await b.close();
  console.log('rendered', q.length);
})().catch(e => { console.error(e); process.exit(1); });

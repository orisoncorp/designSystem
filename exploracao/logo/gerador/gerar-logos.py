"""Gera os arquivos finais do logo Orison v2 (D2 neutro e S2 crimson) em SVG e PNG."""
import math, os, sys
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen

FONT, OUT = sys.argv[1], sys.argv[2]
fmt = lambda v: ('%.3f' % v).rstrip('0').rstrip('.')

# ── tipografia ──────────────────────────────────────────────────────────────
_cache = {}
def instance(w):
    if w not in _cache:
        f = instantiateVariableFont(TTFont(FONT), {"wght": w})
        blob = hb.Blob.from_file_path(FONT); face = hb.Face(blob); hf = hb.Font(face)
        hf.set_variations({"wght": w})
        _cache[w] = (f, f.getGlyphSet(), hf)
    return _cache[w]

CAP = 697  # cap height (OS/2) em unidades da fonte

# Espaçamento óptico do wordmark (unidades da fonte, somado ao tracking de .1em).
# Redonda×reta e redonda×redonda pedem menos ar; a perna aberta do R também.
OPTICAL = {"OR": -8, "RI": -6, "IS": -4, "SO": -6, "ON": -8}

def layout(text, wght, track_em, optical=None):
    """Retorna [(d, x)] em unidades da fonte (y para cima), xmin e xmax de tinta."""
    f, gs, hf = instance(wght)
    buf = hb.Buffer(); buf.add_str(text); buf.guess_segment_properties()
    hb.shape(hf, buf, {"kern": True})
    order = f.getGlyphOrder()
    x = 0; items = []; xmin = None; xmax = 0
    for i, (info, pos) in enumerate(zip(buf.glyph_infos, buf.glyph_positions)):
        name = order[info.codepoint]
        pen = SVGPathPen(gs, ntos=fmt); gs[name].draw(pen)
        bp = BoundsPen(gs); gs[name].draw(bp)
        if bp.bounds:
            gx0, _, gx1, _ = bp.bounds
            xmin = x + gx0 if xmin is None else xmin
            xmax = x + gx1
            items.append((pen.getCommands(), x))
        adv = pos.x_advance + track_em * 1000
        if optical and i + 1 < len(text):
            adv += optical.get(text[i:i + 2], 0)
        x += adv
    return items, xmin, xmax

def text_group(text, wght, track_em, cap_px, x_left, baseline, color, optical=None):
    """Desenha o texto com a tinta começando em x_left; devolve (svg, largura em px)."""
    k = cap_px / CAP
    items, x0, x1 = layout(text, wght, track_em, optical)
    ox = x_left - x0 * k
    paths = ''.join(f'<path transform="matrix({fmt(k)} 0 0 {fmt(-k)} {fmt(ox + x * k)} {fmt(baseline)})" d="{d}"/>'
                    for d, x in items)
    return f'<g fill="{color}">{paths}</g>', (x1 - x0) * k

def text_width(text, wght, track_em, cap_px, optical=None):
    _, x0, x1 = layout(text, wght, track_em, optical)
    return (x1 - x0) * cap_px / CAP

WORD = dict(text="ORISON", wght=600, track_em=0.10, optical=OPTICAL)
DESC = dict(text="AI INFRASTRUCTURE", wght=500, track_em=0.30)

# ── símbolos (caixa 120×120, centro 60,60) ──────────────────────────────────
def annulus_halves(r_in, r_out, h, color):
    """Anel cortado na vertical: as duas metades com borda reta em x = 60 ± h."""
    def half(sx):
        yo = math.sqrt(r_out**2 - h**2); yi = math.sqrt(r_in**2 - h**2)
        x = 60 + sx * h
        sweep_o, sweep_i = (1, 0) if sx > 0 else (0, 1)
        # cada metade cobre menos de 180°: large-arc = 0
        return (f'M{fmt(x)} {fmt(60-yo)} A{fmt(r_out)} {fmt(r_out)} 0 0 {sweep_o} {fmt(x)} {fmt(60+yo)} '
                f'L{fmt(x)} {fmt(60+yi)} A{fmt(r_in)} {fmt(r_in)} 0 0 {sweep_i} {fmt(x)} {fmt(60-yi)} Z')
    return f'<path fill="{color}" d="{half(1)} {half(-1)}"/>'

def ring(r, sw, color):
    return f'<circle cx="60" cy="60" r="{fmt(r)}" fill="none" stroke="{color}" stroke-width="{fmt(sw)}"/>'

def bar(w, y0, y1, color):
    return f'<rect x="{fmt(60-w/2)}" y="{fmt(y0)}" width="{fmt(w)}" height="{fmt(y1-y0)}" fill="{color}"/>'

# D2 · Lâmina. t = espessura; vão = t/2 de cada lado da linha.
def d2(mark, size='full', accent=None):
    a = accent or mark
    if size == 'full':      # ≥ 48 px
        t, ro, ri = 5, 46, 28.4
    elif size == 'small':   # 24–48 px
        t, ro, ri = 8, 44, 24
    else:                   # favicon ≤ 24 px: sem anel interno
        t, ro, ri = 12, 44, None
    h = t / 2 + t / 2       # meia linha + vão
    out = annulus_halves(ro - t/2, ro + t/2, h, mark)
    if ri: out += annulus_halves(ri - t/2, ri + t/2, h, mark)
    return out + bar(t, 60 - ro - t/2, 60 + ro + t/2, a)

# S2 · logo antigo atualizado: anéis inteiros com o mesmo peso, linha crimson no eixo.
CRIMSON = '#8B1A1A'
def s2(mark, size='full'):
    if size == 'full':
        t, ro, ri = 4.5, 46, 29
    elif size == 'small':
        t, ro, ri = 8, 44, 24
    else:
        t, ro, ri = 12, 44, None
    out = ring(ro, t, mark)
    if ri: out += ring(ri, t, mark)
    return out + bar(t, 60 - ro - t/2, 60 + ro + t/2, CRIMSON)

def place(sym_svg, cx, cy, size):
    k = size / 120
    return f'<g transform="translate({fmt(cx - size/2)} {fmt(cy - size/2)}) scale({fmt(k)})">{sym_svg}</g>'

# ── composições ────────────────────────────────────────────────────────────
def svg_doc(w, h, body, bg=None):
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
            f'{rect}{body}</svg>')

def lockup_h(symfn, mark, W, H, S, bg=None):
    cap = 0.38 * S; gap = 0.40 * S
    ww = text_width(cap_px=cap, **WORD)
    x0 = (W - (S + gap + ww)) / 2
    body = place(symfn(mark), x0 + S/2, H/2, S)
    g, _ = text_group(cap_px=cap, x_left=x0 + S + gap, baseline=H/2 + cap/2, color=mark, **WORD)
    return svg_doc(W, H, body + g, bg)

def lockup_v(symfn, mark, W, H, S, bg=None, desc=None):
    ww = 1.5 * S; cap = ww / text_width(cap_px=1, **WORD); gap = 0.28 * S
    total = S + gap + cap
    dcap = cap * 0.22; dgap = cap * 0.9
    if desc: total += dgap + dcap
    y0 = (H - total) / 2
    body = place(symfn(mark), W/2, y0 + S/2, S)
    g, wpx = text_group(cap_px=cap, x_left=(W - ww)/2, baseline=y0 + S + gap + cap, color=mark, **WORD)
    body += g
    if desc:
        dw = text_width(cap_px=dcap, **DESC)
        dg, _ = text_group(cap_px=dcap, x_left=(W - dw)/2, baseline=y0 + S + gap + cap + dgap + dcap,
                           color=desc, **DESC)
        body += dg
    return svg_doc(W, H, body, bg)

def symbol_sq(symfn, mark, N, bg=None, frac=0.8, size='full'):
    return svg_doc(N, N, place(symfn(mark, size), N/2, N/2, N*frac), bg)

def symbol_master(symfn, mark, size='full'):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">{symfn(mark, size)}</svg>'

# ── exportação ─────────────────────────────────────────────────────────────
import json
QUEUE = []
def png(svg, path, w, h):
    src = path[:-4] + '.render.svg'
    open(src, 'w').write(svg)
    QUEUE.append({"svg": src, "png": path, "w": w, "h": h})

BG = {'black': '#0a0a0a', 'midnight': '#111113', 'white': '#e8e6e1'}
INK = {'black': '#f7f5f0', 'midnight': '#f7f5f0', 'white': '#0a0a0a'}
DESC_INK = {'black': '#9a9994', 'midnight': '#9a9994', 'white': '#5c5b57'}

def build(set_dir, symfn):
    os.makedirs(f'{set_dir}/svg', exist_ok=True)
    w = lambda name, s: open(f'{set_dir}/svg/{name}', 'w').write(s)
    # mestres vetoriais (fundo transparente)
    for tone, ink in (('white', '#f7f5f0'), ('black', '#0a0a0a')):
        w(f'symbol-{tone}.svg', symbol_master(symfn, ink))
        w(f'symbol-small-{tone}.svg', symbol_master(symfn, ink, 'small'))
        w(f'favicon-{tone}.svg', symbol_master(symfn, ink, 'favicon'))
        w(f'lockup-h-{tone}.svg', lockup_h(symfn, ink, 2400, 800, 360))
        w(f'lockup-v-{tone}.svg', lockup_v(symfn, ink, 1200, 1400, 500))
    # PNG no mesmo padrão do conjunto anterior
    png(symbol_sq(symfn, '#f7f5f0', 1000), f'{set_dir}/01_symbol-transparent.png', 1000, 1000)
    for i, k in enumerate(('black', 'midnight', 'white')):
        png(symbol_sq(symfn, INK[k], 1000, BG[k]), f'{set_dir}/{2+i:02d}_symbol-{k}.png', 1000, 1000)
        png(lockup_h(symfn, INK[k], 2400, 800, 360, BG[k]), f'{set_dir}/{5+i:02d}_lockup-h-{k}.png', 2400, 800)
        png(lockup_v(symfn, INK[k], 1200, 1400, 500, BG[k]), f'{set_dir}/{8+i:02d}_lockup-v-{k}.png', 1200, 1400)
        png(lockup_v(symfn, INK[k], 2560, 1440, 230, BG[k], DESC_INK[k]),
            f'{set_dir}/{11+i:02d}_wallpaper-{k}-2560x1440.png', 2560, 1440)
    png(lockup_v(symfn, INK['midnight'], 1024, 1024, 380, BG['midnight'], DESC_INK['midnight']),
        f'{set_dir}/14_google-picture.png', 1024, 1024)
    png(symbol_sq(symfn, '#0a0a0a', 1000), f'{set_dir}/15_symbol-transparent-dark.png', 1000, 1000)
    for px in (16, 32, 48, 180, 512):
        size = 'favicon' if px <= 24 else 'small' if px <= 48 else 'full'
        png(symbol_sq(symfn, '#f7f5f0', px, BG['black'], 0.86, size), f'{set_dir}/favicon/favicon-{px}.png', px, px) \
            if os.makedirs(f'{set_dir}/favicon', exist_ok=True) is None else None

build(f'{OUT}/v2-neutro', d2)
build(f'{OUT}/v2-crimson', s2)
json.dump(QUEUE, open(f'{OUT}/queue.json', 'w'))
print('ok', len(QUEUE))

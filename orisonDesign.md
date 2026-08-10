---
version: "3.0"
name: Orison Brand System Prompt
description: >
  Sistema de design e identidade visual da Orison — empresa de infraestrutura
  de IA para negócios. Este documento é a fonte normativa de todos os ativos
  de design: tokens de cor, tipografia, espaçamento, forma, acessibilidade e
  componentes de UI. Espelha src/tokens/tokens.css do repositório
  @orison/design-system — se os dois divergirem, o código é a verdade e este
  arquivo é o bug.

colors:
  # Identidade — superfícies e fundo
  black: "#0a0a0a"
  midnight: "#111113"
  surface: "#0d0d0f"
  slate: "#3a3a3a"
  border: "#2e2e2e"
  gray: "#5a5a5a"
  subtle: "#484848"
  offwhite: "#e8e6e1"

  # Texto — escala concreta (nunca empilhar opacity sobre cor de texto)
  text-primary: "#f7f5f0"     # 17.8:1 sobre surface
  text-body: "#edeae4"        # 16.2:1
  text-secondary: "#d4d2cd"   # 12.9:1
  text-muted: "#bcbab5"       # 10.0:1 — piso legível

  # Acento
  crimson: "#8B1A1A"          # PREENCHIMENTO. Nunca cor de texto: 2.09:1
  red: "#A52020"              # hover do crimson
  crimson-text: "#F06070"     # 6.11:1 — toda tipografia crimson sobre escuro
  focus: "#F06070"            # anel de foco — 6.11:1, piso 1.4.11 é 3.0:1

  # Visualização de dados — preenchimento
  negative-hi: "#8B1A1A"
  negative-md: "#C0392B"
  alert-hi: "#8B4A1A"
  alert-md: "#C0622B"
  positive-hi: "#1A5C2E"
  positive-md: "#27834A"

  # Visualização de dados — tipografia e traço
  positive-tx: "#7ddfa7"      # 11.4:1 — verde em texto sobre escuro
  positive-br: "#3AAA62"      # traço e borda em gráfico

  border-accent: "#8B1A1A"

  # Escala Sequencial Crimson (8 steps — heatmaps, mapas de densidade)
  crimson-scale-1: "#1A0505"
  crimson-scale-2: "#2D0A0A"
  crimson-scale-3: "#4A1010"
  crimson-scale-4: "#6B1515"
  crimson-scale-5: "#8B1A1A"
  crimson-scale-6: "#A52020"
  crimson-scale-7: "#C03030"
  crimson-scale-8: "#D94040"

  # Escala Sequencial Neutral (8 steps — intensidade sem conotação)
  neutral-scale-1: "#111113"
  neutral-scale-2: "#1A1A1C"
  neutral-scale-3: "#252527"
  neutral-scale-4: "#303032"
  neutral-scale-5: "#3A3A3C"
  neutral-scale-6: "#4A4A4C"
  neutral-scale-7: "#5A5A5C"
  neutral-scale-8: "#6A6A6C"

  # Divergente (5 steps — exige zero semântico real)
  divergent-neg-hi: "#8B1A1A"
  divergent-neg: "#6B1515"
  divergent-neutral: "#3A3A3C"
  divergent-pos: "#1A5C2E"
  divergent-pos-hi: "#27834A"

  # Categórica (6 cores — máximo absoluto)
  cat-crimson: "#8B1A1A"
  cat-amber: "#8B4A1A"
  cat-teal: "#1A6B6B"
  cat-steel: "#4A6A8B"
  cat-olive: "#4A6B1A"
  cat-plum: "#6B1A6B"

# Escopo de fundo claro. Aplicado a .panel-light, .card-preview-light e
# .lm-stage-inner.lm-light; disponível a qualquer bloco via
# [data-ground="light"] ou class="ground-light".
ground-light:
  black: "#e8e6e1"
  midnight: "#e2e0da"
  surface: "#edebe6"
  border: "#cbc8c1"
  slate: "#b4b1a9"
  text-primary: "#0d0d0f"     # 15.6:1 sobre off-white
  text-body: "#1f1f22"        # 13.2:1
  text-secondary: "#3a3a3a"   #  9.1:1
  text-muted: "#5a5a5a"       #  5.5:1
  crimson-text: "#8B1A1A"     #  7.45:1 — o crimson inverte de papel
  focus: "#8B1A1A"

typography:
  # ── Rampa DISPLAY — Cormorant Garamond. Expressão. ──
  # x-height baixa: 26px de Cormorant lê como ~21px de Montserrat.
  # Os degraus compensam essa diferença óptica.
  display-hero:
    fontFamily: Cormorant Garamond
    fontSize: 64px
    fontWeight: 300
    letterSpacing: 0.32em
    lineHeight: 1
    textTransform: uppercase
  display-xl:
    fontFamily: Cormorant Garamond
    fontSize: 44px
    fontWeight: 300
    letterSpacing: 0.24em
    lineHeight: 1.15
    textTransform: uppercase
  display-lg:
    fontFamily: Cormorant Garamond
    fontSize: 34px
    fontWeight: 300
    letterSpacing: -0.01em
    lineHeight: 1.15
  display-md:
    fontFamily: Cormorant Garamond
    fontSize: 26px
    fontWeight: 300
    letterSpacing: -0.01em
    lineHeight: 1.35
  display-sm:
    fontFamily: Cormorant Garamond
    fontSize: 20px
    fontWeight: 300
    letterSpacing: 0.16em
    lineHeight: 1.35
    textTransform: uppercase

  # ── Rampa TEXT — Montserrat. Leitura e UI. Piso 12px. ──
  text-xl:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: 300
    letterSpacing: 0
    lineHeight: 1.5
  text-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: 300
    letterSpacing: 0
    lineHeight: 1.6
  text-base:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: 300
    letterSpacing: 0
    lineHeight: 1.6
  text-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: 300
    letterSpacing: 0.04em
    lineHeight: 1.5
  text-xs:
    fontFamily: Montserrat
    fontSize: 13px
    fontWeight: 300
    letterSpacing: 0
    lineHeight: 1.35
  text-label:
    fontFamily: Montserrat
    fontSize: 12px          # PISO ABSOLUTO DO SISTEMA
    fontWeight: 400
    letterSpacing: 0.10em
    lineHeight: 1.35
    textTransform: uppercase

  mono:
    fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace"
    usage: código, tokens, hexadecimais, durações, valores numéricos

leading:
  none: 1
  tight: 1.15
  snug: 1.35
  base: 1.5
  relaxed: 1.6

tracking:
  tight: "-0.01em"     # display ≥34px
  none: "0"            # prosa, valores de spec
  snug: "0.04em"       # UI 14px
  label: "0.10em"      # label caixa alta 12px
  wide: "0.16em"       # título de seção
  display: "0.24em"    # título de capítulo
  hero: "0.32em"       # wordmark

measure:
  prose: 68ch

spacing:
  hairline: 2px        # a calha — separador assinatura do sistema
  base: 8px
  1: 4px
  2: 8px
  3: 16px
  4: 24px
  5: 32px
  6: 48px
  7: 64px
  8: 80px
  9: 120px             # respiro de abertura de capítulo
  10: 160px

rounded:
  none: 0px            # padrão absoluto em toda superfície
  full: 9999px         # apenas marcas circulares: dot, knob de switch

breakpoints:
  lg: 1120px
  md: 900px
  sm: 600px

components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.offwhite}"     # 7.45:1
    typography: "{typography.text-label}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    minHeight: 44px
  button-primary-hover:
    backgroundColor: "{colors.red}"
    transform: "translateY(-1px)"
  button-primary-focus:
    outline: "2px solid {colors.focus}"
    outlineOffset: "3px"
  button-primary-disabled:
    opacity: 0.4

  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.gray}"
    typography: "{typography.text-label}"
    rounded: "{rounded.none}"
    minHeight: 44px

  badge:
    typography: "{typography.text-label}"
    padding: "4px 8px"
    rounded: "{rounded.none}"
  badge-crimson:
    backgroundColor: "rgba(139, 26, 26, 0.28)"
    textColor: "{colors.crimson-text}"
  badge-positive:
    backgroundColor: "rgba(39, 131, 74, 0.22)"
    textColor: "{colors.positive-tx}"
  badge-alert:
    backgroundColor: "rgba(192, 98, 43, 0.22)"
    textColor: "#f5a962"
  badge-neutral:
    backgroundColor: "rgba(232, 230, 225, 0.10)"
    textColor: "{colors.text-primary}"

  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.text-base}"
    border: "1px solid {colors.border}"
    minHeight: 44px
    placeholderColor: "{colors.text-muted}"   # nunca opacity
  input-focus:
    borderColor: "{colors.focus}"
  input-error:
    borderColor: "{colors.crimson-text}"

  sidebar:
    backgroundColor: "{colors.midnight}"
    width: 240px
    itemTypography: "{typography.text-sm}"
    activeIndicator: "2px solid {colors.focus}"     # 6.11:1, passa 1.4.11
    activeBackground: "rgba(240, 96, 112, 0.08)"

  kpi-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.none}"
    padding: "{spacing.4}"
    label: "{typography.text-label}"
    value: "{typography.display-lg}"
    delta-positive: "{colors.positive-tx}"          # tipografia, não fill
    delta-negative: "{colors.crimson-text}"

  chart:
    background: "{colors.surface}"
    axisColor: "{colors.text-muted}"
    axisTypography: "{typography.text-label}"
    gridLine: "1px rgba(255,255,255,0.04) horizontal"
    primarySeries: "{colors.crimson}"
    secondarySeries: "{colors.slate}"
    rounded: "{rounded.none}"
    maxSeries: 3
    valueTypography: "{typography.text-sm}"

  section:
    maxWidth: 1080px
    background: "{colors.midnight}"
    padding: "80px 60px"
    gutter: "{spacing.hairline}"
    modifiers:
      prose: "medida 68ch"
      gallery: "padding vertical 120px, gap 48px entre exemplares"
      demo: "background surface — o palco lê como palco"
      spec: "padding vertical 64px"
      opener: "abertura de capítulo, fundo black, display-xl"
---

# Orison Brand System

> **Documento normativo de design.** Todos os ativos visuais da Orison nascem
> aqui. Designers e agentes de IA devem consultar este arquivo como fonte de
> verdade para cor, tipografia, espaçamento, forma, acessibilidade e
> componentes.
>
> **Precedência:** `src/tokens/tokens.css` é a implementação executável. Se
> este documento divergir do código, o código venceu e este arquivo precisa
> ser corrigido — nunca o contrário. Foi exatamente essa divergência que a
> v3.0 existiu para eliminar.

---

## O que mudou na v3.0

A v2.0 documentava um sistema que não conseguia ser lido. **301 de 361
declarações de tamanho de texto (83,4%) estavam abaixo de 12px**, 191 delas em
8px ou menos, e frases explicativas inteiras eram compostas em caixa alta a 9px
com tracking valendo 43–56% do em. As regras do design system moravam na
configuração menos legível disponível.

Cinco mudanças estruturais:

1. **Duas rampas tipográficas separadas por família.** A v2.0 tinha duas
   escalas dividindo um namespace: `--text-base` valia 11px enquanto
   `--text-xs` valia 18px. Agora `--display-*` é Cormorant e `--text-*` é
   Montserrat, com piso absoluto de 12px.
2. **Tracking em `em`, nunca em `px`.** 3px vale 43% do em a 7px e 9% a 32px.
   Tracking absoluto foi a origem mecânica da ilegibilidade.
3. **Crimson deixou de ser cor de texto.** `#8B1A1A` mede 2,09:1 sobre fundo
   escuro e aparecia como `color:` em 45 aplicações. Toda tipografia crimson
   agora usa `--color-crimson-text`.
4. **Cor consciente de fundo.** Um escopo inverte a rampa inteira — inclusive
   o crimson tipográfico — para qualquer superfície clara. Nenhum componente
   escreve mais a própria variante `-light` à mão.
5. **Contrato de acessibilidade implementado, não declarado.** 4 headings reais
   em 37 seções viraram 97; 30 alvos inalcançáveis por teclado viraram zero;
   6 de 7 indicadores de foco reprovados viraram zero.

Migração completa da escala: seção 37 do brand book (Colofão).

---

## Overview

A Orison é uma empresa de infraestrutura de inteligência artificial para
negócios. Seu posicionamento não é o de uma ferramenta, mas de um organismo —
algo que age, aprende e transforma as operações de quem o adota.

**Personalidade visual:** Calculada. Precisa. Sóbria. Inevitável.

A identidade é construída sobre **escuridão intencional**: fundos quase pretos,
tipografia editorial em contraste máximo e um único acento cromático — o
crimson — usado com disciplina cirúrgica.

**Público-alvo:** Executivos, heads de operações e decisores técnicos em
empresas B2B de médio a grande porte.

**Resposta emocional esperada:** rigor, inevitabilidade, alta performance.
Nunca jovial, nunca genérico, nunca ansioso.

**Princípio unificador:** *Menos elementos, mais peso.* A identidade ganha
força pela subtração.

**Corolário da v3.0:** *Subtração não é compressão.* A v2.0 confundiu as duas e
espremeu o texto até ele parar de ser texto. Densidade informacional é uma
característica da marca; ilegibilidade é um defeito. O piso de 12px é onde essa
distinção é enforçada.

---

## Colors

**Superfícies (do mais escuro ao mais claro):**

| Token | Valor | Uso |
|---|---|---|
| `black` | `#0a0a0a` | Fundo absoluto, aberturas de capítulo, impressão |
| `midnight` | `#111113` | Superfície primária — base de painéis e seções |
| `surface` | `#0d0d0f` | Elevação sutil — cards, células, palcos de demo |
| `border` | `#2e2e2e` | Separador padrão (o cinza que faz o trabalho real) |
| `slate` | `#3a3a3a` | Borda estrutural forte |
| `off-white` | `#e8e6e1` | Quente, nunca branco puro. Tinta clara e fundo claro |

**Acento — três papéis distintos, nunca intercambiáveis:**

| Token | Valor | Papel | Contraste |
|---|---|---|---|
| `crimson` | `#8B1A1A` | **Preenchimento apenas.** Fundo de botão, barra, linha do símbolo, série de gráfico | 7,45:1 com off-white em cima |
| `red` | `#A52020` | Hover do crimson. Nunca standalone | 5,96:1 com off-white |
| `crimson-text` | `#F06070` | **Toda tipografia crimson** sobre escuro | 6,11:1 |
| `focus` | `#F06070` | Anel de foco | 6,11:1 (piso 1.4.11 é 3,0:1) |

> **Regra inviolável.** `crimson #8B1A1A` nunca é `color:`. Mede 2,09:1 sobre
> fundo escuro. A v2.0 o usava como cor de texto em 45 lugares, incluindo cada
> valor de especificação de componente a 9px. Se você precisa de crimson em
> tipografia, o token é `crimson-text`.

**Texto — escala concreta, sem empilhamento de `opacity`:**

| Token | Valor | Contraste | Uso |
|---|---|---|---|
| `text-primary` | `#f7f5f0` | 17,8:1 | Títulos, wordmarks |
| `text-body` | `#edeae4` | 16,2:1 | Prosa, parágrafos |
| `text-secondary` | `#d4d2cd` | 12,9:1 | Labels, specs, metadados |
| `text-muted` | `#bcbab5` | 10,0:1 | Suporte, hints, placeholders |

Nunca aplique `opacity` sobre uma cor de texto para criar variação. Opacidade
compõe contra o fundo e produz valores que ninguém calculou — foi assim que
`.vt-attr` a `opacity: 0.4` acabou em 2,60:1. Use a cor correta da escala.

**Verde tipográfico:** `positive-md #27834A` mede 3,98:1 e é **preenchimento**.
Para verde em texto use `positive-tx #7ddfa7` (11,4:1); para traço e borda em
gráfico, `positive-br #3AAA62`.

### Cor consciente de fundo

O off-white pertence ao sistema desde a v1 — é onde o símbolo é provado sobre
papel. Mas *todos* os tokens de texto falhavam sobre ele (1,04–1,55:1), e cada
componente contornava isso escrevendo a própria variante `-light` à mão. Sete
variantes, e a única que faltava (`.lh-sub`) rendia 2,55:1 em produção.

O escopo `[data-ground="light"]` inverte a rampa inteira de uma vez, incluindo
o crimson tipográfico, que troca de papel: sobre claro, `#8B1A1A` é o valor
legível (7,45:1) e `#F06070` é o que falha (2,55:1).

```css
/* Aplicado automaticamente */
.panel-light, .card-preview-light, .lm-stage-inner.lm-light { … }

/* Disponível a qualquer bloco */
<div data-ground="light">  ou  class="ground-light"
```

**Consequência prática:** dentro de uma superfície clara, use os mesmos tokens
semânticos de sempre — `--text-primary` para tinta, `--color-crimson-text` para
acento tipográfico. O escopo resolve. **Nunca use `--color-midnight` como
"tinta escura"** — ele é um token de *superfície* e inverte junto com o fundo.

**Regras de uso de cor:**
- Crimson uma vez por tela, na ação mais importante.
- Nunca mais de dois acentos cromáticos em um layout.
- Piso WCAG AA (4,5:1) para todo texto; 3,0:1 para indicadores não textuais.
- Escalas de dataviz de preenchimento não migram para tipografia sem trocar
  para a variante `-tx`.

---

## Data Visualization Colors

Escalas quantitativas — extensões da paleta de identidade, não substitutas.

**Sequencial Crimson (8 steps):** `#1A0505` → `#D94040`. Heatmaps e mapas de
densidade. **Atenção:** os três primeiros degraus medem 1,2–1,9:1 contra o
canvas `#0a0a0a` — em fundo preto absoluto, o terço inferior da escala
desaparece. Use `surface` ou `neutral-scale-2` como canvas de heatmap.

**Sequencial Neutral (8 steps):** `#111113` → `#6A6A6C`. Intensidade sem
conotação semântica.

**Divergente (5 steps):** negativo ↔ neutro ↔ positivo. Exige zero semântico
real — não use para dados sempre positivos.

**Categórica (6 cores — máximo absoluto):** crimson é sempre a série primária.
Acima de 6 categorias, agrupe as menores em "Outros" com `neutral-scale-5`.

**Daltonismo — restrição obrigatória.** Cerca de 8% dos homens não distinguem
vermelho de verde. A escala negativo↔positivo **nunca pode ser a única
codificação**: acompanhe sempre de sinal (+/−), seta, posição ou rótulo
numérico. Ember e Amber permanecem legíveis em deuteranopia e servem como
terceiro eixo quando duas categorias precisam se separar sem depender do matiz.

**Regras:**
- Nunca misture escala sequencial e categórica no mesmo chart.
- Máximo 3 séries por chart (`chart.maxSeries`).
- Cor sozinha nunca é suficiente — complemente com forma, posição ou rótulo.

---

## Typography

Duas famílias, duas rampas, duas funções. **Não se misturam.**

### Rampa Display — Cormorant Garamond (Light 300)

Expressão: wordmark, aberturas de capítulo, títulos de seção. Caixa alta
permitida — é aqui que ela é expressão, não rótulo.

| Token | Tamanho | Tracking | Uso |
|---|---|---|---|
| `display-hero` | 64px | 0.32em | Capa, abertura de capítulo |
| `display-xl` | 44px | 0.24em | Título de capítulo |
| `display-lg` | 34px | −0.01em | Headline de seção, valor de KPI |
| `display-md` | 26px | −0.01em | Título de seção (`<h2>`), lockup |
| `display-sm` | 20px | 0.16em | Wordmark em template, cartão |

Razões entre degraus: 1,30 · 1,31 · 1,29 · 1,45. Cormorant tem x-height baixa —
26px lê opticamente como ~21px de Montserrat, e os degraus compensam isso.

`--tracking-hero: 0.32em` preserva exatamente a proporção autoral da v2.0
(18px ÷ 56px = 0,321em) e agora escala com o tamanho em vez de quebrar.

### Rampa Text — Montserrat

Leitura e interface. **Piso absoluto de 12px.**

| Token | Tamanho | Tracking | Leading | Uso |
|---|---|---|---|---|
| `text-xl` | 20px | 0 | 1.5 | Lede de seção, tese, citação |
| `text-lg` | 18px | 0 | 1.6 | Subtítulo |
| `text-base` | 16px | 0 | 1.6 | **Prosa** |
| `text-sm` | 14px | 0.04em | 1.5 | UI, valor de spec, célula de tabela |
| `text-xs` | 13px | 0 | 1.35 | Chave de spec densa, eixo de gráfico |
| `text-label` | 12px | 0.10em | 1.35 | Label, eyebrow, botão — **PISO** |

**Medida de leitura:** `68ch`. Prosa sem medida corre os 1080px do container e
o olho perde a linha no retorno.

### Regras tipográficas

1. **Nada abaixo de 12px.** Verificável:
   `grep -rnE 'font-size:\s*([0-9]|1[01])px' src/` deve retornar vazio.
2. **Tracking sempre em `em`.** Verificável:
   `grep -rnE 'letter-spacing:\s*[0-9.]+px' src/` deve retornar vazio.
3. **Caixa alta é marcador de estrutura, não de tom.**
   - Na rampa de texto: exclusiva de `text-label`. Palavra isolada ou frase
     curta, tracking teto 0,10em.
   - Na rampa display: permitida em `hero`, `xl` e `sm`.
   - **Prosa nunca.** Caixa alta custa 13–20% de velocidade de leitura e
     destrói a pista de forma-de-palavra. Em pt-BR é pior: achata os
     diacríticos (`á ç õ ê`) que carregam significado.
4. **Hierarquia precisa de degraus visíveis.** Título de seção (`<h2>`) é
   Cormorant `display-md`; cabeçalho de bloco (`<h3>`) é `text-label`. Dois
   degraus. Nunca colapse os dois no mesmo tamanho.
5. **Máximo dois pesos** por peça (Light 300 + Regular 400). Só esses dois
   existem no sistema — não peça outros ao Google Fonts.
6. **Mono é medida, não fantasia.** `--font-mono` para código, tokens,
   hexadecimais, durações e números. Nunca como sinal decorativo de "técnico".
7. **Nunca substitua as famílias.** Não troque Cormorant por Georgia nem
   Montserrat por Arial.

---

## Layout

Modelo **Fixed-Max-Width**: `1080px` centrado, sidebar fixa de `240px` à
esquerda em desktop.

### A calha

`--space-hairline: 2px` é o separador assinatura do sistema — fora da escala
base 8, e de propósito. É o **único** elemento entre blocos irmãos: sem raio,
sem sombra, sem card. É o que faz a página ler como uma chapa escura riscada
por linhas de cabelo em vez de um baralho de cartões flutuantes.

Use apenas como `gap` entre elementos de uma mesma grade. Nunca como padding.

### Escala de espaçamento

| Token | Valor | Uso típico |
|---|---|---|
| `hairline` | 2px | A calha — gap entre blocos irmãos |
| `space-1` | 4px | Gaps mínimos, icon-text |
| `space-2` | 8px | Gap rótulo/valor |
| `space-3` | 16px | Padding de célula e tag |
| `space-4` | 24px | Gutter de grid, padding de card |
| `space-5` | 32px | Padding de painel menor |
| `space-6` | 48px | Gap vertical entre blocos |
| `space-7` | 64px | Separação de seções |
| `space-8` | 80px | Padding externo de seção |
| `space-9` | 120px | Respiro de abertura de capítulo |
| `space-10` | 160px | Respiro máximo |

Mais espaço acima de um título do que abaixo dele. Grupos apertados, separação
generosa.

### Sistema de seção

Uma base, cinco modificadores. **Cada modificador precisa custar alguma
coisa** — se dois compilam para os mesmos bytes, um deles é anotação, não
design.

| Classe | Diferença real |
|---|---|
| `.section` | Base: 1080px, chapa midnight, calha, padding 80/60 |
| `.section--prose` | Medida 68ch em prosa e info-blocks |
| `.section--gallery` | Padding vertical 120px, 48px entre exemplares |
| `.section--demo` | Fundo `surface` — o palco lê como palco |
| `.section--spec` | Padding vertical 64px |
| `.opener` | Abertura de capítulo: fundo black, `display-xl`, tese em uma frase |

### Breakpoints

`1120px` · `900px` · `600px`. Custom properties não funcionam dentro de
`@media` — os valores são literais por necessidade da linguagem. Mantenha-os
idênticos em todo arquivo.

- **≤ 1120px** — containers ganham margem lateral.
- **≤ 900px** — grids colapsam; sidebar vira gaveta sob uma barra superior
  fixa de 64px (nunca um hambúrguer flutuando sobre o conteúdo); todo controle
  interativo recebe `min-height: 44px`.
- **≤ 600px** — coluna única, padding reduzido. **A rampa de texto não
  encolhe:** 16px de prosa a 360px continua sendo 16px. Só a rampa display
  escala.

Conteúdo mais largo que a coluna rola dentro do próprio bloco (`.scroll-x`,
`overflow-x: auto`). A página nunca rola na horizontal.

---

## Elevation & Depth

Profundidade é **contraste tonal entre superfícies**, não `box-shadow` difuso.

1. `black` `#0a0a0a` — fundo absoluto
2. `midnight` `#111113` — camada primária
3. `surface` `#0d0d0f` — camada elevada

Duas sombras, e apenas para elevação funcional real:

- **Shadow SM** `0 8px 16px rgba(0,0,0,0.6)` — hover de card
- **Shadow MD** `0 16px 32px rgba(0,0,0,0.5)` — modal, dropdown

Sombra sempre tem offset e blur suave. Um halo colorido de offset zero é
decoração, não profundidade — não existe no sistema.

Em vez de sombra, a borda `1px solid var(--border-color)` delimita cards e
painéis.

---

## Shapes

**Austeridade geométrica.** Duas opções, e só duas:

| Token | Valor | Uso |
|---|---|---|
| `rounded-none` | 0px | **Toda superfície**: botão, input, card, painel, tabela, badge |
| `rounded-full` | 9999px | **Apenas marcas**: dot de legenda, knob de switch |

A distinção é entre *superfície* e *marca*. Uma superfície contém conteúdo e
nunca tem raio. Uma marca é um glifo geométrico — um ponto, um knob — e é
circular porque essa é a forma dela.

Nada de `2px`, `4px` ou `8px`. A v2.0 listava esses três e eles nunca foram
usados; existiam como permissão para quebrar o sistema.

**Bordas de acento:** nunca acima de 1px em card, item de lista ou callout.
Uma borda lateral colorida e grossa é o tell mais reconhecível de UI gerada
automaticamente. O indicador de navegação ativa é a exceção deliberada, a 2px,
e usa `--color-focus` para passar o piso de 3,0:1.

---

## Accessibility

Contrato não negociável. Cada item é verificável, e a v3.0 existiu em parte
para torná-los verdadeiros.

**Contraste**
- Todo texto ≥ 4,5:1 contra o fundo **real** — seletores de superfície clara
  medem contra off-white, não contra a chapa escura.
- Indicadores não textuais e anéis de foco ≥ 3,0:1.
- Placeholder é texto e responde ao mesmo piso. Nunca use `opacity` nele.

**Estrutura**
- Um `<h1>` por documento. Título de seção é `<h2>`, cabeçalho de bloco é
  `<h3>`. Sem níveis pulados.
- Cada `<section>` carrega `aria-labelledby` apontando para o próprio título.
- `<main>` existe. Skip link é o primeiro elemento focável.

**Operação**
- Todo alvo clicável é `<button>`/`<a>`, ou carrega `role` + `tabindex` +
  handler de teclado. Um handler delegado opera qualquer `role="switch"` e
  `role="checkbox"` com Espaço e Enter.
- Uma regra global `:focus-visible` cobre todo elemento focável.
  **Nunca use `tabindex="-1"` em espécime de documentação** — foi exatamente
  isso que tornou as regras de foco da v2.0 código morto.
- Gaveta e modal fecham com Escape, prendem o foco enquanto abertos e o
  devolvem ao fechar.
- Alvo de toque mínimo de 44px onde o dedo é o dispositivo de entrada.

**Percepção**
- Todo SVG carrega `aria-label` ou `aria-hidden`.
- Confirmações efêmeras (toast de cópia) usam `aria-live="polite"`.
- Item de navegação ativo usa `aria-current="page"`, não só uma classe.
- `prefers-reduced-motion` cobre CSS **e** o agendamento em JS. Durações vão a
  `0.01s`, nunca a `0` — zero causa flash.
- O livro imprime: existe `@media print` e um `<noscript>`.

---

## Components

### Botões

Duas variantes. Nenhuma adicional sem revisão do sistema.

**Primary** — fundo crimson, texto off-white (7,45:1), tipografia `text-label`,
sem raio, `min-height: 44px`.

| Estado | Mudança |
|---|---|
| Hover | fundo `red`, `translateY(-1px)` |
| Active | `translateY(0)`, fundo `crimson` |
| Focus | outline 2px `focus`, offset 3px |
| Disabled | `opacity: 0.4`, `cursor: not-allowed` |

**Ghost** — transparente, borda 1px `gray`, texto `text-primary`.

Regras: um Primary por tela ou grupo de ação. Ação destrutiva usa Ghost com
texto crimson-text. Nunca crie variante colorida.

### Badges

Quatro variantes semânticas, tipografia `text-label`, `rounded-none`. O texto
usa sempre a variante tipográfica da cor (`crimson-text`, `positive-tx`), nunca
a de preenchimento.

### Input

Tipografia `text-base` (16px — abaixo disso o iOS dá zoom no foco). Fundo
`surface`, borda 1px, sem raio, `min-height: 44px`, largura máxima 320px.
Label acima em `text-label`; hint abaixo em `text-sm`.

Foco troca a borda para `--color-focus` **e** mantém o outline global. A v2.0
suprimia o outline e trocava a borda para crimson — 1,46:1, invisível.

### Data Table

Cabeçalho `text-label`, células `text-sm`, padding `space-3`, borda inferior
thin. Hover de linha `rgba(255,255,255,0.03)`. Tabela larga vive dentro de
`.scroll-x`.

Variantes de célula: `.td-metric` (mono), `.td-positive` (`positive-tx`),
`.td-negative` (`crimson-text`), `.td-muted`.

---

## O piso de craft

Checagens sobre o resultado construído, não sobre a intenção. Aplicam-se a
qualquer superfície nova da Orison.

**Verifique**
- **Contraste** — corpo e placeholder ≥ 4,5:1, texto grande ≥ 3:1. Em
  superfície colorida, tinja o texto secundário a partir daquele matiz, nunca
  de cinza.
- **Espaçamento** — grupos apertados, separação generosa, mais espaço acima de
  um título do que abaixo. Leia os valores computados.
- **Tipo** — medida 65–75ch, display teto 6rem, degraus de escala e peso
  óbvios. Rode a cópia real em cada breakpoint e conserte o que estourar.
- **Motion** — um momento autoral, não efeitos espalhados nem a mesma entrada
  idêntica em toda seção. Ease-out exponencial a partir de um estado já
  visível.
- **Estados** — hover, foco, disabled, loading, erro, vazio. Mais conteúdo
  real, controles funcionando, composição responsiva.
- **Cópia** — a linguagem do produto. Controles nomeiam a ação; erros nomeiam
  o problema e a recuperação.

**Recuse** — estes são os defaults da categoria, não banimentos. O briefing
pode ganhar qualquer um deles; alcançá-los quando o eixo está livre significa
que você não decidiu.

*Estrutura de página*
- Cards do mesmo tamanho com ícone + título + texto como estrutura da página.
  Card é o contêiner preguiçoso; card aninhado é sempre errado.
- O template hero-métrica: número grande, label pequeno, stats de apoio, acento.
- Um eyebrow em caixa alta com tracking sobre **toda** seção. Um kicker nomeado
  é sistema; eyebrow em todo lugar é gramática que você não escolheu.
- Numeração de seção (01 / 02 / 03) a menos que a sequência carregue informação
  que o leitor precisa. *No brand book ela carrega — é documento de referência
  e as pessoas citam "seção 08".*
- Modal para tarefa que não precisa nem de interrupção nem de foco protegido.

*Hábitos de superfície*
- Texto em gradiente. Ênfase vem de peso ou tamanho.
- Vidro e blur como decoração em vez de efeito específico.
- `border-left`/`border-right` colorida acima de 1px em card, item de lista,
  callout ou alerta.
- Sparkline, anel de progresso e retângulo arredondado com sombra suave no
  lugar de conteúdo.
- Monospace como fantasia de "técnico" em vez de código, dado ou medida.
- Claro ou escuro escolhido por categoria. Escolha pela cena de uso: quem,
  onde, sob que luz ambiente.

---

## Do's and Don'ts

**Símbolo e Logotipo**
- ✓ Área de proteção = altura do símbolo ÷ 4 em todos os lados.
- ✓ Use sempre o SVG original — nunca recrie o símbolo.
- ✓ Em superfície clara, a tinta é `--text-primary` (o escopo inverte).
- ✗ Não use `--color-midnight` como tinta — é token de superfície e inverte
  junto com o fundo.
- ✗ Não rotacione, distorça, aplique sombra ou efeito.
- ✗ Não use abaixo de 48px sem trocar para `#symbol-favicon`.

**Cor**
- ✓ Crimson uma vez por tela, na ação mais importante.
- ✓ Piso 4,5:1 em texto, 3,0:1 em indicador.
- ✗ Não use `crimson #8B1A1A` como cor de texto. Nunca.
- ✗ Não aplique `opacity` sobre texto para criar variação.
- ✗ Não crie cor fora da paleta.

**Tipografia**
- ✓ Cormorant para expressão; Montserrat para leitura e UI.
- ✓ Caixa alta em label e display — nunca em prosa.
- ✗ Nada abaixo de 12px.
- ✗ Nenhum `letter-spacing` em px.
- ✗ Não colapse `<h2>` e `<h3>` no mesmo tamanho.

**Layout**
- ✓ Espaçamento em múltiplos de 8px (4px para micro-ajuste, 2px só para a calha).
- ✓ Largura máxima de 1080px; medida de leitura de 68ch.
- ✗ Não quebre o ritmo com valores arbitrários (15px, 22px).
- ✗ Não misture cantos arredondados e retos no mesmo grupo.
- ✗ Não deixe conteúdo largo cortar — dê a ele um contêiner com scroll.

**Voz**
- ✓ Precisão cirúrgica — frases curtas, sem ambiguidade.
- ✓ Substantivos de resultado: *precisão*, *transformação*, *resultado*.
- ✗ Não use *inovação*, *disruptivo*, *ecossistema*, *solução*, *plataforma*,
  *sinérgico*, *holístico*, *alavancar*.
- ✗ Não personifique a Orison como assistente — a Orison opera, não serve.

---

## Voice & Tone

A Orison comunica como um organismo que age — não como um produto que aguarda
instruções.

**A Orison É:** Calculada · Precisa · Sóbria · Inevitável · Direta

**A Orison Nunca É:** Animada ou jovial · Humilde em excesso · Técnica demais ·
Genérica · Reativa

**Vocabulário aprovado:** Precisão · Resultado · Transformação · Organismo ·
Estrutura · Inteligência · Operação · Velocidade · Clareza · Decisão ·
Processo · Escala

**Vocabulário proibido:** Inovação · Disruptivo · Ecossistema · Solução ·
Plataforma · Sinérgico · Holístico · Alavancar · Empoderar · Jornada ·
User-centric · Best-in-class

**Correto:**
> "A Orison mapeia cada processo da sua operação e elimina o atrito antes que
> ele vire custo."

**Incorreto:**
> "Acreditamos que nossa plataforma inovadora pode ajudar sua empresa a
> alavancar resultados de forma holística."

**Regra da v3.0 aplicada à voz:** a seção de Voz exige *"Precisa — se não
conseguimos quantificar, não dizemos."* Isso vale para o próprio artefato. Uma
documentação que declara um valor que o código não usa é uma alegação não
quantificada. Corrija a documentação ou corrija o código; nunca deixe as duas
divergirem.

---

## Applications

Todos os templates seguem os mesmos tokens e não podem ser alterados
estruturalmente sem revisão do sistema.

**Cartão de Visita (85mm × 55mm)**
- Frente: fundo black, símbolo + divisor vertical slate + wordmark
  (`display-sm`) + subtítulo `crimson-text`.
- Verso: fundo off-white — o escopo de fundo claro inverte a rampa; nome em
  `--text-primary`, cargo em `--text-secondary`, contato em `--text-muted`.

**Assinatura de E-mail**
- Símbolo 36px + barra crimson esquerda (1px) + bloco de texto.
- Nome: Cormorant `display-sm`, `text-primary`. Cargo: `text-label`.
- Contato: `text-label`, `text-muted`, stack vertical.

**Slide Cover (16:9)**
- Fundo black, barra crimson 3px na borda esquerda.
- Eyebrow (`text-label`, `crimson-text`) + título (`display-lg`) + subtítulo
  (`text-sm`).
- Logotipo no canto inferior direito; símbolo de fundo a 5% de opacidade.

**Capa de Proposta (A4 vertical)**
- Fundo midnight, lockup vertical no topo.
- Divisor crimson (40px × 1px) + título (`display-md`).
- Base: cliente (`text-label`) + data (`text-label`, `text-muted`).

**Banner LinkedIn (1584 × 396px)**
- Fundo black, lockup horizontal à esquerda, tagline (`text-label`,
  `text-secondary`) ao centro-direita, símbolo decorativo à direita.

---
name: Orison Design System
description: >
  Sistema visual v4 da Orison: marca neutra, produto operacional legível e
  semântica explícita de estado, risco e evidência.
version: 4.1.0
colors:
  # Neutra fria (F01 · N2) — tema claro, produto
  canvas: "#f6f7f9"
  surface: "#ffffff"
  raised: "#ffffff"
  border: "#d3d8de"
  control: "#738091"
  text-primary: "#1c2127"
  text-muted: "#5f6b7c"
  # Neutra fria — tema escuro, marca e comunicação
  canvas-dark: "#1c2127"
  surface-dark: "#252a31"
  raised-dark: "#2f343c"
  border-dark: "#404854"
  text-primary-dark: "#f6f7f9"
  text-muted-dark: "#abb3bf"
  nav: "#1c2127"
  nav-dark: "#111418"
  nav-text: "#abb3bf"
  nav-active: "#2f343c"
  # Ação (F01 · A1) — a única cor de ação
  action: "#2d72d2"
  action-hover: "#215db0"
  action-active: "#184a90"
  action-fg: "#ffffff"
  link: "#215db0"
  link-dark: "#8abbff"
  focus: "#215db0"
  focus-dark: "#8abbff"
  selected: "#e8f0fc"
  selected-dark: "#1f3a5f"
  # Status = feedback e resultado (F01 · S1)
  success: "#238551"
  success-text: "#1c6e42"
  success-text-dark: "#72ca9b"
  success-bg: "#e0eee7"
  success-bg-dark: "#253735"
  warning: "#c87619"
  warning-text: "#935610"
  warning-text-dark: "#fbb360"
  warning-bg: "#f7ecdf"
  warning-bg-dark: "#3c352e"
  danger: "#cd4246"
  danger-hover: "#ac2f33"
  danger-text: "#ac2f33"
  danger-text-dark: "#fa999c"
  danger-bg: "#f8e5e5"
  danger-bg-dark: "#3d2d34"
  # Estado em andamento e neutros de controle (F06, F07)
  neutral-fill: "#edeff2"
  neutral-fill-dark: "#2f343c"
  neutral-hover: "#e5e8eb"
  neutral-active: "#d3d8de"
  disabled-text: "#738091"
  disabled-text-dark: "#8f99a8"
  info-bg: "#e8f0fc"
  # Evidência (F06 · L3)
  evidence-env-bg: "#fbd065"
  evidence-env-text: "#5c4405"
  evidence-env-bg-dark: "#5c4405"
  evidence-env-text-dark: "#fbd065"
  # Dados (F09 · C3) — ordem fixa, máximo de quatro séries
  data-1: "#7961db"
  data-2: "#00a396"
  data-3: "#db2c6f"
  data-4: "#eda100"
  data-4-dark: "#c98500"
  data-context: "#c5cbd3"
  data-context-dark: "#5f6b7c"
  data-grid: "#e5e8eb"
  data-grid-dark: "#2f343c"
  # Marca
  crimson: "#8b1a1a"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontWeight: 500
    letterSpacing: "-0.01em"
    lineHeight: 1.12
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
  section:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  ui:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
  ui-dense:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
  meta:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
  label-header:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.06em"
  kpi:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.15
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
rounded:
  surface: "0"
  tag: "3px"
  control: "4px"
  full: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  hairline: "2px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-fg}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-primary-active:
    backgroundColor: "{colors.action-active}"
  button-secondary:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "36px"
  button-secondary-hover:
    backgroundColor: "{colors.neutral-fill}"
  button-minimal:
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "36px"
  button-minimal-hover:
    backgroundColor: "{colors.neutral-fill}"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.action-fg}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "36px"
  button-danger-hover:
    backgroundColor: "{colors.danger-hover}"
  input:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "36px"
  tag-state-pending:
    backgroundColor: "{colors.neutral-fill}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "1px 8px"
  tag-state-reconciled:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-text}"
    rounded: "{rounded.tag}"
    padding: "1px 8px"
  tag-state-divergent:
    backgroundColor: "{colors.warning-bg}"
    textColor: "{colors.warning-text}"
    rounded: "{rounded.tag}"
    padding: "1px 8px"
  tag-state-failed:
    backgroundColor: "{colors.danger-bg}"
    textColor: "{colors.danger-text}"
    rounded: "{rounded.tag}"
    padding: "1px 8px"
  risk-high:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "2px 8px"
  evidence-banner:
    backgroundColor: "{colors.evidence-env-bg}"
    textColor: "{colors.evidence-env-text}"
    typography: "{typography.label}"
    padding: "6px 16px"
  nav-item:
    backgroundColor: "{colors.nav}"
    textColor: "{colors.nav-text}"
    typography: "{typography.label}"
    padding: "0 16px"
    height: "36px"
  nav-item-active:
    backgroundColor: "{colors.nav-active}"
    textColor: "{colors.action-fg}"
  table-row:
    typography: "{typography.ui-dense}"
    height: "36px"
    padding: "0 12px"
  table-row-selected:
    backgroundColor: "{colors.selected}"
  tooltip:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.meta}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  tag-value:
    backgroundColor: "{colors.neutral-fill}"
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "1px 0 1px 8px"
  segmented:
    backgroundColor: "{colors.neutral-fill}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.control}"
    padding: "2px"
    height: "36px"
  segmented-active:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text-primary}"
  bulk-bar:
    backgroundColor: "{colors.selected}"
    padding: "4px 12px"
    height: "44px"
---

<!--
Estado: v4.1.0, aprovado pelo Nobel em 06-11-2026 nas rodadas F01 a F10
(docs/fusao-palantir.md) e implantado no código em src/tokens/tokens.css.
Se os dois divergirem, o código vence e este documento é corrigido.
-->

# Design System: Orison

## Overview

**Creative North Star: "A Bancada de Decisão"**

A Orison existe para que decisões reais da operação de um cliente sejam
propostas, autorizadas, executadas e provadas. O sistema visual é a bancada onde
isso acontece: cada objeto chega com estado, risco, autoridade e evidência à
vista, e nada na tela finge mais certeza do que os dados têm. A marca é neutra e
recua; quem fala é a operação.

Densidade com legibilidade. A interface é feita para sessões longas de operador:
neutros frios, texto de 16 px que não encolhe no celular, controles de 36 px,
tabela em 14 px no desktop. A cor é um canal semântico escasso: azul quer dizer
"clique aqui"; verde, laranja e vermelho querem dizer "isto aconteceu". Todo o
resto é neutro.

A referência é a Palantir, convertida e não copiada: marca acromática e produto
com intents (MC-09-002), três sistemas separados (marca, toolkit, aplicação) e
três camadas com autoridades distintas (marca, semântica operacional, evidência;
MAP-GC-09-A). O Blueprint inspirou cores e proporções, item a item, mas não é o
DS da Orison (DC-GC-09-016).

**Key Characteristics:**

- Um único site e um único conjunto de tokens para dois temas: escuro para marca
  e comunicação, claro para produto.
- Azul só para ação; verde, laranja e vermelho só para resultado; crimson só na
  identidade.
- Estado, risco e evidência são três eixos visuais que nunca se fundem.
- Montserrat para texto, interface e todos os números (tabulares); Hanken
  Grotesk só em títulos de marca.
- Superfícies retas; raio de 4 px só em controles; sombra só no que flutua.
- Ícones Lucide adaptados (traço 2, terminações retas), sempre com rótulo em
  estado e risco.

## Colors

Neutros frios do Blueprint sustentam a tela; uma cor de ação, três de resultado,
quatro de dados e uma de marca, cada uma com um único papel.

### Primary

- **Azul de Ação** (`action`): botão primário, link, foco, aba ativa, seleção de
  linha. Hover e pressionado escurecem nos dois temas (`action-hover`,
  `action-active`), mantendo o texto branco acima de 6,4:1.

### Secondary

- **Verde de Resultado** (`success`, texto `success-text`): reconciliado, meta
  atingida, outcome medido.
- **Laranja de Atenção** (`warning`, texto `warning-text`): divergência, alerta
  que pede revisão.
- **Vermelho de Falha** (`danger`, texto `danger-text`): falha, ação destrutiva
  ou irreversível. O botão de perigo escurece no hover (`danger-hover`).

### Tertiary

- **Crimson Orison** (`crimson`): só identidade, em peças de marca. Nunca em
  ação, estado, risco, série de dados ou texto.
- **Dourado de Ambiente** (`evidence-env-bg`, `evidence-env-text`): a faixa que
  avisa que a tela inteira é sintética, demonstração ou mock.
- **Séries de Dados** (`data-1` a `data-4`): índigo, turquesa, rosa e ouro, em
  ordem fixa. Validadas para daltonismo e visão normal em todos os pares nos
  dois temas. Rosa e turquesa ficam na faixa de atenção para deuteranopia e o
  ouro abaixo de 3:1 no claro: rótulo direto e vista em tabela são obrigatórios.

### Neutral

- **Canvas Frio** (`canvas`, `canvas-dark`): fundo da página.
- **Superfície** (`surface`, `raised` e variantes escuras): blocos, tabelas,
  campos e camadas flutuantes.
- **Borda** (`border`): divisores e contorno de bloco. **Borda de Controle**
  (`control`): contorno de campo e botão secundário, sempre a 3:1 ou mais.
- **Tinta** (`text-primary`) e **Tinta Secundária** (`text-muted`): todo texto.
  Nenhum texto usa a cor de uma série ou de marca.
- **Trilho de Navegação** (`nav`, `nav-dark`, `nav-text`, `nav-active`): a
  navegação lateral escura, nos dois temas.

### Named Rules

**The One Action Color Rule.** Azul é a única cor de ação. Se algo é azul e não
é clicável, está errado.

**The Result Colors Rule.** Verde, laranja e vermelho só descrevem algo que
aconteceu. Nunca enfeite, nunca série de dados, nunca estado em andamento.

**The Crimson Is Identity Rule.** O crimson marca a Orison e nada mais. Não
classifica ação, erro nem risco (F-GC-09-02, DC-GC-09-002).

**The Cold Neutral Rule.** A rampa fria foi escolhida pela usabilidade em
sessões longas, não pela estética. Não reintroduza o preto e o off-white quentes
da v3.0 em superfícies de produto.

## Typography

**Display Font:** Hanken Grotesk (com system-ui) **Body Font:** Montserrat (com
system-ui) **Label/Mono Font:** Montserrat para rótulos; `ui-monospace` só para
código e identificadores técnicos.

**Character:** Montserrat carrega toda a leitura e todo número, com algarismos
tabulares e alinhados; Hanken Grotesk, a família do wordmark, aparece só quando
a marca fala.

### Hierarchy

- **Display** (Hanken 500, tracking −0,01 em): aberturas, capas e decks. Nunca
  na interface, nunca em números.
- **Title** (600, 24 px): título de página.
- **Section** (600, 18 px): título de bloco e de seção.
- **Body** (400, 16 px, entrelinha 1,5, medida máxima de 68ch): prosa e
  descrições.
- **UI** (400, 16 px): botões, campos, navegação, menus. **UI densa** (14 px):
  só tabela densa no desktop; no celular volta a 16.
- **Meta** (400, 14 px): datas, contagens, ajuda.
- **Label** (600, 13 px): rótulo de campo, tag, botão secundário. Frase normal.
- **Label Header** (600, 13 px, caixa alta, tracking 0,06 em): só cabeçalho de
  tabela e nome de KPI.
- **KPI** (500, 28 px, tabular): número de destaque.

### Named Rules

**The No Shrink Rule.** A escala não encolhe no celular. 16 px no desktop é 16
px a 360 px (F02, PG-GC-09-03).

**The Numbers In Montserrat Rule.** Todo número, em qualquer contexto, usa
Montserrat com `tnum` e `lnum`. A fonte de títulos nunca escreve números.

**The 12 px Floor Rule.** Nenhum texto abaixo de 12 px. Peso 300 saiu do
sistema.

## Layout

Grade de 4 px dentro dos componentes (padding 12, intervalo 8) e de 8 px entre
regiões e painéis (16, 24, 32). Controles têm 36 px no desktop e 44 px no toque;
a linha de tabela tem 36 px.

A tela de operação é uma bancada de três regiões fixas: navegação lateral escura
de 200 px, fila no centro e inspetor de 360 px à direita. Selecionar uma linha
atualiza o inspetor sem sair da fila. Filtros ficam como chips acima da tabela,
sempre visíveis quando ativos. Barra superior de 48 px.

No produto, blocos têm borda de 1 px e 12 px de intervalo. A calha de 2 px da
v3.0 sobrevive só como assinatura em páginas de marca do tema escuro.

Breakpoints: 1280 px, onde o inspetor vira gaveta; 900 px, onde a navegação vira
gaveta sob uma barra fixa e todo controle sobe para 44 px; 600 px, coluna única
e padding menor. No celular a fila vira lista e o objeto abre em tela cheia.
Conteúdo mais largo que a coluna rola dentro do próprio bloco; a página nunca
rola na horizontal.

**The Inspector Stays Rule.** Decidir não pode custar a visão da fila. O
inspetor convive com ela; só vira gaveta por falta de largura.

## Elevation & Depth

A página é plana. Profundidade só aparece no que flutua sobre ela: menu no nível
1; diálogo e toast no nível 3, com véu atrás do diálogo. O véu é
`rgba(17,20,24,.45)` no claro e `rgba(0,0,0,.6)` no escuro. No escuro, as
camadas ganham um contorno interno claro.

### Shadow Vocabulary

- **Nível 1**
  (`box-shadow: 0 0 0 1px rgba(17,20,24,.1), 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)`):
  menus e popovers.
- **Nível 3**
  (`box-shadow: 0 0 0 1px rgba(17,20,24,.1), 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 15px -3px rgba(0,0,0,.1)`):
  diálogos e toasts.
- **Nível 1 escuro**
  (`inset 0 0 0 1px rgba(255,255,255,.2), 0 1px 1px 0 rgba(0,0,0,.4), 0 1px 3px 0 rgba(0,0,0,.4)`).
- **Nível 3 escuro**
  (`inset 0 0 0 1px rgba(255,255,255,.2), 0 4px 8px rgba(0,0,0,.4), 0 18px 46px 6px rgba(0,0,0,.4)`).

**The Float Only Rule.** Sombra marca o que está acima da página, nunca um
painel da página.

## Shapes

Superfícies, blocos e regiões são retos (0). Controles (botão, campo, menu,
diálogo, toast, chip de filtro) têm 4 px; tags têm 3 px. Pílula (9999 px) só em
marca circular: dot de legenda, botão de rádio, switch. Barras de gráfico
arredondam 4 px só na ponta livre, com a base reta no zero.

Foco é um contorno de 2 px afastado 2 px, na cor de foco, sempre visível no
teclado (`:focus-visible`).

O símbolo é o D2 "Lâmina": dois anéis cortados no eixo, com a linha central
passando pelo corte sem tocá-los, sempre em uma cor. Construção, tamanhos
ópticos e arquivos em `~/Orison/Tatico/logos/README.md`. A variante crimson foi
retirada em 06-11-2026 e pode voltar como decisão futura.

**The Straight Surface Rule.** Raio é propriedade de controle, não de
superfície. Card arredondado não existe neste sistema.

## Components

Precisos e contidos: cada componente diz o que é e em que estado está, sem
depender só de cor.

### Buttons

- **Shape:** cantos de controle (4 px), altura 36 px (44 px no toque), padding
  lateral 12 px, ícone de 20 px.
- **Primary:** azul de ação com texto branco. Uma ação primária por região.
- **Secondary:** superfície com contorno de controle; hover em neutro.
- **Minimal:** só texto e ícone, para ações de baixa ênfase em barras e tabelas.
- **Danger:** vermelho de falha com texto branco; para ação irreversível, exige
  confirmação digitada no diálogo.
- **Icon-only:** quadrado de 36 px, sempre com dica (ver Overlays).
- **Hover / Active:** escurecem nos dois temas; nunca clareiam sob texto branco.
  **Disabled:** fundo neutro e texto desabilitado. **Loading:** spinner e verbo
  no gerúndio ("Aprovando…").

### Chips

- **Style:** filtros acima da tabela, contorno de controle, raio 4 px.
- **State:** ativo com contorno e texto em azul sobre o fundo de seleção, com
  botão de remover; "Limpar filtros" ao lado.

### Cards / Containers

- **Corner Style:** reto.
- **Background:** superfície sobre o canvas.
- **Shadow Strategy:** nenhuma (ver Elevation & Depth).
- **Border:** 1 px na cor de borda; 12 px entre blocos irmãos.
- **Internal Padding:** 16 px.

### Inputs / Fields

- **Style:** superfície elevada, contorno de controle, raio 4 px, 36 px de
  altura, rótulo acima (13 px, 600) e ajuda abaixo (14 px).
- **Focus:** contorno de foco de 2 px afastado 2 px.
- **Error / Disabled:** erro com borda dupla em vermelho e mensagem com ícone;
  desabilitado em neutro; somente leitura com borda tracejada.
- **Multi-select:** valores escolhidos viram tags neutras removíveis (fundo
  neutro, borda de 1 px, texto em tinta). O X tem área própria de 24 px,
  separada por um traço. Tag de valor nunca usa cor de estado.
- **Segmented control:** troca de vista ou janela do mesmo conteúdo, de 2 a 4
  opções. Trilho neutro; a opção ativa sobe como superfície elevada com sombra
  de nível 1. Não usa azul: escolher vista não é agir. Setas do teclado mudam a
  opção.

### Navigation

- **Style:** trilho lateral escuro de 200 px, itens de 36 px com ícone de 20 px,
  rótulo 14 px em 600 e contagem tabular à direita.
- **Active:** fundo do item ativo e barra de 3 px em azul à esquerda.
- **Mobile:** abaixo de 900 px vira gaveta sob a barra superior fixa.

### Tabs

Sublinhadas: barra de 3 px na cor de ação sob a aba ativa; contagem tabular ao
lado do rótulo.

### Overlays

- **Tooltip:** invertida (fundo em tinta, texto no canvas), 14 px, raio 4 e
  seta. Abre com hover após 300 ms e com foco; Esc fecha. Complementa o controle
  e nunca é o único lugar de uma informação.
- **Action menu:** nível 1. Seções com título em caixa alta, atalho à direita e
  divisores. A ação destrutiva fica sozinha no fim, em texto vermelho, sem
  fundo; reticências indicam que o item abre uma confirmação, e nada destrutivo
  executa direto do menu.
- **Confirmation dialog:** nível 3 com véu. Título em pergunta com o verbo, uma
  frase de consequência e um bloco de impacto (o que muda, risco,
  reversibilidade e owner) antes dos botões Cancelar e verbo. Ação irreversível
  acrescenta a confirmação digitada: o botão só habilita quando o texto confere.

### Feedback

- **Callout:** barra lateral de 3 px na cor do tipo, fundo tingido, ícone e
  título coloridos, texto em tinta.
- **Toast:** canto inferior direito, nível 3; sucesso some em 5 s (pausa com
  hover ou foco); falha fica até ser fechada. O toast nunca substitui o estado
  no objeto.
- **Undo:** só antes do writeback. O toast de sucesso traz "Desfazer" e fica 10
  s; essa janela é o atraso do envio. Depois que o destino aplicou, voltar atrás
  é "Reverter": uma nova proposta, com o próprio risco.
- **Progress:** barra de 4 px em tinta neutra, porque andamento não é resultado,
  com etapa e contagem em texto ("34 de 120 · etapa 3 de 4").
- **Empty state:** alinhado ao texto, com título, explicação (por que está vazio
  e quantos objetos existem fora do filtro) e ação de saída.

### Bulk Selection

Checkbox no cabeçalho com estado parcial. Ao marcar, a barra de filtros vira
barra de ações sobre o fundo de seleção: contagem, ações e "Limpar seleção". O
lote só reúne itens do mesmo nível de risco; ação irreversível nunca vai em
lote.

### Operational State (signature)

Oito estados: Proposta, Aguardando aprovação, Aprovada, Writeback enviado,
Reconciliando, Reconciliada, Divergente, Falhou. Na tabela, tag com ícone e
rótulo; os em andamento são neutros, só o resultado ganha cor. No inspetor,
cadeia vertical: cada etapa com hora e quem agiu, e a falha com motivo, owner e
remediação na própria etapa. Reconciliada não é outcome.

### Risk Tier (signature)

Acromático, por forma: baixo em texto; médio com contorno; alto preenchido em
tinta com escudo; irreversível preenchido em tinta com cadeado. Sem contrato de
risco aparece "Não classificado", nunca um nível inferido.

### Evidence Stage (signature)

Faixa dourada de ambiente quando a tela inteira é sintética ou demonstração;
selo tracejado em cada número quando estágios se misturam: capability,
ilustrativo, em operação, adotado, outcome medido. KPI de outcome sempre com
baseline, janela, critério e selo.

### Data Visualization

Séries em `data-1` a `data-4`, nessa ordem; a cor segue a entidade, nunca a
posição. Até quatro séries por gráfico; da quinta em diante, "Outros" ou
gráficos pequenos. Linhas de 2 px, grade recessiva, um eixo só, legenda a partir
de duas séries, rótulo direto até quatro, dica ao passar o mouse e vista em
tabela.

### Icons

Desenho Lucide adaptado: traço 2 na grade de 24, terminações e junções retas. 16
px em texto e tag, 20 px em botão e navegação. O catálogo cresce ícone por
ícone; são 28 em `exploracao/fusao/icones/` (22 da F05 e 6 da F10).

### Motion

Fora de escopo até nova decisão. Permitido só o feedback: hover, foco, abertura
de gaveta e diálogo. `prefers-reduced-motion` colapsa durações para `0.01s` e
alcança também o agendamento em JavaScript.

## Do's and Don'ts

### Do:

- **Do** usar azul só em ação, link, foco, aba ativa e seleção.
- **Do** acompanhar toda cor de estado e de risco com texto e ícone
  (PG-GC-09-01).
- **Do** mostrar motivo, owner e remediação em toda falha (DC-GC-09-008).
- **Do** dizer, no mesmo lugar do claim, o que o número comprova e o que não
  comprova (DC-GC-09-005, DC-GC-09-009).
- **Do** escrever todo número em Montserrat tabular.
- **Do** manter todo texto acima de 4,5:1 e toda borda de controle e foco acima
  de 3:1 no tema em que aparecem.
- **Do** dar 44 px de alvo de toque abaixo de 900 px.
- **Do** pedir confirmação digitada para ação irreversível.

### Don't:

- **Don't** usar crimson em ação, erro, risco, dado ou texto.
- **Don't** usar verde, laranja ou vermelho para estado em andamento ou série de
  dados.
- **Don't** inferir um nível de risco que o contrato não deu.
- **Don't** apresentar reconciliação, mock ou capability como outcome.
- **Don't** arredondar superfície nem usar pílula fora de marca circular.
- **Don't** pôr sombra em painel da página.
- **Don't** encolher a escala de texto no celular nem usar peso 300.
- **Don't** usar dois eixos y num mesmo gráfico.
- **Don't** importar o Blueprint inteiro, seus ícones ou componentes como DS da
  Orison (DC-GC-09-016).
- **Don't** escrever texto abaixo de 12 px.

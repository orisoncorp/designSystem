# Fusão com as referências da Palantir · plano de rodadas

Data: 06-11-2026.

Branch: `refactor/ds-v4`.

Decisões de base: `docs/arquitetura-ds-v4.md`, seção 5.

## Método

Mesmo esquema do logo. Cada rodada decide um assunto, numa página HTML em
`exploracao/fusao/`, com opções lado a lado e votação. Nada entra em
`tokens.css` antes da aprovação da rodada.

Em toda rodada:

1. **Os dois temas.** Cada opção aparece no tema escuro (marca) e no claro
   (produto), saindo dos mesmos tokens semânticos.
2. **Contraste calculado.** A página mede a razão WCAG de cada par de texto e
   fundo e marca o que fica abaixo de 4,5:1. Legibilidade máxima é o critério de
   desempate (DR-09, F-GC-09-07 e PG-GC-09-03).
3. **Números em Montserrat.** Algarismos tabulares e alinhados em toda métrica,
   tabela e KPI.
4. **Origem explícita.** Cada valor diz de onde veio: Orison v3.0, piloto,
   Tatico ou Blueprint (pacote público, Apache-2.0).
5. **Item a item.** A DR-09 veta importar o Blueprint inteiro como DS
   (DC-GC-09-016). A aprovação individual de cada item é o que transforma a
   referência em decisão própria.

## Fontes

| Fonte                      | Caminho                                                |
| -------------------------- | ------------------------------------------------------ |
| Piloto (tokens)            | `~/Palantir/piloto/frontend/src/tokens.css`            |
| Piloto (UI e padrões)      | `~/Palantir/piloto/frontend/src/` e `piloto/DESIGN.md` |
| Tatico (referência)        | `~/Orison/Tatico/design-palantir.md` (v1.1)            |
| Tatico (overview)          | `~/Orison/Tatico/palantir-overview/`                   |
| Blueprint verificado (REA) | `~/Palantir/pesquisas/frontend-rea-2026-10-26/design/` |
| Atlas e evidências         | `~/Umbrella/Elpis/kb/comercial/design/references/`     |
| DR-09 (gate e bruta)       | `~/Palantir/conversao/dr-09.md`, `fontes/drs/dr-09.md` |

## Rodadas

| #   | Assunto                 | Decide                                           |
| --- | ----------------------- | ------------------------------------------------ |
| F01 | Cor base                | rampa neutra, cor de ação, cores de status       |
| F02 | Tipografia de interface | escala de UI, pesos, números, piso móvel         |
| F03 | Espaço e densidade      | base 4 ou 8, alturas de controle, toque          |
| F04 | Forma e profundidade    | raio de controle, bordas, elevação, foco         |
| F05 | Iconografia             | grade, traço, tamanhos, conjunto                 |
| F06 | Semântica operacional   | estado, risk tier, estágio de evidência          |
| F07 | Componentes básicos     | botão, campo, tag, callout, toast, abas, diálogo |
| F08 | Padrões de operação     | fila, inspetor, tabela densa, estado vazio       |
| F09 | Visualização de dados   | paleta categórica, gráficos, KPI                 |

Depois da F09: fundir `orisonDesign.md` e o `DESIGN.md` grafite num único
`DESIGN.md`, reorganizar o site na navegação da arquitetura v4 e gerar o export
DTCG dos tokens.

## Registro

Cada rodada fechada ganha um bloco aqui, com data, escolhas e notas.

### F01 · Cor base · 06-11-2026

Escolhas: N2 · A1 · S1.

- N2 (neutra fria do Blueprint) pela usabilidade em sessões longas de operação.
  A N1 (quente) era a preferida estética.
- Ação em azul. Verde, laranja e vermelho só para feedback e resultado.
- S1 por decisão do condutor. O Nobel não viu diferença entre S1 e S2; a S1 foi
  testada no piloto e o vermelho fica mais distante do crimson.

### F02 · Tipografia · 06-11-2026

Escolhas: T3 · W2 · L3 · D2.

- Escala legível: corpo e interface 16, rótulo 13, metadado 14, título 24,
  KPI 28.
- Pesos 400 e 600; números em 500.
- Caixa alta só em cabeçalho de tabela e nome de KPI.
- Títulos de marca em Hanken Grotesk 500.
- Nuance aprovada: a tabela densa no desktop pode usar 14 px; no celular, 16.

### F03 · Espaço e densidade · 06-11-2026

Escolhas: E3 · H2 · R2 · G2.

- Base 4 nos componentes e 8 no layout.
- Controles de 36 px, toque de 44 px.
- Linha de tabela de 36 px.
- Blocos com borda de 1 px e intervalo de 12.
- Nuance aprovada: a calha de 2 px da v3.0 pode sobreviver só nas páginas de
  marca do tema escuro.

### F04 · Forma e profundidade · 06-11-2026

Escolhas: K2 · P2 · O1 · V1.

- Raio de 4 px em controle (botão, campo, menu, diálogo) e 3 px em tag. Painéis,
  blocos e regiões continuam retos. A invariante 5 muda para aceitar esses dois
  valores em controle.
- Sombra só no que flutua: menu no nível 1; diálogo e aviso no nível 3. Painéis
  da página são planos.
- Foco: contorno de 2 px, afastado 2 px, na cor de foco da F01.
- Tabela só com divisores horizontais.

### F05 · Iconografia · 06-11-2026

Escolhas: I3 · T2 · Z2.

- Desenho do Lucide (ISC) com terminações e junções retas.
- Traço 2 na grade de 24.
- 16 px em texto e tag; 20 px em botão e navegação.
- Catálogo inicial de 22 ícones salvo em `exploracao/fusao/icones/`, com a
  licença original.

### F06 · Semântica operacional · 06-11-2026

Escolhas: E1 · R1 · L3.

- Oito estados: Proposta, Aguardando aprovação, Aprovada, Writeback enviado,
  Reconciliando, Reconciliada, Divergente, Falhou. Em andamento são neutros; só
  Reconciliada (verde), Divergente (laranja) e Falhou (vermelho) têm cor.
- Inspetor com cadeia vertical: cada etapa com hora e quem agiu; a falha traz
  motivo, owner e remediação na própria etapa.
- Risco sem cor: baixo em texto, médio com contorno, alto preenchido em tinta
  com escudo, irreversível preenchido com cadeado. Sem contrato: "Não
  classificado", nunca um nível inferido.
- Evidência: faixa de ambiente quando a tela inteira é sintética ou
  demonstração, e selo em cada número quando estágios se misturam.

### F07 · Componentes básicos · 06-11-2026

Escolhas: B3 · C1 · A1 · T1.

- Botões: primário azul, secundário com contorno, mínimo (texto e ícone, sem
  fundo) para baixa ênfase, perigo vermelho. Hover e pressionado escurecem nos
  dois temas para manter o contraste com o texto branco.
- Alerta em bloco com barra lateral de 3 px e fundo tingido.
- Abas sublinhadas, com barra de 3 px na cor de ação.
- Toast no canto inferior direito; sucesso some em 5 s (pausa com hover ou
  foco); falha fica até ser fechada.
- A folha de componentes (estados de botão, campo, seleção, tag, alerta, abas e
  toast) foi apresentada com essas escolhas, sem objeção do Nobel.

### F08 · Padrões de operação · 06-11-2026

Escolhas: L1 · N1 · F1 · E2.

- Bancada em três regiões fixas: navegação, fila e inspetor de 360 px. Abaixo de
  1280 px de largura, o inspetor vira gaveta.
- Navegação lateral escura (200 px), com contagem por item.
- Filtros como chips acima da tabela, com busca e "Limpar filtros".
- Estado vazio alinhado ao texto: título, explicação e ação, sem ícone grande.

### F09 · Visualização de dados · 06-11-2026

Escolhas: C3 · K3 · B2.

- Paleta de séries própria, validada nos dois temas com todos os pares: índigo
  `#7961DB`, turquesa `#00A396`, rosa `#DB2C6F`, ouro `#eda100` (claro) e
  `#c98500` (escuro). Nenhuma é azul de ação nem cor de status.
- No máximo quatro séries por gráfico; da quinta em diante, "Outros" ou gráficos
  pequenos lado a lado.
- A qualitativa do Blueprint foi reprovada no validador (dourado e verde com ΔE
  1,7 em protanopia; cinco cores fora da faixa no escuro).
- KPI com baseline, janela, critério e selo de evidência.
- Barras com a ponta livre arredondada em 4 px e base reta no zero.

## Notas para o novo DESIGN.md

Decisões que o `DESIGN.md` unificado precisa registrar como norma, além dos
tokens em `exploracao/fusao/tokens-v4.css`:

- **Cor (F01).** Azul é a única cor de ação. Verde, laranja e vermelho são
  reservados a feedback e resultado. O crimson é só identidade: não marca ação,
  erro nem risco.
- **Neutra (F01).** A rampa fria foi escolhida pela usabilidade em sessões
  longas de operação, não por estética.
- **Números (F02).** Montserrat com algarismos tabulares e alinhados em toda
  métrica, tabela e KPI. A fonte de títulos nunca é usada em números.
- **Escala (F02).** A escala não encolhe no celular. A tabela densa no desktop
  pode descer a 14 px; no celular fica em 16.
- **Pesos (F02).** 400 para texto, 600 para rótulo, botão e título, 500 para
  número. Peso 300 sai do sistema.
- **Rótulos (F02).** Frase normal por padrão. Caixa alta, com tracking de 0,06
  em, só em cabeçalho de tabela e nome de KPI.
- **Títulos de marca (F02).** Hanken Grotesk 500, a família do wordmark, só em
  expressão de marca (aberturas, capas, decks). Nunca na interface.
- **Espaço (F03).** Base 4 dentro dos componentes (padding 12, intervalo 8);
  base 8 entre regiões e painéis (16, 24, 32).
- **Controles (F03).** 36 px no desktop, 44 px no celular. A linha de tabela tem
  36 px; no celular a tabela vira lista.
- **Blocos (F03).** No produto, cada bloco tem borda de 1 px e 12 px de
  intervalo. A calha de 2 px da v3.0 pode ficar só nas páginas de marca do tema
  escuro, como assinatura; nunca no produto.
- **Raio (F04).** 4 px em controle e 3 px em tag; superfície, bloco e região
  com 0. A invariante 5 do `verify` precisa ser reescrita para separar controle
  de superfície.
- **Profundidade (F04).** Sombra só em camada flutuante (menu, diálogo, aviso).
  A página é plana; o véu atrás do diálogo também separa a camada.
- **Foco (F04).** Contorno de 2 px, afastado 2 px, sempre visível no teclado
  (`:focus-visible`).
- **Tabela (F04).** Divisores só horizontais; linha selecionada com fundo e
  barra de 3 px na cor de ação.
- **Ícones (F05).** Desenho do Lucide adaptado: traço 2, terminações e junções
  retas. O DS adota ícone por ícone, nunca o catálogo inteiro (DC-GC-09-016). Em
  estado e risco, o ícone sempre vem com rótulo.
- **Estado (F06).** Estado, risco e evidência são três eixos e nunca dividem um
  mesmo canal visual. Estado em andamento é neutro; cor só no resultado.
  Reconciliada não é outcome.
- **Falha (F06).** Toda falha mostra motivo, owner e remediação no mesmo lugar;
  nunca vira sucesso por apresentação (DC-GC-09-008).
- **Risco (F06).** Escala acromática por forma, texto e ícone. Ação irreversível
  pede confirmação digitada e botão de perigo (DC-GC-09-004).
- **Evidência (F06).** Toda peça diz o que representa e o que não comprova, no
  mesmo lugar do claim: capability, ilustrativo, em operação, adotado ou outcome
  medido com baseline (DC-GC-09-005, DC-GC-09-009).
- **Botões (F07).** Quatro variantes: primário, secundário (contorno), mínimo e
  perigo. Uma ação primária por região. Hover e pressionado escurecem; nunca
  clareiam sob texto branco.
- **Feedback (F07).** Alerta persistente em bloco com barra lateral. Toast só
  para confirmação; falha nunca some sozinha e o toast não substitui o estado no
  objeto.
- **Abas (F07).** Sublinhado na cor de ação; a cor marca a aba ativa, não uma
  ação.
- **Bancada (F08).** Navegação, fila e inspetor convivem; selecionar uma linha
  atualiza o inspetor sem sair da fila. Abaixo de 1280 px o inspetor vira
  gaveta; no celular a fila vira lista e o objeto abre em tela cheia. Pendente
  para o DESIGN.md: conciliar 1280 px com os breakpoints atuais (1120, 900,
  600).
- **Filtros (F08).** O filtro ativo fica sempre visível como chip acima da
  tabela, com raio de controle (4 px), nunca pílula.
- **Vazio (F08).** Nunca tela em branco: diz por que está vazio, quantos objetos
  existem fora do filtro e oferece a saída.
- **Dados (F09).** Séries em índigo, turquesa, rosa e ouro, nessa ordem; a cor
  segue a entidade, nunca a posição. Rosa e turquesa ficam na faixa de atenção
  para deuteranopia e o ouro abaixo de 3:1 no claro: rótulo direto e vista em
  tabela são obrigatórios. Um eixo só; legenda a partir de duas séries; texto
  sempre na cor de texto; dica ao passar o mouse.
- **KPI (F09).** Número de outcome só com baseline, janela, critério e selo de
  evidência. Variação simples não sustenta claim de resultado.
- **Barras (F09).** Ponta livre com 4 px, base reta no zero, 2 px de intervalo
  entre barras vizinhas.

## Depois das rodadas

- 06-11-2026: `DESIGN.md` v4.0.0 escrito a partir destas notas e dos tokens
  aprovados. Metáfora-guia escolhida pelo Nobel: "A Bancada de Decisão".
  `orisonDesign.md` e o `DESIGN.md` grafite foram substituídos (ficam na tag
  `ds-v3.0`). Breakpoints 1280, 900 e 600 por decisão do condutor, a confirmar
  na implantação.
- 06-11-2026: v4 implantada no site. `tokens.css` v4 (claro e escuro dos mesmos
  nomes), CSS novo em oito camadas, 21 seções em sete grupos (Início, Marca,
  Fundamentos, Componentes, Padrões, Conteúdo, Recursos), sprite do logo D2, 22
  ícones, `verify` com dez invariantes v4 e export DTCG em
  `tokens/orison.tokens.json`. A variante crimson do logo foi retirada pelo
  Nobel e pode voltar no futuro.

## Próximas rodadas (proposta)

Elementos que a DR-09 e as extrações citam e que ainda não passaram por
aprovação. Cada rodada aprova um lote por família, item a item (incluir, ajustar
ou deixar de fora), porque cor, tipo, forma e semântica já estão decididos: a
rodada decide o que entra e como se arranja.

| #   | Lote                         | Itens                                             |
| --- | ---------------------------- | ------------------------------------------------- |
| F10 | Componentes complementares   | tooltip, tag removível, checkbox indeterminado,   |
|     |                              | controle segmentado, toast com desfazer, menu     |
| F11 | Padrões de aplicação         | object view, proposta com diff, trace e linhagem, |
|     | (Foundry, AIP, Gotham)       | assistente com contexto, visão de rede, timeline  |
| F12 | Peças de marca e comunicação | hero de site, banners, capa e slides de deck,     |
|     | (MAP-GC-09-D)                | capa de proposta, assinatura, LinkedIn, cartão    |
| F13 | Motion de feedback           | só se o Nobel reabrir o tema                      |

Fontes: `~/Orison/Tatico/palantir-overview/` (réplicas de botão, campo, tag,
callout, seleção, navegação, sobreposição, feedback, tabela, inspetor e rede),
`~/Palantir/pesquisas/frontend-palantir-2026-10-13.*` (35 telas de Foundry, AIP
e Gotham), o piloto e o atlas da Elpis.

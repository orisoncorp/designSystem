# Cobertura das interfaces da Palantir no DS v4

Data: 06-11-2026.

Auditoria pedida pelo Nobel depois da F12: conferir se as interfaces de Foundry,
Gotham e AIP extraídas para a Orison estão cobertas pelo design system,
incluindo o movimento nativo das partes interativas.

## Fontes conferidas

- `~/Palantir/pesquisas/frontend-palantir-2026-10-13.md` e a versão HTML (35
  páginas: 8 padrões Palantir, 5 telas Gotham, 6 telas Foundry, catálogo de
  cerca de 60 widgets do Workshop, componentes Blueprint, 32 animações
  nomeadas).
- `~/Palantir/pesquisas/frontend-rea-2026-10-26/` (estados de interação, chat
  com streaming, frescor de dados, ponte host/widget).
- `~/Orison/Tatico/palantir-overview/` (réplicas de componentes Blueprint e a
  demonstração de interfaces).
- `~/Orison/Tatico/design-palantir.md` (tokens de movimento, estados de dado,
  piso de craft).
- O piloto em `~/Palantir/piloto/`.

## Critério

Cada item recebe um de quatro estados:

- **Coberto:** existe no site e no `DESIGN.md`.
- **Parcial:** a base existe, mas falta uma parte que a fonte mostra.
- **Falta:** não existe e serve à Orison.
- **Fora:** não serve à Orison agora, com o motivo.

## Padrões Palantir (8)

| Padrão                  | Estado  | O que existe ou falta                      |
| ----------------------- | ------- | ------------------------------------------ |
| Shell de aplicação      | Parcial | nav lateral e barra; falta trilho de apps  |
|                         |         | e barra de contexto entre aplicações       |
| Faixa de classificação  | Falta   | marcação de sensibilidade do dado (LGPD,   |
|                         |         | dado de cliente); a faixa dourada só diz   |
|                         |         | que o ambiente é sintético                 |
| Painel Selection        | Parcial | inspetor existe; faltam seções recolhíveis |
| Toolbar flutuante       | Falta   | ferramentas sobre o canvas (rede, mapa)    |
| Menu de contexto        | Coberto | F10 · M3                                   |
| Filtro por histograma   | Parcial | histograma de tempo (F11 · H1); faltam     |
|                         |         | facetas com contagem e "Filtrar para" /    |
|                         |         | "Excluir"                                  |
| Representação de objeto | Parcial | nós da rede; falta a regra única de ícone  |
|                         |         | por tipo em tabela, busca, rede e mapa     |
| Commands entre apps     | Falta   | "Enviar para", seleção sincronizada,       |
|                         |         | arrastar e soltar                          |

## Telas Gotham

| Tela             | Estado  | O que existe ou falta                      |
| ---------------- | ------- | ------------------------------------------ |
| Gaia (mapa)      | Falta   | mapa operacional com seleção e camadas     |
| Graph / Vertex   | Parcial | rede simples e aprofundada (F11); faltam   |
|                  |         | expandir vizinhos (Search Around) e trocar |
|                  |         | layout                                     |
| Target Workbench | Falta   | quadro em colunas (fila por estado)        |
| Inbox            | Falta   | triagem de alertas e mensagens com ações   |
| Workspace 2.x    | Fora    | cliente legado; só valor histórico         |

## Telas Foundry e AIP

| Tela            | Estado  | O que existe ou falta                         |
| --------------- | ------- | --------------------------------------------- |
| Workshop        | Parcial | tabela, filtros, KPI, gráfico, página do      |
|                 |         | objeto, confirmação; faltam lista de filtros  |
|                 |         | lateral e formulário de action com campos     |
| Object Explorer | Falta   | busca global e página de resultados           |
| AIP Analyst     | Parcial | assistente (F11 · A1); faltam resposta em     |
|                 |         | streaming, parar e gráfico gerado na conversa |
| Pilot           | Fora    | ferramenta de construção de apps              |
| Slate           | Fora    | editor de código                              |

## Widgets do Workshop relevantes

| Widget                      | Estado  | Nota                              |
| --------------------------- | ------- | --------------------------------- |
| Object Table, Object View   | Coberto | tabela, página do objeto          |
| Metric Card, Chart XY       | Coberto | KPI, gráficos F09                 |
| Timeline, Edit History      | Coberto | histórico F11 · H1                |
| Action Log Timeline         | Coberto | trace F11 · T2                    |
| Filter List                 | Falta   | facetas laterais                  |
| Date and Time Picker        | Falta   | data e período                    |
| User Select                 | Falta   | escolher owner ou responsável     |
| Comments                    | Falta   | comentário no objeto              |
| Media Uploader, PDF Viewer  | Falta   | anexo de evidência                |
| Mobile Navigation Bar       | Falta   | operador no celular (PG-GC-09-03) |
| Gantt, Pivot Table          | Fora    | sem caso de uso na Orison hoje    |
| Image Annotation, Video, QR | Fora    | sem caso de uso na Orison hoje    |

## Componentes Blueprint e estados

| Item                          | Estado  | Nota                             |
| ----------------------------- | ------- | -------------------------------- |
| Botão, campo, tag, callout    | Coberto | F07                              |
| Tooltip, menu, diálogo, toast | Coberto | F07, F10                         |
| Progresso, spinner            | Coberto | F07, F10                         |
| Segmentado, checkbox parcial  | Coberto | F10                              |
| Gaveta (drawer)               | Falta   | a norma cita, o componente falta |
| Esqueleto de carregamento     | Falta   | carregar sem pular layout        |
| Dado desatualizado            | Falta   | frescor visível (achado do REA)  |
| Sem permissão                 | Falta   | limite real e como pedir acesso  |
| Omnibar e atalhos             | Falta   | busca global (Ctrl K)            |
| Árvore, slider, numeric input | Fora    | sem caso de uso na Orison hoje   |

## Movimento

O DS tem só o feedback de controle (120 ms). O estudo de frontend usa 32
animações nomeadas, em 120 a 340 ms, com `prefers-reduced-motion`. O Blueprint
usa 100 ms; o site da Palantir, 75 a 350 ms.

| Movimento na fonte                       | Estado  |
| ---------------------------------------- | ------- |
| Feedback de controle (hover, pressão)    | Coberto |
| Entrada de popover, menu, tooltip        | Falta   |
| Diálogo e gaveta                         | Falta   |
| Entrada e saída de toast                 | Falta   |
| Seleção sincronizada entre vistas        | Falta   |
| Barras e números do valor antigo ao novo | Falta   |
| Esqueleto e barra de progresso           | Falta   |
| Resposta do assistente em streaming      | Falta   |
| Zoom, pan e layout interpolado no canvas | Falta   |
| Reprodução de trilhas no tempo (Gaia)    | Falta   |
| Entrada de página e listas em cascata    | Fora    |

A entrada de página e a cascata de listas ficam fora pela DC-GC-09-011
(movimento para feedback, não para teatro).

## Plano

Três rodadas, na ordem em que uma depende da outra:

1. **F13 · Componentes e estados que faltam:** seções recolhíveis, filtro
   facetado, frescor e carregamento, sensibilidade do dado, formulário de
   action, data e período, comentários, anexos, gaveta, navegação móvel.
2. **F14 · Interfaces que faltam:** shell com trilho e commands, inbox, busca
   global, quadro por estado, mapa, toolbar de canvas, assistente com streaming
   e gráfico, representação de objeto.
3. **F15 · Movimento de interação:** reabre o motion só para o que comunica
   estado, continuidade e progresso, aplicado a tudo o que as rodadas anteriores
   aprovarem.

Fora do alicerce da Palantir, o Nobel acrescentou depois a F15 · telas de
sistema (login, usuários e permissões, configurações); o movimento passou a F16.
Depois da F16: exportar as decisões para a Elpis e juntar `refactor/ds-v4` no
`main`.

## Fechamento

06-11-2026: F13, F14, F15 e F16 foram aprovadas e implantadas (v4.4.0 a v4.7.0).
Todo item marcado como Parcial ou Falta nesta auditoria passou a Coberto; os
itens Fora continuam fora, pelos motivos registrados.

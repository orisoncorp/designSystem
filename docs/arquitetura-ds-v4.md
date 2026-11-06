# Arquitetura do Design System v4 · proposta

Estado: proposta com as cinco decisões tomadas (seção 5). A estrutura ainda
não foi implementada, exceto a retirada de Motion, Command Center e Voz.

Data: 06-11-2026.

Branch: `refactor/ds-v4`. A v3.0 completa está preservada na tag `ds-v3.0`.

## 1. O problema

O DS atual mistura quatro naturezas de conteúdo numa única sequência de seções,
e a norma técnica está espalhada entre o site e cinco documentos.

| Natureza            | Onde está hoje                               |
| ------------------- | -------------------------------------------- |
| Identidade de marca | seções 01–05, 09, 10, 12                     |
| Fundamentos (token) | seções 06–08                                 |
| Narrativa e voz     | seção 11 ("Narrativa Central", "Inevitável") |
| Interface (UI)      | seções 13, 31–33                             |
| Meta                | seção 37 (quickstart, regras, changelog 2→3) |

Sintomas concretos encontrados:

- **Norma digitada à mão diverge do código.** A seção 13 especifica o badge como
  "Montserrat · 8px · 3px tracking"; a seção 32 manda labels de gráfico em
  "micro (8px)" e valores em "body (11px)". As três violam as invariantes 1 e 2,
  que o `verify` só checa no CSS, não no texto documentado.
- **A mesma regra vive em vários lugares.** As invariantes estão em `CLAUDE.md`,
  `AGENTS.md`, `orisonDesign.md` e na seção 37. A tipografia está em quatro
  lugares. Cada cópia é um ponto de divergência.
- **Dois documentos normativos no mesmo formato.** `orisonDesign.md` (v3.0) e
  `DESIGN.md` (variante grafite, não rastreada) seguem a mesma estrutura de
  seções e descrevem temas diferentes da mesma identidade.
- **Narrativa dentro do sistema.** Personalidade "Inevitável" e Narrativa
  Central são estratégia de comunicação. A DR-09 (DC-GC-09-012) separa o tom
  interno da voz externa, proporcional à prova; isso não pertence ao DS.
- **Falta o que um DS de produto precisa.** Não há iconografia, semântica
  operacional (estado, risco, estágio de evidência), página de acessibilidade,
  matriz de estados por componente nem regra de entrada de componente novo.

## 2. Referências

### Palantir (DR-09, KIT-09, atlas da Elpis)

- **Três sistemas, não um.** Marca e web; Blueprint, o toolkit aberto;
  aplicações Foundry e AIP (CT-K09-10). Blueprint não é brandbook, e o brandbook
  não é toolkit.
- **Três camadas com autoridades diferentes** (MAP-GC-09-A):
  1. Marca: identidade e reconhecimento.
  2. Semântica operacional: estado e risco da ação.
  3. Evidência: baseline, reconciliação e outcome.
- **Contexto define a regra** (MAP-GC-09-D). Marca externa, deck, mock e produto
  móvel não compartilham uma única tipografia densa.
- **Marca acromática, produto colorido** (MC-09-002). A cor do produto é
  semântica (intent), não de marca. Cor de marca não classifica Action
  (DC-GC-09-002).
- **Taxonomia do atlas visual:** princípios, cor, tipografia, espaçamento e
  grid, formas e raios, elevação, iconografia, motion, z-index, moléculas,
  organismos, templates e padrões, governança.
- **Limite:** não importar Blueprint, cores, ícones ou componentes como DS
  Orison (DC-GC-09-016). Copiamos a arquitetura, não o conteúdo.

### Mercado

- **Atlassian:** Brand, Foundations, Content, Components, Patterns, Resources.
- **Shopify Polaris:** Foundations, Content, Design, Tokens, Components,
  Patterns. Voz e microcopy são camada própria.
- **IBM Carbon:** cada componente em abas de uso, código e acessibilidade. A
  marca (IBM Design Language) vive fora do Carbon.

Espinha comum: fundamentos, componentes e padrões. Marca e conteúdo ficam ao
lado, não misturados.

### Padrões abertos

- **DTCG 2025.10:** formato estável de design tokens do W3C Community Group
  (outubro de 2025). Lido por Style Dictionary, Tokens Studio e Terrazzo.
- **DESIGN.md (Google Labs, alpha):** tokens em front matter YAML mais prosa em
  seções fixas, para agentes de código. O `orisonDesign.md` já usa esse formato.

## 3. Princípios da v4

1. **Uma norma, um lugar.** Valor de token só existe em `tokens.css`; o site e
   os documentos o leem, nunca o redigitam.
2. **Marca separada de produto.** Identidade de um lado; fundamentos,
   componentes e padrões de interface do outro.
3. **Semântica antes de estética.** Estado, risco e evidência têm tokens e
   componentes próprios, com redundância de texto, ícone e forma.
4. **Site é vitrine da norma, não a norma.** Cada página mostra o espécime vivo
   e aponta para o token e para o `DESIGN.md`.
5. **Custo de manutenção conta** (DC-GC-09-019, PG-GC-09-05). Só entra o que
   resolve incerteza real de quem usa.

## 4. Estrutura proposta

### 4.1 Artefatos do repositório

| Artefato                    | Papel                                       |
| --------------------------- | ------------------------------------------- |
| `src/tokens/tokens.css`     | Verdade executável dos tokens               |
| `tokens/orison.tokens.json` | Export DTCG 2025.10 gerado do CSS           |
| `DESIGN.md`                 | Única norma escrita (humanos e agentes)     |
| `CHANGELOG.md`              | Versões e quebras, fora do site             |
| `docs/decisoes/`            | Registro de decisões (logo v2, esta v4)     |
| `CLAUDE.md`, `AGENTS.md`    | Só como trabalhar no repo; apontam p/ norma |
| site (`src/`)               | Documentação viva com espécimes             |

O `orisonDesign.md` e o `DESIGN.md` grafite se fundem num só `DESIGN.md`. O tema
grafite vira uma seção de temas, não um segundo documento.

### 4.2 Navegação do site

1. **Início:** o que é o sistema, quickstart, princípios, versão.
2. **Marca:**
   - símbolo (D2 e variante crimson);
   - lockups;
   - área de proteção;
   - tamanhos ópticos e favicon;
   - usos incorretos;
   - aplicações (cartão, assinatura, capa de proposta, LinkedIn);
   - downloads.
3. **Fundamentos:**
   - cor (marca separada de semântica);
   - tipografia;
   - espaçamento e grid;
   - forma;
   - elevação;
   - iconografia;
   - acessibilidade;
   - temas (escuro, claro, grafite).
4. **Componentes:** um por página, com anatomia, variantes, estados, quando
   usar, acessibilidade e tokens consumidos. Hoje: botão, badge, input e tabela.
   A entrada de cada componente novo passa pelo gate da seção 4.4.
5. **Padrões:**
   - semântica operacional: estado (proposta, aprovação, execução,
     reconciliação, falha), risk tier, estágio de evidência;
   - formulários;
   - tabelas densas;
   - visualização de dados (paleta, gráficos, KPI).
6. **Conteúdo:** microcopy de interface em PT-BR (rótulos, erros, estados
   vazios) e a regra de claim proporcional à prova. Sem narrativa de marca.
7. **Recursos:** tokens (CSS e DTCG), `DESIGN.md`, logos, changelog.

### 4.3 O que sai, o que entra

| Sai do DS                        | Destino                         |
| -------------------------------- | ------------------------------- |
| Motion System (14–29)            | tag `ds-v3.0`; decidir depois   |
| Command Center (30, 34–36)       | tag `ds-v3.0`; decidir depois   |
| Narrativa Central, personalidade | OrisonOS ou Elpis (comunicação) |
| Changelog 2.0 → 3.0 na seção 37  | `CHANGELOG.md`                  |
| Valores digitados nas specs      | `data-token-value` do token     |
| Doze classes-alias da v2.0       | remoção depois da reorganização |

| Entra no DS                              | Base                         |
| ---------------------------------------- | ---------------------------- |
| Logo v2 (D2, crimson, tamanhos ópticos)  | `logos/README.md`            |
| Cor semântica separada da marca          | DC-GC-09-002, F-GC-09-02     |
| Estado, risk tier e estágio de evidência | DC-GC-09-003, 004 e 005      |
| Iconografia (grade, traço, tamanhos)     | atlas: Blueprint 16/20 px    |
| Página de acessibilidade                 | contrato atual + PG-GC-09-03 |
| Tema claro de produto                    | piloto (superfície clara)    |
| Export DTCG dos tokens                   | DTCG 2025.10                 |
| Gate de entrada de componente            | PG-GC-09-01 e PG-GC-09-05    |

### 4.4 Governança

Um componente só entra no DS depois de responder, por escrito:

1. Que incerteza do operador ou do comprador ele elimina.
2. Se texto, ícone ou componente existente já resolve.
3. Que estados e que risk tier ele precisa mostrar, com redundância não
   cromática.
4. Quanto custa manter, em horas Founder.

Sem as quatro respostas, o componente espera.

## 5. Decisões reservadas ao Nobel

1. **Um site ou dois.** Recomendação: um repositório e um site, com Marca e
   Sistema em partes separadas. Dois sites dobram a manutenção sem ganho claro
   hoje.
2. **Tipografia.** O nome agora é Hanken Grotesk. A interface continua em
   Montserrat e a expressão em Cormorant? Recomendação: testar Hanken como
   família de texto e interface e decidir o display depois do teste.
3. **Tema base.** Recomendação: escuro para marca e comunicação; claro como tema
   de produto, como no piloto. Os dois saem dos mesmos tokens semânticos.
4. **Papel do crimson.** Com o logo neutro, o crimson vira acento de marca.
   Recomendação: tirá-lo da semântica de erro (hoje crimson = negative-hi) e
   criar uma cor própria para risco e falha.
5. **Narrativa e voz.** Recomendação: mover para o OrisonOS (ou Elpis
   `kb/comercial`). No DS fica só a microcopy de interface.

### Decididas pelo Nobel em 06-11-2026

1. Um único site, com Marca e Sistema separados.
2. Montserrat continua, sobretudo nos números. Legibilidade máxima, como
   pede a DR-09.
3. Escuro para marca e comunicação, claro para produto, os dois dos mesmos
   tokens semânticos.
4. O crimson sai da semântica de erro e risco.
5. Narrativa e voz saem do DS (seção 11 apagada; backup feito pelo Nobel).

A fusão com as referências da Palantir segue em rodadas de aprovação:
`docs/fusao-palantir.md`.

## 6. Já executado nesta etapa

Retirada de Motion e Command Center, a pedido do Nobel:

- Removidas as seções 14–30 e 34–36, `orisonMotion.md`, `symbol-animated.svg`,
  `motion-components.css` e `motion-animations.css`.
- As classes ainda usadas pelas seções 31–33 foram extraídas para
  `src/styles/dataviz.css`.
- `motion-tokens.css` ficou com os quatro tokens ainda consumidos.
- Os gráficos e os KPIs agora aparecem no estado final, sem botões de animar.
- Corrigida a barra do gráfico de barras, que pendia do topo desde a v3.0.
- `main.js` caiu de 1678 para cerca de 400 linhas.
- `CLAUDE.md` e `AGENTS.md` atualizados.
- `npm run build` passa com as 9 invariantes íntegras.

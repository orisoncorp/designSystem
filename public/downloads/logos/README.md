# Logos Orison

Os arquivos na raiz desta pasta são a v1 (DS v3.0): símbolo com anéis finos,
linha crimson e nome em serif. Ficam preservados para referência.

A v2 foi aprovada pelo Nobel em 06-11-2026, depois de cinco rodadas de
exploração (`designSystem/exploracao/logo/rodada-01.html` a `rodada-05.html`).

## Conjuntos

- `v2-neutro/`: marca principal. Símbolo D2 "Lâmina" em uma cor só, para
  qualquer superfície.
- `v2-crimson/`: retirado em 06-11-2026 pelo Nobel; pode ser refeito no
  futuro com o mesmo gerador.

Cada conjunto repete a numeração da v1 (01 a 14) e acrescenta:

- `15_symbol-transparent-dark.png`: símbolo escuro em fundo transparente.
- `favicon/`: PNG de 16, 32, 48, 180 e 512 px.
- `svg/`: mestres vetoriais em fundo transparente, nas versões `white` (claro,
  para fundo escuro) e `black` (escuro, para fundo claro).

## Construção

Símbolo D2, numa caixa de 120 × 120:

- Anel externo com raio 46 e anel interno com raio 28,4 (46 / φ).
- Traço único t = 5.
- Os anéis são cortados no eixo; a linha central (t = 5) passa pelo corte sem
  tocar neles, com vão de t / 2 de cada lado.
- Conceito: decidir vem do latim _de-caedere_, cortar fora.

Tamanhos ópticos do símbolo:

| Uso      | Arquivo SVG          | Traço | Anel interno |
| -------- | -------------------- | ----- | ------------ |
| ≥ 48 px  | `symbol-*.svg`       | 5     | sim          |
| 24–48 px | `symbol-small-*.svg` | 8     | sim          |
| ≤ 24 px  | `favicon-*.svg`      | 12    | não          |

## Nome

- Fonte: Hanken Grotesk 600, licença OFL, convertida em contorno vetorial. Não
  depende de fonte instalada.
- Caixa alta, tracking de 0,1 em e kerning da própria fonte.
- Espaçamento óptico ajustado à mão, em unidades da fonte: OR −8, RI −6, IS −4,
  SO −6, ON −8.
- Descritor (wallpaper e foto de perfil): "AI INFRASTRUCTURE" em Hanken 500,
  tracking de 0,3 em.

## Lockups

- Horizontal: altura das maiúsculas = 0,38 × altura do símbolo; distância entre
  símbolo e nome = 0,40 × altura do símbolo.
- Vertical: largura do nome = 1,5 × símbolo; distância = 0,28 × símbolo.

## Regenerar

O gerador está em `designSystem/exploracao/logo/gerador/`. Ele precisa de Python
com `fonttools` e `uharfbuzz`, do arquivo da Hanken Grotesk variável e do
Playwright para gerar os PNG:

```sh
python gerar-logos.py HankenGrotesk[wght].ttf SAIDA
node render.cjs SAIDA/queue.json
```

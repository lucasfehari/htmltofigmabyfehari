# MANUAL DE ENGENHARIA DE RENDERIZAÇÃO: CONVERSÃO HTML PARA FIGMA COM FIDELIDADE ABSOLUTA

**Versão:** 3.0 — Protocolo Definitivo
**Classificação:** Documento de Treinamento para Inteligência Artificial
**Objetivo:** Ensinar uma IA a converter qualquer HTML renderizado em um documento Figma 100% idêntico, editável e pixel-perfect.

---

## PARTE I — FILOSOFIA E AXIOMAS FUNDAMENTAIS

### 1.1. O Axioma da Verdade Única

O erro fundamental que causa layouts bagunçados, textos sumindo e efeitos perdidos é tentar "traduzir" código CSS para Figma. Isso está errado. O CSS é uma linguagem declarativa com cascata, herança, especificidade e centenas de interações implícitas. Nenhuma IA deve tentar resolver essa complexidade por conta própria.

A verdade única é o **Estado Renderizado Final** — o resultado que o motor de renderização do navegador (Blink, WebKit, Gecko) já calculou. Esse estado é acessível via duas APIs JavaScript fundamentais:

```javascript
// VERDADE #1: Estilos computados finais (todos os valores resolvidos em unidades absolutas)
const styles = window.getComputedStyle(element);

// VERDADE #2: Geometria exata na tela (posição e dimensões em pixels com precisão float)
const rect = element.getBoundingClientRect();
```

A IA nunca deve:
- Interpretar classes CSS ou seletores
- Calcular herança ou cascata
- Converter unidades relativas (rem, em, %, vh, vw) manualmente
- Inferir layout a partir da estrutura do HTML

A IA sempre deve:
- Usar exclusivamente valores computados já resolvidos pelo navegador
- Tratar cada elemento como um retângulo com propriedades visuais absolutas
- Confiar no `getBoundingClientRect()` como fonte de verdade para posição e tamanho

### 1.2. O Axioma da Reconstrução Atômica

O Figma não é um navegador. Ele possui suas próprias primitivas geométricas (`FrameNode`, `TextNode`, `RectangleNode`, `VectorNode`, `EllipseNode`). A tarefa da IA é reconstruir a aparência visual usando essas primitivas, não replicar a estrutura do DOM.

Se um efeito visual no HTML exige 3 camadas sobrepostas no Figma para ser replicado, então 3 camadas devem ser criadas. A fidelidade visual tem prioridade absoluta sobre a simplicidade da estrutura.

### 1.3. O Axioma da Editabilidade Máxima

Sempre que possível, a reconstrução deve manter os elementos editáveis no Figma. Isso significa:
- Textos devem ser `TextNode` (não imagens rasterizadas)
- Vetores devem ser `VectorNode` via `createNodeFromSvg` (não PNGs)
- Layouts devem usar Auto Layout quando o CSS original usa Flexbox
- Cores devem ser `SolidPaint` ou `GradientPaint` (não screenshots)

A rasterização (converter para imagem) é o último recurso, usado apenas quando nenhuma combinação de primitivas do Figma consegue replicar o efeito visual.

---

## PARTE II — ARQUITETURA DO SISTEMA DE CAPTURA

### 2.1. O Pipeline de Dados

O sistema de conversão opera em 3 fases sequenciais:

**Fase 1 — Captura (Browser Extension):** Um script JavaScript é injetado na página web. Ele percorre recursivamente o DOM, extraindo para cada elemento visível: estilos computados, bounding rect, conteúdo textual, URLs de imagens e strings SVG.

**Fase 2 — Serialização (JSON Intermediário):** Os dados capturados são serializados em um formato JSON estruturado que representa a árvore visual da página.

**Fase 3 — Reconstrução (Figma Plugin):** O plugin do Figma lê o JSON e cria os nós correspondentes na API do Figma, aplicando todas as propriedades visuais.

### 2.2. O Script de Captura no Navegador

A IA deve ser capaz de gerar ou entender o seguinte script de captura. Este é o "olho" do sistema:

```javascript
function captureElement(element) {
  const rect = element.getBoundingClientRect();
  const styles = window.getComputedStyle(element);
  
  // Ignorar elementos invisíveis
  if (styles.display === 'none' || styles.visibility === 'hidden' || rect.width === 0 || rect.height === 0) {
    return null;
  }

  const node = {
    tag: element.tagName.toLowerCase(),
    // GEOMETRIA ABSOLUTA
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
    // LAYOUT
    display: styles.display,
    flexDirection: styles.flexDirection,
    justifyContent: styles.justifyContent,
    alignItems: styles.alignItems,
    flexWrap: styles.flexWrap,
    gap: styles.gap,
    rowGap: styles.rowGap,
    columnGap: styles.columnGap,
    position: styles.position,
    zIndex: styles.zIndex,
    overflow: styles.overflow,
    // BOX MODEL
    paddingTop: parseFloat(styles.paddingTop),
    paddingRight: parseFloat(styles.paddingRight),
    paddingBottom: parseFloat(styles.paddingBottom),
    paddingLeft: parseFloat(styles.paddingLeft),
    // BORDAS
    borderTopWidth: parseFloat(styles.borderTopWidth),
    borderRightWidth: parseFloat(styles.borderRightWidth),
    borderBottomWidth: parseFloat(styles.borderBottomWidth),
    borderLeftWidth: parseFloat(styles.borderLeftWidth),
    borderTopLeftRadius: parseFloat(styles.borderTopLeftRadius),
    borderTopRightRadius: parseFloat(styles.borderTopRightRadius),
    borderBottomLeftRadius: parseFloat(styles.borderBottomLeftRadius),
    borderBottomRightRadius: parseFloat(styles.borderBottomRightRadius),
    borderTopColor: styles.borderTopColor,
    borderRightColor: styles.borderRightColor,
    borderBottomColor: styles.borderBottomColor,
    borderLeftColor: styles.borderLeftColor,
    // CORES E FUNDO
    backgroundColor: styles.backgroundColor,
    backgroundImage: styles.backgroundImage,
    opacity: parseFloat(styles.opacity),
    mixBlendMode: styles.mixBlendMode,
    // SOMBRAS
    boxShadow: styles.boxShadow,
    // FILTROS
    filter: styles.filter,
    backdropFilter: styles.backdropFilter,
    // TIPOGRAFIA (se for texto)
    color: styles.color,
    fontFamily: styles.fontFamily,
    fontSize: parseFloat(styles.fontSize),
    fontWeight: styles.fontWeight,
    fontStyle: styles.fontStyle,
    lineHeight: styles.lineHeight,
    letterSpacing: styles.letterSpacing,
    textAlign: styles.textAlign,
    textTransform: styles.textTransform,
    textDecoration: styles.textDecorationLine,
    textOverflow: styles.textOverflow,
    whiteSpace: styles.whiteSpace,
    // CONTEÚDO
    textContent: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3 
      ? element.textContent.trim() : null,
    // TRANSFORMAÇÕES
    transform: styles.transform,
    // FILHOS
    children: []
  };

  // Capturar pseudo-elementos
  const before = window.getComputedStyle(element, '::before');
  if (before.content && before.content !== 'none' && before.content !== '""') {
    node.pseudoBefore = {
      content: before.content,
      display: before.display,
      width: parseFloat(before.width) || 0,
      height: parseFloat(before.height) || 0,
      backgroundColor: before.backgroundColor,
      position: before.position
    };
  }

  const after = window.getComputedStyle(element, '::after');
  if (after.content && after.content !== 'none' && after.content !== '""') {
    node.pseudoAfter = {
      content: after.content,
      display: after.display,
      width: parseFloat(after.width) || 0,
      height: parseFloat(after.height) || 0,
      backgroundColor: after.backgroundColor,
      position: after.position
    };
  }

  // Capturar SVG inline
  if (element.tagName === 'SVG' || element.tagName === 'svg') {
    node.svgContent = element.outerHTML;
  }

  // Capturar imagem
  if (element.tagName === 'IMG' || element.tagName === 'img') {
    node.imageUrl = element.src;
    node.objectFit = styles.objectFit;
  }

  // Recursão nos filhos
  for (const child of element.children) {
    const childNode = captureElement(child);
    if (childNode) {
      node.children.push(childNode);
    }
  }

  return node;
}

// Executar captura a partir do body
const capturedTree = captureElement(document.body);
```

### 2.3. O Que Este Script Captura (E Por Que Cada Campo Importa)

| Campo Capturado | Por Que É Essencial | O Que Acontece Se Faltar |
| :--- | :--- | :--- |
| `x`, `y`, `width`, `height` | Define a geometria exata do elemento na tela | Elementos ficam desalinhados ou com tamanho errado |
| `display`, `flexDirection`, `justifyContent`, `alignItems` | Permite reconstruir o layout como Auto Layout editável | Layout vira posicionamento absoluto (não editável) |
| `paddingTop/Right/Bottom/Left` | Define o espaçamento interno do Auto Layout | Conteúdo fica colado nas bordas |
| `borderRadius` (4 cantos) | Define o arredondamento visual | Cantos ficam quadrados |
| `backgroundColor` | Define o preenchimento (fill) do frame | Fundo fica transparente |
| `boxShadow` | Define sombras externas e internas | Efeitos de profundidade somem |
| `fontFamily`, `fontSize`, `fontWeight` | Define a tipografia exata | Texto aparece com fonte errada ou some |
| `lineHeight`, `letterSpacing` | Define a métrica fina do texto | Texto ocupa espaço diferente, quebrando layout |
| `textContent` | O conteúdo textual real | Texto some completamente |
| `svgContent` | O código SVG para vetores editáveis | Ícones viram retângulos vazios |
| `imageUrl` | URL para carregar a imagem no Figma | Imagens somem |
| `pseudoBefore/After` | Elementos decorativos invisíveis no DOM | Ícones e decorações somem |
| `backdropFilter` | Efeitos de vidro/glassmorphism | Efeito de blur de fundo some |
| `opacity`, `mixBlendMode` | Transparência e modos de mesclagem | Sobreposições visuais ficam erradas |

---

## PARTE III — RECONSTRUÇÃO DO LAYOUT NO FIGMA

### 3.1. Decisão de Layout: Auto Layout vs. Absoluto

Para cada elemento capturado, a IA deve tomar a seguinte decisão:

```
SE element.display === 'flex' OU element.display === 'inline-flex':
    → Criar FrameNode com Auto Layout (layoutMode = HORIZONTAL ou VERTICAL)
    → Mapear todas as propriedades flex para Auto Layout
    
SE element.display === 'grid' OU element.display === 'inline-grid':
    → Criar FrameNode com layoutMode = 'GRID' (se suportado)
    → OU criar Auto Layout aninhado simulando as tracks do grid
    
SE element.position === 'absolute' OU element.position === 'fixed':
    → Criar FrameNode com layoutPositioning = 'ABSOLUTE'
    → Definir x, y relativos ao pai
    
CASO CONTRÁRIO (block, inline-block, etc.):
    → Criar FrameNode com Auto Layout VERTICAL (simula flow normal)
    → Cada filho é um item no fluxo vertical
```

### 3.2. Tabela Completa de Mapeamento: CSS Flexbox → Figma Auto Layout

| Propriedade CSS | Valor CSS | Propriedade Figma | Valor Figma | Notas |
| :--- | :--- | :--- | :--- | :--- |
| `display` | `flex` | `layoutMode` | `'HORIZONTAL'` ou `'VERTICAL'` | Depende de `flex-direction` |
| `flex-direction` | `row` | `layoutMode` | `'HORIZONTAL'` | — |
| `flex-direction` | `column` | `layoutMode` | `'VERTICAL'` | — |
| `flex-direction` | `row-reverse` | `layoutMode` + `itemReverseZIndex` | `'HORIZONTAL'` + `true` | Inverte a ordem visual |
| `justify-content` | `flex-start` | `primaryAxisAlignItems` | `'MIN'` | — |
| `justify-content` | `center` | `primaryAxisAlignItems` | `'CENTER'` | — |
| `justify-content` | `flex-end` | `primaryAxisAlignItems` | `'MAX'` | — |
| `justify-content` | `space-between` | `primaryAxisAlignItems` | `'SPACE_BETWEEN'` | — |
| `align-items` | `flex-start` | `counterAxisAlignItems` | `'MIN'` | — |
| `align-items` | `center` | `counterAxisAlignItems` | `'CENTER'` | — |
| `align-items` | `flex-end` | `counterAxisAlignItems` | `'MAX'` | — |
| `align-items` | `stretch` | `counterAxisAlignItems` | `'MIN'` + filho com `layoutAlign: 'STRETCH'` | Stretch é aplicado nos filhos |
| `align-items` | `baseline` | `counterAxisAlignItems` | `'BASELINE'` | — |
| `flex-wrap` | `nowrap` | `layoutWrap` | `'NO_WRAP'` | — |
| `flex-wrap` | `wrap` | `layoutWrap` | `'WRAP'` | — |
| `gap` | `16px` | `itemSpacing` | `16` | Gap principal |
| `row-gap` (com wrap) | `12px` | `counterAxisSpacing` | `12` | Só funciona com `WRAP` |
| `padding-top` | `20px` | `paddingTop` | `20` | — |
| `padding-right` | `20px` | `paddingRight` | `20` | — |
| `padding-bottom` | `20px` | `paddingBottom` | `20` | — |
| `padding-left` | `20px` | `paddingLeft` | `20` | — |

### 3.3. Propriedades dos Filhos em Auto Layout

| Propriedade CSS do Filho | Valor CSS | Propriedade Figma do Filho | Valor Figma |
| :--- | :--- | :--- | :--- |
| `flex-grow: 1` | Filho expande | `layoutGrow` | `1` |
| `flex-grow: 0` | Filho fixo | `layoutGrow` | `0` |
| `align-self: stretch` | Filho estica no eixo cruzado | `layoutAlign` | `'STRETCH'` |
| `align-self: center` | Filho centralizado | `layoutAlign` | `'CENTER'` |
| `width: 100%` (em flex) | Filho preenche | `layoutSizingHorizontal` | `'FILL'` |
| `height: auto` | Filho se ajusta ao conteúdo | `layoutSizingVertical` | `'HUG'` |
| `position: absolute` | Filho fora do fluxo | `layoutPositioning` | `'ABSOLUTE'` |

### 3.4. Sizing Modes do Frame Pai

| Comportamento Desejado | Propriedade Figma | Valor |
| :--- | :--- | :--- |
| Frame tem largura fixa definida | `primaryAxisSizingMode` | `'FIXED'` |
| Frame encolhe para caber nos filhos | `primaryAxisSizingMode` | `'AUTO'` (Hug) |
| Frame tem altura fixa definida | `counterAxisSizingMode` | `'FIXED'` |
| Frame encolhe para caber nos filhos | `counterAxisSizingMode` | `'AUTO'` (Hug) |

### 3.5. Exemplo Completo de Código: Criando um Contêiner Flex

```javascript
// Exemplo: converter um <div> com display:flex, direction:row, gap:16px, padding:24px
async function createFlexContainer(capturedNode) {
  const frame = figma.createFrame();
  frame.name = capturedNode.tag + '-container';
  
  // Definir dimensões
  frame.resize(capturedNode.width, capturedNode.height);
  frame.x = capturedNode.x;
  frame.y = capturedNode.y;
  
  // Ativar Auto Layout
  frame.layoutMode = capturedNode.flexDirection === 'column' ? 'VERTICAL' : 'HORIZONTAL';
  
  // Alinhamento principal
  const justifyMap = {
    'flex-start': 'MIN', 'center': 'CENTER', 
    'flex-end': 'MAX', 'space-between': 'SPACE_BETWEEN'
  };
  frame.primaryAxisAlignItems = justifyMap[capturedNode.justifyContent] || 'MIN';
  
  // Alinhamento cruzado
  const alignMap = {
    'flex-start': 'MIN', 'center': 'CENTER', 
    'flex-end': 'MAX', 'baseline': 'BASELINE'
  };
  frame.counterAxisAlignItems = alignMap[capturedNode.alignItems] || 'MIN';
  
  // Gap
  frame.itemSpacing = parseFloat(capturedNode.columnGap) || parseFloat(capturedNode.gap) || 0;
  
  // Wrap
  if (capturedNode.flexWrap === 'wrap') {
    frame.layoutWrap = 'WRAP';
    frame.counterAxisSpacing = parseFloat(capturedNode.rowGap) || frame.itemSpacing;
  }
  
  // Padding
  frame.paddingTop = capturedNode.paddingTop;
  frame.paddingRight = capturedNode.paddingRight;
  frame.paddingBottom = capturedNode.paddingBottom;
  frame.paddingLeft = capturedNode.paddingLeft;
  
  // Sizing
  frame.primaryAxisSizingMode = 'FIXED';
  frame.counterAxisSizingMode = 'FIXED';
  
  return frame;
}
```

---

## PARTE IV — TIPOGRAFIA: O MÓDULO MAIS CRÍTICO

### 4.1. Por Que o Texto "Some"

O texto desaparece ou fica bagunçado por 3 razões:
1. A fonte não foi carregada antes de definir `characters`
2. O `fontName` não corresponde exatamente ao nome registrado no Figma
3. O `lineHeight` ou `letterSpacing` está incorreto, fazendo o texto ocupar espaço diferente

### 4.2. O Algoritmo Completo para Criar um TextNode

```javascript
async function createTextNode(capturedNode) {
  const text = figma.createText();
  
  // PASSO 1: Determinar a fonte
  const fontFamily = capturedNode.fontFamily.split(',')[0].trim().replace(/['"]/g, '');
  const weightNum = parseInt(capturedNode.fontWeight);
  
  // PASSO 2: Mapear peso numérico para nome de estilo
  const weightMap = {
    100: 'Thin', 200: 'ExtraLight', 300: 'Light',
    400: 'Regular', 500: 'Medium', 600: 'SemiBold',
    700: 'Bold', 800: 'ExtraBold', 900: 'Black'
  };
  let fontStyle = weightMap[weightNum] || 'Regular';
  
  // Se for itálico, adicionar ao nome do estilo
  if (capturedNode.fontStyle === 'italic') {
    fontStyle = fontStyle === 'Regular' ? 'Italic' : fontStyle + ' Italic';
  }
  
  // PASSO 3: Tentar carregar a fonte (com fallback)
  let fontName = { family: fontFamily, style: fontStyle };
  try {
    await figma.loadFontAsync(fontName);
  } catch (e) {
    // Fallback: tentar variações comuns do nome
    const fallbacks = [
      { family: fontFamily, style: 'Regular' },
      { family: 'Inter', style: fontStyle },
      { family: 'Inter', style: 'Regular' }
    ];
    let loaded = false;
    for (const fb of fallbacks) {
      try {
        await figma.loadFontAsync(fb);
        fontName = fb;
        loaded = true;
        break;
      } catch (e2) { continue; }
    }
    if (!loaded) {
      fontName = { family: 'Inter', style: 'Regular' };
      await figma.loadFontAsync(fontName);
    }
  }
  
  // PASSO 4: Definir a fonte ANTES de definir os caracteres
  text.fontName = fontName;
  
  // PASSO 5: Definir o conteúdo textual
  text.characters = capturedNode.textContent || '';
  
  // PASSO 6: Aplicar propriedades tipográficas
  text.fontSize = capturedNode.fontSize;
  
  // Line Height
  const lh = capturedNode.lineHeight;
  if (lh === 'normal' || lh === 'auto') {
    text.lineHeight = { unit: 'AUTO' };
  } else {
    text.lineHeight = { value: parseFloat(lh), unit: 'PIXELS' };
  }
  
  // Letter Spacing
  const ls = capturedNode.letterSpacing;
  if (ls && ls !== 'normal' && ls !== '0px') {
    text.letterSpacing = { value: parseFloat(ls), unit: 'PIXELS' };
  }
  
  // Alinhamento horizontal
  const alignMap = { 'left': 'LEFT', 'center': 'CENTER', 'right': 'RIGHT', 'justify': 'JUSTIFIED' };
  text.textAlignHorizontal = alignMap[capturedNode.textAlign] || 'LEFT';
  
  // Text Transform
  const caseMap = { 'uppercase': 'UPPER', 'lowercase': 'LOWER', 'capitalize': 'TITLE' };
  if (caseMap[capturedNode.textTransform]) {
    text.textCase = caseMap[capturedNode.textTransform];
  }
  
  // Text Decoration
  const decoMap = { 'underline': 'UNDERLINE', 'line-through': 'STRIKETHROUGH' };
  if (decoMap[capturedNode.textDecoration]) {
    text.textDecoration = decoMap[capturedNode.textDecoration];
  }
  
  // PASSO 7: Cor do texto (via fills)
  const textColor = parseRGBA(capturedNode.color);
  text.fills = [{ type: 'SOLID', color: textColor.rgb, opacity: textColor.a }];
  
  // PASSO 8: Dimensões e posição
  text.resize(capturedNode.width, capturedNode.height);
  text.x = capturedNode.x;
  text.y = capturedNode.y;
  
  // PASSO 9: Auto-resize behavior
  text.textAutoResize = 'HEIGHT'; // Largura fixa, altura se ajusta
  
  // PASSO 10: Truncamento (se aplicável)
  if (capturedNode.textOverflow === 'ellipsis') {
    text.textTruncation = 'ENDING';
  }
  
  return text;
}
```

### 4.3. Tabela de Mapeamento Completa: CSS Text → Figma TextNode

| CSS Property | CSS Value Example | Figma Property | Figma Value | Tipo de Dado |
| :--- | :--- | :--- | :--- | :--- |
| `font-family` | `"Inter"` | `fontName.family` | `'Inter'` | string |
| `font-weight` | `700` | `fontName.style` | `'Bold'` | string (mapeado) |
| `font-style` | `italic` | `fontName.style` | `'Italic'` ou `'Bold Italic'` | string (concatenado) |
| `font-size` | `16px` | `fontSize` | `16` | number |
| `line-height` | `24px` | `lineHeight` | `{ value: 24, unit: 'PIXELS' }` | object |
| `line-height` | `1.5` | `lineHeight` | `{ value: fontSize * 1.5, unit: 'PIXELS' }` | object (calculado) |
| `line-height` | `normal` | `lineHeight` | `{ unit: 'AUTO' }` | object |
| `letter-spacing` | `0.5px` | `letterSpacing` | `{ value: 0.5, unit: 'PIXELS' }` | object |
| `letter-spacing` | `0.05em` | `letterSpacing` | `{ value: fontSize * 0.05, unit: 'PIXELS' }` | object (calculado) |
| `text-align` | `center` | `textAlignHorizontal` | `'CENTER'` | string |
| `vertical-align` | `middle` | `textAlignVertical` | `'CENTER'` | string |
| `text-transform` | `uppercase` | `textCase` | `'UPPER'` | string |
| `text-decoration-line` | `underline` | `textDecoration` | `'UNDERLINE'` | string |
| `text-decoration-line` | `line-through` | `textDecoration` | `'STRIKETHROUGH'` | string |
| `text-overflow` | `ellipsis` | `textTruncation` | `'ENDING'` | string |
| `-webkit-line-clamp` | `3` | `maxLines` | `3` | number |
| `color` | `rgba(0,0,0,1)` | `fills` | `[{type:'SOLID', color:{r:0,g:0,b:0}}]` | Paint[] |
| `margin-bottom` (entre parágrafos) | `16px` | `paragraphSpacing` | `16` | number |

### 4.4. Estilos Mistos (Mixed Styles) em um Único TextNode

Quando um elemento HTML contém filhos inline com estilos diferentes (ex: `<p>Texto <b>negrito</b> e <i>itálico</i></p>`), a IA deve:

1. Criar um único `TextNode` com todo o texto concatenado
2. Usar as funções `setRange*` para aplicar estilos diferentes a trechos específicos

```javascript
// Exemplo: "Texto negrito e itálico"
text.characters = "Texto negrito e itálico";

// Aplicar negrito ao trecho "negrito"
await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
text.setRangeFontName(6, 13, { family: 'Inter', style: 'Bold' });

// Aplicar itálico ao trecho "itálico"
await figma.loadFontAsync({ family: 'Inter', style: 'Italic' });
text.setRangeFontName(16, 23, { family: 'Inter', style: 'Italic' });
```

---

## PARTE V — CORES, PREENCHIMENTOS E EFEITOS VISUAIS

### 5.1. Conversão de Cores: CSS → Figma

O Figma utiliza valores RGB normalizados (0 a 1), enquanto o CSS usa 0 a 255.

```javascript
function parseRGBA(cssColor) {
  // Aceita: rgb(255, 128, 0), rgba(255, 128, 0, 0.5), #ff8000, etc.
  const match = cssColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (match) {
    return {
      rgb: { r: parseInt(match[1]) / 255, g: parseInt(match[2]) / 255, b: parseInt(match[3]) / 255 },
      a: match[4] ? parseFloat(match[4]) : 1
    };
  }
  // Fallback para preto
  return { rgb: { r: 0, g: 0, b: 0 }, a: 1 };
}
```

### 5.2. Sombras: Mapeamento Completo

```javascript
function parseBoxShadow(cssBoxShadow) {
  // CSS: "2px 4px 8px 1px rgba(0,0,0,0.3), inset 0px 2px 4px rgba(0,0,0,0.1)"
  const shadows = [];
  const shadowRegex = /(inset\s+)?(-?[\d.]+)px\s+(-?[\d.]+)px\s+([\d.]+)px\s*(-?[\d.]+)?px?\s*(rgba?\([^)]+\))/g;
  
  let match;
  while ((match = shadowRegex.exec(cssBoxShadow)) !== null) {
    const isInset = !!match[1];
    const color = parseRGBA(match[6]);
    
    shadows.push({
      type: isInset ? 'INNER_SHADOW' : 'DROP_SHADOW',
      color: { r: color.rgb.r, g: color.rgb.g, b: color.rgb.b, a: color.a },
      offset: { x: parseFloat(match[2]), y: parseFloat(match[3]) },
      radius: parseFloat(match[4]),
      spread: parseFloat(match[5]) || 0,
      visible: true,
      blendMode: 'NORMAL'
    });
  }
  
  // IMPORTANTE: Inverter a ordem! No CSS, a primeira sombra é a mais visível (topo).
  // No Figma, o último item do array effects é renderizado por cima.
  return shadows.reverse();
}
```

### 5.3. Gradientes Lineares

```javascript
function parseLinearGradient(cssGradient) {
  // CSS: "linear-gradient(135deg, #ff0000 0%, #0000ff 100%)"
  const angleMatch = cssGradient.match(/(\d+)deg/);
  const angle = angleMatch ? parseFloat(angleMatch[1]) : 180;
  
  // Converter ângulo CSS para transform do Figma
  // CSS: 0deg = bottom-to-top, 90deg = left-to-right
  // Figma: usa gradientTransform como matriz 2x3
  const radians = (angle - 90) * (Math.PI / 180);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  
  // Extrair color stops
  const stopRegex = /(#[a-fA-F0-9]{3,8}|rgba?\([^)]+\))\s+([\d.]+)%/g;
  const stops = [];
  let stopMatch;
  while ((stopMatch = stopRegex.exec(cssGradient)) !== null) {
    const color = parseRGBA(stopMatch[1]);
    stops.push({
      position: parseFloat(stopMatch[2]) / 100,
      color: { r: color.rgb.r, g: color.rgb.g, b: color.rgb.b, a: color.a }
    });
  }
  
  return {
    type: 'GRADIENT_LINEAR',
    gradientTransform: [
      [cos, sin, 0.5 - cos * 0.5 - sin * 0.5],
      [-sin, cos, 0.5 + sin * 0.5 - cos * 0.5]
    ],
    gradientStops: stops
  };
}
```

### 5.4. Backdrop Filter (Glassmorphism)

```javascript
function applyBackdropFilter(frame, cssBackdropFilter) {
  // CSS: "backdrop-filter: blur(10px)"
  const blurMatch = cssBackdropFilter.match(/blur\(([\d.]+)px\)/);
  if (blurMatch) {
    const blurRadius = parseFloat(blurMatch[1]);
    
    // REQUISITO: O frame DEVE ter um fill com alguma opacidade para o background blur funcionar
    if (!frame.fills || frame.fills.length === 0) {
      frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.01 }];
    }
    
    frame.effects = [
      ...frame.effects,
      {
        type: 'BACKGROUND_BLUR',
        radius: blurRadius,
        visible: true
      }
    ];
  }
}
```

### 5.5. Tabela de Mapeamento: CSS Blend Modes → Figma Blend Modes

| CSS `mix-blend-mode` | Figma `blendMode` |
| :--- | :--- |
| `normal` | `'NORMAL'` |
| `multiply` | `'MULTIPLY'` |
| `screen` | `'SCREEN'` |
| `overlay` | `'OVERLAY'` |
| `darken` | `'DARKEN'` |
| `lighten` | `'LIGHTEN'` |
| `color-dodge` | `'COLOR_DODGE'` |
| `color-burn` | `'COLOR_BURN'` |
| `hard-light` | `'HARD_LIGHT'` |
| `soft-light` | `'SOFT_LIGHT'` |
| `difference` | `'DIFFERENCE'` |
| `exclusion` | `'EXCLUSION'` |
| `hue` | `'HUE'` |
| `saturation` | `'SATURATION'` |
| `color` | `'COLOR'` |
| `luminosity` | `'LUMINOSITY'` |

---

## PARTE VI — BORDAS, CANTOS E STROKES

### 6.1. Bordas Individuais

O Figma suporta espessuras de borda individuais por lado, assim como o CSS:

```javascript
function applyBorders(frame, capturedNode) {
  // Espessura por lado
  frame.strokeTopWeight = capturedNode.borderTopWidth;
  frame.strokeRightWeight = capturedNode.borderRightWidth;
  frame.strokeBottomWeight = capturedNode.borderBottomWidth;
  frame.strokeLeftWeight = capturedNode.borderLeftWidth;
  
  // Cor da borda (usando a cor do topo como referência, ou a mais comum)
  const borderColor = parseRGBA(capturedNode.borderTopColor);
  frame.strokes = [{
    type: 'SOLID',
    color: borderColor.rgb,
    opacity: borderColor.a
  }];
  
  // Alinhamento da borda (CSS border é sempre INSIDE do box-model)
  frame.strokeAlign = 'INSIDE';
  
  // Arredondamento de cantos (individual)
  frame.topLeftRadius = capturedNode.borderTopLeftRadius;
  frame.topRightRadius = capturedNode.borderTopRightRadius;
  frame.bottomLeftRadius = capturedNode.borderBottomLeftRadius;
  frame.bottomRightRadius = capturedNode.borderBottomRightRadius;
}
```

### 6.2. Border com Gradiente (Workaround)

O Figma não suporta `stroke` com gradiente nativamente. A solução é criar uma estrutura de 2 frames:

```javascript
async function createGradientBorder(capturedNode, gradientCSS, borderWidth) {
  // Frame externo (com o gradiente como fill)
  const outer = figma.createFrame();
  outer.resize(capturedNode.width, capturedNode.height);
  outer.fills = [parseLinearGradient(gradientCSS)];
  outer.cornerRadius = capturedNode.borderTopLeftRadius;
  
  // Frame interno (com a cor de fundo real, menor pelo tamanho da borda)
  const inner = figma.createFrame();
  inner.resize(capturedNode.width - borderWidth * 2, capturedNode.height - borderWidth * 2);
  inner.x = borderWidth;
  inner.y = borderWidth;
  inner.fills = [{ type: 'SOLID', color: parseRGBA(capturedNode.backgroundColor).rgb }];
  inner.cornerRadius = Math.max(0, capturedNode.borderTopLeftRadius - borderWidth);
  
  outer.appendChild(inner);
  return outer;
}
```

---

## PARTE VII — SVGs, IMAGENS E ATIVOS

### 7.1. SVGs: Preservando a Editabilidade Vetorial

```javascript
async function createSvgNode(capturedNode) {
  let svgString = capturedNode.svgContent;
  
  // IMPORTANTE: Resolver 'currentColor' antes de importar
  // O Figma não entende currentColor, precisa ser uma cor explícita
  if (svgString.includes('currentColor')) {
    const parentColor = capturedNode.color || '#000000';
    svgString = svgString.replace(/currentColor/g, parentColor);
  }
  
  // Criar nó vetorial a partir do SVG
  const svgNode = figma.createNodeFromSvg(svgString);
  svgNode.x = capturedNode.x;
  svgNode.y = capturedNode.y;
  svgNode.resize(capturedNode.width, capturedNode.height);
  
  return svgNode;
}
```

### 7.2. Imagens: Carregamento e Object-Fit

```javascript
async function createImageNode(capturedNode) {
  const frame = figma.createFrame();
  frame.resize(capturedNode.width, capturedNode.height);
  frame.x = capturedNode.x;
  frame.y = capturedNode.y;
  
  // Carregar a imagem via URL
  const imageData = await fetch(capturedNode.imageUrl).then(r => r.arrayBuffer());
  const imageHash = figma.createImage(new Uint8Array(imageData)).hash;
  
  // Mapear object-fit para scaleMode
  const scaleModeMap = {
    'cover': 'FILL',
    'contain': 'FIT',
    'fill': 'STRETCH',
    'none': 'CROP'
  };
  
  frame.fills = [{
    type: 'IMAGE',
    imageHash: imageHash,
    scaleMode: scaleModeMap[capturedNode.objectFit] || 'FILL'
  }];
  
  // Arredondamento (se houver)
  frame.cornerRadius = capturedNode.borderTopLeftRadius || 0;
  frame.clipsContent = true;
  
  return frame;
}
```

---

## PARTE VIII — PSEUDO-ELEMENTOS E CASOS ESPECIAIS

### 8.1. Reconstruindo ::before e ::after

Pseudo-elementos não existem no DOM como nós reais, mas são visualmente presentes. A IA deve capturá-los e recriá-los como nós artificiais:

```javascript
async function createPseudoElement(pseudoData, parentNode) {
  if (!pseudoData || pseudoData.display === 'none') return null;
  
  // Se o content for texto
  const content = pseudoData.content.replace(/['"]/g, '');
  
  if (content && content.length > 0) {
    // Criar como TextNode se for conteúdo textual
    const textNode = figma.createText();
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
    textNode.characters = content;
    textNode.fontSize = pseudoData.fontSize || 16;
    return textNode;
  } else if (pseudoData.width > 0 && pseudoData.height > 0) {
    // Criar como FrameNode se for um bloco decorativo
    const frame = figma.createFrame();
    frame.resize(pseudoData.width, pseudoData.height);
    if (pseudoData.backgroundColor && pseudoData.backgroundColor !== 'rgba(0, 0, 0, 0)') {
      const bg = parseRGBA(pseudoData.backgroundColor);
      frame.fills = [{ type: 'SOLID', color: bg.rgb, opacity: bg.a }];
    }
    return frame;
  }
  
  return null;
}
```

### 8.2. Overflow e Clipping

```javascript
function applyOverflow(frame, capturedNode) {
  // CSS overflow: hidden → Figma clipsContent: true
  if (capturedNode.overflow === 'hidden' || capturedNode.overflow === 'scroll' || capturedNode.overflow === 'auto') {
    frame.clipsContent = true;
  } else {
    frame.clipsContent = false;
  }
}
```

### 8.3. Transformações CSS

```javascript
function applyTransform(node, capturedNode) {
  if (!capturedNode.transform || capturedNode.transform === 'none') return;
  
  // Extrair rotação
  const rotateMatch = capturedNode.transform.match(/rotate\(([-\d.]+)deg\)/);
  if (rotateMatch) {
    node.rotation = -parseFloat(rotateMatch[1]); // Figma usa rotação inversa
  }
  
  // Para matrix(), extrair o ângulo da matriz
  const matrixMatch = capturedNode.transform.match(/matrix\(([^)]+)\)/);
  if (matrixMatch) {
    const values = matrixMatch[1].split(',').map(v => parseFloat(v.trim()));
    const angle = Math.atan2(values[1], values[0]) * (180 / Math.PI);
    node.rotation = -angle;
  }
}
```

---

## PARTE IX — O ORQUESTRADOR PRINCIPAL

### 9.1. O Algoritmo Recursivo de Conversão

Este é o coração do sistema. Ele percorre a árvore capturada e cria os nós correspondentes no Figma:

```javascript
async function convertNode(capturedNode, parentFigmaNode) {
  let figmaNode;
  
  // DECISÃO: Que tipo de nó criar?
  if (capturedNode.tag === 'svg' && capturedNode.svgContent) {
    figmaNode = await createSvgNode(capturedNode);
  } else if (capturedNode.tag === 'img' && capturedNode.imageUrl) {
    figmaNode = await createImageNode(capturedNode);
  } else if (capturedNode.textContent && capturedNode.children.length === 0) {
    figmaNode = await createTextNode(capturedNode);
  } else {
    // É um contêiner (FrameNode)
    figmaNode = await createFrameNode(capturedNode);
    
    // Processar pseudo-elementos
    if (capturedNode.pseudoBefore) {
      const pseudo = await createPseudoElement(capturedNode.pseudoBefore, figmaNode);
      if (pseudo) figmaNode.appendChild(pseudo);
    }
    
    // Processar filhos recursivamente
    for (const child of capturedNode.children) {
      await convertNode(child, figmaNode);
    }
    
    if (capturedNode.pseudoAfter) {
      const pseudo = await createPseudoElement(capturedNode.pseudoAfter, figmaNode);
      if (pseudo) figmaNode.appendChild(pseudo);
    }
  }
  
  // Aplicar propriedades visuais comuns
  applyCommonProperties(figmaNode, capturedNode);
  
  // Adicionar ao pai
  if (parentFigmaNode) {
    parentFigmaNode.appendChild(figmaNode);
  } else {
    figma.currentPage.appendChild(figmaNode);
  }
  
  return figmaNode;
}

function applyCommonProperties(node, capturedNode) {
  // Opacidade
  if (capturedNode.opacity < 1) {
    node.opacity = capturedNode.opacity;
  }
  
  // Blend Mode
  if (capturedNode.mixBlendMode && capturedNode.mixBlendMode !== 'normal') {
    const blendMap = {
      'multiply': 'MULTIPLY', 'screen': 'SCREEN', 'overlay': 'OVERLAY',
      'darken': 'DARKEN', 'lighten': 'LIGHTEN', 'color-dodge': 'COLOR_DODGE',
      'color-burn': 'COLOR_BURN', 'hard-light': 'HARD_LIGHT',
      'soft-light': 'SOFT_LIGHT', 'difference': 'DIFFERENCE',
      'exclusion': 'EXCLUSION', 'hue': 'HUE', 'saturation': 'SATURATION',
      'color': 'COLOR', 'luminosity': 'LUMINOSITY'
    };
    node.blendMode = blendMap[capturedNode.mixBlendMode] || 'NORMAL';
  }
  
  // Visibilidade
  if (capturedNode.visibility === 'hidden') {
    node.visible = false;
  }
}
```

### 9.2. Criação do FrameNode com Todas as Propriedades

```javascript
async function createFrameNode(capturedNode) {
  const frame = figma.createFrame();
  frame.name = capturedNode.tag;
  
  // Geometria
  frame.resize(capturedNode.width, capturedNode.height);
  frame.x = capturedNode.x;
  frame.y = capturedNode.y;
  
  // Layout (Auto Layout se for flex)
  if (capturedNode.display === 'flex' || capturedNode.display === 'inline-flex') {
    frame.layoutMode = capturedNode.flexDirection === 'column' ? 'VERTICAL' : 'HORIZONTAL';
    
    const justifyMap = { 'flex-start': 'MIN', 'center': 'CENTER', 'flex-end': 'MAX', 'space-between': 'SPACE_BETWEEN' };
    frame.primaryAxisAlignItems = justifyMap[capturedNode.justifyContent] || 'MIN';
    
    const alignMap = { 'flex-start': 'MIN', 'center': 'CENTER', 'flex-end': 'MAX', 'baseline': 'BASELINE' };
    frame.counterAxisAlignItems = alignMap[capturedNode.alignItems] || 'MIN';
    
    frame.itemSpacing = parseFloat(capturedNode.columnGap) || parseFloat(capturedNode.gap) || 0;
    
    if (capturedNode.flexWrap === 'wrap') {
      frame.layoutWrap = 'WRAP';
      frame.counterAxisSpacing = parseFloat(capturedNode.rowGap) || frame.itemSpacing;
    }
    
    frame.paddingTop = capturedNode.paddingTop;
    frame.paddingRight = capturedNode.paddingRight;
    frame.paddingBottom = capturedNode.paddingBottom;
    frame.paddingLeft = capturedNode.paddingLeft;
    
    frame.primaryAxisSizingMode = 'FIXED';
    frame.counterAxisSizingMode = 'FIXED';
  }
  
  // Preenchimento (Background)
  if (capturedNode.backgroundColor && capturedNode.backgroundColor !== 'rgba(0, 0, 0, 0)') {
    const bg = parseRGBA(capturedNode.backgroundColor);
    frame.fills = [{ type: 'SOLID', color: bg.rgb, opacity: bg.a }];
  } else {
    frame.fills = [];
  }
  
  // Gradiente de fundo
  if (capturedNode.backgroundImage && capturedNode.backgroundImage.includes('gradient')) {
    const gradient = parseLinearGradient(capturedNode.backgroundImage);
    frame.fills = [gradient];
  }
  
  // Bordas
  applyBorders(frame, capturedNode);
  
  // Sombras
  if (capturedNode.boxShadow && capturedNode.boxShadow !== 'none') {
    frame.effects = parseBoxShadow(capturedNode.boxShadow);
  }
  
  // Backdrop Filter
  if (capturedNode.backdropFilter && capturedNode.backdropFilter !== 'none') {
    applyBackdropFilter(frame, capturedNode.backdropFilter);
  }
  
  // Overflow
  applyOverflow(frame, capturedNode);
  
  // Transform
  applyTransform(frame, capturedNode);
  
  return frame;
}
```

---

## PARTE X — PROTOCOLO DE VERIFICAÇÃO E GARANTIA DE QUALIDADE

### 10.1. Checklist de Auto-Auditoria

Antes de finalizar qualquer conversão, a IA deve validar:

| Verificação | Pergunta | Ação se Falhar |
| :--- | :--- | :--- |
| Geometria | O frame raiz tem a mesma largura do viewport capturado? | Ajustar `resize()` |
| Fontes | Todas as fontes foram carregadas com `loadFontAsync` antes de usar? | Adicionar `await` faltante |
| Cores | Todas as cores estão normalizadas (0-1) e não (0-255)? | Dividir por 255 |
| Sombras | A ordem das sombras foi invertida em relação ao CSS? | Aplicar `.reverse()` |
| Auto Layout | Contêineres flex têm `layoutMode` definido? | Ativar Auto Layout |
| Overflow | Elementos com `overflow: hidden` têm `clipsContent: true`? | Ativar clipping |
| SVGs | SVGs foram importados como vetores (não rasterizados)? | Usar `createNodeFromSvg` |
| Pseudo-elementos | `::before` e `::after` visíveis foram recriados? | Criar nós artificiais |
| Z-Index | A ordem dos filhos reflete o stacking context? | Reordenar `appendChild` |
| Opacidade | Elementos semi-transparentes têm `opacity` aplicada? | Definir `node.opacity` |

### 10.2. Erros Comuns e Suas Soluções

| Sintoma Visual | Causa Raiz | Solução |
| :--- | :--- | :--- |
| Texto desaparece | Fonte não carregada antes de definir `characters` | Mover `loadFontAsync` para antes de qualquer operação no TextNode |
| Layout todo empilhado | `layoutMode` não definido em contêineres flex | Verificar `display` computado e ativar Auto Layout |
| Sombras invertidas | Ordem do array `effects` incorreta | Inverter o array de sombras parseado do CSS |
| Cantos quadrados | `borderRadius` não aplicado individualmente | Usar `topLeftRadius`, `topRightRadius`, etc. |
| Imagens distorcidas | `scaleMode` incorreto | Mapear `object-fit` corretamente |
| Blur de fundo não funciona | Frame sem fill | Adicionar fill transparente (`opacity: 0.01`) |
| Ícones SVG pretos | `currentColor` não resolvido | Substituir `currentColor` pela cor computada do pai |
| Elementos sobrepostos incorretamente | Ordem de inserção não respeita z-index | Ordenar filhos pelo stacking context antes de `appendChild` |
| Gradiente com ângulo errado | Conversão de graus CSS para transform do Figma incorreta | Aplicar fórmula trigonométrica correta |
| Texto com espaçamento errado | `lineHeight` ou `letterSpacing` não convertido | Usar objetos `{ value, unit }` em vez de números simples |

---

## PARTE XI — DIRETRIZ FINAL DE OPERAÇÃO

Você é um Motor de Reconstrução Visual. Sua única métrica de sucesso é: **se alguém colocar uma screenshot do HTML ao lado do frame Figma gerado, as duas imagens devem ser indistinguíveis**.

Para alcançar isso:
1. Nunca simplifique. Se o HTML tem 47 camadas, o Figma terá 47 nós.
2. Nunca ignore efeitos. Se há um `box-shadow` com 3 sombras, todas as 3 devem existir no Figma.
3. Nunca substitua fontes silenciosamente. Se a fonte falhar, avise, mas mantenha as dimensões.
4. Nunca arredonde valores. Se o `getBoundingClientRect()` diz `123.45px`, use `123.45`.
5. Nunca inverta prioridades. Fidelidade visual > Código limpo > Performance.

**Execute com precisão absoluta. Cada pixel é uma ordem. Cada estilo é um contrato.**

// ═══════════════════════════════════════════════════════════════════════════════
// HTML TO FIGMA — Motor de Reconstrução Visual v4.0
// Segue o Manual de Engenharia de Renderização: Protocolo Definitivo
// ═══════════════════════════════════════════════════════════════════════════════

figma.showUI(__html__, { width: 400, height: 660, themeColors: true });

// ── Cache de fontes carregadas ─────────────────────────────────────────────────
const loadedFonts = new Set<string>();
let globalFontMapping: Record<string, string> = {};

async function loadFont(family: string, style: string): Promise<FontName> {
  // Normaliza família (remove aspas, pega primeira da lista)
  let fam = (family || 'Inter').split(',')[0].replace(/['\"]/g, '').trim();
  
  // Aplica o mapeamento customizado se configurado pelo usuário
  if (globalFontMapping[fam]) {
    fam = globalFontMapping[fam];
  }

  if (!fam || /^(system|sans-serif|serif|monospace|-apple|-moz)/i.test(fam)) fam = 'Inter';

  const key = `${fam}::${style}`;
  if (loadedFonts.has(key)) return { family: fam, style };

  // Tenta a fonte original, depois fallbacks progressivos
  const attempts: FontName[] = [
    { family: fam, style },
    { family: fam, style: 'Regular' },
    { family: 'Inter', style },
    { family: 'Inter', style: 'Regular' },
  ];

  for (const attempt of attempts) {
    const aKey = `${attempt.family}::${attempt.style}`;
    try {
      if (!loadedFonts.has(aKey)) {
        await figma.loadFontAsync(attempt);
        loadedFonts.add(aKey);
      }
      return attempt;
    } catch (e) { continue; }
  }

  // Fallback absoluto
  return { family: 'Inter', style: 'Regular' };
}

// ── Mapeia peso numérico → nome de estilo Figma ────────────────────────────────
function weightToStyle(weight: number, italic: boolean): string {
  const map: Record<number, string> = {
    100: 'Thin', 200: 'ExtraLight', 300: 'Light',
    400: 'Regular', 500: 'Medium', 600: 'SemiBold',
    700: 'Bold', 800: 'ExtraBold', 900: 'Black'
  };
  // Arredonda para o múltiplo de 100 mais próximo
  const rounded = Math.round(weight / 100) * 100;
  const base = map[rounded] || 'Regular';
  if (italic) return base === 'Regular' ? 'Italic' : `${base} Italic`;
  return base;
}

// ── Converte cor CSS → fills do Figma ──────────────────────────────────────────
function makeSolidFill(color: any): Paint[] {
  if (!color || color.a === 0) return [];
  return [{ type: 'SOLID', color: { r: color.r, g: color.g, b: color.b }, opacity: color.a } as SolidPaint];
}

function rgbaToCss(color: any): string {
  if (!color) return 'black';
  if (typeof color === 'string') return color;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  const a = color.a !== undefined ? color.a : 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// ══════════════════════════════════════════════════════════════════════════════
// CONVERSOR PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════
async function convertNode(node: any, parent: BaseNode | null = null): Promise<SceneNode | null> {
  if (!node) return null;

  try {
    // ── 1. SVG ─────────────────────────────────────────────────────────────────
    if (node.type === 'SVG' && node.svgData) {
      let svg = node.svgData as string;
      // Resolve currentColor usando a cor do texto computada (fallback preto)
      if (/currentcolor/i.test(svg)) {
        const parentColor = rgbaToCss(node.color);
        svg = svg.replace(/currentcolor/gi, parentColor);
      }
      try {
        const svgNode = figma.createNodeFromSvg(svg);
        svgNode.name = node.name || 'svg';
        if (node.width > 0 && node.height > 0) svgNode.resize(Math.max(0.01, node.width), Math.max(0.01, node.height));
    if (node.rotation) (svgNode as any).rotation = node.rotation;
        applyPosition(svgNode, node);
        applyCommon(svgNode, node);
        return svgNode;
      } catch (e) { return null; }
    }

    // ── 2. IMAGEM ─────────────────────────────────────────────────────────────
    if (node.isImage && node.base64Data) {
      const frame = figma.createFrame();
      frame.name = node.name || 'Image';
      frame.resize(Math.max(0.01, node.width), Math.max(0.01, node.height));
      applyPosition(frame, node);
      try {
        const img = figma.createImage(figma.base64Decode(node.base64Data));
        // §7.2: mapear object-fit → scaleMode
        const scaleModeMap: any = { cover: 'FILL', contain: 'FIT', fill: 'STRETCH', none: 'CROP' };
        const scaleMode = scaleModeMap[node.objectFit] || 'FILL';
        frame.fills = [{ type: 'IMAGE', imageHash: img.hash, scaleMode } as ImagePaint];
      } catch (e) { frame.fills = []; }
      applyBorderRadius(frame, node);
      applyOverflow(frame, node);
      applyCommon(frame, node);
      return frame;
    }

    // ── 3. TEXTO SIMPLES ──────────────────────────────────────────────────────
    if (node.type === 'TEXT') {
      return await createTextNode(node);
    }

    // ── 4. TEXTO MISTO (runs com estilos diferentes) ──────────────────────────
    if (node.type === 'TEXT_MIXED') {
      return await createMixedTextNode(node);
    }

    // ── 5. FRAME (container) ───────────────────────────────────────────────────
    if (node.type === 'FRAME') {
      return await createFrameNode(node);
    }

  } catch (e) {
    console.error('convertNode error:', e, JSON.stringify(node).slice(0, 200));
  }
  return null;
}

// ── Cria TextNode completo seguindo o manual §4.2 ──────────────────────────────
async function createTextNode(node: any): Promise<TextNode | null> {
  const content = (node.text || '').trim();
  if (!content) return null;

  const italic = node.fontStyle === 'italic';
  const style = weightToStyle(node.fontWeight || 400, italic);
  const fontName = await loadFont(node.fontFamily || 'Inter', style);

  const text = figma.createText();
  text.fontName = fontName;

  try {
    text.characters = content;
  } catch (e) {
    try { text.characters = content.replace(/[^\x20-\x7E\n]/g, ' '); } catch (e2) { return null; }
  }

  text.fontSize = Math.max(1, node.fontSize || 16);

  // Line Height §4.3
  const lh = node.lineHeight;
  if (lh && lh !== 'normal' && !isNaN(parseFloat(lh))) {
    let val = parseFloat(lh);
    if (val < 8) {
      val = val * (node.fontSize || 16);
    }
    try { text.lineHeight = { value: Math.max(1, val), unit: 'PIXELS' }; } catch(e) {}
  } else {
    try { text.lineHeight = { unit: 'AUTO' }; } catch(e) {}
  }

  // Letter Spacing
  if (node.letterSpacing && node.letterSpacing !== 0) {
    try { text.letterSpacing = { value: node.letterSpacing, unit: 'PIXELS' }; } catch(e) {}
  }

  // Text Align
  const alignMap: any = { left: 'LEFT', center: 'CENTER', right: 'RIGHT', justify: 'JUSTIFIED' };
  text.textAlignHorizontal = alignMap[node.textAlign] || 'LEFT';

  // §4.3: textCase (textTransform)
  const caseMap: any = { uppercase: 'UPPER', lowercase: 'LOWER', capitalize: 'TITLE' };
  if (caseMap[node.textTransform]) {
    try { text.textCase = caseMap[node.textTransform]; } catch(e) {}
  }

  // §4.3: textDecoration
  const decoMap: any = { underline: 'UNDERLINE', 'line-through': 'STRIKETHROUGH' };
  if (decoMap[node.textDecoration]) {
    try { text.textDecoration = decoMap[node.textDecoration]; } catch(e) {}
  }

  // §4.3: textOverflow → textTruncation
  if (node.textOverflow === 'ellipsis') {
    try { (text as any).textTruncation = 'ENDING'; } catch(e) {}
  }

  // Cor base
  if (node.color) text.fills = makeSolidFill(node.color);

  // Sizing: largura fixa, altura auto
  if (node.isMultiline && node.width > 0) {
    try {
      text.resize(Math.max(1, node.width), Math.max(1, text.height || 20));
      text.textAutoResize = 'HEIGHT';
    } catch(e) { text.textAutoResize = 'WIDTH_AND_HEIGHT'; }
  } else {
    text.textAutoResize = 'WIDTH_AND_HEIGHT';
  }

  applyPosition(text, node);
  applyCommon(text, node);
  return text;
}

// ── Cria TextNode com Mixed Styles seguindo o manual §4.4 ─────────────────────
async function createMixedTextNode(node: any): Promise<TextNode | null> {
  const runs: any[] = node.runs || [];
  if (!runs.length) return null;

  const fullText = runs.map((r: any) => r.text).join('');
  if (!fullText.trim()) return null;

  // Pré-carrega todas as fontes únicas
  for (const run of runs) {
    const italic = run.fontStyle === 'italic';
    const style = weightToStyle(run.fontWeight || 400, italic);
    run._font = await loadFont(run.fontFamily || 'Inter', style);
  }

  const text = figma.createText();
  text.fontName = runs[0]._font || { family: 'Inter', style: 'Regular' };

  try {
    text.characters = fullText;
  } catch (e) {
    try { text.characters = fullText.replace(/[^\x20-\x7E\n]/g, ' '); } catch (e2) { return null; }
  }

  // Aplica estilos por range — o núcleo do texto misto
  let cursor = 0;
  for (const run of runs) {
    const end = cursor + run.text.length;
    if (end > cursor) {
      try { text.setRangeFontName(cursor, end, run._font); } catch(e) {}
      try { text.setRangeFontSize(cursor, end, Math.max(1, run.fontSize || 16)); } catch(e) {}
      if (run.color) {
        try { text.setRangeFills(cursor, end, makeSolidFill(run.color)); } catch(e) {}
      }
      if (run.letterSpacing) {
        try { text.setRangeLetterSpacing(cursor, end, { value: run.letterSpacing, unit: 'PIXELS' }); } catch(e) {}
      }
    }
    cursor = end;
  }

  // Propriedades globais do nó
  if (node.lineHeight && !isNaN(node.lineHeight)) {
    let val = node.lineHeight;
    if (val < 8) {
      const baseFs = runs[0]?.fontSize || 16;
      val = val * baseFs;
    }
    try { text.lineHeight = { value: Math.max(1, val), unit: 'PIXELS' }; } catch(e) {}
  }
  const alignMapM: any = { left: 'LEFT', center: 'CENTER', right: 'RIGHT', justify: 'JUSTIFIED' };
  text.textAlignHorizontal = alignMapM[node.textAlign] || 'LEFT';

  // §4.3: textCase
  const caseMM: any = { uppercase: 'UPPER', lowercase: 'LOWER', capitalize: 'TITLE' };
  if (caseMM[node.textTransform]) {
    try { text.textCase = caseMM[node.textTransform]; } catch(e) {}
  }

  // §4.3: textDecoration
  const decoMM: any = { underline: 'UNDERLINE', 'line-through': 'STRIKETHROUGH' };
  if (decoMM[node.textDecoration]) {
    try { text.textDecoration = decoMM[node.textDecoration]; } catch(e) {}
  }

  // Cor base (se nenhum run tiver cor própria)
  if (node.color) {
    try { text.fills = makeSolidFill(node.color); } catch(e) {}
  }

  if (node.isMultiline && node.width > 0) {
    try {
      text.resize(Math.max(1, node.width), Math.max(1, text.height || 20));
      text.textAutoResize = 'HEIGHT';
    } catch(e) { text.textAutoResize = 'WIDTH_AND_HEIGHT'; }
  } else {
    text.textAutoResize = 'WIDTH_AND_HEIGHT';
  }

  applyPosition(text, node);
  applyCommon(text, node);
  return text;
}

// ── Cria FrameNode com todas as propriedades §9.2 ──────────────────────────────
async function createFrameNode(node: any): Promise<FrameNode> {
  const frame = figma.createFrame();
  frame.name = node.name || 'frame';
  frame.resize(Math.max(0.01, node.width || 1), Math.max(0.01, node.height || 1));

  // ── Background ──
  if (node.isImage && node.base64Data) {
    // <img> tag
    try {
      const img = figma.createImage(figma.base64Decode(node.base64Data));
      const scaleModeMap: any = { cover: 'FILL', contain: 'FIT', fill: 'STRETCH', none: 'CROP' };
      frame.fills = [{ type: 'IMAGE', imageHash: img.hash, scaleMode: scaleModeMap[node.objectFit] || 'FILL' } as ImagePaint];
    } catch(e) { frame.fills = []; }
  } else if (node.bgBase64) {
    // CSS background-image: url(...) capturado via canvas
    try {
      const img = figma.createImage(figma.base64Decode(node.bgBase64));
      const scaleModeMap: any = { cover: 'FILL', contain: 'FIT', fill: 'STRETCH', none: 'CROP' };
      const scaleMode = scaleModeMap[node.bgObjectFit] || 'FILL';
      // Se também tiver bgColor, empilha: sólido embaixo + imagem por cima
      const fills: Paint[] = [];
      if (node.bgColor && node.bgColor.a > 0) {
        fills.push(...makeSolidFill(node.bgColor));
      }
      fills.push({ type: 'IMAGE', imageHash: img.hash, scaleMode } as ImagePaint);
      frame.fills = fills;
    } catch(e) { frame.fills = []; }
  } else if (node.parsedGradient) {
    try {
      const g = node.parsedGradient;
      const stops = g.stops.map((s: any) => ({
        position: Math.min(1, Math.max(0, s.position)),
        color: { r: s.color.r, g: s.color.g, b: s.color.b, a: s.color.a }
      }));
      let transform = [[1, 0, 0], [0, 1, 0]];
      if (g.type === 'GRADIENT_LINEAR') {
        const rad = ((g.angle || 180) - 90) * (Math.PI / 180);
        const cos = Math.cos(rad); const sin = Math.sin(rad);
        transform = [
          [cos, sin, 0.5 - cos * 0.5 - sin * 0.5],
          [-sin, cos, 0.5 + sin * 0.5 - cos * 0.5]
        ];
      }
      // Se também tiver bgColor sólido, empilha abaixo do gradiente
      const fills: Paint[] = [];
      if (node.bgColor && node.bgColor.a > 0) {
        fills.push(...makeSolidFill(node.bgColor));
      }
      fills.push({ type: g.type, gradientStops: stops, gradientTransform: transform as any } as GradientPaint);
      frame.fills = fills;
    } catch(e) { frame.fills = []; }
  } else if (node.bgColor && node.bgColor.a > 0) {
    frame.fills = makeSolidFill(node.bgColor);
  } else {
    frame.fills = [];
  }

  // ── Border Radius §6.1 ──
  applyBorderRadius(frame, node);

  // ── Borders §6.1 ──
  const bTop = node.borderTop || 0, bRight = node.borderRight || 0;
  const bBot = node.borderBottom || 0, bLeft = node.borderLeft || 0;
  if ((bTop || bRight || bBot || bLeft) && node.borderColor && node.borderColor.a > 0) {
    frame.strokes = [{ type: 'SOLID', color: { r: node.borderColor.r, g: node.borderColor.g, b: node.borderColor.b }, opacity: node.borderColor.a } as SolidPaint];
    try {
      frame.strokeTopWeight    = bTop;
      frame.strokeRightWeight  = bRight;
      frame.strokeBottomWeight = bBot;
      frame.strokeLeftWeight   = bLeft;
    } catch(e) {
      frame.strokeWeight = Math.max(bTop, bRight, bBot, bLeft);
    }
    frame.strokeAlign = 'INSIDE';
  }

  // Effects: Shadows + Blur §5.2 §5.4
  const effects: Effect[] = [];
  if (node.figmaShadows) {
    // §10 checklist: ordem invertida (CSS primeiro = mais visível = topo, Figma último = topo)
    const sorted = [...node.figmaShadows].reverse();
    for (const s of sorted) {
      effects.push({
        type: s.inset ? 'INNER_SHADOW' : 'DROP_SHADOW',
        color: s.color,
        offset: { x: s.x, y: s.y },
        radius: s.blur,
        spread: s.spread || 0,
        visible: true,
        blendMode: 'NORMAL'
      });
    }
  }
  // Layer blur (§filter)
  if (node.layerBlur && node.layerBlur > 0) {
    effects.push({ type: 'LAYER_BLUR', radius: node.layerBlur, visible: true } as Effect);
  }
  // Backdrop blur §5.4
  if (node.backdropBlur && node.backdropBlur > 0) {
    if (!frame.fills || frame.fills.length === 0) {
      frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.01 } as SolidPaint];
    }
    effects.push({ type: 'BACKGROUND_BLUR', radius: node.backdropBlur, visible: true } as Effect);
  }
  if (effects.length > 0) frame.effects = effects;

  // §8.3: Transform (rotação)
  if (node.rotation) {
    try { frame.rotation = node.rotation; } catch(e) {}
  }

  // ── Overflow §8.2 ──
  applyOverflow(frame, node);

  // ── Opacity ──
  frame.opacity = Math.max(0, Math.min(1, node.opacity !== undefined ? node.opacity : 1));

  // ── Blend Mode §5.5 ──
  applyBlendMode(frame, node);

  // ── Auto Layout Mappings §3.2 §9.2 ──
  if (node.display === 'flex') {
    frame.layoutMode = node.flexDirection === 'column' ? 'VERTICAL' : 'HORIZONTAL';
    
    const justifyMap: Record<string, 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN'> = {
      'flex-start': 'MIN', 'center': 'CENTER', 'flex-end': 'MAX', 'space-between': 'SPACE_BETWEEN'
    };
    frame.primaryAxisAlignItems = justifyMap[node.justifyContent] || 'MIN';
    
    const alignMap: Record<string, 'MIN' | 'CENTER' | 'MAX' | 'BASELINE'> = {
      'flex-start': 'MIN', 'center': 'CENTER', 'flex-end': 'MAX', 'baseline': 'BASELINE'
    };
    frame.counterAxisAlignItems = alignMap[node.alignItems] || 'MIN';
    
    frame.itemSpacing = node.gap !== undefined ? parseFloat(node.gap) : 0;
    
    if (node.flexWrap === 'wrap') {
      try {
        frame.layoutWrap = 'WRAP';
        if (node.rowGap !== undefined) {
          frame.counterAxisSpacing = parseFloat(node.rowGap);
        } else {
          frame.counterAxisSpacing = frame.itemSpacing;
        }
      } catch(e) {}
    }
    
    frame.paddingTop = Math.max(0, node.paddingTop || 0);
    frame.paddingRight = Math.max(0, node.paddingRight || 0);
    frame.paddingBottom = Math.max(0, node.paddingBottom || 0);
    frame.paddingLeft = Math.max(0, node.paddingLeft || 0);

    // Ajusta modos de dimensionamento do frame pai baseado em temFixedWidth/hasFixedHeight §3.4
    frame.primaryAxisSizingMode = node.hasFixedWidth ? 'FIXED' : 'AUTO';
    frame.counterAxisSizingMode = node.hasFixedHeight ? 'FIXED' : 'AUTO';
  } else {
    frame.layoutMode = 'NONE';
  }

  // Adiciona e posiciona os filhos respeitando o modo de layout (Auto Layout vs NONE)
  const sorted2 = [...(node.children || [])].sort((a: any, b: any) => (a.zIndex || 0) - (b.zIndex || 0));
  for (const child of sorted2) {
    const childNode = await convertNode(child);
    if (childNode) {
      frame.appendChild(childNode);
      
      if (frame.layoutMode !== 'NONE') {
        if (child.position === 'absolute' || child.position === 'fixed') {
          try {
            (childNode as any).layoutPositioning = 'ABSOLUTE';
          } catch(e) {}
          childNode.x = child.x || 0;
          childNode.y = child.y || 0;
        } else {
          // No fluxo normal do Auto Layout, podemos traduzir propriedades de alinhamento e flex-grow
          if (child.flexGrow && child.flexGrow > 0) {
            try { (childNode as any).layoutGrow = 1; } catch(e) {}
          }
          if (child.alignSelf === 'stretch') {
            try { (childNode as any).layoutAlign = 'STRETCH'; } catch(e) {}
          }
        }
      } else {
        // Coordenadas absolutas normais
        childNode.x = child.x || 0;
        childNode.y = child.y || 0;
      }
      
      if (child.rotation) (childNode as any).rotation = child.rotation;
    }
  }

  applyPosition(frame, node);
  applyCommon(frame, node);
  return frame;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function applyBorderRadius(frame: FrameNode, node: any) {
  frame.topLeftRadius     = Math.max(0, node.radiusTL || 0);
  frame.topRightRadius    = Math.max(0, node.radiusTR || 0);
  frame.bottomRightRadius = Math.max(0, node.radiusBR || 0);
  frame.bottomLeftRadius  = Math.max(0, node.radiusBL || 0);
}

function applyOverflow(frame: FrameNode, node: any) {
  frame.clipsContent = node.overflow === 'hidden' || node.overflow === 'scroll' || node.overflow === 'auto';
}

function applyPosition(sceneNode: SceneNode, node: any) {
  // Posição é aplicada pelo pai após appendChild; este helper é para root nodes
  if (node.x !== undefined) sceneNode.x = Math.round(node.x);
  if (node.y !== undefined) sceneNode.y = Math.round(node.y);
}

function applyCommon(sceneNode: SceneNode, node: any) {
  if (node.opacity !== undefined && node.opacity < 1) {
    (sceneNode as any).opacity = Math.max(0, Math.min(1, node.opacity));
  }
  applyBlendMode(sceneNode, node);
}

function applyBlendMode(sceneNode: SceneNode, node: any) {
  if (!node.mixBlendMode || node.mixBlendMode === 'normal') return;
  const blendMap: any = {
    'multiply': 'MULTIPLY', 'screen': 'SCREEN', 'overlay': 'OVERLAY',
    'darken': 'DARKEN', 'lighten': 'LIGHTEN', 'color-dodge': 'COLOR_DODGE',
    'color-burn': 'COLOR_BURN', 'hard-light': 'HARD_LIGHT', 'soft-light': 'SOFT_LIGHT',
    'difference': 'DIFFERENCE', 'exclusion': 'EXCLUSION',
    'hue': 'HUE', 'saturation': 'SATURATION', 'color': 'COLOR', 'luminosity': 'LUMINOSITY'
  };
  try { (sceneNode as any).blendMode = blendMap[node.mixBlendMode] || 'NORMAL'; } catch(e) {}
}

// ══════════════════════════════════════════════════════════════════════════════
// ENTRY POINT
// ══════════════════════════════════════════════════════════════════════════════
figma.ui.onmessage = async (msg) => {
  if (msg.type !== 'convert') return;

  globalFontMapping = msg.fontMapping || {};

  const nodesJson: any[] = msg.nodes || [];
  if (!nodesJson.length) {
    figma.ui.postMessage({ type: 'error', message: 'Nenhum elemento encontrado.' });
    return;
  }

  figma.ui.postMessage({ type: 'progress', text: 'Carregando fontes base...' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  loadedFonts.add('Inter::Regular');

  // ── Wrapper frame que empilha as seções verticalmente ──────────────────────
  const frameName = msg.name || 'Code to Frame';
  const firstNode = nodesJson[0] || {};
  const pageWidth = firstNode.width || 1440;
  const totalHeight = nodesJson.reduce((s: number, n: any) => s + (n.height || 0), 0);

  const wrapper = figma.createFrame();
  wrapper.name = frameName;
  wrapper.layoutMode = 'NONE';
  wrapper.fills = [];
  wrapper.clipsContent = false;
  wrapper.resize(Math.max(1, pageWidth), Math.max(1, totalHeight));

  // Converte e empilha cada seção
  let yOffset = 0;
  for (let i = 0; i < nodesJson.length; i++) {
    const rootJson = nodesJson[i];
    figma.ui.postMessage({ type: 'progress', text: `Convertendo seção ${i + 1}/${nodesJson.length}...` });

    const section = await convertNode(rootJson);
    if (section) {
      wrapper.appendChild(section);
      section.x = 0;
      section.y = Math.round(yOffset);
    }
    yOffset += rootJson.height || 0;
  }

  figma.currentPage.appendChild(wrapper);
  figma.currentPage.selection = [wrapper];
  figma.viewport.scrollAndZoomIntoView([wrapper]);

  figma.ui.postMessage({
    type: 'success',
    message: `${nodesJson.length} seção(ões) convertida(s)!`
  });
};

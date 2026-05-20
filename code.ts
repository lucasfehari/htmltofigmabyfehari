// ═══════════════════════════════════════════════════════════════════════════════
// HTML TO FIGMA — Motor de Reconstrução Visual v5.0
// Protocolo Definitivo — Fidelidade Absoluta
// ═══════════════════════════════════════════════════════════════════════════════

figma.showUI(__html__, { width: 420, height: 680, themeColors: true });

// ── Cache de fontes carregadas ─────────────────────────────────────────────────
const loadedFonts = new Set<string>();
let globalFontMapping: Record<string, string> = {};
let GLOBAL_DISABLE_AUTO_LAYOUT = false;

async function loadFont(family: string, style: string): Promise<FontName> {
  // Normaliza família (remove aspas, pega primeira da lista)
  let fam = (family || 'Inter').split(',')[0].replace(/['"]/g, '').trim();

  // Aplica o mapeamento customizado se configurado pelo usuário
  if (globalFontMapping[fam]) {
    fam = globalFontMapping[fam];
  }

  if (!fam || /^(system|sans-serif|serif|monospace|-apple|-moz|ui-)/i.test(fam)) fam = 'Inter';

  const key = `${fam}::${style}`;
  if (loadedFonts.has(key)) return { family: fam, style };

  // Tenta a fonte original, depois fallbacks progressivos
  const attempts: FontName[] = [
    { family: fam, style },
    { family: fam, style: 'Regular' },
  ];
  if (/Bold|Black|SemiBold|ExtraBold/.test(style)) {
    attempts.push({ family: fam, style: 'Bold' });
  }
  if (/Light|Thin|ExtraLight/.test(style)) {
    attempts.push({ family: fam, style: 'Light' });
  }
  attempts.push({ family: `${fam} Display`, style });
  attempts.push({ family: 'Inter', style });
  attempts.push({ family: 'Inter', style: 'Regular' });

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

  // Fallback absoluto — Inter Regular sempre disponível no Figma
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  return { family: 'Inter', style: 'Regular' };
}

// ── Mapeia peso numérico → nome de estilo Figma ────────────────────────────────
function weightToStyle(weight: number, italic: boolean): string {
  const map: Record<number, string> = {
    100: 'Thin', 200: 'ExtraLight', 300: 'Light',
    400: 'Regular', 500: 'Medium', 600: 'SemiBold',
    700: 'Bold', 800: 'ExtraBold', 900: 'Black'
  };
  const rounded = Math.round((weight || 400) / 100) * 100;
  const base = map[Math.min(900, Math.max(100, rounded))] || 'Regular';
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

// ── Constrói GradientPaint a partir do JSON serializado ───────────────────────
function buildGradientPaint(g: any): GradientPaint | null {
  if (!g || !g.stops || g.stops.length < 2) return null;

  const stops: ColorStop[] = g.stops.map((s: any) => ({
    position: Math.min(1, Math.max(0, s.position)),
    color: { r: s.color.r, g: s.color.g, b: s.color.b, a: s.color.a }
  }));

  let transform: Transform = [[1, 0, 0], [0, 1, 0]];

  if (g.type === 'GRADIENT_LINEAR') {
    // CSS 0deg = bottom→top; 90deg = left→right
    // Figma: gradientTransform como matriz afim 2x3
    const angleDeg = g.angle !== undefined ? g.angle : 180;
    const rad = (angleDeg - 90) * (Math.PI / 180);
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    transform = [
      [cos, sin, 0.5 - (cos / 2) - (sin / 2)],
      [-sin, cos, 0.5 + (sin / 2) - (cos / 2)]
    ];
  } else if (g.type === 'GRADIENT_RADIAL') {
    // Gradiente radial centrado: transform identidade (centro em 0.5, 0.5)
    transform = [[1, 0, 0], [0, 1, 0]];
  } else if (g.type === 'GRADIENT_ANGULAR') {
    transform = [[1, 0, 0], [0, 1, 0]];
  }

  return {
    type: g.type || 'GRADIENT_LINEAR',
    gradientStops: stops,
    gradientTransform: transform,
  } as GradientPaint;
}

// ── Constrói array de Effects (sombras + blurs) ───────────────────────────────
function buildEffects(node: any): Effect[] {
  const effects: Effect[] = [];

  // DROP_SHADOW / INNER_SHADOW §5.2
  if (node.figmaShadows && node.figmaShadows.length > 0) {
    // §10: inverter ordem — CSS primeiro shadow = mais visível = Figma último
    const sorted = [...node.figmaShadows].reverse();
    for (const s of sorted) {
      effects.push({
        type: s.inset ? 'INNER_SHADOW' : 'DROP_SHADOW',
        color: { r: s.color.r, g: s.color.g, b: s.color.b, a: s.color.a },
        offset: { x: s.x, y: s.y },
        radius: Math.max(0, s.blur),
        spread: s.spread || 0,
        visible: true,
        blendMode: 'NORMAL'
      } as DropShadowEffect | InnerShadowEffect);
    }
  }

  // LAYER_BLUR §5.2 (filter: blur)
  if (node.layerBlur && node.layerBlur > 0) {
    effects.push({ type: 'LAYER_BLUR', radius: node.layerBlur, visible: true } as BlurEffect);
  }

  // BACKGROUND_BLUR §5.4 (backdrop-filter: blur)
  if (node.backdropBlur && node.backdropBlur > 0) {
    effects.push({ type: 'BACKGROUND_BLUR', radius: node.backdropBlur, visible: true } as BlurEffect);
  }

  return effects;
}

// ══════════════════════════════════════════════════════════════════════════════
// CONVERSOR PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════
async function convertNode(node: any, isRoot: boolean = true): Promise<SceneNode | null> {
  if (!node) return null;

  try {
    // ── 1. SVG ─────────────────────────────────────────────────────────────────
    if (node.type === 'SVG' && node.svgData) {
      let svg = node.svgData as string;

      // §7.1: Resolver currentColor recursivamente em todos os atributos fill/stroke
      if (/currentcolor/i.test(svg)) {
        const parentColor = rgbaToCss(node.color) || 'black';
        svg = svg.replace(/currentcolor/gi, parentColor);
      }

      try {
        const svgNode = figma.createNodeFromSvg(svg);
        svgNode.name = node.name || 'svg';

        // Redimensionamento inteligente — respeita viewBox
        let w = node.width;
        let h = node.height;
        if (!w || !h || w <= 0 || h <= 0) {
          const viewBoxMatch = svg.match(/viewBox=["']([^"']+)["']/i);
          if (viewBoxMatch) {
            const parts = viewBoxMatch[1].trim().split(/[\s,]+/);
            if (parts.length >= 4) {
              w = parseFloat(parts[2]);
              h = parseFloat(parts[3]);
            }
          }
          if (!w || !h) {
            const wMatch = svg.match(/width=["']([\d.]+)["']/i);
            const hMatch = svg.match(/height=["']([\d.]+)["']/i);
            if (wMatch && hMatch) { w = parseFloat(wMatch[1]); h = parseFloat(hMatch[1]); }
          }
        }

        const targetWidth = Math.max(0.01, w || 24);
        const targetHeight = Math.max(0.01, h || 24);

        // Força vetores internos a escalarem junto com o frame pai
        svgNode.children.forEach(child => {
          if ('constraints' in child) {
            (child as any).constraints = { horizontal: 'SCALE', vertical: 'SCALE' };
          }
        });

        svgNode.resize(targetWidth, targetHeight);
        if (node.rotation) { try { (svgNode as any).rotation = node.rotation; } catch(e) {} }
        applyOpacity(svgNode, node);
        applyBlendMode(svgNode, node);
        applyPosition(svgNode, node);
        return wrapWithMargin(svgNode, node, isRoot);
      } catch (e) {
        console.warn('SVG parse error, skipping:', e);
        return null;
      }
    }

    // ── 2. IMAGEM standalone ──────────────────────────────────────────────────
    if (node.isImage && node.base64Data) {
      return await buildImageFrame(node, isRoot);
    }

    // ── 3. TEXTO SIMPLES ──────────────────────────────────────────────────────
    if (node.type === 'TEXT') {
      const textNode = await createTextNode(node);
      if (!textNode) return null;
      return wrapWithMargin(textNode, node, isRoot);
    }

    // ── 4. TEXTO MISTO (runs com estilos diferentes) ──────────────────────────
    if (node.type === 'TEXT_MIXED') {
      const mixedNode = await createMixedTextNode(node);
      if (!mixedNode) return null;
      return wrapWithMargin(mixedNode, node, isRoot);
    }

    // ── 5. FRAME (container) ───────────────────────────────────────────────────
    if (node.type === 'FRAME') {
      const frameNode = await createFrameNode(node, isRoot);
      return wrapWithMargin(frameNode, node, isRoot);
    }

  } catch (e) {
    console.error('convertNode error:', e, JSON.stringify(node).slice(0, 300));
  }
  return null;
}

// ── Cria frame de imagem §7.2 ──────────────────────────────────────────────────
async function buildImageFrame(node: any, isRoot: boolean): Promise<SceneNode | null> {
  const frame = figma.createFrame();
  frame.name = node.name || 'Image';
  frame.resize(Math.max(0.01, node.width || 1), Math.max(0.01, node.height || 1));
  applyPosition(frame, node);
  try {
    const img = figma.createImage(figma.base64Decode(node.base64Data));
    const scaleModeMap: any = { cover: 'FILL', contain: 'FIT', fill: 'STRETCH', none: 'CROP' };
    const scaleMode = scaleModeMap[node.objectFit] || 'FILL';
    frame.fills = [{ type: 'IMAGE', imageHash: img.hash, scaleMode } as ImagePaint];
  } catch (e) { frame.fills = []; }
  applyBorderRadius(frame, node);
  applyOverflow(frame, node);
  applyOpacity(frame, node);
  applyBlendMode(frame, node);
  return wrapWithMargin(frame, node, isRoot);
}

// ── Cria TextNode completo §4.2 ────────────────────────────────────────────────
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
    try { text.characters = content.replace(/[^\x20-\x7E\n]/g, '?'); } catch (e2) { return null; }
  }

  text.fontSize = Math.max(1, node.fontSize || 16);

  // ── Line Height §4.3 — valor já vem em pixels do getComputedStyle ──────────
  applyLineHeight(text, node.lineHeight);

  // ── Letter Spacing §4.3 ──────────────────────────────────────────────────────
  if (node.letterSpacing && node.letterSpacing !== 0) {
    try { text.letterSpacing = { value: node.letterSpacing, unit: 'PIXELS' }; } catch(e) {}
  }

  // ── Text Align ────────────────────────────────────────────────────────────────
  const alignMap: any = { left: 'LEFT', center: 'CENTER', right: 'RIGHT', justify: 'JUSTIFIED', start: 'LEFT', end: 'RIGHT' };
  try { text.textAlignHorizontal = alignMap[node.textAlign] || 'LEFT'; } catch(e) {}

  // ── Text Case (textTransform) §4.3 ───────────────────────────────────────────
  const caseMap: any = { uppercase: 'UPPER', lowercase: 'LOWER', capitalize: 'TITLE' };
  if (caseMap[node.textTransform]) { try { text.textCase = caseMap[node.textTransform]; } catch(e) {} }

  // ── Text Decoration §4.3 ─────────────────────────────────────────────────────
  const decoMap: any = { underline: 'UNDERLINE', 'line-through': 'STRIKETHROUGH' };
  if (decoMap[node.textDecoration]) { try { text.textDecoration = decoMap[node.textDecoration]; } catch(e) {} }

  // ── Text Truncation §4.3 ─────────────────────────────────────────────────────
  if (node.textOverflow === 'ellipsis') { try { (text as any).textTruncation = 'ENDING'; } catch(e) {} }

  // ── Fills (cor do texto) ──────────────────────────────────────────────────────
  if (node.color) text.fills = makeSolidFill(node.color);

  // ── Sizing — largura fixa, altura auto ───────────────────────────────────────
  applyTextSizing(text, node);

  // ── Text Shadow §4.x → DROP_SHADOW effect ────────────────────────────────────
  if (node.textShadow && node.textShadow.length > 0) {
    try {
      const shadowEffects: Effect[] = node.textShadow.map((s: any) => ({
        type: 'DROP_SHADOW' as const,
        color: { r: s.color.r, g: s.color.g, b: s.color.b, a: s.color.a },
        offset: { x: s.x, y: s.y },
        radius: Math.max(0, s.blur),
        spread: 0,
        visible: true,
        blendMode: 'NORMAL' as BlendMode,
        showShadowBehindNode: false,
      } as DropShadowEffect));
      text.effects = shadowEffects;
    } catch(e) {}
  }

  applyPosition(text, node);
  applyOpacity(text, node);
  applyBlendMode(text, node);
  return text;
}

// ── Aplica lineHeight de forma segura ─────────────────────────────────────────
function applyLineHeight(text: TextNode, lh: any) {
  if (lh === null || lh === undefined || lh === 'normal' || lh === 'auto') {
    try { text.lineHeight = { unit: 'AUTO' }; } catch(e) {}
    return;
  }
  const val = parseFloat(String(lh));
  if (!isNaN(val) && val > 0) {
    // O valor já vem em pixels do getComputedStyle — usar diretamente
    try { text.lineHeight = { value: Math.max(1, val), unit: 'PIXELS' }; } catch(e) {}
  } else {
    try { text.lineHeight = { unit: 'AUTO' }; } catch(e) {}
  }
}

// ── Aplica sizing do TextNode ─────────────────────────────────────────────────
function applyTextSizing(text: TextNode, node: any) {
  if (node.isMultiline && node.width > 0) {
    try {
      text.resize(Math.max(1, node.width), Math.max(1, text.height || 20));
      text.textAutoResize = 'HEIGHT';
    } catch(e) { text.textAutoResize = 'WIDTH_AND_HEIGHT'; }
  } else {
    text.textAutoResize = 'WIDTH_AND_HEIGHT';
  }
}

// ── Cria TextNode com Mixed Styles §4.4 ───────────────────────────────────────
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
    try { text.characters = fullText.replace(/[^\x20-\x7E\n]/g, '?'); } catch (e2) { return null; }
  }

  // Aplica estilos por range §4.4
  let cursor = 0;
  for (const run of runs) {
    const end = cursor + run.text.length;
    if (end > cursor) {
      try { text.setRangeFontName(cursor, end, run._font); } catch(e) {}
      try { text.setRangeFontSize(cursor, end, Math.max(1, run.fontSize || 16)); } catch(e) {}
      if (run.color) { try { text.setRangeFills(cursor, end, makeSolidFill(run.color)); } catch(e) {} }
      if (run.letterSpacing) { try { text.setRangeLetterSpacing(cursor, end, { value: run.letterSpacing, unit: 'PIXELS' }); } catch(e) {} }
      // lineHeight por run
      if (run.lineHeight && run.lineHeight > 0) {
        try { text.setRangeLineHeight(cursor, end, { value: run.lineHeight, unit: 'PIXELS' }); } catch(e) {}
      }
      // textDecoration por run
      const decoMap: any = { underline: 'UNDERLINE', 'line-through': 'STRIKETHROUGH' };
      if (decoMap[run.textDecoration]) { try { text.setRangeTextDecoration(cursor, end, decoMap[run.textDecoration]); } catch(e) {} }
    }
    cursor = end;
  }

  // Propriedades globais do nó
  applyLineHeight(text, node.lineHeight);
  const alignMapM: any = { left: 'LEFT', center: 'CENTER', right: 'RIGHT', justify: 'JUSTIFIED', start: 'LEFT', end: 'RIGHT' };
  try { text.textAlignHorizontal = alignMapM[node.textAlign] || 'LEFT'; } catch(e) {}

  const caseMM: any = { uppercase: 'UPPER', lowercase: 'LOWER', capitalize: 'TITLE' };
  if (caseMM[node.textTransform]) { try { text.textCase = caseMM[node.textTransform]; } catch(e) {} }

  const decoMM: any = { underline: 'UNDERLINE', 'line-through': 'STRIKETHROUGH' };
  if (decoMM[node.textDecoration]) { try { text.textDecoration = decoMM[node.textDecoration]; } catch(e) {} }

  // Cor base (se os runs não tiverem cor própria)
  if (node.color) { try { text.fills = makeSolidFill(node.color); } catch(e) {} }

  applyTextSizing(text, node);
  applyPosition(text, node);
  applyOpacity(text, node);
  applyBlendMode(text, node);
  return text;
}

// ── Cria FrameNode com todas as propriedades §9.2 ──────────────────────────────
async function createFrameNode(node: any, isRoot: boolean = false): Promise<FrameNode> {
  const frame = figma.createFrame();
  frame.name = node.name || 'frame';
  frame.resize(Math.max(0.01, node.width || 1), Math.max(0.01, node.height || 1));

  // ── Fills: Imagem < CSS bg-url < Gradiente < Cor sólida ──────────────────────
  const fills: Paint[] = [];

  // Fundo sólido como camada base (se houver)
  if (node.bgColor && node.bgColor.a > 0) {
    fills.push(...makeSolidFill(node.bgColor));
  }

  if (node.isImage && node.base64Data) {
    // <img> tag renderizada como frame fill
    try {
      const img = figma.createImage(figma.base64Decode(node.base64Data));
      const scaleModeMap: any = { cover: 'FILL', contain: 'FIT', fill: 'STRETCH', none: 'CROP', '100% 100%': 'STRETCH' };
      fills.length = 0; // imagem substitui tudo
      fills.push({ type: 'IMAGE', imageHash: img.hash, scaleMode: scaleModeMap[node.objectFit] || 'FILL' } as ImagePaint);
    } catch(e) {}
  } else if (node.bgBase64) {
    // CSS background-image: url(...) capturado via canvas
    try {
      const img = figma.createImage(figma.base64Decode(node.bgBase64));
      const scaleModeMap: any = { cover: 'FILL', contain: 'FIT', fill: 'STRETCH', none: 'CROP' };
      fills.push({ type: 'IMAGE', imageHash: img.hash, scaleMode: scaleModeMap[node.bgObjectFit] || 'FILL' } as ImagePaint);
    } catch(e) {}
  } else if (node.parsedGradient) {
    const grad = buildGradientPaint(node.parsedGradient);
    if (grad) fills.push(grad);
  }

  frame.fills = fills.length > 0 ? fills : [];

  // ── Border Radius §6.1 ────────────────────────────────────────────────────────
  applyBorderRadius(frame, node);

  // ── Borders §6.1 ─────────────────────────────────────────────────────────────
  applyBorders(frame, node);

  // ── Outline (separado do border — strokeAlign OUTSIDE) ───────────────────────
  applyOutline(frame, node);

  // ── Effects: Shadows + Blurs §5.2 §5.4 ───────────────────────────────────────
  const effects = buildEffects(node);
  // Se há backdropBlur e ainda sem fill, adicionar fill mínimo §5.4
  if (node.backdropBlur && node.backdropBlur > 0 && frame.fills.length === 0) {
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.01 } as SolidPaint];
  }
  if (effects.length > 0) frame.effects = effects;

  // ── Transform §8.3 ───────────────────────────────────────────────────────────
  if (node.rotation) { try { frame.rotation = node.rotation; } catch(e) {} }

  // ── Overflow §8.2 ────────────────────────────────────────────────────────────
  applyOverflow(frame, node);

  // ── Opacity ──────────────────────────────────────────────────────────────────
  frame.opacity = Math.max(0, Math.min(1, node.opacity !== undefined ? node.opacity : 1));

  // ── Blend Mode §5.5 ──────────────────────────────────────────────────────────
  applyBlendMode(frame, node);

  // ── Auto Layout §3.2 / Grid §3.1 ─────────────────────────────────────────────
  if ((node.display === 'flex' || node.display === 'grid') && !GLOBAL_DISABLE_AUTO_LAYOUT) {
    applyAutoLayout(frame, node, isRoot);
  } else {
    frame.layoutMode = 'NONE';
  }

  // ── Pseudo-elemento ::before ─────────────────────────────────────────────────
  if (node.pseudoBefore) {
    const beforeNode = await createPseudoElement(node.pseudoBefore, node);
    if (beforeNode) frame.appendChild(beforeNode);
  }

  // ── Filhos (ordenados por zIndex, depois por domIndex) ───────────────────────
  const sortedChildren = [...(node.children || [])].sort((a: any, b: any) => {
    const zA = a.zIndex || 0, zB = b.zIndex || 0;
    if (zA !== zB) return zA - zB;
    return (a.domIndex || 0) - (b.domIndex || 0);
  });

  for (const child of sortedChildren) {
    const childNode = await convertNode(child, false);
    if (childNode) {
      frame.appendChild(childNode);
      applyChildLayoutProperties(childNode, child, frame);
    }
  }

  // ── Pseudo-elemento ::after ──────────────────────────────────────────────────
  if (node.pseudoAfter) {
    const afterNode = await createPseudoElement(node.pseudoAfter, node);
    if (afterNode) frame.appendChild(afterNode);
  }

  applyPosition(frame, node);
  return frame;
}

// ── Aplica Auto Layout ao frame §3.2 ─────────────────────────────────────────
function applyAutoLayout(frame: FrameNode, node: any, isRoot: boolean) {
  const isColumn = (node.flexDirection === 'column' || node.flexDirection === 'column-reverse');
  frame.layoutMode = isColumn ? 'VERTICAL' : 'HORIZONTAL';

  // justify-content → primaryAxisAlignItems
  const justifyMap: Record<string, 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN'> = {
    'flex-start': 'MIN', 'start': 'MIN', 'left': 'MIN',
    'center': 'CENTER',
    'flex-end': 'MAX', 'end': 'MAX', 'right': 'MAX',
    'space-between': 'SPACE_BETWEEN',
    // Figma não suporta space-around/space-evenly → fallback para SPACE_BETWEEN
    'space-around': 'SPACE_BETWEEN',
    'space-evenly': 'SPACE_BETWEEN',
  };
  frame.primaryAxisAlignItems = justifyMap[node.justifyContent] || 'MIN';

  // align-items → counterAxisAlignItems
  const alignMap: Record<string, 'MIN' | 'CENTER' | 'MAX' | 'BASELINE'> = {
    'flex-start': 'MIN', 'start': 'MIN',
    'center': 'CENTER',
    'flex-end': 'MAX', 'end': 'MAX',
    'baseline': 'BASELINE',
    'stretch': 'MIN', // stretch é aplicado nos filhos individualmente
  };
  frame.counterAxisAlignItems = alignMap[node.alignItems] || 'MIN';

  // Gap — o mainAxisGap já vem calculado corretamente pela extração
  frame.itemSpacing = Math.max(0, node.gap || 0);

  // flex-wrap / grid-wrap → layoutWrap §3.2
  if (node.flexWrap === 'wrap' || node.flexWrap === 'wrap-reverse' || node.gridWrap) {
    try {
      frame.layoutWrap = 'WRAP';
      // rowGap separado para o eixo cruzado
      const crossGap = Math.max(0, node.rowGap || node.gap || 0);
      frame.counterAxisSpacing = crossGap;
    } catch(e) {}
  }

  // Padding §3.2
  frame.paddingTop    = Math.max(0, node.paddingTop    || 0);
  frame.paddingRight  = Math.max(0, node.paddingRight  || 0);
  frame.paddingBottom = Math.max(0, node.paddingBottom || 0);
  frame.paddingLeft   = Math.max(0, node.paddingLeft   || 0);

  // Sizing mode §3.4
  if (isRoot) {
    frame.primaryAxisSizingMode = 'FIXED';
    frame.counterAxisSizingMode = 'FIXED';
  } else {
    // Frame raiz da seção: sempre fixo (é o artboard)
    frame.primaryAxisSizingMode = node.hasFixedWidth  ? 'FIXED' : 'AUTO';
    frame.counterAxisSizingMode = node.hasFixedHeight ? 'FIXED' : 'AUTO';
  }
}

// ── Aplica borders individuais por lado §6.1 ─────────────────────────────────
function applyBorders(frame: FrameNode, node: any) {
  const bTop = node.borderTop || 0, bRight = node.borderRight || 0;
  const bBot = node.borderBottom || 0, bLeft = node.borderLeft || 0;
  if ((bTop || bRight || bBot || bLeft) && node.borderColor && node.borderColor.a > 0) {
    frame.strokes = [{
      type: 'SOLID',
      color: { r: node.borderColor.r, g: node.borderColor.g, b: node.borderColor.b },
      opacity: node.borderColor.a
    } as SolidPaint];
    try {
      frame.strokeTopWeight    = bTop;
      frame.strokeRightWeight  = bRight;
      frame.strokeBottomWeight = bBot;
      frame.strokeLeftWeight   = bLeft;
    } catch(e) {
      frame.strokeWeight = Math.max(bTop, bRight, bBot, bLeft);
    }
    frame.strokeAlign = 'INSIDE'; // CSS border é sempre INSIDE §6.1
  }
}

// ── Aplica outline (stroke externo, diferente de border) ─────────────────────
function applyOutline(frame: FrameNode, node: any) {
  if (!node.outlineWidth || node.outlineWidth <= 0) return;
  if (!node.outlineColor || node.outlineColor.a <= 0) return;
  // Se já tem strokes de border, não podemos sobrepor (limitação Figma)
  // Então só aplicamos outline quando não há border
  const hasBorder = (node.borderTop || 0) + (node.borderRight || 0) + (node.borderBottom || 0) + (node.borderLeft || 0) > 0;
  if (!hasBorder) {
    frame.strokes = [{
      type: 'SOLID',
      color: { r: node.outlineColor.r, g: node.outlineColor.g, b: node.outlineColor.b },
      opacity: node.outlineColor.a
    } as SolidPaint];
    frame.strokeWeight = node.outlineWidth;
    frame.strokeAlign = 'OUTSIDE'; // outline é OUTSIDE §6.1
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function applyBorderRadius(frame: FrameNode, node: any) {
  frame.topLeftRadius     = Math.max(0, node.radiusTL || 0);
  frame.topRightRadius    = Math.max(0, node.radiusTR || 0);
  frame.bottomRightRadius = Math.max(0, node.radiusBR || 0);
  frame.bottomLeftRadius  = Math.max(0, node.radiusBL || 0);
}

function applyOverflow(frame: FrameNode, node: any) {
  frame.clipsContent = (
    node.overflow === 'hidden' ||
    node.overflow === 'scroll' ||
    node.overflow === 'auto' ||
    node.overflow === 'clip'
  );
}

function applyPosition(sceneNode: SceneNode, node: any) {
  if (node.x !== undefined) sceneNode.x = Math.round(node.x * 100) / 100;
  if (node.y !== undefined) sceneNode.y = Math.round(node.y * 100) / 100;
}

function applyOpacity(sceneNode: SceneNode, node: any) {
  if (node.opacity !== undefined && node.opacity < 1) {
    (sceneNode as any).opacity = Math.max(0, Math.min(1, node.opacity));
  }
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

// ── Aplica propriedades corretas de layout para filhos §3.3 ──────────────────
function applyChildLayoutProperties(childNode: SceneNode, childData: any, parentFrame: FrameNode) {
  if (parentFrame.layoutMode !== 'NONE') {
    // Elemento absoluto ou fixo → "flutua" sobre o Auto Layout
    if (childData.position === 'absolute' || childData.position === 'fixed' || childData.position === 'sticky') {
      try { (childNode as any).layoutPositioning = 'ABSOLUTE'; } catch(e) {}
      childNode.x = childData.x || 0;
      childNode.y = childData.y || 0;
    } else {
      // Elemento no fluxo normal do Flexbox
      if (childData.flexGrow && childData.flexGrow > 0) {
        try { (childNode as any).layoutGrow = 1; } catch(e) {}
      }
      if (childData.alignSelf === 'stretch') {
        try { (childNode as any).layoutAlign = 'STRETCH'; } catch(e) {}
      }
      // Sizing horizontal do filho §3.3
      if (childNode.type === 'FRAME' || childNode.type === 'GROUP') {
        if (childData.isFullWidth) {
          try { (childNode as any).layoutSizingHorizontal = 'FILL'; } catch(e) {}
        } else {
          try {
            (childNode as any).layoutSizingHorizontal = childData.hasFixedWidth ? 'FIXED' : 'HUG';
          } catch(e) {}
        }
        // Sizing vertical do filho
        if (childData.hasFixedHeight) {
          try { (childNode as any).layoutSizingVertical = 'FIXED'; } catch(e) {}
        }
      }
    }
  } else {
    // Layout absoluto (NONE)
    childNode.x = childData.x || 0;
    childNode.y = childData.y || 0;
  }

  if (childData.rotation) {
    try { (childNode as any).rotation = childData.rotation; } catch(e) {}
  }
}

// ── Criação de Pseudo-elementos (::before / ::after) §8.1 ────────────────────
async function createPseudoElement(pseudo: any, parentNode: any): Promise<SceneNode | null> {
  if (!pseudo || pseudo.display === 'none') return null;

  // Conteúdo textual (remover aspas CSS)
  const content = (pseudo.content || '').replace(/^["']|["']$/g, '').replace(/\\n/g, '\n');

  if (content && content !== 'none' && content !== 'normal' && content !== '') {
    try {
      const textNode = figma.createText();
      const style = weightToStyle(pseudo.fontWeight || 400, pseudo.fontStyle === 'italic');
      textNode.fontName = await loadFont(pseudo.fontFamily || parentNode.fontFamily || 'Inter', style);
      try { textNode.characters = content; } catch(e) { textNode.characters = '·'; }
      textNode.fontSize = Math.max(1, pseudo.fontSize || parentNode.fontSize || 16);

      if (pseudo.color) textNode.fills = makeSolidFill(pseudo.color);

      textNode.x = pseudo.x || 0;
      textNode.y = pseudo.y || 0;
      try { (textNode as any).layoutPositioning = 'ABSOLUTE'; } catch(e) {}
      return textNode;
    } catch(e) { return null; }
  }

  // Bloco decorativo visual
  if ((pseudo.width > 0 || pseudo.height > 0)) {
    const frame = figma.createFrame();
    frame.name = '::pseudo';
    frame.resize(Math.max(0.01, pseudo.width || 1), Math.max(0.01, pseudo.height || 1));
    frame.x = pseudo.x || 0;
    frame.y = pseudo.y || 0;

    if (pseudo.backgroundColor && pseudo.backgroundColor.a > 0) {
      frame.fills = makeSolidFill(pseudo.backgroundColor);
    } else { frame.fills = []; }

    applyBorderRadius(frame, pseudo);

    // Gradiente no pseudo-elemento
    if (pseudo.parsedGradient) {
      const grad = buildGradientPaint(pseudo.parsedGradient);
      if (grad) frame.fills = [grad];
    }

    try { (frame as any).layoutPositioning = 'ABSOLUTE'; } catch(e) {}
    return frame;
  }

  return null;
}

// ── Wraps node para simular CSS margins usando Figma Auto Layout ──────────────
function wrapWithMargin(sceneNode: SceneNode | null, node: any, isRoot: boolean): SceneNode | null {
  if (!sceneNode) return null;
  if (!node.cssMargin || GLOBAL_DISABLE_AUTO_LAYOUT || isRoot) return sceneNode;
  if (node.position === 'absolute' || node.position === 'fixed') return sceneNode;

  const { top = 0, right = 0, bottom = 0, left = 0 } = node.cssMargin;
  if (top <= 0 && right <= 0 && bottom <= 0 && left <= 0) return sceneNode;

  const wrapper = figma.createFrame();
  wrapper.name = '_margin_';
  wrapper.layoutMode = 'VERTICAL';
  wrapper.primaryAxisAlignItems = 'MIN';
  wrapper.counterAxisAlignItems = 'MIN';
  wrapper.fills = [];
  wrapper.clipsContent = false;
  wrapper.paddingTop    = top;
  wrapper.paddingRight  = right;
  wrapper.paddingBottom = bottom;
  wrapper.paddingLeft   = left;
  wrapper.primaryAxisSizingMode = 'AUTO';
  wrapper.counterAxisSizingMode = 'AUTO';
  wrapper.appendChild(sceneNode);

  if (node.isFullWidth) {
    try { (sceneNode as any).layoutSizingHorizontal = 'FILL'; } catch(e) {}
    if (sceneNode.type === 'TEXT') {
      try { (sceneNode as TextNode).textAutoResize = 'HEIGHT'; } catch(e) {}
    }
  }
  return wrapper;
}

// ══════════════════════════════════════════════════════════════════════════════
// ENTRY POINT
// ══════════════════════════════════════════════════════════════════════════════
figma.ui.onmessage = async (msg) => {
  if (msg.type !== 'convert') return;

  globalFontMapping    = msg.fontMapping    || {};
  GLOBAL_DISABLE_AUTO_LAYOUT = msg.disableAutoLayout === true;

  const nodesJson: any[] = msg.nodes || [];
  if (!nodesJson.length) {
    figma.ui.postMessage({ type: 'error', message: 'Nenhum elemento encontrado no HTML.' });
    return;
  }

  figma.ui.postMessage({ type: 'progress', text: '⚡ Carregando fontes base...' });

  // Pré-carrega fontes essenciais
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  loadedFonts.add('Inter::Regular');
  loadedFonts.add('Inter::Bold');

  const frameName = msg.name || 'Code to Frame';
  const firstNode = nodesJson[0] || {};
  const pageWidth  = firstNode.width  || 1440;
  const totalHeight = nodesJson.reduce((s: number, n: any) => s + (n.height || 0), 0);

  // Wrapper frame principal que empilha as seções verticalmente
  const wrapper = figma.createFrame();
  wrapper.name = frameName;
  wrapper.layoutMode = 'NONE';
  wrapper.fills = [];
  wrapper.clipsContent = false;
  wrapper.resize(Math.max(1, pageWidth), Math.max(1, totalHeight));

  let yOffset = 0;
  for (let i = 0; i < nodesJson.length; i++) {
    const rootJson = nodesJson[i];
    figma.ui.postMessage({ type: 'progress', text: `🔨 Convertendo seção ${i + 1} de ${nodesJson.length}...` });

    const section = await convertNode(rootJson, true);
    if (section) {
      wrapper.appendChild(section);
      section.x = 0;
      section.y = Math.round(yOffset * 100) / 100;
    }
    yOffset += rootJson.height || 0;
  }

  figma.currentPage.appendChild(wrapper);
  figma.currentPage.selection = [wrapper];
  figma.viewport.scrollAndZoomIntoView([wrapper]);

  figma.ui.postMessage({
    type: 'success',
    message: `✅ ${nodesJson.length} seção(ões) gerada(s) com sucesso!`
  });
};

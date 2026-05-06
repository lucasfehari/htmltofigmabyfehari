// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

figma.showUI(__html__, { width: 400, height: 660, themeColors: true });

const loadedFonts = new Set<string>();

async function ensureFontLoaded(family: string, style: string) {
  const key = `${family}::${style}`;
  if (loadedFonts.has(key)) return { family, style };

  try {
    await figma.loadFontAsync({ family, style });
    loadedFonts.add(key);
    return { family, style };
  } catch (e) {
    // fallback
    const fallbackKey = 'Inter::Regular';
    if (!loadedFonts.has(fallbackKey)) {
        await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
        loadedFonts.add(fallbackKey);
    }
    return { family: 'Inter', style: 'Regular' };
  }
}

async function convertToFigmaNode(jsonNode: any, parentNode: any = null): Promise<SceneNode | null> {
  if (!jsonNode) return null;
  try {

  if (jsonNode.type === 'SVG') {
    try {
      const svgNode = figma.createNodeFromSvg(jsonNode.svgData);
      svgNode.name = jsonNode.name;
      if (jsonNode.width > 0 && jsonNode.height > 0) {
        svgNode.resize(Math.max(0.01, jsonNode.width), Math.max(0.01, jsonNode.height));
      }
      return svgNode;
    } catch (e) {
      return null;
    }
  }

  if (jsonNode.type === 'TEXT') {
    if (!jsonNode.text || !jsonNode.text.trim()) return null;

    let family = (jsonNode.fontFamily || 'Inter').split(',')[0].replace(/['"]/g, '').trim();
    if (!family || family.toLowerCase().includes('system') || family.toLowerCase().includes('sans-serif') || family.toLowerCase().includes('serif') || family.toLowerCase().includes('monospace')) {
        family = 'Inter';
    }

    let w = jsonNode.fontWeight;
    if (typeof w === 'string') {
        w = w.toLowerCase();
        if (w === 'bold') w = 700;
        else if (w === 'normal') w = 400;
        else w = parseInt(w) || 400;
    } else {
        w = w || 400;
    }

    let style = 'Regular';
    if (w <= 100) style = 'Thin';
    else if (w <= 200) style = 'ExtraLight';
    else if (w <= 300) style = 'Light';
    else if (w <= 400) style = 'Regular';
    else if (w <= 500) style = 'Medium';
    else if (w <= 600) style = 'SemiBold';
    else if (w <= 700) style = 'Bold';
    else if (w <= 800) style = 'ExtraBold';
    else style = 'Black';

    if (jsonNode.fontStyle === 'italic') style += ' Italic';

    const loadedFont = await ensureFontLoaded(family, style);
    
    const text = figma.createText();
    text.fontName = loadedFont;
    text.characters = jsonNode.text || " ";
    text.fontSize = Math.max(1, jsonNode.fontSize || 16);
    
    const color = jsonNode.color || { r: 0, g: 0, b: 0, a: 1 };
    text.fills = [{ type: 'SOLID', color: { r: color.r, g: color.g, b: color.b }, opacity: color.a !== undefined ? color.a : 1 }];
    
    if (jsonNode.lineHeight) {
      text.lineHeight = { value: parseFloat(jsonNode.lineHeight), unit: 'PIXELS' };
    }
    
    const aligns: any = { 'left': 'MIN', 'center': 'CENTER', 'right': 'MAX', 'justify': 'JUSTIFIED' };
    text.textAlignHorizontal = aligns[jsonNode.textAlign] || 'MIN';
    
    if (jsonNode.isMultiline && jsonNode.width > 0) {
        text.textAutoResize = 'HEIGHT';
        text.resize(Math.max(1, jsonNode.width + 5), text.height);
    } else {
        text.textAutoResize = 'WIDTH_AND_HEIGHT';
    }
    
    if (jsonNode.textDecoration === 'underline') text.textDecoration = 'UNDERLINE';
    if (jsonNode.textDecoration === 'line-through') text.textDecoration = 'STRIKETHROUGH';
    
    return text;
  }
  
  if (jsonNode.type === 'FRAME') {
    const frame = figma.createFrame();
    frame.name = jsonNode.name;
    frame.resize(Math.max(0.01, jsonNode.width), Math.max(0.01, jsonNode.height));
    
    // Background and Images
    if (jsonNode.isImage && jsonNode.base64Data) {
      try {
        const image = figma.createImage(figma.base64Decode(jsonNode.base64Data));
        frame.fills = [{ type: 'IMAGE', imageHash: image.hash, scaleMode: 'FILL' }];
      } catch (e) {
        frame.fills = [];
      }
    } else if (jsonNode.parsedGradient) {
      try {
        const g = jsonNode.parsedGradient;
        const gradientStops = g.stops.map((s: any) => ({
          position: Math.min(1, Math.max(0, s.position)),
          color: { r: s.color.r, g: s.color.g, b: s.color.b, a: s.color.a }
        }));
        
        let transform = [[1, 0, 0], [0, 1, 0]];
        if (g.type === 'GRADIENT_LINEAR') {
           const rad = ((g.angle || 180) - 90) * (Math.PI / 180);
           const cos = Math.cos(rad);
           const sin = Math.sin(rad);
           transform = [
              [cos, sin, (1 - cos - sin) / 2],
              [-sin, cos, (1 + sin - cos) / 2]
           ];
        }
        
        frame.fills = [{
          type: g.type,
          gradientStops,
          gradientTransform: transform as any
        }];
      } catch(e) {
        frame.fills = [];
      }
    } else if (jsonNode.bgColor) {
      frame.fills = [{
        type: 'SOLID', color: { r: jsonNode.bgColor.r, g: jsonNode.bgColor.g, b: jsonNode.bgColor.b }, opacity: jsonNode.bgColor.a
      }];
    } else {
      frame.fills = [];
    }
    
    // Border Radius
    frame.topLeftRadius = Math.max(0, jsonNode.topLeftRadius || 0);
    frame.topRightRadius = Math.max(0, jsonNode.topRightRadius || 0);
    frame.bottomLeftRadius = Math.max(0, jsonNode.bottomLeftRadius || 0);
    frame.bottomRightRadius = Math.max(0, jsonNode.bottomRightRadius || 0);
    
    // Border
    // Borders (Individual)
    const hasBorder = jsonNode.borderTop > 0 || jsonNode.borderBottom > 0 || jsonNode.borderLeft > 0 || jsonNode.borderRight > 0;
    if (hasBorder && jsonNode.borderColor && jsonNode.borderColor.a > 0) {
        frame.strokes = [{ 
            type: 'SOLID', 
            color: { r: jsonNode.borderColor.r, g: jsonNode.borderColor.g, b: jsonNode.borderColor.b },
            opacity: jsonNode.borderColor.a
        }];
        if (jsonNode.borderTop === jsonNode.borderBottom && jsonNode.borderTop === jsonNode.borderLeft && jsonNode.borderTop === jsonNode.borderRight) {
            frame.strokeWeight = jsonNode.borderTop;
        } else {
            try {
                frame.strokeTopWeight = jsonNode.borderTop || 0;
                frame.strokeBottomWeight = jsonNode.borderBottom || 0;
                frame.strokeLeftWeight = jsonNode.borderLeft || 0;
                frame.strokeRightWeight = jsonNode.borderRight || 0;
            } catch(e) {
                frame.strokeWeight = Math.max(jsonNode.borderTop, jsonNode.borderBottom, jsonNode.borderLeft, jsonNode.borderRight);
            }
        }
        frame.strokeAlign = 'INSIDE';
    }
    
    frame.opacity = Math.max(0, Math.min(1, jsonNode.opacity !== undefined ? jsonNode.opacity : 1));

    // Effects (Shadows and Blurs)
    const combinedEffects: Effect[] = [];
    
    if (jsonNode.figmaShadows && jsonNode.figmaShadows.length > 0) {
      jsonNode.figmaShadows.forEach((s: any) => {
        combinedEffects.push({
          type: s.inset ? 'INNER_SHADOW' : 'DROP_SHADOW',
          color: s.color,
          offset: { x: s.x, y: s.y },
          radius: s.blur,
          spread: s.spread,
          visible: true,
          blendMode: 'NORMAL'
        });
      });
    }
    
    if (jsonNode.figmaEffects && jsonNode.figmaEffects.length > 0) {
       jsonNode.figmaEffects.forEach((ef: any) => {
         combinedEffects.push({
           type: ef.type,
           radius: ef.radius,
           visible: true,
           blendMode: 'NORMAL'
         } as any);
       });
    }
    
    if (combinedEffects.length > 0) {
       frame.effects = combinedEffects;
    }

    // Determine layout: ABSOLUTE PIXEL-PERFECT MODE
    frame.layoutMode = 'NONE';
    frame.clipsContent = jsonNode.overflow === 'hidden';
    
    if (jsonNode.rotation) {
        frame.rotation = jsonNode.rotation;
    }

    // Append children
    const sortedChildren = [...(jsonNode.children || [])].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));
    for (let child of sortedChildren) {
      const childNode = await convertToFigmaNode(child, jsonNode);
      if (childNode) {
        frame.appendChild(childNode);
        // Absolute Pixel-Perfect Positioning relative to parent
        childNode.x = (child.x || 0) - (jsonNode.x || 0);
        childNode.y = (child.y || 0) - (jsonNode.y || 0);
        
        if (child.rotation) {
            (childNode as any).rotation = child.rotation;
        }
      }
    }
    
    return frame;
  }
  
  } catch (e) {
    console.error("Figma Node Conversion Error:", e, jsonNode);
  }
  return null;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'convert') {
    const nodesJson = msg.nodes;
    if (!nodesJson || nodesJson.length === 0) {
      figma.ui.postMessage({ type: 'error', message: 'Nenhum elemento válido encontrado' });
      return;
    }

    figma.ui.postMessage({ type: 'progress', text: 'Gerando frames...' });

    // Ensure default font is loaded
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

    const createdNodes: SceneNode[] = [];
    
    let currentIndex = 0;
    for (const rootJson of nodesJson) {
      const figmaNode = await convertToFigmaNode(rootJson);
      if (figmaNode) {
        figmaNode.x = currentIndex * ((rootJson.width || 400) + 100);
        figmaNode.y = 0;
        createdNodes.push(figmaNode);
        currentIndex++;
      }
    }
    
    // Append all nodes to the canvas at once to prevent them from appearing one-by-one (Loading effect)
    for (const node of createdNodes) {
        figma.currentPage.appendChild(node);
    }

    if (createdNodes.length > 0) {
      figma.currentPage.selection = createdNodes;
      figma.viewport.scrollAndZoomIntoView(createdNodes);
      figma.ui.postMessage({ type: 'success', message: 'Convertido com sucesso!' });
    } else {
      figma.ui.postMessage({ type: 'error', message: 'Falha ao converter elementos' });
    }
  }
};

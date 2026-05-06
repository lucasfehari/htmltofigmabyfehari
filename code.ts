// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

figma.showUI(__html__, { width: 400, height: 660, themeColors: true });

// Load a fallback font immediately
async function ensureFontLoaded(family: string, style: string) {
  try {
    await figma.loadFontAsync({ family, style });
    return { family, style };
  } catch (e) {
    // fallback
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
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
    // Fallbacks for fonts
    let family = jsonNode.fontFamily || 'Inter';
    if (family.includes('system-ui') || family.includes('sans-serif')) family = 'Inter';
    let style = jsonNode.fontStyle || 'Regular';
    
    const loadedFont = await ensureFontLoaded(family, style);
    
    const text = figma.createText();
    text.fontName = loadedFont;
    text.characters = jsonNode.text || " ";
    text.fontSize = Math.max(1, jsonNode.fontSize || 16);
    text.fills = [{ type: 'SOLID', color: { r: jsonNode.color.r, g: jsonNode.color.g, b: jsonNode.color.b }, opacity: jsonNode.color.a }];
    
    if (jsonNode.lineHeight) {
      text.lineHeight = { value: jsonNode.lineHeight, unit: 'PIXELS' };
    }
    
    const aligns: any = { 'left': 'MIN', 'center': 'CENTER', 'right': 'MAX', 'justify': 'JUSTIFIED' };
    text.textAlignHorizontal = aligns[jsonNode.textAlign] || 'MIN';
    text.textAutoResize = 'WIDTH_AND_HEIGHT';
    
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
    } else if (jsonNode.bgColors && jsonNode.bgColors.length > 0) {
      frame.fills = jsonNode.bgColors.map((c: any) => ({
        type: 'SOLID', color: { r: c.r, g: c.g, b: c.b }, opacity: c.a
      }));
    } else {
      frame.fills = [];
    }
    
    // Border Radius
    frame.topLeftRadius = Math.max(0, jsonNode.topLeftRadius || 0);
    frame.topRightRadius = Math.max(0, jsonNode.topRightRadius || 0);
    frame.bottomLeftRadius = Math.max(0, jsonNode.bottomLeftRadius || 0);
    frame.bottomRightRadius = Math.max(0, jsonNode.bottomRightRadius || 0);
    
    // Border
    if (jsonNode.borderWidth > 0 && jsonNode.borderColor) {
      frame.strokes = [{ type: 'SOLID', color: { r: jsonNode.borderColor.r, g: jsonNode.borderColor.g, b: jsonNode.borderColor.b }, opacity: jsonNode.borderColor.a }];
      frame.strokeWeight = Math.max(0.01, jsonNode.borderWidth);
    }
    
    frame.opacity = Math.max(0, Math.min(1, jsonNode.opacity !== undefined ? jsonNode.opacity : 1));

    // Parse simple shadow
    if (jsonNode.boxShadow && jsonNode.boxShadow !== 'none') {
      const match = jsonNode.boxShadow.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)\s+(-?\d+)px\s+(-?\d+)px\s+(\d+)px/);
      if (match) {
        frame.effects = [{
          type: 'DROP_SHADOW',
          color: { r: parseInt(match[1])/255, g: parseInt(match[2])/255, b: parseInt(match[3])/255, a: match[4] ? parseFloat(match[4]) : 1 },
          offset: { x: parseFloat(match[5]), y: parseFloat(match[6]) },
          radius: parseFloat(match[7]),
          spread: 0,
          visible: true,
          blendMode: 'NORMAL'
        }];
      }
    }

    // Determine layout
    const isFlex = jsonNode.display === 'flex' || jsonNode.display === 'inline-flex';
    
    if (isFlex) {
      frame.layoutMode = jsonNode.flexDirection === 'row' ? 'HORIZONTAL' : 'VERTICAL';
      
      const flexAlign: any = { 'flex-start': 'MIN', 'center': 'CENTER', 'flex-end': 'MAX', 'space-between': 'SPACE_BETWEEN' };
      frame.primaryAxisAlignItems = flexAlign[jsonNode.justifyContent] || 'MIN';
      frame.counterAxisAlignItems = flexAlign[jsonNode.alignItems] || 'MIN';
      
      frame.itemSpacing = Math.max(-1000, jsonNode.gap || 0); // Figma allows negative spacing up to a point
      frame.paddingTop = Math.max(0, jsonNode.paddingTop || 0);
      frame.paddingRight = Math.max(0, jsonNode.paddingRight || 0);
      frame.paddingBottom = Math.max(0, jsonNode.paddingBottom || 0);
      frame.paddingLeft = Math.max(0, jsonNode.paddingLeft || 0);
      
      frame.primaryAxisSizingMode = 'FIXED';
      frame.counterAxisSizingMode = 'FIXED';
      frame.resize(Math.max(0.01, jsonNode.width), Math.max(0.01, jsonNode.height));
    }

    // Append children
    for (let child of jsonNode.children) {
      const childNode = await convertToFigmaNode(child, jsonNode);
      if (childNode) {
        frame.appendChild(childNode);
        
        if (!isFlex) {
           childNode.x = child.x - jsonNode.x;
           childNode.y = child.y - jsonNode.y;
        } else {
           // For flex containers, try to absolute position children that have absolute position in CSS.
           // Since we don't extract "position: absolute" explicitly, we will just rely on AutoLayout.
           // However, if the result looks "bugged", it might be because of margin-based pushing or absolute items.
           // We can check if child is severely out of bounds and force absolute position (Figma API supports layoutPositioning = 'ABSOLUTE')
           if (child.position === 'absolute' || child.position === 'fixed') {
             if ('layoutPositioning' in childNode) {
                (childNode as any).layoutPositioning = 'ABSOLUTE';
                childNode.x = child.x - jsonNode.x;
                childNode.y = child.y - jsonNode.y;
             }
           }
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
    
    for (const rootJson of nodesJson) {
      const figmaNode = await convertToFigmaNode(rootJson);
      if (figmaNode) {
        figma.currentPage.appendChild(figmaNode);
        createdNodes.push(figmaNode);
      }
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

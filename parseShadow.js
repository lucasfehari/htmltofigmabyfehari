function parseBoxShadow(boxShadowStr) {
  if (!boxShadowStr || boxShadowStr === 'none') return [];
  // Split shadows. Commas separate shadows, but are also in rgba(r, g, b, a).
  // We can split by comma not inside parentheses.
  const regex = /([^,(]+(?:\([^)]+\))?[^,]*)+/g;
  const matches = boxShadowStr.match(regex);
  if (!matches) return [];

  return matches.map(s => {
    s = s.trim();
    const isInset = s.includes('inset');
    s = s.replace('inset', '').trim();

    // Match color. Color can be at the start or end.
    let colorMatch = s.match(/(rgba?\([^)]+\)|#[0-9a-fA-F]+|[a-zA-Z]+)/);
    let colorStr = colorMatch ? colorMatch[1] : 'rgba(0,0,0,1)';
    
    // Remove color from string
    let rest = s.replace(colorStr, '').trim();

    // Match numbers
    const numRegex = /(-?[\d.]+)px/g;
    let numbers = [];
    let match;
    while ((match = numRegex.exec(rest)) !== null) {
      numbers.push(parseFloat(match[1]));
    }

    return {
      inset: isInset,
      color: colorStr,
      x: numbers[0] || 0,
      y: numbers[1] || 0,
      blur: numbers[2] || 0,
      spread: numbers[3] || 0
    };
  });
}

console.log(parseBoxShadow('rgba(0, 0, 0, 0.1) 0px 8px 32px 0px'));
console.log(parseBoxShadow('rgb(255, 255, 255) 1px 1px 2px, rgba(0,0,0,0.5) 0px 0px 5px 1px inset'));

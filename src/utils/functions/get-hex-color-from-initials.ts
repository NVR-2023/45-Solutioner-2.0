export const getHexColorFromInitials = (
  initials: string,
  lightness: number,
): string => {
  const hue = (initials.charCodeAt(0) * 10) % 360;
  const saturation = ((initials.charCodeAt(1) * 10) % 50) + 50; // Increased saturation

  const h = hue / 360;
  const s = saturation / 100;
  const l = lightness;

  // Convert HSL to RGB
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l; // Achromatic
  } else {
    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  // Convert RGB to hexadecimal
  const toHex = (value: number) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return hexColor;
};

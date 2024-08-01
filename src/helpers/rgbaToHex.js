export default function rgbaToHex(rgba) {
  const parts = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d?.?\d+)?\)/);

  if (!parts) {
    throw new Error("Invalid RGBA color format");
  }

  let [, r, g, b, a] = parts;

  r = parseInt(r).toString(16).padStart(2, "0");
  g = parseInt(g).toString(16).padStart(2, "0");
  b = parseInt(b).toString(16).padStart(2, "0");

  if (a === undefined) {
    a = "ff"; // default to 255 (opaque) if alpha is not provided
  } else {
    a = Math.round(parseFloat(a) * 255)
      .toString(16)
      .padStart(2, "0");
  }

  return `#${r}${g}${b}${a}`;
}

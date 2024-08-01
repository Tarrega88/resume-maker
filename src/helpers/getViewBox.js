export default function getViewBox(svgAttributes) {
  if (svgAttributes.viewBox) {
    return svgAttributes.viewBox;
  }
  const width = parseInt(svgAttributes.width) || 100;
  const height = parseInt(svgAttributes.height) || 100;
  return `0 0 ${width} ${height}`;
}

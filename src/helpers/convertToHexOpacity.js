export default function convertToHexOpacity(value) {
  const opacityValue = Math.round((value / 100) * 255);
  const hexString = opacityValue.toString(16).padStart(2, "0").toUpperCase();
  return hexString;
}

export default function convertHexOpacityToValue(hexString) {
  if (
    typeof hexString !== "string" ||
    hexString.length !== 2 ||
    !/^[0-9A-Fa-f]{2}$/.test(hexString)
  ) {
    throw new Error(
      "Invalid hex string. It must be a two-digit hexadecimal string.",
    );
  }
  const decimalValue = parseInt(hexString, 16);
  const value = Math.round((decimalValue / 255) * 100);
  return value;
}

export default function convertPercentageToNumber(value) {
  if (typeof value === "string" && value.includes("%")) {
    return parseFloat(value) / 100;
  }
  return value;
}

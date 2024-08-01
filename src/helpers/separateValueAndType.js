export const findUnitType = (unit) =>
  unit ? unit.replaceAll(/[\d.-]/g, "") : false;

export const findUnitValue = (unit) => {
  if (!unit) return false;
  let value = unit.replace(/[^\d.-]/g, "");
  value = value.replace(/^0+(?=\d)/, "");
  return value;
};

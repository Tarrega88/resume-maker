export const convertPt = (pt, newUnit) => {
  switch (newUnit) {
    case "in":
      return pt / 72;
    case "cm":
      return pt / 28.3465;
    case "mm":
      return pt / 2.83465;
    default:
      throw new Error("Invalid unit. Use 'in', 'cm', or 'mm'.");
  }
};

import colors from "tailwindcss/colors";

//If dynamicColors ends up working the same way, then printerFriendly will be a piece of state in the editorSlice instead of a local variable here
const printerFriendly = false;

export default function dynamicColors(
  colorName,
  colorNumber,
  printerReverse = false,
  printerGray = false,
  printerOverWrite = false,
) {
  //TODO 6/4/2024 - The "printer friendly" option, if kept, should be brought into its own function and then imported here I think, or at least tested heavily because it requires user input now, so things like printerReverse don't make as much sense to include unless implemented well
  // const black = !printerReverse ? "black" : "white";
  // const white = !printerReverse ? "white" : "black";
  // const lightGray = !printerReverse ? colors.gray[50] : colors.gray[300];
  // const darkGray = !printerReverse ? colors.gray[300] : colors.gray[50];

  if (printerFriendly && printerOverWrite) return printerOverWrite;

  switch (true) {
    case colorName === "white":
      return "#ffffff";
    case colorName === "black":
      return "#000000";
    case !printerFriendly:
      return colors[colorName][colorNumber];
    // case printerFriendly && colorNumber >= 500:
    //   return !printerGray ? "#000000" : darkGray;
    // case printerFriendly && colorNumber < 500:
    //   return !printerGray ? "#ffffff" : lightGray;
  }
  // return !printerFriendly
  //   ? colors[colorName][colorNumber]
  //   : //if it is printer friendly:
  //     colorNumber >= 500
  //     ? !printerGray
  //       ? black
  //       : darkGray
  //     : !printerGray
  //       ? white
  //       : lightGray;
}

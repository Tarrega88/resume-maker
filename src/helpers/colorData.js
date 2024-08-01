import colors from "tailwindcss/colors";

const colorList = [
  "white",
  "black",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function hexToTailwindList() {
  const hexColors = { "#ffffff": "white", "#000000": "black" };
  for (const color of colorList) {
    for (const num of numbers) {
      hexColors[colors[color][num]] = `${color}-${num}`;
    }
  }
  return hexColors;
}

const list = hexToTailwindList();

function convertHexToTailwind(hex) {
  return list[hex];
}

const fontColors = {
  50: "text-neutral-950",
  100: "text-neutral-900",
  200: "text-neutral-800",
  300: "text-neutral-800",
  400: "text-neutral-800",
  500: "text-neutral-50",
  600: "text-neutral-50",
  700: "text-neutral-50",
  800: "text-neutral-50",
  900: "text-neutral-50",
  950: "text-neutral-50",
};

const dynamicFontColor = (colorName, colorNum) =>
  colorName === "white"
    ? fontColors[50]
    : colorName === "black"
      ? fontColors[950]
      : fontColors[colorNum];

export {
  colorList,
  numbers,
  hexToTailwindList,
  convertHexToTailwind,
  dynamicFontColor,
};

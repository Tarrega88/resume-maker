import hexToRgb from "../../helpers/hexToRgb";

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

function AppliedSvgColorBox({
  text,
  icon,
  colorName,
  colorStyle,
  colorNum,
  onClick,
  onClear,
  opacity = 1,
}) {
  const fontColor = fontColors[colorNum];
  const rgbColor = colorStyle ? hexToRgb(colorStyle) : "rgb(0, 0, 0, 0)";
  const rgbString =
    colorStyle !== null
      ? `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity})`
      : "transparent";

  return (
    <div
      style={{ background: rgbString }}
      className={`size-48 ${fontColor} relative flex cursor-pointer flex-col items-center justify-center border-2 text-lg transition-all duration-150 hover:scale-105`}
      onClick={onClick}
    >
      <div className="absolute left-2 top-2">
        <div>{colorName}</div>
        <div>{colorNum}</div>
      </div>
      <div
        className="absolute right-2 top-2 text-xl font-bold transition-all duration-150 hover:scale-125"
        onClick={onClear}
      >
        X
      </div>
      <div className="text-7xl">{icon}</div>
      <div>{text}</div>
    </div>
  );
}

export default AppliedSvgColorBox;

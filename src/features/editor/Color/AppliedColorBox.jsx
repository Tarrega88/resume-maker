import { dynamicFontColor } from "../../../helpers/colorData";
import convertHexOpacityToValue from "../../../helpers/convertHexOpacityToValue";
import hexToRgb from "../../../helpers/hexToRgb";

function AppliedColorBox({
  text,
  icon,
  colorName,
  colorStyle,
  colorNum,
  onClick,
  onClear,
}) {
  const fontColor = dynamicFontColor(colorName, colorNum);

  const colorStyleNoOpacity = colorStyle?.slice(0, 7);

  const derivedOpacity = colorStyle
    ? convertHexOpacityToValue(colorStyle.slice(7)) / 100
    : "1";

  const rgbColor = colorStyle
    ? hexToRgb(colorStyleNoOpacity)
    : "rgb(0, 0, 0, 0)";
  const rgbString =
    colorStyle !== null
      ? `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${derivedOpacity})`
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

export default AppliedColorBox;

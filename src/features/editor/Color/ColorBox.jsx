import { dynamicFontColor } from "../../../helpers/colorData";

function ColorBox({
  colorName,
  colorStyle,
  colorNum,
  opacity = 1,
  onClick,
  size = "size-28",
}) {
  const fontColor = dynamicFontColor(colorName, colorNum);

  return (
    <div
      style={{ background: colorStyle, opacity: opacity }}
      className={`${size} ${fontColor} relative pl-2 pt-1 text-lg transition-all duration-150 hover:scale-110`}
      onClick={onClick}
    >
      <div>{colorName}</div>
      {colorName !== "white" && colorName !== "black" && <div>{colorNum}</div>}
    </div>
  );
}

export default ColorBox;

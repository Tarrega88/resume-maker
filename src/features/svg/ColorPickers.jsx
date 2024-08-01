import { colorList, numbers } from "../../helpers/colorData";
import dynamicColors from "../../helpers/dynamicColors";
import ColorBox from "../editor/Color/ColorBox";

function ColorPickers({
  currentColor,
  currentNumber,
  setCurrentColor,
  setCurrentNumber,
}) {
  return (
    <>
      <div className="flex cursor-pointer flex-wrap gap-1">
        {colorList.map((color) => (
          <ColorBox
            key={color}
            colorStyle={dynamicColors(color, 500)}
            colorName={color}
            colorNum={500}
            onClick={() => setCurrentColor(color)}
            size="size-24"
          />
        ))}
      </div>
      <div className="flex cursor-pointer flex-wrap gap-1 self-start">
        {currentColor !== "white" &&
          currentColor !== "black" &&
          numbers.map((number) => (
            <ColorBox
              key={number}
              colorStyle={dynamicColors(currentColor, number)}
              colorName={currentColor}
              colorNum={number}
              onClick={() => setCurrentNumber(number)}
              selected={currentNumber === number}
              size="size-24"
            />
          ))}
      </div>
    </>
  );
}

export default ColorPickers;

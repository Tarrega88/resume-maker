import { useState } from "react";
import dynamicColors from "../../helpers/dynamicColors";
import CustomRange from "../../ui/CustomRange";
import ColorBox from "../editor/Color/ColorBox";
import { MdOutlineGradient } from "react-icons/md";
import ApplySvgStylesButton from "./ApplySvgStylesButton";
import { useDispatch } from "react-redux";
import { updateSvg } from "./svgEditorSlice";
import hexToRgb from "../../helpers/hexToRgb";
import AppliedSvgColorBox from "./AppliedSvgColorBox";

function GradientOptions({
  currentColor,
  currentNumber,
  currentPath,
  opacity,
  setOpacity,
  derivedOpacity,
}) {
  const [colorName, setColorName] = useState(null);
  const [colorNumber, setColorNumber] = useState(0);
  const [colorOpacity, setColorOpacity] = useState(1);
  const dispatch = useDispatch();

  function handleSetColor() {
    setColorName(currentColor);
    setColorNumber(currentNumber);
    setColorOpacity(derivedOpacity);
  }

  function handleClear(e) {
    e.stopPropagation();
    setColorName(null);
    setColorNumber(0);
    setColorOpacity(1);
  }

  function handleApply() {
    const rgbColor = hexToRgb(dynamicColors(colorName, colorNumber));

    const rgbString = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity})`;

    dispatch(
      updateSvg({
        path: currentPath,
        style: {
          stopColor: rgbString,
          stopOpacity: derivedOpacity,
        },
      }),
    );
  }

  return (
    <div className="flex flex-col gap-16 px-2">
      <div className="flex justify-between">
        <ColorBox
          colorStyle={dynamicColors(currentColor, currentNumber)}
          colorName={currentColor}
          colorNum={currentNumber}
          opacity={derivedOpacity}
        />
        <ApplySvgStylesButton onClick={handleApply} />
      </div>
      <CustomRange
        value={opacity}
        setValue={setOpacity}
        width="full"
        text="Opacity"
        valueType="%"
      />

      <div className="flex gap-8">
        <AppliedSvgColorBox
          text="Gradient Color"
          icon={<MdOutlineGradient />}
          colorName={colorName || "Empty"}
          colorNum={colorName && colorNumber}
          colorStyle={colorName && dynamicColors(colorName, colorNumber)}
          onClick={handleSetColor}
          onClear={handleClear}
          opacity={colorOpacity}
        />
      </div>
    </div>
  );
}

export default GradientOptions;

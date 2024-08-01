import { PiPaintBucketFill } from "react-icons/pi";
import dynamicColors from "../../helpers/dynamicColors";
import CustomRange from "../../ui/CustomRange";
import ColorBox from "../editor/Color/ColorBox";
import { CiPen } from "react-icons/ci";
import { updateSvg } from "./svgEditorSlice";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import ApplySvgStylesButton from "./ApplySvgStylesButton";
import AppliedSvgColorBox from "./AppliedSvgColorBox";

const initialState = {
  appliedFillColor: null,
  appliedFillNumber: 0,
  appliedStrokeColor: null,
  appliedStrokeNumber: 0,
  appliedFillOpacity: 1,
  appliedStrokeOpacity: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "setColor":
      return { ...state, [action.colorType]: action.payload };
    case "setNumber":
      return { ...state, [action.numberType]: action.payload };
    case "setOpacity":
      return { ...state, [action.opacityType]: action.payload };
    default:
      return null;
  }
}

function UniformOptions({
  currentColor,
  currentNumber,
  currentPath,
  opacity,
  setOpacity,
  derivedOpacity,
}) {
  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);

  const [strokeWidth, setStrokeWidth] = useState(0);
  // const [opacity, setOpacity] = useState(100);
  // const derivedOpacity = opacity / 100;

  const strokeWidthDict = {
    empty: {},
    0: { strokeWidth: 0 },
    1: { strokeWidth: 1 },
    2: { strokeWidth: 2 },
    3: { strokeWidth: 3 },
    4: { strokeWidth: 4 },
  };

  const colorKey = {
    appliedStroke: {
      color: "appliedStrokeColor",
      number: "appliedStrokeNumber",
      opacity: "appliedStrokeOpacity",
    },
    appliedFill: {
      color: "appliedFillColor",
      number: "appliedFillNumber",
      opacity: "appliedFillOpacity",
    },
  };

  function handleApply() {
    reduxDispatch(
      updateSvg({
        path: currentPath,
        style: {
          ...colorsToSend(),
          ...strokeWidthDict[state.appliedStrokeColor ? strokeWidth : "empty"],
        },
      }),
    );
  }

  const handleSetColor = (e, exampleType, keep = true) => {
    e.stopPropagation();
    const { color, number, opacity } = colorKey[exampleType];
    dispatch({
      type: "setColor",
      colorType: color,
      payload: keep ? currentColor : null,
    });
    dispatch({
      type: "setNumber",
      numberType: number,
      payload: keep ? currentNumber : 0,
    });
    dispatch({
      type: "setOpacity",
      opacityType: opacity,
      payload: keep ? derivedOpacity : 1,
    });
  };

  const colorsToSend = () => {
    const fillColor = state.appliedFillColor
      ? dynamicColors(state.appliedFillColor, state.appliedFillNumber)
      : "transparent";
    const strokeColor = state.appliedStrokeColor
      ? dynamicColors(state.appliedStrokeColor, state.appliedStrokeNumber)
      : "transparent";
    return {
      ...(state.appliedFillColor && {
        fill: fillColor,
        fillOpacity: state.appliedFillOpacity,
      }),
      ...(state.appliedStrokeColor && {
        stroke: strokeColor,
        strokeOpacity: state.appliedStrokeOpacity,
      }),
    };
  };

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
      <div className="flex flex-col gap-4">
        <CustomRange
          value={opacity}
          setValue={setOpacity}
          width="full"
          text="Opacity"
          valueType="%"
        />
        <CustomRange
          value={strokeWidth}
          setValue={setStrokeWidth}
          width="full"
          max={4}
          min={0}
          disabled={!state.appliedStrokeColor}
          text="Stroke Width"
        />
      </div>

      <div className="flex gap-8">
        <AppliedSvgColorBox
          text="Stroke"
          icon={<CiPen />}
          colorName={state.appliedStrokeColor || "Empty"}
          colorStyle={
            state.appliedStrokeColor &&
            dynamicColors(state.appliedStrokeColor, state.appliedStrokeNumber)
          }
          colorNum={state.appliedStrokeColor && state.appliedStrokeNumber}
          onClick={(e) => handleSetColor(e, "appliedStroke")}
          onClear={(e) => handleSetColor(e, "appliedStroke", false)}
          opacity={state.appliedStrokeOpacity}
        />

        <AppliedSvgColorBox
          text="Fill"
          icon={<PiPaintBucketFill />}
          colorName={state.appliedFillColor || "Empty"}
          colorStyle={
            state.appliedFillColor &&
            dynamicColors(state.appliedFillColor, state.appliedFillNumber)
          }
          colorNum={state.appliedFillColor && state.appliedFillNumber}
          onClick={(e) => handleSetColor(e, "appliedFill")}
          onClear={(e) => handleSetColor(e, "appliedFill", false)}
          opacity={state.appliedFillOpacity}
        />
      </div>
      {/* <ApplySvgStylesButton onClick={handleApply} /> */}
    </div>
  );
}

export default UniformOptions;

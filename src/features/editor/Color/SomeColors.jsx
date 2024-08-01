import { useState } from "react";
import {
  colorList,
  numbers,
  convertHexToTailwind,
} from "../../../helpers/colorData";
import dynamicColors from "../../../helpers/dynamicColors";
import ColorBox from "./ColorBox";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";

import { TbBackground } from "react-icons/tb";
import {
  CgBorderAll,
  CgBorderTop,
  CgBorderRight,
  CgBorderBottom,
  CgBorderLeft,
} from "react-icons/cg";

import { IoTextOutline } from "react-icons/io5";
import AppliedColorBox from "./AppliedColorBox";
import {
  deleteStyleProperty,
  editCustomStyle,
  setStyleEditorView,
} from "../editorSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentStyleData } from "../editorSlice";
import DirectionalAppliedColorBox from "./DirectionalAppliedColorBox";
import { PiTextAUnderline } from "react-icons/pi";
import CustomRange from "../../../ui/CustomRange";
import convertToHexOpacity from "../../../helpers/convertToHexOpacity";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";

const colorData = {
  backgroundColor: {},
  color: {},
  borderTopColor: {},
  borderRightColor: {},
  borderBottomColor: {},
  borderLeftColor: {},
  textDecorationColor: {},
};

function SomeColors() {
  const [currentColor, setCurrentColor] = useState("blue");
  const [currentNumber, setCurrentNumber] = useState(500);
  const [opacity, setOpacity] = useState(100);

  const hexOpacity = convertToHexOpacity(opacity);

  const currentStyleData = useSelector(getCurrentStyleData);

  const colorIsUnique = currentColor === "white" || currentColor === "black";

  for (const property of Object.keys(colorData)) {
    if (Object.hasOwn(currentStyleData, property)) {
      const [colorName, colorNum] = convertHexToTailwind(
        currentStyleData[property].slice(0, 7),
      ).split("-");
      colorData[property].colorName = colorName;
      colorData[property].colorNumber = colorNum;
      colorData[property].hexCode = currentStyleData[property];
    } else {
      colorData[property].colorName = null;
      colorData[property].colorNumber = null;
      colorData[property].hexCode = null;
    }
  }

  const currentColorHex = dynamicColors(currentColor, currentNumber);
  const dispatch = useDispatch();

  function handleSetColor(e, propertyName) {
    e.stopPropagation();
    dispatch(
      editCustomStyle({ [propertyName]: `${currentColorHex}${hexOpacity}` }),
    );
  }

  function handleRemoveColor(e, propertyName) {
    e.stopPropagation();
    dispatch(deleteStyleProperty(propertyName));
  }

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        currentView="Color Picker"
        views={["Color Picker"]}
        // section="Color"
      >
        {/* <TopRightConfirmButton onClick={handleReduxDispatch} /> */}
        <div className="grid grid-cols-[5fr_4fr_4fr] gap-2 p-6">
          <div className="flex pb-8 text-2xl">
            Choose a color on the left...
          </div>
          <div className="flex text-2xl">
            To see more options in the middle...
          </div>
          <div className="flex text-2xl">And apply the colors on the right</div>
          <div className="flex cursor-pointer flex-wrap gap-1">
            {/*WHITE TEST*/}
            {/* <ColorBox
              colorStyle="#ffffff"
              colorName="white"
              onClick={() => setCurrentColor("white")}
            /> */}
            {colorList.map((color) => (
              <ColorBox
                key={color}
                colorStyle={dynamicColors(color, 500)}
                colorName={color}
                colorNum={500}
                onClick={() => setCurrentColor(color)}
              />
            ))}
          </div>
          <div>
            <div className="flex cursor-pointer flex-wrap gap-1 self-start">
              {!colorIsUnique &&
                numbers.map((number) => (
                  <ColorBox
                    key={number}
                    colorStyle={dynamicColors(currentColor, number)}
                    colorName={currentColor}
                    colorNum={number}
                    onClick={() => setCurrentNumber(number)}
                    selected={currentNumber === number}
                  />
                ))}
            </div>
          </div>
          {/* Third column */}
          <div className="flex flex-col gap-8">
            {/* first row */}
            <div className="flex gap-4">
              <ColorBox
                colorStyle={dynamicColors(currentColor, currentNumber)}
                colorName={currentColor}
                colorNum={currentNumber}
                opacity={opacity / 100}
              />
            </div>
            <div>
              <CustomRange
                value={opacity}
                setValue={setOpacity}
                width="xl"
                text="Opacity"
                valueType="%"
              />
            </div>
            {/* second row */}
            <div className="flex flex-wrap gap-4">
              <AppliedColorBox
                text="Background"
                icon={<TbBackground />}
                colorName={
                  colorData.backgroundColor.colorName !== null
                    ? colorData.backgroundColor.colorName
                    : "Empty"
                }
                colorStyle={colorData.backgroundColor.hexCode}
                colorNum={colorData.backgroundColor.colorNumber}
                onClick={(e) => handleSetColor(e, "backgroundColor")}
                onClear={(e) => handleRemoveColor(e, "backgroundColor")}
              />
              <AppliedColorBox
                text="Text"
                icon={<IoTextOutline />}
                colorName={
                  colorData.color.colorName !== null
                    ? colorData.color.colorName
                    : "Empty"
                }
                colorStyle={colorData.color.hexCode}
                colorNum={colorData.color.colorNumber}
                onClick={(e) => handleSetColor(e, "color")}
                onClear={(e) => handleRemoveColor(e, "color")}
              />
              <AppliedColorBox
                text="Text Decoration"
                icon={<PiTextAUnderline />}
                colorName={
                  colorData.textDecorationColor.colorName !== null
                    ? colorData.textDecorationColor.colorName
                    : "Empty"
                }
                colorStyle={colorData.textDecorationColor.hexCode}
                colorNum={colorData.textDecorationColor.colorNumber}
                onClick={(e) => handleSetColor(e, "textDecorationColor")}
                onClear={(e) => handleRemoveColor(e, "textDecorationColor")}
              />
              <DirectionalAppliedColorBox
                text="Border"
                icon={<CgBorderAll />}
                topIcon={<CgBorderTop />}
                rightIcon={<CgBorderRight />}
                bottomIcon={<CgBorderBottom />}
                leftIcon={<CgBorderLeft />}
                topProperty="borderTopColor"
                rightProperty="borderRightColor"
                bottomProperty="borderBottomColor"
                leftProperty="borderLeftColor"
                topColorStyle={colorData.borderTopColor.hexCode}
                rightColorStyle={colorData.borderRightColor.hexCode}
                bottomColorStyle={colorData.borderBottomColor.hexCode}
                leftColorStyle={colorData.borderLeftColor.hexCode}
                currentHex={currentColorHex}
              />
            </div>
          </div>
        </div>
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default SomeColors;

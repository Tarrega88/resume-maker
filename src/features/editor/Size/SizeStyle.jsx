import { useSelector } from "react-redux";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import { getCurrentStyleData } from "../editorSlice";
import getMaxDimensions from "../../../helpers/getMaxDimensions";
import getHAndWButtonData from "../../../helpers/getHAndWButtonData";
import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import { currentPageSize } from "../../Creator/sectionCreatorSlice";
import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import { useState } from "react";

const widthTypes = [
  {
    name: "width",
    displayName: "Width",
    linkedName: "height",
  },
];
const heightTypes = [
  {
    name: "height",
    displayName: "Height",
    linkedName: "width",
  },
];

function SizeStyle() {
  const [linkActive, setLinkActive] = useState(false);

  const currentStyle = useSelector(getCurrentStyleData);
  const activeWidths = findActiveTypes(widthTypes, currentStyle);
  const activeheights = findActiveTypes(heightTypes, currentStyle);

  const widthData = findTypeAndValue(widthTypes, activeWidths);
  const heightData = findTypeAndValue(heightTypes, activeheights);

  const pageSize = useSelector(currentPageSize);

  const maxDimensionData = getMaxDimensions(pageSize);
  const { heightMeasurements, widthMeasurements } =
    getHAndWButtonData(maxDimensionData);

  const widthButtonData = findButtonDataLinked(
    widthTypes,
    widthData,
    widthMeasurements,
  )[0];

  const heightButtonData = findButtonDataLinked(
    heightTypes,
    heightData,
    heightMeasurements,
  )[0];

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon currentView="Sizes" views={["Sizes"]} section="Size">
        <div className="flex gap-16">
          <div className="flex gap-16">
            <MultiButtonNumberInput
              name={widthButtonData.name}
              displayName={widthButtonData.displayName}
              unitType={widthButtonData.unitType}
              unitValue={widthButtonData.unitValue}
              unitTypes={widthButtonData.unitTypes}
              linkedName={widthButtonData.linkedName}
              linkActive={linkActive}
              toggleLink={setLinkActive}
            />
            <MultiButtonNumberInput
              name={heightButtonData.name}
              displayName={heightButtonData.displayName}
              unitType={heightButtonData.unitType}
              unitValue={heightButtonData.unitValue}
              unitTypes={heightButtonData.unitTypes}
              linkedName={heightButtonData.linkedName}
              linkActive={linkActive}
              toggleLink={setLinkActive}
            />
          </div>
        </div>
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default SizeStyle;

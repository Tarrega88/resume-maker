/*
flexBasis - all measurement values- will probably use the usual page limits here (MultiButton)
flexGrow - numerical values, 0 to 10 (MultiButton)
flexShrink - numerical values, 0 to 10 (MultiButton)
*/

import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import getHAndWButtonData from "../../../helpers/getHAndWButtonData";
import getMaxDimensions from "../../../helpers/getMaxDimensions";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import MultiToggleGrid from "../../../ui/MultiToggle/MultiToggleGrid";

const flexBasisType = [
  {
    name: "flexBasis",
    displayName: "Flex Basis",
  },
];

const flexGrowShrinkOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function SizeBehavior({ styleData, pageSize }) {
  const maxDimensionData = getMaxDimensions(pageSize);
  const { widthMeasurements } = getHAndWButtonData(maxDimensionData);

  const activeFlexBasisData = findActiveTypes(flexBasisType, styleData);
  const flexBasisData = findTypeAndValue(flexBasisType, activeFlexBasisData);

  //TODO 6/3/2024: since I changed findButtonData to take in only one "measurement" (really unitTypes parameter) I might have to figure out how to determine whether to use the width or heightMeasurements to find maximums. Could just see what the flexDirection is of the current container?
  const flexBasisButtonData = findButtonDataLinked(
    flexBasisType,
    flexBasisData,
    // heightMeasurements,
    widthMeasurements,
  )[0];

  return (
    <div className="flex gap-16">
      <MultiButtonNumberInput
        name={flexBasisButtonData.name}
        displayName={flexBasisButtonData.displayName}
        unitType={flexBasisButtonData.unitType}
        unitValue={flexBasisButtonData.unitValue}
        unitTypes={flexBasisButtonData.unitTypes}
      />
      <MultiToggleGrid
        title="Flex Grow"
        options={flexGrowShrinkOptions}
        styleName="flexGrow"
        active={Object.hasOwn(styleData, "flexGrow")}
        activeProperty={
          Object.hasOwn(styleData, "flexGrow") && styleData.flexGrow
        }
      />
      <MultiToggleGrid
        title="Flex Shrink"
        options={flexGrowShrinkOptions}
        styleName="flexShrink"
        active={Object.hasOwn(styleData, "flexShrink")}
        activeProperty={
          Object.hasOwn(styleData, "flexShrink") && styleData.flexShrink
        }
      />
    </div>
  );
}

export default SizeBehavior;

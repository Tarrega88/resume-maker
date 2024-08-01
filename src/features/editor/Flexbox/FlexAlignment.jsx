import filterObjectKey from "../../../helpers/filterObjectKey";
import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import getHAndWButtonData from "../../../helpers/getHAndWButtonData";
import getMaxDimensions from "../../../helpers/getMaxDimensions";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import MultiToggle from "../../../ui/MultiToggle/MultiToggle";
import MultiToggleGrid from "../../../ui/MultiToggle/MultiToggleGrid";

const justifyContentOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];

const alignItemsOptions = ["flex-start", "center", "flex-end", "baseline"];
//TODO 6/3/2024: verify that alignSelf can or cannot use baseline in React PDF - I'm not sure yet
const alignSelfOptions = ["flex-start", "center", "flex-end"];

const gapType = [
  {
    name: "gap",
    displayName: "Gap",
  },
];

function FlexAlignment({ styleData, pageSize }) {
  const maxDimensionData = getMaxDimensions(pageSize);
  const allMeasurements = getHAndWButtonData(maxDimensionData);

  const widthMeasurements = filterObjectKey(allMeasurements.widthMeasurements, [
    "%",
  ]);

  const activeGap = findActiveTypes(gapType, styleData);
  const gapData = findTypeAndValue(gapType, activeGap);

  const gapButtonData = findButtonDataLinked(
    gapType,
    gapData,
    widthMeasurements,
  )[0];

  return (
    <div className="flex gap-16">
      <MultiToggleGrid
        title="Justify Content"
        options={justifyContentOptions}
        styleName="justifyContent"
        active={Object.hasOwn(styleData, "justifyContent")}
        activeProperty={
          Object.hasOwn(styleData, "justifyContent") && styleData.justifyContent
        }
      />
      <MultiToggle
        title="Align Items"
        options={alignItemsOptions}
        styleName="alignItems"
        active={Object.hasOwn(styleData, "alignItems")}
        activeProperty={
          Object.hasOwn(styleData, "alignItems") && styleData.alignItems
        }
      />
      <MultiToggle
        title="Align Self"
        options={alignSelfOptions}
        styleName="alignSelf"
        active={Object.hasOwn(styleData, "alignSelf")}
        activeProperty={
          Object.hasOwn(styleData, "alignSelf") && styleData.alignSelf
        }
      />
      <MultiButtonNumberInput
        name={gapButtonData.name}
        displayName={gapButtonData.displayName}
        unitType={gapButtonData.unitType}
        unitValue={gapButtonData.unitValue}
        unitTypes={gapButtonData.unitTypes}
      />
    </div>
  );
}

export default FlexAlignment;

import { useSelector } from "react-redux";
import { getCurrentStyleData } from "../editorSlice";
import { currentPageSize } from "../../Creator/sectionCreatorSlice";
import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import getMaxDimensions from "../../../helpers/getMaxDimensions";
import getHAndWButtonData from "../../../helpers/getHAndWButtonData";
import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";

const horizontalTypes = [
  {
    name: "left",
    displayName: "Left",
    linkedName: "right",
  },
  {
    name: "right",
    displayName: "Right",
    linkedName: "left",
  },
];

const verticalTypes = [
  {
    name: "top",
    displayName: "Top",
    linkedName: "bottom",
  },
  {
    name: "bottom",
    displayName: "Bottom",
    linkedName: "top",
  },
];

function MeasuredPositioning() {
  const styleData = useSelector(getCurrentStyleData);
  const pageSize = useSelector(currentPageSize);

  const activeHorizontals = findActiveTypes(horizontalTypes, styleData);
  const activeVerticals = findActiveTypes(verticalTypes, styleData);
  const positionDataH = findTypeAndValue(horizontalTypes, activeHorizontals);
  const positionDataV = findTypeAndValue(verticalTypes, activeVerticals);

  const maxDimensionData = getMaxDimensions(pageSize);
  const { heightMeasurements, widthMeasurements } =
    getHAndWButtonData(maxDimensionData);

  const allHorizontalData = findButtonDataLinked(
    horizontalTypes,
    positionDataH,
    widthMeasurements,
  );

  const allVerticalData = findButtonDataLinked(
    verticalTypes,
    positionDataV,
    heightMeasurements,
  );

  return (
    <div className="grid grid-cols-2 gap-16">
      {allHorizontalData.map((e, i) => (
        <MultiButtonNumberInput
          key={i}
          name={e.name}
          displayName={e.displayName}
          unitType={e.unitType}
          unitValue={e.unitValue}
          unitTypes={e.unitTypes}
          negativeMax={true}
        />
      ))}
      {allVerticalData.map((e, i) => (
        <MultiButtonNumberInput
          key={i}
          name={e.name}
          displayName={e.displayName}
          unitType={e.unitType}
          unitValue={e.unitValue}
          unitTypes={e.unitTypes}
          negativeMax={true}
        />
      ))}
    </div>
  );
}

export default MeasuredPositioning;

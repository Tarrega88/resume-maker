import { useSelector } from "react-redux";
import getMaxDimensions from "../../../helpers/getMaxDimensions";
import getHAndWButtonData from "../../../helpers/getHAndWButtonData";
import { getCurrentStyleData } from "../editorSlice";
import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import filterObjectKey from "../../../helpers/filterObjectKey";
import { currentPageSize } from "../../Creator/sectionCreatorSlice";
import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import { useState } from "react";

const horizontalTypes = [
  {
    name: "borderLeftWidth",
    displayName: "Left",
    linkedName: "borderRightWidth",
  },
  {
    name: "borderRightWidth",
    displayName: "Right",
    linkedName: "borderLeftWidth",
  },
];

const verticalTypes = [
  {
    name: "borderTopWidth",
    displayName: "Top",
    linkedName: "borderBottomWidth",
  },
  {
    name: "borderBottomWidth",
    displayName: "Bottom",
    linkedName: "borderTopWidth",
  },
];

function BorderWidthApplicator() {
  const currentStyle = useSelector(getCurrentStyleData);
  const pageSize = useSelector(currentPageSize);

  const [hLinkActive, setHLinkActive] = useState(false);
  const [vLinkActive, setVLinkActive] = useState(false);

  const maxDimensionData = getMaxDimensions(pageSize);
  const allMeasurements = getHAndWButtonData(maxDimensionData);

  const heightMeasurements = filterObjectKey(
    allMeasurements.heightMeasurements,
    ["%"],
  );

  const widthMeasurements = filterObjectKey(allMeasurements.widthMeasurements, [
    "%",
  ]);

  const activeHorizontals = findActiveTypes(horizontalTypes, currentStyle);
  const activeVerticals = findActiveTypes(verticalTypes, currentStyle);
  const borderWidthDataH = findTypeAndValue(horizontalTypes, activeHorizontals);
  const borderWidthDataV = findTypeAndValue(verticalTypes, activeVerticals);

  const allHorizontalData = findButtonDataLinked(
    horizontalTypes,
    borderWidthDataH,
    widthMeasurements,
  );
  const allVerticalData = findButtonDataLinked(
    verticalTypes,
    borderWidthDataV,
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
          linkedName={e.linkedName}
          linkActive={hLinkActive}
          toggleLink={setHLinkActive}
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
          linkedName={e.linkedName}
          linkActive={vLinkActive}
          toggleLink={setVLinkActive}
        />
      ))}
    </div>
  );
}

export default BorderWidthApplicator;

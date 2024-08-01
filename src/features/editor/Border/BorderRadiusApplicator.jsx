import { useSelector } from "react-redux";
import getMaxDimensions from "../../../helpers/getMaxDimensions";
import getHAndWButtonData from "../../../helpers/getHAndWButtonData";
import { getCurrentStyleData } from "../editorSlice";
import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import { currentPageSize } from "../../Creator/sectionCreatorSlice";
import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import { useState } from "react";

const topTypesAndDisplayNames = [
  {
    name: "borderTopLeftRadius",
    displayName: "Top Left",
    linkedName: "borderTopRightRadius",
  },
  {
    name: "borderTopRightRadius",
    displayName: "Top Right",
    linkedName: "borderTopLeftRadius",
  },
];

const bottomTypesAndDisplayNames = [
  {
    name: "borderBottomLeftRadius",
    displayName: "Bottom Left",
    linkedName: "borderBottomRightRadius",
  },
  {
    name: "borderBottomRightRadius",
    displayName: "Bottom Right",
    linkedName: "borderBottomLeftRadius",
  },
];

function BorderRadiusApplicator() {
  const [topLinkActive, setTopLinkActive] = useState(false);
  const [bottomLinkActive, setBottomLinkActive] = useState(false);

  const currentStyle = useSelector(getCurrentStyleData);

  const pageSize = useSelector(currentPageSize);

  const maxDimensionData = getMaxDimensions(pageSize);
  const { heightMeasurements } = getHAndWButtonData(maxDimensionData);

  const activeTops = findActiveTypes(topTypesAndDisplayNames, currentStyle);
  const activeBottoms = findActiveTypes(
    bottomTypesAndDisplayNames,
    currentStyle,
  );
  const borderDataTop = findTypeAndValue(topTypesAndDisplayNames, activeTops);
  const borderDataBottom = findTypeAndValue(
    bottomTypesAndDisplayNames,
    activeBottoms,
  );

  const allTopData = findButtonDataLinked(
    topTypesAndDisplayNames,
    borderDataTop,
    heightMeasurements,
  );
  const allBottomData = findButtonDataLinked(
    bottomTypesAndDisplayNames,
    borderDataBottom,
    heightMeasurements,
  );

  return (
    <div className="grid grid-cols-2 gap-16">
      {allTopData.map((e, i) => (
        <MultiButtonNumberInput
          key={i}
          name={e.name}
          displayName={e.displayName}
          unitType={e.unitType}
          unitValue={e.unitValue}
          unitTypes={e.unitTypes}
          linkedName={e.linkedName}
          linkActive={topLinkActive}
          toggleLink={setTopLinkActive}
        />
      ))}

      {allBottomData.map((e, i) => (
        <MultiButtonNumberInput
          key={i}
          name={e.name}
          displayName={e.displayName}
          unitType={e.unitType}
          unitValue={e.unitValue}
          unitTypes={e.unitTypes}
          linkedName={e.linkedName}
          linkActive={bottomLinkActive}
          toggleLink={setBottomLinkActive}
        />
      ))}
    </div>
  );
}

export default BorderRadiusApplicator;

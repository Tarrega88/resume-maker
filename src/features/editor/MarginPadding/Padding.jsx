import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import { useState } from "react";

const horizontalTypes = [
  {
    name: "paddingLeft",
    displayName: "Left",
    linkedName: "paddingRight",
  },
  {
    name: "paddingRight",
    displayName: "Right",
    linkedName: "paddingLeft",
  },
];

const verticalTypes = [
  {
    name: "paddingTop",
    displayName: "Top",
    linkedName: "paddingBottom",
  },
  {
    name: "paddingBottom",
    displayName: "Bottom",
    linkedName: "paddingTop",
  },
];

function Padding({ currentStyle, heightMeasurements, widthMeasurements }) {
  const [hLinkActive, setHLinkActive] = useState(false);
  const [vLinkActive, setVLinkActive] = useState(false);

  const activeHorizontals = findActiveTypes(horizontalTypes, currentStyle);
  const activeVerticals = findActiveTypes(verticalTypes, currentStyle);
  const paddingDataH = findTypeAndValue(horizontalTypes, activeHorizontals);
  const paddingDataV = findTypeAndValue(verticalTypes, activeVerticals);

  const allHorizontalData = findButtonDataLinked(
    horizontalTypes,
    paddingDataH,
    widthMeasurements,
  );

  const allVerticalData = findButtonDataLinked(
    verticalTypes,
    paddingDataV,
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

export default Padding;

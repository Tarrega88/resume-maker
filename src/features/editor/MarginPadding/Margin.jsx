import {
  findActiveTypes,
  findTypeAndValue,
} from "../../../helpers/findCurrentStyles";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import findButtonDataLinked from "../../../helpers/findButtonDataLinked";
import { useState } from "react";

const horizontalTypes = [
  {
    name: "marginLeft",
    displayName: "Left",
    linkedName: "marginRight",
  },
  {
    name: "marginRight",
    displayName: "Right",
    linkedName: "marginLeft",
  },
];

const verticalTypes = [
  {
    name: "marginTop",
    displayName: "Top",
    linkedName: "marginBottom",
  },
  {
    name: "marginBottom",
    displayName: "Bottom",
    linkedName: "marginTop",
  },
];

function Margin({ currentStyle, heightMeasurements, widthMeasurements }) {
  const activeHorizontals = findActiveTypes(horizontalTypes, currentStyle);
  const activeVerticals = findActiveTypes(verticalTypes, currentStyle);
  const marginDataH = findTypeAndValue(horizontalTypes, activeHorizontals);
  const marginDataV = findTypeAndValue(verticalTypes, activeVerticals);

  const [hLinkActive, setHLinkActive] = useState(false);
  const [vLinkActive, setVLinkActive] = useState(false);

  const allHorizontalData = findButtonDataLinked(
    horizontalTypes,
    marginDataH,
    widthMeasurements,
  );

  const allVerticalData = findButtonDataLinked(
    verticalTypes,
    marginDataV,
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

export default Margin;

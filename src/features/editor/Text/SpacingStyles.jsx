import { convertPt } from "../../../helpers/convertPt";
import {
  findUnitType,
  findUnitValue,
} from "../../../helpers/separateValueAndType";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import MultiToggle from "../../../ui/MultiToggle/MultiToggle";

const alignmentData = {
  title: "Alignment",
  styleName: "textAlign",
  options: ["left", "center", "right"],
};

const textIndentLimit = 600;
const lineHeightLimit = 10;
const letterSpacingLimit = 50;

function SpacingStyles({ styleData }) {
  const spacingData = [
    {
      name: "textIndent",
      displayName: "Indentation",
      unitType: findUnitType(styleData?.textIndent) || false,
      unitValue: findUnitValue(styleData?.textIndent) || false,
      unitTypes: {
        pt: {
          limit: textIndentLimit,
          minLimit: 0,
          buttons: [1, 2.5],
        },
        in: {
          limit: convertPt(textIndentLimit, "in"),
          minLimit: 0,
          buttons: [0.01, 0.1],
        },
        cm: {
          limit: convertPt(textIndentLimit, "cm"),
          minLimit: 0,
          buttons: [0.01, 0.1],
        },
        mm: {
          limit: convertPt(textIndentLimit, "mm"),
          minLimit: 0,
          buttons: [0.1, 0.25],
        },
      },
    },
    {
      name: "lineHeight",
      displayName: "Line Height",
      unitType: findUnitType(styleData?.lineHeight) || false,
      unitValue: findUnitValue(styleData?.lineHeight) || false,
      unitTypes: {
        pt: {
          limit: lineHeightLimit,
          minLimit: 0,
          buttons: [0.01, 0.1],
        },
        in: {
          limit: convertPt(lineHeightLimit, "in"),
          minLimit: 0,
          buttons: [0.01, 0.02],
        },
        cm: {
          limit: convertPt(lineHeightLimit, "cm"),
          minLimit: 0,
          buttons: [0.01, 0.05],
        },
        mm: {
          limit: convertPt(lineHeightLimit, "mm"),
          minLimit: 0,
          buttons: [0.1, 0.25],
        },
      },
    },
    {
      name: "letterSpacing",
      displayName: "Letter Spacing",
      unitType: findUnitType(styleData?.letterSpacing) || false,
      unitValue: findUnitValue(styleData?.letterSpacing) || false,
      unitTypes: {
        pt: {
          limit: letterSpacingLimit,
          minLimit: 0,
          buttons: [0.1, 0.25],
        },
        in: {
          limit: convertPt(letterSpacingLimit, "in"),
          minLimit: 0,
          buttons: [0.01, 0.1],
        },
        cm: {
          limit: convertPt(letterSpacingLimit, "cm"),
          minLimit: 0,
          buttons: [0.01, 0.1],
        },
        mm: {
          limit: convertPt(letterSpacingLimit, "mm"),
          minLimit: 0,
          buttons: [0.1, 0.25],
        },
      },
    },
  ];

  return (
    <div className="flex gap-16">
      <MultiToggle
        options={alignmentData.options}
        title={alignmentData.title}
        styleName={alignmentData.styleName}
        active={Object.hasOwn(styleData, alignmentData.styleName)}
        activeProperty={
          Object.hasOwn(styleData, alignmentData.styleName) &&
          styleData[alignmentData.styleName]
        }
      />
      {spacingData.map((e, i) => (
        <MultiButtonNumberInput
          key={i}
          name={e.name}
          displayName={e.displayName}
          unitType={e.unitType}
          unitValue={e.unitValue}
          unitTypes={e.unitTypes}
        />
      ))}
    </div>
  );
}

export default SpacingStyles;

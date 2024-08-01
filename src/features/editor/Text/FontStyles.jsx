import { convertPt } from "../../../helpers/convertPt";
import {
  findUnitType,
  findUnitValue,
} from "../../../helpers/separateValueAndType";
import MultiButtonNumberInput from "../../../ui/MultiButton/MultiButtonNumberInput";
import MultiToggle from "../../../ui/MultiToggle/MultiToggle";
import MultiToggleGrid from "../../../ui/MultiToggle/MultiToggleGrid";

//These limits are absolute extremes that would likely never be used, so I might change these
const fontSizeLimit = 500;

const fontData = {
  Roboto: {
    hasItalic: true,
    fontWeights: [100, 300, 400, 500, 700, 900],
  },
  "Roboto Mono": {
    hasItalic: true,
    fontWeights: [100, 300, 400, 500, 700],
  },
  Montserrat: {
    hasItalic: true,
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  Merriweather: {
    hasItalic: true,
    fontWeights: [300, 400, 700, 900],
  },
};

const fontToggles = [
  {
    title: "Font Family",
    styleName: "fontFamily",
    options: ["Montserrat", "Roboto", "Roboto Mono", "Merriweather"],
  },
  {
    title: "Font Style",
    styleName: "fontStyle",
    options: ["normal", "italic"],
  },
];

function FontStyles({ styleData }) {
  const fontSizeData = {
    name: "fontSize",
    displayName: "Font Size",
    unitType: findUnitType(styleData?.fontSize) || false,
    unitValue: findUnitValue(styleData?.fontSize) || false,
    unitTypes: {
      pt: {
        limit: fontSizeLimit,
        minLimit: 0,
        buttons: [1, 5],
      },
      in: {
        limit: convertPt(fontSizeLimit, "in"),
        minLimit: 0,
        buttons: [0.01, 0.1],
      },
      cm: {
        limit: convertPt(fontSizeLimit, "cm"),
        minLimit: 0,
        buttons: [0.01, 0.1],
      },
      mm: {
        limit: convertPt(fontSizeLimit, "mm"),
        minLimit: 0,
        buttons: [0.1, 0.25],
      },
    },
  };

  return (
    <div className="flex justify-center gap-16">
      <MultiButtonNumberInput
        name="fontSize"
        displayName="Font Size"
        unitType={fontSizeData.unitType}
        unitValue={fontSizeData.unitValue}
        unitTypes={fontSizeData.unitTypes}
      />
      {fontToggles.map((data, i) => (
        <MultiToggle
          key={i}
          options={data.options}
          title={data.title}
          styleName={data.styleName}
          active={Object.hasOwn(styleData, data.styleName)}
          activeProperty={
            Object.hasOwn(styleData, data.styleName) &&
            styleData[data.styleName]
          }
        />
      ))}
      <MultiToggleGrid
        title="Font Weight"
        styleName="fontWeight"
        active={Object.hasOwn(styleData, "fontWeight")}
        activeProperty={
          Object.hasOwn(styleData, "fontWeight") && styleData.fontWeight
        }
        options={fontData[styleData?.fontFamily]?.fontWeights || [400]}
      />
    </div>
  );
}

export default FontStyles;

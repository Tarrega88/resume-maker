import { useSelector } from "react-redux";
import { getCurrentStyleData } from "../editorSlice";
import MultiToggle from "../../../ui/MultiToggle/MultiToggle";
import DynamicMultiToggle from "../../../ui/MultiToggle/DynamicMultiToggle";

const borderStyleSides = {
  borderTopStyle: "Top",
  borderBottomStyle: "Bottom",
  borderLeftStyle: "Left",
  borderRightStyle: "Right",
};
const borderStyleOptions = ["solid", "dotted", "dashed"];

const borderStyleToggles = Object.entries(borderStyleSides).map(
  ([styleName, title]) => {
    return {
      title,
      styleName,
    };
  },
);

function BorderStyleApplicator() {
  const styleData = useSelector(getCurrentStyleData);
  const allActive = Object.keys(borderStyleSides).every(
    (style) => styleData[style] === styleData.borderTopStyle,
  )
    ? styleData.borderTopStyle
    : null;

  const styles = [
    "borderTopStyle",
    "borderBottomStyle",
    "borderLeftStyle",
    "borderRightStyle",
  ];
  const check = styles.some((e) => Object.hasOwn(styleData, e));

  return (
    <div className="flex gap-16">
      <DynamicMultiToggle
        options={borderStyleOptions}
        title="All Sides"
        styleNames={Object.keys(borderStyleSides)}
        active={check}
        activeProperty={allActive}
      />
      {borderStyleToggles.map((data, i) => (
        <MultiToggle
          key={i}
          options={borderStyleOptions}
          title={data.title}
          styleName={data.styleName}
          // active={Object.hasOwn(styleData, data.styleName)}
          active={Object.hasOwn(styleData, data.styleName)}
          activeProperty={
            Object.hasOwn(styleData, data.styleName) &&
            styleData[data.styleName]
          }
        />
      ))}
    </div>
  );
}

export default BorderStyleApplicator;

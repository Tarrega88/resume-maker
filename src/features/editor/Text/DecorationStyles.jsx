import InclusiveMultiToggle from "../../../ui/MultiToggle/InclusiveMultiToggle";
import MultiToggle from "../../../ui/MultiToggle/MultiToggle";

const decorationData = [
  {
    title: "Text Case",
    styleName: "textTransform",
    options: ["capitalize", "uppercase", "lowercase"],
  },
  {
    title: "Deco Style",
    styleName: "textDecorationStyle",
    options: ["solid", "wavy", "dotted"],
  },
];

function DecorationStyles({ styleData }) {
  return (
    <div className="flex justify-center gap-16">
      {decorationData.map((data, i) => (
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
      <InclusiveMultiToggle
        title="Decoration"
        options={["underline", "line-through"]}
        styleName="textDecoration"
        active={Object.hasOwn(styleData, "textDecoration")}
        activeProperties={
          Object.hasOwn(styleData, "textDecoration")
            ? styleData.textDecoration.split(" ")
            : []
        }
      />
    </div>
  );
}

export default DecorationStyles;

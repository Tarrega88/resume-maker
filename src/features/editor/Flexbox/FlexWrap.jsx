import MultiToggle from "../../../ui/MultiToggle/MultiToggle";

const flexWrapOptions = ["wrap", "wrap-reverse", "nowrap"];
const alignContentOptions = ["flex-start", "center", "flex-end"];

function FlexWrap({ styleData }) {
  return (
    <div className="flex gap-16">
      <MultiToggle
        title="Wrap"
        options={flexWrapOptions}
        styleName="flexWrap"
        active={Object.hasOwn(styleData, "flexWrap")}
        activeProperty={
          Object.hasOwn(styleData, "flexWrap") && styleData.flexWrap
        }
      />
      <MultiToggle
        title="Align Content"
        options={alignContentOptions}
        styleName="alignContent"
        active={Object.hasOwn(styleData, "alignContent")}
        activeProperty={
          Object.hasOwn(styleData, "alignContent") && styleData.alignContent
        }
      />
    </div>
  );
}

export default FlexWrap;

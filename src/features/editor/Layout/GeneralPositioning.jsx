import { useSelector } from "react-redux";
import MultiToggle from "../../../ui/MultiToggle/MultiToggle";
import { getCurrentStyleData } from "../editorSlice";

//zIndex seems like it's buggy - keeping out until react-pdf has an update or I figure it out
// const zIndexOptions = {
//   displayName: "Z-Index",
//   styleName: "zIndex",
//   options: ["-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5"],
// };

const toggleOptions = [
  {
    displayName: "Display",
    styleName: "display",
    options: ["flex", "none"],
  },
  {
    displayName: "Position",
    styleName: "position",
    options: ["static", "relative", "absolute"],
  },
  {
    displayName: "Overflow",
    styleName: "overflow",
    options: ["visible", "hidden"],
  },
];

function GeneralPositioning() {
  const styleData = useSelector(getCurrentStyleData);

  return (
    <div className="flex gap-16">
      {toggleOptions.map((e, i) => (
        <MultiToggle
          key={i}
          title={e.displayName}
          options={e.options}
          styleName={e.styleName}
          active={Object.hasOwn(styleData, e.styleName)}
          activeProperty={
            Object.hasOwn(styleData, e.styleName) && styleData[e.styleName]
          }
        />
      ))}
    </div>
  );
}

export default GeneralPositioning;

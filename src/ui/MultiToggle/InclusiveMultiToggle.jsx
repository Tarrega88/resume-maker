import ToggleButton from "./ToggleButton";
import MultiToggleShutter from "./MultiToggleShutter";
import MultiToggleNub from "./MultiToggleNub";
import { useDispatch } from "react-redux";
import {
  deleteStyleProperty,
  editCustomStyle,
} from "../../features/editor/editorSlice";

function InclusiveMultiToggle({
  title = "Title",
  options = ["Option One"],
  styleName,
  active,
  activeProperties,
}) {
  const dispatch = useDispatch();

  function handleDispatch(option) {
    if (activeProperties.includes(option)) {
      if (activeProperties.length === 1) {
        dispatch(deleteStyleProperty(styleName));
      } else {
        dispatch(
          editCustomStyle({
            [styleName]: activeProperties.filter((e) => e !== option).join(" "),
          }),
        );
      }
    } else {
      dispatch(
        editCustomStyle({
          [styleName]: [...activeProperties, option].join(" "),
        }),
      );
    }
  }

  return (
    <div className="py relative flex h-[400px] flex-col items-center gap-4 overflow-hidden rounded-md bg-slate-800 px-4 py-8">
      <MultiToggleShutter
        open={active}
        onClick={() => dispatch(editCustomStyle({ [styleName]: options[0] }))}
      />
      <div className="text-lg">{title}</div>
      <MultiToggleNub
        onClick={() => dispatch(deleteStyleProperty(styleName))}
        visible={!active}
      />
      {options.map((option, i) => (
        <ToggleButton
          key={i}
          text={option}
          selected={activeProperties.includes(option)}
          onClick={() => handleDispatch(option)}
        />
      ))}
    </div>
  );
}

export default InclusiveMultiToggle;

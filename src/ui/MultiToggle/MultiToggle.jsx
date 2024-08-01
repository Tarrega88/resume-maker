import ToggleButton from "./ToggleButton";
import MultiToggleShutter from "./MultiToggleShutter";
import MultiToggleNub from "./MultiToggleNub";
import { useDispatch } from "react-redux";
import {
  deleteStyleProperty,
  editCustomStyle,
} from "../../features/editor/editorSlice";

//TODO 6/1/2024: make it so switching to active brings it to a predefined default value instead of options[0]
function MultiToggle({
  title = "Title",
  options = ["Option One"],
  styleName = "Missing Name",
  active = true,
  activeProperty,
}) {
  const dispatch = useDispatch();
  return (
    <div className="relative flex h-[400px] flex-col items-center gap-4 overflow-hidden rounded-md bg-slate-800 px-4 py-8">
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
          selected={activeProperty === option}
          onClick={() => dispatch(editCustomStyle({ [styleName]: option }))}
        />
      ))}
    </div>
  );
}

export default MultiToggle;

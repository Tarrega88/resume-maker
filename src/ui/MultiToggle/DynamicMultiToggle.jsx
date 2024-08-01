import ToggleButton from "./ToggleButton";
import MultiToggleShutter from "./MultiToggleShutter";
import MultiToggleNub from "./MultiToggleNub";
import { useDispatch } from "react-redux";
import {
  deleteStyleProperty,
  editCustomStyle,
} from "../../features/editor/editorSlice";

//TODO 6/1/2024: make it so switching to active brings it to a predefined default value instead of options[0]
function DynamicMultiToggle({
  title = "Title",
  options = ["Option One"],
  styleNames = ["Missing Name"],
  active = true,
  activeProperty,
  // activeProperties = [],
}) {
  const dispatch = useDispatch();

  function handleDispatch(option) {
    styleNames.forEach((style) =>
      dispatch(editCustomStyle({ [style]: option })),
    );
  }

  function handleDelete() {
    styleNames.forEach((style) => {
      dispatch(deleteStyleProperty(style));
    });
  }

  function handleInitialize() {
    styleNames.forEach((style) =>
      dispatch(editCustomStyle({ [style]: options[0] })),
    );
  }

  return (
    <div className="relative flex h-[400px] flex-col items-center gap-4 overflow-hidden rounded-md bg-slate-800 px-4 py-8">
      <MultiToggleShutter open={active} onClick={handleInitialize} />
      <div className="text-lg">{title}</div>
      <MultiToggleNub onClick={handleDelete} visible={!active} />
      {options.map((option, i) => (
        <ToggleButton
          key={i}
          text={option}
          selected={activeProperty === option}
          // selected={activeProperties.includes(option)}
          onClick={() => handleDispatch(option)}
        />
      ))}
    </div>
  );
}

export default DynamicMultiToggle;

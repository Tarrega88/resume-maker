import ToggleButton from "./ToggleButton";
import MultiToggleShutter from "./MultiToggleShutter";
import MultiToggleNub from "./MultiToggleNub";
import { useDispatch } from "react-redux";
import {
  deleteStyleProperty,
  editCustomStyle,
} from "../../features/editor/editorSlice";

function MultiToggleGrid({
  title = "Title",
  options = ["Option One"],
  styleName = "Missing Name",
  active = true,
  activeProperty,
  optionTextReplacements = [],
}) {
  const dispatch = useDispatch();

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2",
    4: "grid-cols-2",
    5: "grid-cols-2",
    6: "grid-cols-2",
    7: "grid-cols-2",
    8: "grid-cols-2",
    9: "grid-cols-3",
    10: "grid-cols-3",
    11: "grid-cols-3",
    12: "grid-cols-3",
  };

  return (
    <div className="relative flex h-[400px] w-72 flex-col items-center gap-4 overflow-hidden rounded-md bg-slate-800 px-4 py-8">
      <div className="col-span-full text-lg">{title}</div>
      <MultiToggleShutter
        open={active}
        onClick={() => dispatch(editCustomStyle({ [styleName]: options[0] }))}
      />
      <MultiToggleNub
        onClick={() => dispatch(deleteStyleProperty(styleName))}
        visible={!active}
      />
      <div className={`grid ${gridCols[options.length]} gap-4`}>
        {options.map((option, i) => (
          <ToggleButton
            key={i}
            text={
              optionTextReplacements.length > 0
                ? optionTextReplacements[i]
                : option
            }
            selected={activeProperty === option}
            onClick={() => dispatch(editCustomStyle({ [styleName]: option }))}
            // size={options.length >= 9 ? "xs" : "sm"}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
}

export default MultiToggleGrid;

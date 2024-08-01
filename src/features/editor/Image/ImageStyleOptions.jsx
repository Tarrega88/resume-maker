/*

object-fit (multi-toggle)
  contain
  cover
  fill
  none
  scale-down

object-position
  1, 2, OR 4 values
  top, bottom, center, left, right
  or measurement values


  one option is to use a grid:
  top left, top right, top center
  center left, center right
  center
  bottom left, bottom right, bottom center

  //directional words don't seem to work - will need to go with MultiButtons or make a new component that allows multiple values - probably best

*/

import { useSelector } from "react-redux";
// import MultiToggleGrid from "../../../ui/MultiToggle/MultiToggleGrid";
import { getCurrentStyleData } from "../editorSlice";
import MultiToggle from "../../../ui/MultiToggle/MultiToggle";

const objectFitOptions = ["none", "contain", "cover", "fill", "scale-down"];

// const objectPositionText = [
//   "top left",
//   "top center",
//   "top right",
//   "center left",
//   "center",
//   "center right",
//   "bottom left",
//   "bottom center",
//   "bottom right",
// ];

// const objectPositionOptions = [
//   "0",
//   "50 0",
//   "100 0",
//   "0 50",
//   "50 50",
//   "100 50",
//   "0 100",
//   "50 100",
//   "100 100",
// ];

function ImageStyleOptions() {
  const styleData = useSelector(getCurrentStyleData);
  return (
    <div className="flex gap-16">
      {/* <MultiToggleGrid
        title="Object Position"
        options={objectPositionOptions}
        styleName="objectPosition"
        active={Object.hasOwn(styleData, "objectPosition")}
        activeProperty={
          Object.hasOwn(styleData, "objectPosition") && styleData.objectPosition
        }
        optionTextReplacements={objectPositionText}
      /> */}
      <MultiToggle
        title="Object Fit"
        options={objectFitOptions}
        styleName="objectFit"
        active={Object.hasOwn(styleData, "objectFit")}
        activeProperty={
          Object.hasOwn(styleData, "objectFit") && styleData.objectFit
        }
      />
    </div>
  );
}

export default ImageStyleOptions;

import { useDispatch, useSelector } from "react-redux";
import {
  addDocStyle,
  moveStyleDown,
  moveStyleUp,
  removeDocStyle,
} from "../Creator/sectionCreatorSlice";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import SmallIcon from "../../ui/SmallIcon";
import DownUpArrows from "./DownUpArrows";
import { defaultStyleNames } from "../../helpers/defaultStyleNames";
import {
  setCurrentlySelectedCustomStyle,
  setEditorView,
  setStyleEditorView,
} from "../editor/editorSlice";
import { useState } from "react";
import CurrentStyleExpanded from "./CurrentStyleExpanded";
import NewStyleButtonInput from "./NewStyleButtonInput";

function DocExpandedStyles() {
  const dispatch = useDispatch();

  const styles = useSelector((state) => state.sectionCreator.docStyles);
  //styles is just an array of text style names, allStyles has the rest of the data
  const allStyles = useSelector((state) => state.editor.customStyles);

  const [hoveredStyle, setHoveredStyle] = useState(false);

  function handleSetStyle(style) {
    dispatch(setCurrentlySelectedCustomStyle(style));
    dispatch(setEditorView("style"));
    dispatch(setStyleEditorView("newStylePicker"));
  }

  return (
    <div className="relative grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-12">
        {/*Idea: Can definitely add  && !isDefault into the filter but I'm thinking another option would be to still show the default styles but not show the button to remove, and instead allow reversal here*/}
        <div>
          <NewStyleButtonInput doc={true} />
          {styles.map((style, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b py-1"
              onMouseEnter={() => setHoveredStyle(style)}
            >
              {!defaultStyleNames.includes(style) ? (
                <>
                  <DownUpArrows
                    text={style}
                    downArrowClick={() => dispatch(moveStyleDown(i))}
                    upArrowClick={() => dispatch(moveStyleUp(i))}
                    textClick={() => handleSetStyle(style)}
                  />
                  <SmallIcon
                    icon={<IoRemove />}
                    onClick={() => dispatch(removeDocStyle(style))}
                  />
                </>
              ) : (
                style
              )}
            </div>
          ))}
        </div>
        <div>
          <div className="border-b pb-4">Available Styles</div>
          <div>
            {allStyles
              .filter(
                ({ name, isDefault }) => !styles.includes(name) && !isDefault,
              )
              .map(({ name }, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b py-1 pl-1"
                >
                  <div
                    onClick={() => handleSetStyle(name)}
                    className="cursor-pointer transition-all duration-300 hover:text-slate-300"
                    onMouseEnter={() => setHoveredStyle(name)}
                  >
                    {name}
                  </div>
                  <SmallIcon
                    icon={<IoAdd />}
                    onClick={() => dispatch(addDocStyle(name))}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <CurrentStyleExpanded hoveredStyle={hoveredStyle} styleData={allStyles} />
    </div>
  );
}

export default DocExpandedStyles;

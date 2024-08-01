import { useDispatch, useSelector } from "react-redux";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import { useState } from "react";
import GridButton from "../../../ui/GridButton";
import {
  setStyleEditorView,
  setCurrentlySelectedCustomStyle,
} from "../editorSlice";
import { defaultStyleNames } from "../../../helpers/defaultStyleNames";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import StylePropertyDisplay from "./StylePropertyDisplay";

function CustomStyleList() {
  const dispatch = useDispatch();
  const customStyles = useSelector((state) => state.editor.customStyles).filter(
    (e) => !defaultStyleNames.includes(e.name),
  );
  const customStyleNames = customStyles.map((e) => e.name);
  const [currentHovered, setCurrentHovered] = useState(null);

  function handleDispatch(name) {
    dispatch(setCurrentlySelectedCustomStyle(name));
    dispatch(setStyleEditorView("Dimension"));
  }

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        currentView="Style Selection"
        views={["Style Selection"]}
      >
        <div className="relative grid h-full grid-cols-2 gap-16 overflow-visible p-8">
          <div className="flex flex-wrap gap-8 self-start p-8">
            {customStyleNames.map((name, i) => (
              <GridButton
                key={i}
                title={name}
                onMouseEnter={() => setCurrentHovered(i)}
                size="sm"
                onClick={() => handleDispatch(name)}
              />
            ))}
          </div>
          <StylePropertyDisplay
            currentlyHovered={customStyles[currentHovered]}
          />
        </div>
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default CustomStyleList;

import { useDispatch, useSelector } from "react-redux";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import { useState } from "react";
import { createNewStyle, setStyleEditorView } from "../editorSlice";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";

function NewStyleNamer() {
  const currentStyles = useSelector((state) => state.editor.customStyles);
  const dispatch = useDispatch();
  const [localVal, setLocalVal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const styleNamePresent = currentStyles.find(
      (style) => style.name.toLowerCase() === localVal.toLowerCase(),
    );
    if (!styleNamePresent) {
      dispatch(createNewStyle(localVal));
      setLocalVal("");
      dispatch(setStyleEditorView("Dimension"));
    } else {
      console.log("That style name has already been used");
    }
  }

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon currentView={"Name Style"} views={["Name Style"]}>
        <form onSubmit={handleSubmit}>
          <input
            className="w-max bg-slate-600 outline-none"
            value={localVal}
            onChange={(e) => setLocalVal(e.target.value)}
          />
        </form>
        <button
          className="border-l bg-slate-600 hover:bg-slate-500"
          onClick={handleSubmit}
        >
          OK
        </button>
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default NewStyleNamer;

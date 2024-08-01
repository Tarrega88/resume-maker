import { useState } from "react";
import { useDispatch } from "react-redux";
import { editText } from "../Creator/sectionCreatorSlice";

function TextEditor({
  defaultValue,
  handleClose,
  handleOpen,
  editorOpen,
  currentlySelected,
}) {
  const dispatch = useDispatch();
  const [localText, setLocalText] = useState(defaultValue);

  function handleKeyDown(e) {
    if (e.shiftKey && e.code === "Enter") {
      dispatch(editText(localText));
      handleClose();
    }
  }

  function handleBlur() {
    dispatch(editText(localText));
  }

  return editorOpen ? (
    <div className="col-span-2">
      <textarea
        placeholder="Enter Text..."
        defaultValue={localText}
        onChange={(e) => setLocalText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className="min-h-12 w-full"
      />
    </div>
  ) : (
    <div
      onClick={handleOpen}
      className={`flex w-full justify-center bg-slate-700 px-1 text-slate-100 transition-all duration-300 ${currentlySelected ? "hover:bg-slate-600" : ""}`}
    >
      {localText.slice(0, 16)} ...
    </div>
  );
}

export default TextEditor;

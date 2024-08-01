import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  createNewStyle,
  setEditorView,
  setStyleEditorView,
} from "../editor/editorSlice";
import { addDocStyle, addStyle } from "../Creator/sectionCreatorSlice";
import { defaultStyleNames } from "../../helpers/defaultStyleNames";

function NewStyleButtonInput({ doc = false }) {
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function handleClose() {
    setInputValue("");
    setInputOpen(false);
  }

  function handleSubmit() {
    if (inputValue.length > 0 && !defaultStyleNames.includes(inputValue)) {
      dispatch(createNewStyle(inputValue));
      doc ? dispatch(addDocStyle(inputValue)) : dispatch(addStyle(inputValue));
      dispatch(setEditorView("style"));
      dispatch(setStyleEditorView("newStylePicker"));
    }
  }
  return inputOpen ? (
    <div className="flex gap-1 pb-2 pt-3">
      <input
        className="flex w-full outline-none"
        onKeyDown={(e) => e.code === "Enter" && handleSubmit()}
        onChange={(e) => setInputValue(e.target.value)}
        defaultValue={inputValue}
        placeholder="Enter Style Name"
        autoFocus
      />
      <button
        className="border bg-transparent transition-all duration-200 hover:bg-slate-600"
        onClick={handleClose}
      >
        <MdClear />
      </button>
      <button
        className="border bg-transparent transition-all duration-200 hover:bg-green-700"
        onClick={handleSubmit}
      >
        <IoIosCheckmark />
      </button>
    </div>
  ) : (
    <div
      className="cursor-pointer border-b py-2 transition-all duration-200 hover:text-slate-300"
      onClick={() => setInputOpen(true)}
    >
      Create New Style
    </div>
  );
}

export default NewStyleButtonInput;

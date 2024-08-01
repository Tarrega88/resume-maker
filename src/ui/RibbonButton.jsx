import { useDispatch } from "react-redux";
import { setStyleEditorView } from "../features/editor/editorSlice";

function RibbonButton({
  text = "Back",
  absolutePosition,
  view = "newStylePicker",
}) {
  const dispatch = useDispatch();

  const absolutePositions = {
    topLeft: "absolute top-2 left-2",
    topMiddle: "absolute top-0 left-1/2 -translate-x-1/2",
    topRight: "absolute top-0 right-0",
    bottomLeft: "absolute bottom-0 left-0",
    bottomMiddle: "absolute bottom- left-1/2 -translate-x-1/2",
    bottomRight: "absolute bottom-0 right-0",
  };

  return (
    <button
      className={`h-12 w-24 rounded-md bg-slate-500 hover:bg-slate-400 ${absolutePosition ? absolutePositions[absolutePosition] : ""}`}
      onClick={() => dispatch(setStyleEditorView(view))}
    >
      {text}
    </button>
  );
}

export default RibbonButton;

import { combineReducers } from "@reduxjs/toolkit";
import sectionCreatorReducer from "./features/Creator/sectionCreatorSlice";
import editorReducer from "./features/editor/editorSlice";
import svgEditorReducer from "./features/svg/svgEditorSlice";
import documentReducer from "./features/Creator/documentSlice";
import imageReducer from "./features/editor/Image/imageSlice";

const appReducer = combineReducers({
  document: documentReducer,
  sectionCreator: sectionCreatorReducer,
  editor: editorReducer,
  svgEditor: svgEditorReducer,
  image: imageReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOAD_STATE") {
    return action.payload;
  }
  return appReducer(state, action);
};

export default rootReducer;

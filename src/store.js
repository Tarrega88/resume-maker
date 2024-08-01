// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import sectionCreatorReducer from "./features/Creator/sectionCreatorSlice";
// import editorReducer from "./features/editor/editorSlice";
// import svgEditorReducer from "./features/svg/svgEditorSlice";
// import documentReducer from "./features/Creator/documentSlice";
// import imageReducer from "./features/editor/Image/imageSlice";

// const store = configureStore({
//   reducer: {
//     document: documentReducer,
//     sectionCreator: sectionCreatorReducer,
//     editor: editorReducer,
//     svgEditor: svgEditorReducer,
//     image: imageReducer,
//   },
// });

// export default store;

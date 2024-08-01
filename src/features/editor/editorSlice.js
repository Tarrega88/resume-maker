import { createSlice } from "@reduxjs/toolkit";

const findCustomStyleIndex = (arr, name) =>
  arr.findIndex((e) => e.name === name);

//These initial state values will often be placeholders while this is being built, to avoid repetition while testing
const initialState = {
  editorView: "tree",
  styleEditorView: "Images",
  currentlySelectedCustomStyle: "Tester Style",
  preferredUnitType: "pt",
  customStyles: [
    {
      name: "page",
      isDefault: true,
      flexDirection: "row",
      height: "100vh",
      width: "100vw",
    },
    {
      name: "Tester Style",
    },
    {
      name: "row",
      isDefault: true,
      flexDirection: "row",
    },
    {
      name: "column",
      isDefault: true,
      flexDirection: "column",
    },
    {
      name: "column-reverse",
      isDefault: true,
      flexDirection: "column-reverse",
    },
    {
      name: "row-reverse",
      isDefault: true,
      flexDirection: "row-reverse",
    },
    {
      name: "text",
      isDefault: true,
    },
    {
      name: "Width Page",
      width: "100vw",
    },
    {
      name: "Height Page",
      height: "100vh",
    },
    {
      name: "Width 100%",
      width: "100%",
    },
    {
      name: "Height 100%",
      height: "100%",
    },
    {
      name: "Temporary Color",
      backgroundColor: "#1d4ed8FF",
    },
  ],
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setEditorView(state, action) {
      state.editorView = action.payload;
    },
    setStyleEditorView(state, action) {
      state.styleEditorView = action.payload;
    },
    createNewStyle(state, action) {
      if (!state.customStyles.find((e) => e.name === action.payload)) {
        state.customStyles.push({ name: action.payload });
        state.currentlySelectedCustomStyle = action.payload;
      }
    },
    setCurrentlySelectedCustomStyle(state, action) {
      state.currentlySelectedCustomStyle = action.payload;
    },

    editCustomStyle(state, action) {
      const index = findCustomStyleIndex(
        state.customStyles,
        state.currentlySelectedCustomStyle,
      );
      if (index !== -1) {
        state.customStyles[index] = {
          ...state.customStyles[index],
          ...action.payload,
        };
      }
    },
    saveCustomStyles(state) {
      localStorage.setItem("customStyles", JSON.stringify(state.customStyles));
    },
    deleteStyleProperty(state, action) {
      const index = findCustomStyleIndex(
        state.customStyles,
        state.currentlySelectedCustomStyle,
      );
      if (index !== -1) {
        delete state.customStyles[index][action.payload];
      }
    },
    setPreferredUnitType(state, action) {
      state.preferredUnitType = action.payload;
    },
  },
});

export const getCurrentStyleData = (state) =>
  state.editor.customStyles.find(
    (e) => e.name === state.editor.currentlySelectedCustomStyle,
  );

export { initialState as editorInitialState };

export const {
  setEditorView,
  setStyleEditorView,
  createNewStyle,
  setCurrentlySelectedCustomStyle,
  editCustomStyle,
  saveCustomStyles,
  deleteStyleProperty,
  setPreferredUnitType,
} = editorSlice.actions;

export default editorSlice.reducer;

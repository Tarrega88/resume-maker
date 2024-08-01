import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  svgEditorView: "intro",
  // svgs: [JSON.parse(localStorage.getItem("svgs"))] || [],
  svgs: [],
  currentlySelectedSvg: "",
  svgPath: [0],
  testGrabState: null,
};
//May need to set svgPath back to [0] when editing is finished or when the editor is first opened

const svgEditorSlice = createSlice({
  name: "svgEditor",
  initialState,
  reducers: {
    setSvgEditorView(state, action) {
      state.svgEditorView = action.payload;
    },
    addSvg(state, action) {
      state.currentlySelectedSvg = action.payload.svgName;
      state.svgs.push(action.payload);
    },

    setCurrentlySelectedSVG(state, action) {
      state.currentlySelectedSvg = action.payload;
    },

    updateSvg(state, action) {
      const destPath = action.payload.path;
      let path = state.svgs.find(
        (e) => e.svgName === state.currentlySelectedSvg,
      ).svg;
      for (let i = 0; i < destPath.length; i++) {
        path = path.children[destPath[i]];
      }
      path.attributes.style = {
        ...path.attributes.style,
        ...action.payload.style,
      };
      if (path.attributes.style.opacity) {
        delete path.attributes.style.opacity;
      }
    },
  },
});

export { initialState as svgEditorInitialState };

export const { setSvgEditorView, addSvg, updateSvg, setCurrentlySelectedSVG } =
  svgEditorSlice.actions;
export default svgEditorSlice.reducer;

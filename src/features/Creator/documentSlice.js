import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageSize: "A4",
  pageCount: 1,
  showAbout: false,
  docStarted: false,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setShowAbout(state, action) {
      state.showAbout = action.payload;
    },
    setDocStarted(state, action) {
      state.docStarted = action.payload;
    },
  },
});

export const { setShowAbout, setDocStarted } = documentSlice.actions;

export { initialState as documentInitialState };

export default documentSlice.reducer;

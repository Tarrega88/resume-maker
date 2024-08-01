import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  currentImgIndex: 0,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    addImage(state, action) {
      state.currentImgIndex = state.images.length;
      state.images.push(action.payload);
    },
    selectImage(state, action) {
      state.currentImgIndex = action.payload;
    },
  },
});

export { initialState as imageInitialState };
export const { addImage, selectImage } = imageSlice.actions;
export default imageSlice.reducer;

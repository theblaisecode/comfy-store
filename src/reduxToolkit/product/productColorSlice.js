import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: null,
};

const productColorSlice = createSlice({
  name: "productColor",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor } = productColorSlice.actions;
export default productColorSlice.reducer;

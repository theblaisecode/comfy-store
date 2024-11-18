import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemAmount: 1,
};

const productItemAmountSlice = createSlice({
  name: "itemAmount",
  initialState,
  reducers: {
    isItemAmount: (state, action) => {
      state.itemAmount = action.payload;
    },
  },
});

export const { isItemAmount } = productItemAmountSlice.actions;
export default productItemAmountSlice.reducer;

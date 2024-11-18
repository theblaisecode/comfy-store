import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenu: false,
};

export const mobileSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    isMobile: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});

export const { isMobile } = mobileSlice.actions;

export default mobileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const themes = {
  winter: "winter",
  dim: "dim",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

const initialState = {
  themeMode: getThemeFromLocalStorage() === themes.dim,
};

const darkModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    isDarkMode: (state) => {
      state.themeMode = !state.themeMode;
      const newTheme = state.themeMode ? "dim" : "winter";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    },
  },
});

export const { isDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "./theme.types";

const initialState: ThemeState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state) {
      state.isDark = !state.isDark;
    },
  },
});

export default themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;

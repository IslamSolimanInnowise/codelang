import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "@features/theme/theme.slice";
import authSlice from "@features/auth/auth.slice";
import StatisticsSlice from "@features/statistics/statistics.slice";
import snippetsSlice from "@features/snippets/snippets.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    statistics: StatisticsSlice,
    snippets: snippetsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

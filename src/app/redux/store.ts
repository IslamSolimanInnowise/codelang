import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "@features/theme/themeSlice";
import authSlice from "@features/auth/authSlice";
import StatisticsSlice from "@features/statistics/statisticsSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    statistics: StatisticsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

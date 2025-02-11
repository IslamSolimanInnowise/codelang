import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "@features/theme/themeSlice";
import authSlice from "@features/auth/authSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

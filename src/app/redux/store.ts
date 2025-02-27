import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "@features/theme/theme.slice";
import authSlice from "@features/auth/auth.slice";
import StatisticsSlice from "@features/statistics/statistics.slice";
import snippetsSlice from "@features/snippets/snippets.slice";
import usersSlice from "@features/users/users.slice";
import questionsSlice from "@features/questions/questions.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    statistics: StatisticsSlice,
    snippets: snippetsSlice,
    users: usersSlice,
    questions: questionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

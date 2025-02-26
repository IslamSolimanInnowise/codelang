import { createSlice } from "@reduxjs/toolkit";
import { QuestionsState } from "./questions.types";
import { getAllQuestions } from "./questions.thunks";

const initialState: QuestionsState = {
  questions: [],
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload.data;
        state.currentPage = action.payload.meta.currentPage;
        state.totalPages = action.payload.meta.totalPages;
      })
      .addCase(getAllQuestions.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      });
  },
});

export default questionsSlice.reducer;

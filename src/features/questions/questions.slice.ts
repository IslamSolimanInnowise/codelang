import { createSlice } from "@reduxjs/toolkit";
import { QuestionsState } from "./questions.types";
import { addQuestion, getAllQuestions } from "./questions.thunks";

const initialState: QuestionsState = {
  questions: [],
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    changeQuestionsPage(state, action) {
      state.currentPage = action.payload;
    },
  },
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
      })
      .addCase(addQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addQuestion.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addQuestion.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      });
  },
});

export const { changeQuestionsPage } = questionsSlice.actions;
export default questionsSlice.reducer;

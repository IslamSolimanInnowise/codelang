import { createSlice } from "@reduxjs/toolkit";
import { QuestionsState } from "./questions.types";
import {
  addAnswer,
  addQuestion,
  deleteQuestion,
  getAllQuestions,
  getOneQuestion,
  updateQuestion,
} from "./questions.thunks";

const initialState: QuestionsState = {
  questions: [],
  question: null,
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
  isQuestionModalOpen: false,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    changeQuestionsPage(state, action) {
      state.currentPage = action.payload;
    },
    openQuestionModal(state) {
      state.isQuestionModalOpen = true;
    },
    closeQuestionModal(state) {
      state.isQuestionModalOpen = false;
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
      })
      .addCase(getOneQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.question = action.payload;
      })
      .addCase(getOneQuestion.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(updateQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.question = action.payload;
      })
      .addCase(updateQuestion.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(addAnswer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAnswer.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addAnswer.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      });
  },
});

export const { changeQuestionsPage, openQuestionModal, closeQuestionModal } =
  questionsSlice.actions;
export default questionsSlice.reducer;

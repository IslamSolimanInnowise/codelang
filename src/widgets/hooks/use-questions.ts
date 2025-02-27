import {
  changeQuestionsPage,
  closeQuestionModal,
  openQuestionModal,
} from "@features/questions/questions.slice";
import {
  addAnswer,
  addQuestion,
  deleteQuestion,
  getAllQuestions,
  getOneQuestion,
  updateQuestion,
} from "@features/questions/questions.thunks";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useQuestions = () => {
  const questionsStore = useAppSelector((state) => state.questions);
  const dispatch = useAppDispatch();

  const getQuestions = useCallback(
    (...data: Parameters<typeof getAllQuestions>) => {
      return dispatch(getAllQuestions(...data));
    },
    [dispatch]
  );

  const getQuestion = useCallback(
    (...data: Parameters<typeof getOneQuestion>) => {
      return dispatch(getOneQuestion(...data));
    },
    [dispatch]
  );

  const addNewQuestion = useCallback(
    (...data: Parameters<typeof addQuestion>) => {
      return dispatch(addQuestion(...data));
    },
    [dispatch]
  );

  const editQuestion = useCallback(
    (...data: Parameters<typeof updateQuestion>) => {
      return dispatch(updateQuestion(...data));
    },
    [dispatch]
  );

  const removeQuestion = useCallback(
    (...data: Parameters<typeof deleteQuestion>) => {
      return dispatch(deleteQuestion(...data));
    },
    [dispatch]
  );

  const submitAnswer = useCallback(
    (...data: Parameters<typeof addAnswer>) => {
      return dispatch(addAnswer(...data));
    },
    [dispatch]
  );

  const changePage = useCallback(
    (...data: Parameters<typeof changeQuestionsPage>) => {
      dispatch(changeQuestionsPage(...data));
    },
    [dispatch]
  );

  const openQuestionDialog = useCallback(() => {
    dispatch(openQuestionModal());
  }, [dispatch]);

  const closeQuestionDialog = useCallback(() => {
    dispatch(closeQuestionModal());
  }, [dispatch]);

  return {
    ...questionsStore,
    getQuestions,
    getQuestion,
    addNewQuestion,
    editQuestion,
    removeQuestion,
    submitAnswer,
    changePage,
    openQuestionDialog,
    closeQuestionDialog,
  };
};
export default useQuestions;

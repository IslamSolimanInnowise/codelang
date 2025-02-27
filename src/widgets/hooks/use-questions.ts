import {
  changeQuestionsPage,
  closeAnswerModal,
  closeQuestionModal,
  openAnswerModal,
  openQuestionModal,
} from "@features/questions/questions.slice";
import {
  addAnswer,
  addQuestion,
  deleteAnswer,
  deleteQuestion,
  getAllQuestions,
  getOneQuestion,
  markAnswer,
  updateAnswer,
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

  const editAnswer = useCallback(
    (...data: Parameters<typeof updateAnswer>) => {
      return dispatch(updateAnswer(...data));
    },
    [dispatch]
  );

  const changeAnswerStatus = useCallback(
    (...data: Parameters<typeof markAnswer>) => {
      return dispatch(markAnswer(...data));
    },
    [dispatch]
  );

  const removeAnswer = useCallback(
    (...data: Parameters<typeof deleteAnswer>) => {
      return dispatch(deleteAnswer(...data));
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

  const openAnswerDialog = useCallback(() => {
    dispatch(openAnswerModal());
  }, [dispatch]);

  const closeAnswerDialog = useCallback(() => {
    dispatch(closeAnswerModal());
  }, [dispatch]);

  return {
    ...questionsStore,
    getQuestions,
    getQuestion,
    addNewQuestion,
    editQuestion,
    removeQuestion,
    submitAnswer,
    editAnswer,
    changeAnswerStatus,
    removeAnswer,
    changePage,
    openQuestionDialog,
    closeQuestionDialog,
    openAnswerDialog,
    closeAnswerDialog,
  };
};
export default useQuestions;

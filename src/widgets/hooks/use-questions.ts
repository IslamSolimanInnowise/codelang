import { changeQuestionsPage } from "@features/questions/questions.slice";
import {
  addQuestion,
  deleteQuestion,
  getAllQuestions,
  getOneQuestion,
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

  const removeQuestion = useCallback(
    (...data: Parameters<typeof deleteQuestion>) => {
      return dispatch(deleteQuestion(...data));
    },
    [dispatch]
  );

  const changePage = useCallback(
    (...data: Parameters<typeof changeQuestionsPage>) => {
      dispatch(changeQuestionsPage(...data));
    },
    [dispatch]
  );

  return {
    ...questionsStore,
    getQuestions,
    getQuestion,
    addNewQuestion,
    removeQuestion,
    changePage,
  };
};
export default useQuestions;

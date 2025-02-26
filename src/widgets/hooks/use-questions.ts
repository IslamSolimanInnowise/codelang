import { changeQuestionsPage } from "@features/questions/questions.slice";
import {
  addQuestion,
  getAllQuestions,
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

  const addNewQuestion = useCallback(
    (...data: Parameters<typeof addQuestion>) => {
      return dispatch(addQuestion(...data));
    },
    [dispatch]
  );

  const changePage = useCallback(
    (...data: Parameters<typeof changeQuestionsPage>) => {
      dispatch(changeQuestionsPage(...data));
    },
    [dispatch]
  );

  return { ...questionsStore, getQuestions, addNewQuestion, changePage };
};
export default useQuestions;

import { getAllQuestions } from "@features/questions/questions.thunks";
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

  return { ...questionsStore, getQuestions };
};
export default useQuestions;

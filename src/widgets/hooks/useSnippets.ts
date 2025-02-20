import { getSnippets } from "@features/snippets/snippetsSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useSnippets = () => {
  const snippetsStore = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const getUsersSnippets = useCallback(() => {
    return dispatch(getSnippets());
  }, [dispatch]);

  return {
    ...snippetsStore,
    getUsersSnippets,
  };
};

export default useSnippets;

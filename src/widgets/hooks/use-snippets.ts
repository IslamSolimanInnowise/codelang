import {
  getOneSnippet,
  getSnippets,
  markSnippet,
} from "@features/snippets/snippets.slice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useSnippets = () => {
  const snippetsStore = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const getUsersSnippets = useCallback(() => {
    return dispatch(getSnippets());
  }, [dispatch]);

  const postSnippetsMark = useCallback<
    (...data: Parameters<typeof markSnippet>) => void
  >(
    (...args) => {
      return dispatch(markSnippet(...args));
    },
    [dispatch]
  );

  const getUsersOneSnippet = useCallback<
    (...data: Parameters<typeof getOneSnippet>) => void
  >(
    (id) => {
      return dispatch(getOneSnippet(id));
    },
    [dispatch]
  );

  return {
    ...snippetsStore,
    getUsersSnippets,
    postSnippetsMark,
    getUsersOneSnippet,
  };
};

export default useSnippets;

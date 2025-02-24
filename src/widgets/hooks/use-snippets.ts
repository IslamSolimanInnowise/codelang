import {
  getOneSnippet,
  getSnippets,
  markSnippet,
} from "@features/snippets/snippets.thunks";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useSnippets = () => {
  const snippetsStore = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const getUsersSnippets = useCallback(() => {
    return dispatch(getSnippets());
  }, [dispatch]);

  const postSnippetsMark = useCallback(
    (...data: Parameters<typeof markSnippet>) => {
      return dispatch(markSnippet(...data));
    },
    [dispatch]
  );

  const getUsersOneSnippet = useCallback(
    (id: Parameters<typeof getOneSnippet>[0]) => {
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

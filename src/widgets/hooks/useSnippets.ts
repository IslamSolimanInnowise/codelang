import {
  getOneSnippet,
  getSnippets,
  markSnippet,
} from "@features/snippets/snippetsSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useSnippets = () => {
  const snippetsStore = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const getUsersSnippets = useCallback(() => {
    return dispatch(getSnippets());
  }, [dispatch]);

  const postSnippetsMark = useCallback(
    ({ id, mark }: { id: number; mark: "like" | "dislike" }) => {
      return dispatch(markSnippet({ id, mark }));
    },
    [dispatch]
  );

  const getUsersOneSnippet = useCallback(
    (id: number) => {
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

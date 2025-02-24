import {
  closeCommentModal,
  openCommentModal,
} from "@features/snippets/snippets.slice";
import {
  addComment,
  deleteComment,
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

  const addNewComment = useCallback(
    (...commentData: Parameters<typeof addComment>) => {
      return dispatch(addComment(...commentData));
    },
    [dispatch]
  );

  const removeComment = useCallback(
    (id: Parameters<typeof deleteComment>[0]) => {
      return dispatch(deleteComment(id));
    },
    [dispatch]
  );

  const openCommentDialog = useCallback(() => {
    dispatch(openCommentModal());
  }, [dispatch]);

  const closeCommentDialog = useCallback(() => {
    dispatch(closeCommentModal());
  }, [dispatch]);

  return {
    ...snippetsStore,
    getUsersSnippets,
    postSnippetsMark,
    getUsersOneSnippet,
    addNewComment,
    removeComment,
    openCommentDialog,
    closeCommentDialog,
  };
};

export default useSnippets;

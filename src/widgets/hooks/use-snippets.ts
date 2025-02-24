import {
  closeCommentModal,
  openCommentModal,
} from "@features/snippets/snippets.slice";
import {
  addComment,
  addSnippet,
  deleteComment,
  getMySnippets,
  getOneSnippet,
  getSnippets,
  markSnippet,
  updateComment,
} from "@features/snippets/snippets.thunks";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useSnippets = () => {
  const snippetsStore = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const getUsersSnippets = useCallback(() => {
    return dispatch(getSnippets());
  }, [dispatch]);

  const getMyPosts = useCallback(
    (...data: Parameters<typeof getMySnippets>) => {
      return dispatch(getMySnippets(...data));
    },
    [dispatch]
  );

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

  const addNewSnippet = useCallback(
    (...snippet: Parameters<typeof addSnippet>) => {
      return dispatch(addSnippet(...snippet));
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

  const editComment = useCallback(
    (...commentData: Parameters<typeof updateComment>) => {
      return dispatch(updateComment(...commentData));
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
    getMyPosts,
    postSnippetsMark,
    getUsersOneSnippet,
    addNewSnippet,
    addNewComment,
    removeComment,
    editComment,
    openCommentDialog,
    closeCommentDialog,
  };
};

export default useSnippets;

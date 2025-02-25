import {
  closeCommentModal,
  closePostModal,
  openCommentModal,
  openPostModal,
} from "@features/snippets/snippets.slice";
import {
  addComment,
  addSnippet,
  deleteComment,
  deleteSnippet,
  getMySnippets,
  getOneSnippet,
  getSnippets,
  markSnippet,
  updateComment,
  updateSnippet,
} from "@features/snippets/snippets.thunks";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useSnippets = () => {
  const snippetsStore = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const getAllSnippets = useCallback(() => {
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

  const getSnippet = useCallback(
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

  const removeSnippet = useCallback(
    (id: Parameters<typeof deleteComment>[0]) => {
      return dispatch(deleteSnippet(id));
    },
    [dispatch]
  );

  const editSnippet = useCallback(
    (...snippet: Parameters<typeof updateSnippet>) => {
      return dispatch(updateSnippet(...snippet));
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

  const openPostDialog = useCallback(() => {
    dispatch(openPostModal());
  }, [dispatch]);

  const closePostDialog = useCallback(() => {
    dispatch(closePostModal());
  }, [dispatch]);

  return {
    ...snippetsStore,
    getAllSnippets,
    getMyPosts,
    postSnippetsMark,
    getSnippet,
    addNewSnippet,
    removeSnippet,
    addNewComment,
    removeComment,
    editSnippet,
    editComment,
    openCommentDialog,
    closeCommentDialog,
    openPostDialog,
    closePostDialog,
  };
};

export default useSnippets;

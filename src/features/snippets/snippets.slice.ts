import { createSlice } from "@reduxjs/toolkit";
import type { SnippetsState } from "./snippets.types";
import { mapSnippetsToPosts, mapSnippetToPost } from "./snippets.mapper";
import {
  addComment,
  deleteComment,
  getOneSnippet,
  getSnippets,
  markSnippet,
} from "./snippets.thunks";

const initialState: SnippetsState = {
  snippets: [],
  snippet: null,
  isLoading: false,
  posts: [],
  post: null,
  commentModal: { isOpen: false },
};

const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {
    openCommentModal(state) {
      state.commentModal.isOpen = true;
    },
    closeCommentModal(state) {
      state.commentModal.isOpen = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getSnippets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSnippets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.snippets = action.payload;
        state.posts = mapSnippetsToPosts(action.payload);
      })
      .addCase(getSnippets.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(markSnippet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markSnippet.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(markSnippet.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(getOneSnippet.pending, (state) => {
        state.isLoading = true;
        state.snippet = null;
      })
      .addCase(getOneSnippet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.snippet = action.payload;
        state.post = mapSnippetToPost(action.payload);
      })
      .addCase(getOneSnippet.rejected, (state) => {
        state.isLoading = false;
        state.snippet = null;
      })
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addComment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      });
  },
});

export default snippetsSlice.reducer;
export const { openCommentModal, closeCommentModal } = snippetsSlice.actions;

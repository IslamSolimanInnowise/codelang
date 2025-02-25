import { createSlice } from "@reduxjs/toolkit";
import type { SnippetsState } from "./snippets.types";
import { mapSnippetsToPosts, mapSnippetToPost } from "./snippets.mapper";
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
} from "./snippets.thunks";

const initialState: SnippetsState = {
  snippets: [],
  snippet: null,
  isLoading: false,
  posts: [],
  post: null,
  isCommentModalOpen: false,
  isPostModalOpen: false,
};

const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {
    openCommentModal(state) {
      state.isCommentModalOpen = true;
    },
    closeCommentModal(state) {
      state.isCommentModalOpen = false;
    },
    openPostModal(state) {
      state.isPostModalOpen = true;
    },
    closePostModal(state) {
      state.isPostModalOpen = false;
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
      .addCase(getMySnippets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMySnippets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.snippets = action.payload;
        state.posts = mapSnippetsToPosts(action.payload);
      })
      .addCase(getMySnippets.rejected, (state) => {
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
      })
      .addCase(updateComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateComment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(addSnippet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSnippet.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addSnippet.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(deleteSnippet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSnippet.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteSnippet.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      })
      .addCase(updateSnippet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSnippet.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateSnippet.rejected, (state, action) => {
        state.isLoading = false;
        alert(action.payload);
      });
  },
});

export default snippetsSlice.reducer;
export const {
  closeCommentModal,
  closePostModal,
  openCommentModal,
  openPostModal,
} = snippetsSlice.actions;

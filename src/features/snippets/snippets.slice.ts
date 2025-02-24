import { createSlice } from "@reduxjs/toolkit";
import type { SnippetsState } from "./snippets.types";
import { mapSnippetsToPosts, mapSnippetToPost } from "./snippets.mapper";
import { getOneSnippet, getSnippets, markSnippet } from "./snippets.thunks";

const initialState: SnippetsState = {
  snippets: [],
  snippet: null,
  isLoading: false,
  posts: [],
  post: null,
};

const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {},
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
      });
  },
});

export default snippetsSlice.reducer;

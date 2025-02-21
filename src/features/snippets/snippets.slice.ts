import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";
import type { MarkSnippetData, Snippet, SnippetsState } from "./snippets.types";
import { mapSnippetsToPosts, mapSnippetToPost } from "./snippets.mapper";

const initialState: SnippetsState = {
  snippets: [],
  snippet: null,
  isLoading: false,
  posts: [],
  post: null,
};

export const getSnippets = createAsyncThunk<Snippet[], void>(
  "snippets/getSnippets",
  async (_, thunkApi) => {
    try {
      const { data } = await axiosInstance.get("/snippets");
      return data.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error?.response?.data.message);
      } else if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

export const getOneSnippet = createAsyncThunk<Snippet, number>(
  "snippets/getOneSnippet",
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(`/snippets/${id}`);
      return data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error?.response?.data.message);
      } else if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

export const markSnippet = createAsyncThunk<void, MarkSnippetData>(
  "snippets/markSnippet",
  async (postData, thunkApi) => {
    try {
      const { data } = await axiosInstance.post(
        `/snippets/${postData.id}/mark`,
        {
          mark: postData.mark,
        }
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error?.response?.data.message);
      } else if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

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

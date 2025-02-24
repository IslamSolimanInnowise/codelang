import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";
import { MarkSnippetData, Snippet } from "./snippets.types";

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

export const addComment = createAsyncThunk<
  void,
  { content: string; snippetId: number }
>("snippets/addComment", async (commentData, thunkApi) => {
  try {
    const { data } = await axiosInstance.post(`/comments`, commentData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const deleteComment = createAsyncThunk<
  Snippet["comments"][number],
  number
>("snippets/deleteComment", async (id, thunkApi) => {
  try {
    const { data } = await axiosInstance.delete(`/comments/${id}`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const updateComment = createAsyncThunk<
  { updatedCount: number },
  { id: number; content: string }
>("snippets/updateComment", async (commentData, thunkApi) => {
  try {
    const { data } = await axiosInstance.patch(
      `/comments/${commentData.id}`,
      commentData
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

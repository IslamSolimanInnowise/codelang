import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

interface User {
  id: number;
  username: string;
  role: "user" | "admin";
}

interface Snippet {
  id: number;
  code: string;
  language: string;
  user: User;
  marks: {
    id: number;
    type: "like" | "dislike";
    user: User;
  }[];
  comments: { id: number; content: string; user: User }[];
}

interface SnippetsState {
  snippets: Snippet[];
  isSnippetsLoading: boolean;
  postData: {
    id: number;
    code: string;
    language: string;
    creator: string;
    likes: number;
    dislikes: number;
    comments: number;
  }[];
}

const initialState: SnippetsState = {
  snippets: [],
  isSnippetsLoading: false,
  postData: [],
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

export const markSnippet = createAsyncThunk<
  void,
  { id: number; mark: "like" | "dislike" }
>("snippets/markSnippet", async (postData, thunkApi) => {
  try {
    const { data } = await axiosInstance.post(`/snippets/${postData.id}/mark`, {
      mark: postData.mark,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSnippets.pending, (state) => {
        state.isSnippetsLoading = true;
      })
      .addCase(getSnippets.fulfilled, (state, action) => {
        state.isSnippetsLoading = false;
        state.snippets = action.payload;

        state.postData = action.payload.map((snippet) => ({
          id: snippet.id,
          code: snippet.code,
          language: snippet.language,
          creator: snippet.user.username,
          likes: snippet.marks.filter((mark) => mark.type === "like").length,
          dislikes: snippet.marks.filter((mark) => mark.type === "dislike")
            .length,
          comments: snippet.comments.length,
        }));
      })
      .addCase(getSnippets.rejected, (state) => {
        state.isSnippetsLoading = false;
      })
      .addCase(markSnippet.pending, (state) => {
        state.isSnippetsLoading = true;
      })
      .addCase(markSnippet.fulfilled, (state) => {
        state.isSnippetsLoading = false;
      })
      .addCase(markSnippet.rejected, (state, action) => {
        state.isSnippetsLoading = false;
        alert(action.payload);
      })
      .addCase(getOneSnippet.pending, (state) => {
        state.isSnippetsLoading = true;
      })
      .addCase(getOneSnippet.fulfilled, (state, action) => {
        state.isSnippetsLoading = false;
        state.snippets = [action.payload];
        state.postData = [action.payload].map((snippet) => ({
          id: snippet.id,
          code: snippet.code,
          language: snippet.language,
          creator: snippet.user.username,
          likes: snippet.marks.filter((mark) => mark.type === "like").length,
          dislikes: snippet.marks.filter((mark) => mark.type === "dislike")
            .length,
          comments: snippet.comments.length,
        }));

        console.log(state.snippets);
      })
      .addCase(getOneSnippet.rejected, (state) => {
        state.isSnippetsLoading = false;
      });
  },
});

export default snippetsSlice.reducer;

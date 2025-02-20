import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

interface Snippet {
  id: number;
  code: string;
  language: string;
  user: { id: number; username: string; role: "user" | "admin" };
  marks: {
    id: number;
    type: "like" | "dislike";
    user: { id: number; username: string; role: "user" | "admin" };
  }[];
  comments: { id: number; content: string }[];
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

        console.log(action.payload, state.postData);
      })
      .addCase(getSnippets.rejected, (state) => {
        state.isSnippetsLoading = false;
      });
  },
});

export default snippetsSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";
import { Answer, Question } from "./questions.types";

export const getAllQuestions = createAsyncThunk<
  {
    data: Question[];
    meta: { totalPages: number; currentPage: number };
  },
  { limit?: number; currentPage: number }
>("questions/getAll", async (reqData, thunkApi) => {
  try {
    const { data } = await axiosInstance.get("/questions", {
      params: {
        limit: reqData.limit || 10,
        page: reqData.currentPage,
      },
    });
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const getOneQuestion = createAsyncThunk<Question, number>(
  "questions/getOne",
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(`/questions/${id}`);
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

export const addQuestion = createAsyncThunk<
  Question,
  Pick<Question, "title" | "description" | "attachedCode">
>("questions/addQuestion", async (reqBody, thunkApi) => {
  try {
    const { data } = await axiosInstance.post("/questions", reqBody);
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const updateQuestion = createAsyncThunk<
  Question,
  Pick<Question, "title" | "description" | "attachedCode" | "id">
>("questions/updateQuestion", async (reqBody, thunkApi) => {
  try {
    const { data } = await axiosInstance.patch(
      `/questions/${reqBody.id}`,
      reqBody
    );
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const deleteQuestion = createAsyncThunk<Question, number>(
  "questions/deleteQuestion",
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.delete(`/questions/${id}`);
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

export const addAnswer = createAsyncThunk<
  Answer,
  { questionId: number; content: string }
>("questions/addAnswer", async (reqBody, thunkApi) => {
  try {
    const { data } = await axiosInstance.post(`/answers`, reqBody);
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const deleteAnswer = createAsyncThunk<Answer, number>(
  "questions/deleteAnswer",
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.delete(`/answers/${id}`);
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

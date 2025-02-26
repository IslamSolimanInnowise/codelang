import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";
import { Question } from "./questions.types";

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

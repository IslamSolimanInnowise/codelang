import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse, ThunkApiType } from "./statistics.types";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

export const getStatistics = createAsyncThunk<
  ApiResponse["statistic"],
  number,
  ThunkApiType
>("statistics/get", async (userData, thunkApi) => {
  try {
    const { data } = await axiosInstance.get(`/users/${userData}/statistic`);
    return data.data.statistic;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

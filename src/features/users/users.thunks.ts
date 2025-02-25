import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./users.types";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

export const getAllUsers = createAsyncThunk<
  { data: User[]; meta: { totalPages: number; currentPage: number } },
  number
>("users/getAll", async (currentPage, thunkApi) => {
  try {
    const { data } = await axiosInstance.get(
      `/users?limit=5&page=${currentPage}`
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

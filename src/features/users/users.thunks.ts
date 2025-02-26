import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./users.types";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

export const getAllUsers = createAsyncThunk<
  { data: User[]; meta: { totalPages: number; currentPage: number } },
  { currentPage: number; limit?: number }
>("users/getAll", async (params, thunkApi) => {
  try {
    const { data } = await axiosInstance.get(`/users`, {
      params: {
        limit: params.limit || 10,
        page: params.currentPage,
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

export const getUser = createAsyncThunk<User, number>(
  "users/getUser",
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(`/users/${id}`);
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";
import { ThunkApiType, ThunkReturnType, UserData } from "./auth.types";

export const registerUser = createAsyncThunk<
  ThunkReturnType,
  UserData,
  ThunkApiType
>("auth/register", async (userData, thunkApi) => {
  try {
    const { data } = await axiosInstance.post("/register", userData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const loginUser = createAsyncThunk<
  ThunkReturnType,
  UserData,
  ThunkApiType
>("auth/login", async (userData, thunkApi) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const getUser = createAsyncThunk<ThunkReturnType, void, ThunkApiType>(
  "auth/getUser",
  async (_, thunkApi) => {
    try {
      const { data } = await axiosInstance.get("/me");
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

export const logoutUser = createAsyncThunk<ThunkReturnType, void, ThunkApiType>(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      const { data } = await axiosInstance.post("/auth/logout");
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

export const updateUserInfo = createAsyncThunk<
  ThunkReturnType,
  { username: string },
  ThunkApiType
>("auth/updateUserInfo", async (userData, thunkApi) => {
  try {
    const { data } = await axiosInstance.patch("/me", userData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const updatePassword = createAsyncThunk<
  ThunkReturnType,
  { oldPassword: string; newPassword: string },
  ThunkApiType
>("auth/updatePassword", async (userData, thunkApi) => {
  try {
    const { data } = await axiosInstance.patch("/me/password", userData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkApi.rejectWithValue(error?.response?.data.message);
    } else if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const deleteUser = createAsyncThunk<ThunkReturnType, void, ThunkApiType>(
  "auth/deleteUser",
  async (_, thunkApi) => {
    try {
      const { data } = await axiosInstance.delete("/me");
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

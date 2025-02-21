import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";
import {
  AuthState,
  ThunkApiType,
  ThunkReturnType,
  UserData,
} from "./auth.types";

const initialState: AuthState = {
  isLoading: true,
  error: null,
  user: null,
};

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

export const updateUsername = createAsyncThunk<
  ThunkReturnType,
  { username: string },
  ThunkApiType
>("auth/updateUsername", async (userData, thunkApi) => {
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
      })
      .addCase(updateUsername.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        alert("Your password was successfully updated!");
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
        alert(state.error);
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
      });
  },
});

export default authSlice.reducer;

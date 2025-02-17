import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

interface AuthState {
  isLoading: boolean;
  error: string | null;
}

interface UserData {
  username: string;
  password: string;
}

interface ThunkReturnType {
  id: string;
  username: string;
  role: string;
}

interface ThunkApiType {
  rejectValue: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
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
      });
  },
});

export default authSlice.reducer;

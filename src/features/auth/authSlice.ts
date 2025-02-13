import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

interface AuthState {
  isRegistered: boolean;
  isLoggedIn: boolean;
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
  isRegistered: false,
  isLoggedIn: false,
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
        state.isRegistered = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isRegistered = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
        state.isRegistered = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;

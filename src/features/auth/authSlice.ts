import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: { id: string; username: string; role: string } | null;
}

interface UserData {
  username: string;
  password: string;
}

type ThunkReturnType = AuthState["user"];

interface ThunkApiType {
  rejectValue: string | null;
}

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
      });
  },
});

export default authSlice.reducer;

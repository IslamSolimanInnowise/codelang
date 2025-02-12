import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

const initialState: AuthState = {
  isRegistered: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: UserData, thunkApi) => {
    try {
      const response = await axios.post(
        "https://codelang.vercel.app/api/register",
        data
      );

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
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
        state.isRegistered = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isRegistered = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | null;
        state.isRegistered = false;
      });
  },
});

export default authSlice.reducer;

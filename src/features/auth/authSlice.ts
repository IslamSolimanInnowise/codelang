import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";

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

interface ThunkReturnType {
  id: string;
  username: string;
  role: string;
}

interface ThunkApiType {
  rejectValue: string | null;
}

export const registerUser = createAsyncThunk<
  ThunkReturnType,
  UserData,
  ThunkApiType
>("auth/register", async (userData, thunkApi) => {
  try {
    const { data } = await axiosInstance.post("/register", userData);

    // console.log(data);

    return data;
  } catch (error) {
    if (error instanceof Error) {
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
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!;
        state.isRegistered = false;
      });
  },
});

export default authSlice.reducer;

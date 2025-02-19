import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@shared/api/axios";
import { AxiosError } from "axios";

interface ApiResponse {
  statistic: {
    snippetsCount: number;
    rating: number;
    commentsCount: number;
    likesCount: number;
    dislikesCount: number;
    questionsCount: number;
    correctAnswersCount: number;
    regularAnswersCount: number;
  } | null;
}

interface ThunkApiType {
  rejectValue: string | null;
}

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

const initialState: ApiResponse = { statistic: null };

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStatistics.pending, (state) => {
        state.statistic = null;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statistic = action.payload;
      })
      .addCase(getStatistics.rejected, (state) => {
        state.statistic = null;
      });
  },
});

export default statisticsSlice.reducer;

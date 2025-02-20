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

type StatisticsState = ApiResponse & {
  isStatisticsLoading: boolean;
  data: string[];
};

const initialState: StatisticsState = {
  statistic: null,
  isStatisticsLoading: false,
  data: [],
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStatistics.pending, (state) => {
        state.isStatisticsLoading = true;
        state.statistic = null;
        state.data = [];
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.isStatisticsLoading = false;
        state.statistic = action.payload;
        state.data = Object.entries(action.payload!).map((stat) => {
          return `${stat[0]}: ${stat[1]}`;
        });
      })
      .addCase(getStatistics.rejected, (state) => {
        state.isStatisticsLoading = false;
        state.statistic = null;
        state.data = [];
      });
  },
});

export default statisticsSlice.reducer;

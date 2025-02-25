import { createSlice } from "@reduxjs/toolkit";
import { StatisticsState } from "./statistics.types";
import { getStatistics } from "./statistics.thunks";

const initialState: StatisticsState = {
  statistic: null,
  isLoading: false,
  data: [],
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStatistics.pending, (state) => {
        state.isLoading = true;
        state.statistic = null;
        state.data = [];
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statistic = action.payload;
        state.data = Object.entries(action.payload!).map((stat) => {
          return `${stat[0]}: ${stat[1]}`;
        });
      })
      .addCase(getStatistics.rejected, (state) => {
        state.isLoading = false;
        state.statistic = null;
        state.data = [];
      });
  },
});

export default statisticsSlice.reducer;

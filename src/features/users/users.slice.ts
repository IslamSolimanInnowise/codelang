import { createSlice } from "@reduxjs/toolkit";
import { UsersState } from "./users.types";
import { getAllUsers, getUser } from "./users.thunks";

const initialState: UsersState = {
  users: [],
  user: null,
  isLoading: true,
  currentPage: 1,
  totalPages: 1,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.data;
        state.currentPage = action.payload.meta.currentPage;
        state.totalPages = action.payload.meta.totalPages;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
export const { setUsersPage } = userSlice.actions;

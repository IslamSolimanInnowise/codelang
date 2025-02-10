import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isRegistered: boolean;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isRegistered: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

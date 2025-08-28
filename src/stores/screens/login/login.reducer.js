import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, logoutUserAction } from "./login.action";

const initialState = {
  currentUser: null,
  status: "idle",
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Lỗi khi đăng nhập";
      })
      .addCase(logoutUserAction.fulfilled, (state) => {
        state.currentUser = null;
        state.status = "idle";
        state.error = null;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, logoutUserAction } from "./login.action";

// Khôi phục currentUser từ localStorage
const savedUser = localStorage.getItem("currentUser");
const initialState = {
  currentUser: savedUser ? JSON.parse(savedUser) : null,
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
      localStorage.removeItem("currentUser");
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
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Lỗi khi đăng nhập";
      })
      .addCase(logoutUserAction.fulfilled, (state) => {
        state.currentUser = null;
        state.status = "idle";
        state.error = null;
        localStorage.removeItem("currentUser");
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;

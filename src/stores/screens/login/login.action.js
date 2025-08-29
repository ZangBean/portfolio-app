import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "./login.reducer";
import { getUserByUsername } from "./login.api";

export const loginUserAction = createAsyncThunk(
  "login/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await getUserByUsername(username);
      if (!Array.isArray(response) || response.length === 0) {
        return rejectWithValue("Tên đăng nhập không tồn tại");
      }
      const user = response[0];
      if (!user || !user.username || user.username !== username) {
        return rejectWithValue("Tên đăng nhập không hợp lệ");
      }
      if (user.password !== password) {
        return rejectWithValue("Mật khẩu không đúng");
      }
      const payload = {
        user: { id: user.id, ...user.cv.personal_info },
        token: "fake-jwt-token",
      };
      return payload;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const logoutUserAction = createAsyncThunk(
  "login/logoutUser",
  async (_, { dispatch }) => {
    dispatch(logout());
    return null;
  }
);

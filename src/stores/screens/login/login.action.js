import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "./login.api";

export const login = createAsyncThunk(
  "login/login",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await loginUser(credentials, { dispatch });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Đăng nhập thất bại");
    }
  }
);

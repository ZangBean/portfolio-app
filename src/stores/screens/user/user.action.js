import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUsers,
  getUserById,
  getUserByUsername,
  createUser,
  updateUser,
  deleteUser,
} from "./user.api";

export const fetchUsersAction = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUsers();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchUserByIdAction = createAsyncThunk(
  "user/fetchUserById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getUserById(id);
      console.log("User by ID:", response);
      return response;
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createUserAction = createAsyncThunk(
  "user/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getUserByUsername(data.username);
      console.log("Username check:", response);
      if (response.length > 0) {
        return rejectWithValue("Tên đăng nhập đã tồn tại");
      }
      const createResponse = await createUser(data);
      console.log("Create user response:", createResponse);
      return createResponse;
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateUserAction = createAsyncThunk(
  "user/updateUser",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateUser(id, data);
      console.log("Update user response:", response);
      return response;
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteUserAction = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await deleteUser(id);
      console.log("Deleted user ID:", id);
      return id;
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

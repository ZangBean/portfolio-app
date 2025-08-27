import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./user.api";

export const fetchUsersAction = createAsyncThunk(
  "user/fetchUsers",
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

export const fetchUserByIdAction = createAsyncThunk(
  "user/fetchUserById",
  async (id) => {
    const response = await getUserById(id);
    return response;
  }
);

export const createUserAction = createAsyncThunk(
  "user/createUser",
  async (data) => {
    const response = await createUser(data);
    return response;
  }
);

export const updateUserAction = createAsyncThunk(
  "user/updateUser",
  async ({ id, data }) => {
    const response = await updateUser(id, data);
    return response;
  }
);

export const deleteUserAction = createAsyncThunk(
  "user/deleteUser",
  async (id) => {
    await deleteUser(id);
    return id;
  }
);

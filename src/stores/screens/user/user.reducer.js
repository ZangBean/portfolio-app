import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUsersAction,
  fetchUserByIdAction,
  createUserAction,
  updateUserAction,
  deleteUserAction,
} from "./user.action";

const initialState = {
  data: [],
  selectedUser: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    resetSelectedUser: (state) => {
      state.selectedUser = null;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsersAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsersAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Lỗi khi lấy danh sách user";
      })
      .addCase(fetchUserByIdAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserByIdAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserByIdAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Lỗi khi lấy thông tin user";
      })
      .addCase(createUserAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createUserAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("New user:", action.payload);
        state.data.push(action.payload);
      })
      .addCase(createUserAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Lỗi khi thêm user";
      })
      .addCase(updateUserAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.data.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(updateUserAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Lỗi khi cập nhật user";
      })
      .addCase(deleteUserAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteUserAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((u) => u.id !== action.payload);
      })
      .addCase(deleteUserAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Lỗi khi xóa user";
      });
  },
});

export const { selectUser, resetSelectedUser, setSelectedUser } =
  userSlice.actions;
export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/profilioService";

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const data = await fetchUsers();
  return data;
});

export const fetchUserById = createAsyncThunk(
  "projects/fetchUserById",
  async (id, { getState }) => {
    const state = getState();
    const user = state.projects.data.find(
      (u) => u.id.toString() === id.toString()
    );
    if (user) return user;

    const response = await fetchUsers();
    const users = Array.isArray(response) ? response : [];
    const foundUser = users.find((u) => u.id.toString() === id.toString());
    if (!foundUser) throw new Error("User not found");
    return foundUser;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: { data: [], selectedUser: null, status: "idle" },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    resetSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.data = Array.isArray(action.payload) ? action.payload : [];
        state.status = "succeeded";
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.data = [];
        state.selectedUser = null;
        console.error(
          "Fetch failed:",
          action.error.message,
          action.error.stack
        );
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = "failed";
        state.selectedUser = null;
        console.error(
          "Fetch user by ID failed:",
          action.error.message,
          action.error.stack
        );
      });
  },
});

export const { selectUser, resetSelectedUser } = projectsSlice.actions;
export default projectsSlice.reducer;

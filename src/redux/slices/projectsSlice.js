import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/api";

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const data = await fetchUsers();
  return data;
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: { data: [], selectedUser: null, status: "idle" },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.data = Array.isArray(action.payload) ? action.payload : [];
        state.selectedUser =
          Array.isArray(action.payload) && action.payload.length > 0
            ? action.payload[0]
            : null;
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
      });
  },
});

export const { selectUser } = projectsSlice.actions;
export default projectsSlice.reducer;

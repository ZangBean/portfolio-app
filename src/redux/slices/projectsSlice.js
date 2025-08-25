import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const res = await fetch("/projects.json");
  return res.json();
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
        state.data = action.payload;
        state.selectedUser = action.payload[0];
        state.status = "succeeded";
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        console.error("Fetch failed:", action.error);
      });
  },
});

export const { selectUser } = projectsSlice.actions;
export default projectsSlice.reducer;

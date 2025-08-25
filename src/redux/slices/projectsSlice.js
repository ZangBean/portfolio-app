import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const res = await fetch("./assets/projects.json");
  return res.json();
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
  },
});

export default projectsSlice.reducer;

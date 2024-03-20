import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { initialDataTasks } from '../datas/tasks';

export const getTasks = createAsyncThunk("getTasks", async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/tasks.json")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 3000);
  });
});

export const taskSlicer = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: "",
  },
  reducers: {
    // setTasks: (state, action) => {
    //   state.tasks.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = "success";
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state) => {
        state.loading = "failed";
      });
  },
});
export const { setTasks } = taskSlicer.actions;
export default taskSlicer.reducer;

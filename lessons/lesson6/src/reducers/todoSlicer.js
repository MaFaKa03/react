import { createSlice } from "@reduxjs/toolkit";

const todoListSlicer = createSlice({
  name: "todoList",
  initialState: {
    array: [
      {
        id: 1,
        text: "todo1",
      },
      {
        id: 2,
        text: "todo2",
      },
      {
        id: 3,
        text: "todo3",
      },
    ],
  },
  reducersFromSlice: {
    addTodo: (state, { payload: newTodoItem }) => {
      state.array.push(newTodoItem);
    },
    deleteTodo: (state, { payload: id }) => {
      state.array.filter((item) => item.id !== id);
    },
  },
});

export default todoListSlicer;

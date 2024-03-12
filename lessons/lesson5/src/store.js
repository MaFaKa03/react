import { configureStore } from "@reduxjs/toolkit";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DICREMENT":
      return state - 1;

    default:
      return state;
  }
}

const store = configureStore({
  reducer: reducer,
});

export default store;

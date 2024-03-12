import { configureStore } from "@reduxjs/toolkit";

function reducer(state = { isLight: true, style: "light" }, action) {
//   const newState = state;
  switch (action.type) {
    case "TRUE":
    //   state.style = "dark";
    //   state.isLight = false;
      return state = {isLight: false, style: "dark" };

    case "FALSE":
    //   state.style = "light";
    //   state.isLight = true;
      return state = {isLight: true, style: "light" };

    default:
      return state;
  }
}

const store = configureStore({ reducer: reducer },);
export default store;

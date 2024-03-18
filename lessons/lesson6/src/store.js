import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todosReducer"
import todoListSlicer from "./reducers/todoSlicer"
import reducers from "./catalog/favoriteSlicer";
// import favorites from './catalog/favoriteSlicer';

const store = configureStore({
  // reducer: {todos: todosReducer,},
  // reducer: {todoList: todoListSlicer,}
  reducer: {favorites: reducers,}
  

});
export default store;

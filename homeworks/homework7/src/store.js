import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/tasksReducers";

export const store = configureStore({
    reducer: { tasks: reducers },
    
});
import { configureStore } from "@reduxjs/toolkit";
// import { sagaMiddleware } from "./sagas/sagasUsers";
import usersSaga from "./sagas/sagasUsers";
import reducers from "./reduceer/userSlice";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {users: reducers},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(usersSaga);
export default store;


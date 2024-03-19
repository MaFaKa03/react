import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import usersSaga from "./all/userSaga";
import usersReducer from "./all/userReduser";
// import rootReducer from "../reducers/rootReducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {users: usersReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(usersSaga);

export default store;
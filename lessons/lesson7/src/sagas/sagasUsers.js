// function fetchSagaUsers() {
//   return;
// }
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";



// const asyncMeddleware = (store) => (next) => (action) => {
//   if (action.type === "FETCH_USERS_REQUEST") {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         store.dispatch({ type: "FETCH_USERS_REQUEST_SUCCESS", payload: data });
//       })
//       .catch((eror) => {
//         store.dispatch({
//           type: "FETCH_USERS_REQUEST_ERROR",
//           payload: eror.toString(),
//         });
//       });
//   }
//   return next(action);
// };

const asyncMeddleware = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

function* fetchUsersSaga() {
  try {
    const users = yield call(asyncMeddleware);
    yield put({ type: "users/FETCH_USERS_REQUEST_SUCCESS", payload: users });
  } catch (e) {
    yield put({ type: "users/FETCH_USERS_REQUEST_ERROR", e });
  }
}

export default function* usersSaga() {
  yield takeEvery("users/FETCH_USERS_REQUEST", fetchUsersSaga);
}
// sagaMiddleware.run(usersSaga);

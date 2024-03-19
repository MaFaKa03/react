import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: "idle",
    error: null,
  },
  reducers: {
    FETCH_USERS_REQUEST: (state) => {
      state.loading = "pending";
    },
    FETCH_USERS_REQUEST_SUCCESS: (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    },
    FETCH_USERS_REQUEST_ERROR: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  FETCH_USERS_REQUEST,
  FETCH_USERS_REQUEST_SUCCESS,
  FETCH_USERS_REQUEST_ERROR,
} = usersSlice.actions;

export default usersSlice.reducer;

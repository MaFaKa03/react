import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   favoriteItems: [],
// };
export const favoriteSlicer = createSlice({
  name: "favorites",
  initialState: {
    favoriteItems: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteItems.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id);
    },
  }
});

export const { addFavorite, removeFavorite } = favoriteSlicer.actions;
export default favoriteSlicer.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { editNameInProduct } from "./productsSlicer";

// const dispacth = useDispatch();
export const productSlicer = createSlice({
  name: "product",
  initialState: {
    product: {},
  },
  reducers: {
    editNameProduct: (state, action) => {
      //   const newObj = state.product;
      //   newObj.name = action.payload;
      //   state.product = newObj;
      state.product.name = action.payload;
    //   dispacth(editNameInProduct(state.product));
    },
    editPriceProduct: (state, action) => {
      state.product.price = action.payload;
    },
    editDiscriptionProduct: (state, action) => {
      state.product.discription = action.payload;
      //   const newObj = state.product;
      //   newObj.discription = action.payload;
      state.product = state.product;
    },
    editAvaibleProduct: (state, action) => {
      state.product.avaible = action.payload;
    },
    //   editProduct: (state, action) => {
    //     state.
    // }
  },
});

export const {
  editAvaibleProduct,
  editDiscriptionProduct,
  editNameProduct,
  editPriceProduct,
} = productSlicer.actions;

export default productSlicer.reducer;

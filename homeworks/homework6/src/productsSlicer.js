import { createSlice } from "@reduxjs/toolkit";
import { editNameProduct } from "./productSlicer";

export const productsSlicer = createSlice({
  name: "products",
  initialState: {
    allProducts: [
      {
        id: 1,
        name: "Ноутбук",
        discription: "Легкий и мощный, идеальный для работы и развлечений.",
        price: 45000,
        avaible: true,
      },
      {
        id: 2,
        name: "Чайник электрический",
        discription: "Быстро кипятит воду, с функцией автоотключения.",
        price: 2500,
        avaible: true,
      },
      {
        id: 3,
        name: "Смартфон",
        discription:
          "С большим экраном, высокой производительностью и отличной камерой.",
        price: 60000,
        avaible: false,
      },
    ],
  },
  reducers: {
    addProduct: (state, { payload: newProduct }) => {
      state.allProducts.push(newProduct);
    },
    removeProduct: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },

    editNameInProduct: (state, action) => {

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

    editProduct: (state, action) => {
      state.allProducts = state.allProducts.map((product) => product.id === action.payload.id ? product = action.payload : product = product)
  },
  },
});

export const { addProduct, removeProduct, editProduct, editNameInProduct } = productsSlicer.actions;
export default productsSlicer.reducer;

import { configureStore } from "@reduxjs/toolkit";
import reducersForProducts from "./productsSlicer";
import reducersForProduct from "./productSlicer";

const store = configureStore({
    reducer: {
        products: reducersForProducts,
        product: reducersForProduct,
    },
});

export default store;
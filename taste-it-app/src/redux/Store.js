import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import CategoryReducer from "./CategorySlice";

const Store = configureStore({
    reducer :{
        cart : CartReducer,
        category : CategoryReducer,
    }
});

export default Store;
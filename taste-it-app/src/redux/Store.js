import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import CategoryReducer from "./CategorySlice";
import SearchReducer from "./SearchSlice"

const Store = configureStore({
    reducer: {
        cart: CartReducer,
        category: CategoryReducer,
        search : SearchReducer,
    }
});

export default Store;
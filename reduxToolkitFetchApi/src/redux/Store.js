import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./slice/PostsSlice";

export const Store = configureStore({
    reducer : {
        post :  PostReducer
    }
});

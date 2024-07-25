import { configureStore } from "@reduxjs/toolkit";
import  UserDataReducer  from "../redux/UserDataSlice";

export const Store = configureStore ({
    reducer: {
        userData : UserDataReducer,
    }
});
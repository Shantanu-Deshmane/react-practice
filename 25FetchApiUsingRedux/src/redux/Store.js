import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from './Slice/ToDoSlice'

export const Store = configureStore({
    reducer: {
        todo : ToDoReducer,
    }
});
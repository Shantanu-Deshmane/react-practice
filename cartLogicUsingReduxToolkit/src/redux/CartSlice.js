import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem : (state, action) => {
            state.push(action.payload)

        },
        removeItem : (state, action) => {
            state.splice(action.payload,1)
        }
    }
});

export const {addItem} = CartSlice.actions;
export const {removeItem} = CartSlice.actions;
export default CartSlice.reducer;
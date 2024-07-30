import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart : [],
    },
    reducers: {
        addItem : (state, action) => {
            state.cart.push(action.payload)

        },
        removeItem : (state, action) => {
           state.cart=state.cart.filter((item) => item.id !== action.payload)
           console.log("Acction: ",action.payload)
        }
    }
});

export const {addItem, removeItem} = CartSlice.actions;
export default CartSlice.reducer;
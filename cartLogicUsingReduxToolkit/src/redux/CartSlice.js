import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items : [],
    },
    reducers: {
        addItem : (state, action) => {
            state.items.push(action.payload)

        },
        removeItem : (state, action) => {
           state.items=state.items.filter((item) => item.id !== action.payload)
           console.log(action.payload)
           console.log(state.items.filter((item) => console.log(item.id)))
        }
    }
});

export const {addItem, removeItem} = CartSlice.actions;
export default CartSlice.reducer;
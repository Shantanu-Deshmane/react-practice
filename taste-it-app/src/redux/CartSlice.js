import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart : [],
    },
    reducers: {
        addItem : (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if(existingItem){
                state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item)
            }else{
                state.cart.push(action.payload)
            }

        },
        
        removeItem : (state, action) => {
           state.cart=state.cart.filter((item) => item.id !== action.payload)
           console.log("Acction: ",action.payload)
        },

        increaseQty: (state, action) => {
            state.cart = state.cart.map((item) => 
              item.id === action.payload.id ? {...item, qty : item.qty + 1} : item)
          },
          decreaseQty: (state, action) => {
            state.cart = state.cart.map((item) => 
              item.id === action.payload.id ? {...item, qty : item.qty - 1} : item)
          },
    }
});

export const {addItem, removeItem, increaseQty, decreaseQty} = CartSlice.actions;
export default CartSlice.reducer;
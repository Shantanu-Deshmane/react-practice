import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name : 'Cart',
    initialState: [],
    reducers: {
        addItem : (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id  !== action.payload)
          }
    }
})

export const { addItem } = CartSlice.actions; 
export const { removeItem } = CartSlice.actions; 
export default CartSlice.reducer; 
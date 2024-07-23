import { createSelector, createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name : 'Cart',
    initialState: [],
    reducers: {
        addItem : (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addItem } = CartSlice.actions; 
export default CartSlice.reducer;
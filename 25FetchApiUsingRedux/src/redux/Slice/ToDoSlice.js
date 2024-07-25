import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



//fetchTodo is an action
export const FetchTodo = createAsyncThunk("FetchTodo", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json();
})

const ToDoSlice = createSlice({
    name: "todo",
    initialState:{
        isLoading: false,
        data: null,
        isError: false,
    },

    extraReducers: (builder) => {
        builder.addCase(FetchTodo.pending, (state,action) => {
            state.isLoading = true;
        });

        builder.addCase(FetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(FetchTodo.rejected, (state, action) => {
            console.log("Error: ", action.payload);
            state.isError = true;
        });
    }

});
 
export default ToDoSlice.reducer;
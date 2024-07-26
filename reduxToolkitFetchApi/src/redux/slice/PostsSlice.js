import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchPosts = createAsyncThunk('FetchPosts', async () => {
    const response =await fetch ('https://jsonplaceholder.typicode.com/posts')
    return response.json();
})

const PostSlice = createSlice({
    name : 'posts',
    initialState : {
        data : null,
        isLoading : false,
        isError : false,
    },

    extraReducers : (builder) => {
        builder.addCase(FetchPosts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(FetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })

        builder.addCase(FetchPosts.rejected, (state, action) => {
            console.log("Error: ",action.payload);
            isError = true;
        })
    }
});

export default PostSlice.reducer;
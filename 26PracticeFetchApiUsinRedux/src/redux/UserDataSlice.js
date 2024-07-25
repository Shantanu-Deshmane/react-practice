import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchUserData = createAsyncThunk("FetchUserData", async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    return response.json();
})

const UserDataSlice = createSlice({
    name : "userData",
    initialState:{
        data: null,
        isLoading : false,
        isError : false,
    },

    extraReducers: (builder) => {
        builder.addCase(FetchUserData.pending, (state,action) => {
            state.isLoading = true ;
        })

        builder.addCase(FetchUserData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })

        builder.addCase(FetchUserData.rejected, (state, action) => {
            console.log("Error: ", action.payload);
            state.isError = true;
        })
    }

})

export default UserDataSlice.reducer;
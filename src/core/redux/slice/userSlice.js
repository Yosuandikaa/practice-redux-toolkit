import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../../api-service/apiService";
import userServices from "../../services/userServices";


export const getUser = createAsyncThunk(
    'user/getUser',
    async() => {
        const { data } = await userServices.getUser();
        return data;
    });

const initialState = {
    user: [],
    isLoading: false,
    isError: false,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: ({ addCase }) => {
        addCase(getUser.pending, (state) => {
            state.isLoading = true
        });
        addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        });
        addCase(getUser.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
});
// const userReducer = userSlice.reducer 
export default userSlice.reducer;
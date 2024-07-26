import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    names: ["This"],
    user: {
        isLoading: false,
        data: []
    },
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser : (state, action) => {
            state.names.push(action.payload)
        },
        getUserActions: (state, action) => {
            state.user.isLoading = true
            state.user.data = action.payload
        },
        getUserSuccess: (state, action) => {
            state.user.isLoading = false
            state.user.data = action.payload
        },
        getUserFailure: (state, action) => {
            state.user.isLoading = false
            state.user.data = action.payload
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer
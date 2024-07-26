import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    names: ["This"],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser : (state, action) => {
            state.names.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer
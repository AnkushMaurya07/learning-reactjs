import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

//to track the authentication of the user
const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true,
                state.userData = action.payload.userData
        },
        logout: (state) => {
            state.status = false,
                state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions
//improvement---tracking state using login and logout.


export default authSlice.reducer;
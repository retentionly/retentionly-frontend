import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    user: undefined
};

export const revertAllAuth = createAction('REVERT_ALL')
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => builder.addCase(revertAllAuth, () => initialState),
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
        reset: () => initialState
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

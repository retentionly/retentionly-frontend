import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: undefined
}

export const revertAllAdmin = createAction('REVERT_ALL')
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    extraReducers: (builder) => builder.addCase(revertAllAdmin, () => initialState),
    reducers: {
        setAdmin: (state, action) => {
            state.admin = action.payload;
        },
        reset: () => initialState
    },
})

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;
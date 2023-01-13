import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const revertAllMaster = createAction('REVERT_ALL')
const masterSlice = createSlice({
    name: 'master',
    initialState,
    extraReducers: (builder) => builder.addCase(revertAllMaster, () => initialState),
    reducers: {
        setLogo: (state, action) => {
            state.logo = action.payload
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload
        },
        setCompanyEmail: (state, action) => {
            state.companyEmail = action.payload
        },
        setGreeting: (state, action) => {
            state.greeting = action.payload
        },
        setSalutations: (state, action) => {
            state.salutations = action.payload
        },
        setSender: (state, action) => {
            state.sender = action.payload
        },
        setUrl: (state, action) => {
            state.url = action.payload
        },
        setMaster: (state, action) => {
            state.logo = action.payload.logo;
            state.companyName = action.payload.companyName;
            state.companyEmail = action.payload.companyEmail;
            state.greeting = action.payload.greeting;
            state.salutations = action.payload.salutations;
            state.sender = action.payload.sender;
            state.url = action.payload.url
        },
        reset: () => initialState
    },
})

export const { setColor, setLogo, setGreeting, setSalutations, setSender, setMaster, setUrl } = masterSlice.actions;
export default masterSlice.reducer;
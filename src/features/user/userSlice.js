import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    password: '',
    paymentStatus: undefined,
    eventConfirmed: undefined,
    role: '',
    templateLength: 0,
    uniqueID: '',
    status: undefined,
    path: ''
}

export const revertAllUser = createAction('REVERT_ALL')

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => builder.addCase(revertAllUser, () => initialState),
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload;
        },
        setUniqueID: (state, action) => {
            state.uniqueID = action.payload;
        },
        setTemplateLength: (state, action) => {
            state.templateLength = action.payload;
        },
        setEventConfirmed: (state, action) => {
            state.eventConfirmed = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setUserStatus: (state, action) => {
            state.status = action.payload;
        },
        setUserPath: (state, action) => {
            state.path = action.payload;
        },
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.paymentStatus = action.payload.paymentStatus;
            state.uniqueID = action.payload.uniqueID;
            state.eventConfirmed = action.payload.eventConfirmed;
            state.role = action.payload.role;
            state.status = action.payload.userStatus.status;
            state.path = action.payload.userStatus.path;
        },
    },
})

export const { setName, setUser, setEmail, setPaymentStatus, setUniqueID, setTemplateLength, setEventConfirmed,setUserPath,setUserStatus,setRole } = userSlice.actions;
export default userSlice.reducer;
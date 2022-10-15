import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: 'abc',
    transactionId: '',
    shipping: {},
    category: '',
    amount: 0
}

export const revertAllPayment = createAction('REVERT_ALL')
const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    extraReducers: (builder) => builder.addCase(revertAllPayment, () => initialState),
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setTransactionId: (state, action) => {
            state.transactionId = action.payload;
        },
        setShipping: (state, action) => {
            state.shipping = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        setPayment: (state, action) => {
            state.email = action.payload.email;
            state.transactionId = action.payload.transactionId;
            state.shipping = action.payload.shipping;
            state.category = action.payload.category;
            state.amount = action.payload.amount;
        },
        reset: () => initialState
    },
})

export const { setShipping, setTransactionId, setEmail, setCategory, setUniqueID, setAmount, setPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
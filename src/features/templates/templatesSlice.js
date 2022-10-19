import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const getTemplateObj = (state, item) => {
    const index = state.findIndex((e) => e.emailId === item);
    return state[index];
}

export const revertAllTemplates = createAction('REVERT_ALL')
const templatesSlice = createSlice({

    name: 'templates',
    initialState,
    extraReducers: (builder) => builder.addCase(revertAllTemplates, () => initialState),
    reducers: {
        setTemplate1: (state, action) => {
            // const index = state.findIndex((e) => e.emailId === 1);
            // state[index] = action.payload;
            state.template1 = action.payload;
        },
        setTemplate2: (state, action) => {
            state.template2 = action.payload
        },
        setTemplate3: (state, action) => {
            state.template3 = action.payload
        },
        setTemplate4: (state, action) => {
            state.template4 = action.payload
        },
        setTemplate5: (state, action) => {
            state.template5 = action.payload
        },
        setTemplates: (state, action) => {
            const template1 = getTemplateObj(action.payload, 1);
            const template2 = getTemplateObj(action.payload, 2);
            const template3 = getTemplateObj(action.payload, 3);
            const template4 = getTemplateObj(action.payload, 4);
            const template5 = getTemplateObj(action.payload, 5);
            state.template1 = template1
            state.template2 = template2
            state.template3 = template3
            state.template4 = template4
            state.template5 = template5
        },
        reset: () => initialState
    },
})

export const {
    setTemplate1,
    setTemplate2,
    setTemplate3,
    setTemplate4,
    setTemplate5,
    setTemplates,
} = templatesSlice.actions;
export default templatesSlice.reducer;
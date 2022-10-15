import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    loading: true
}

const loaderSlice = createSlice({

    name: 'loading',
    intialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
})

export const { setLoading } = loaderSlice.actions
export default loaderSlice.reducer;
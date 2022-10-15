import { apiSlice } from "../../app/api/apiSlice";
import { setMaster } from "./masterSlice";

export const masterApi = apiSlice.injectEndpoints({
    tagTypes: ['Master'],
    endpoints: (builder) => ({
        getMaster: builder.query({
            query: (email) => `/master/${email}`,
            providesTags: ['Master'],

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {

                try {
                    const result = await queryFulfilled;
                    dispatch(setMaster(result?.data?.master))
                } catch (err) {
                    // do nothing
                }
            },
        }),
        
        editMaster: builder.mutation({
            query: (body) => ({
                url: `/master/${body.email}`,
                method: 'PATCH',
                body: body.data
            }),
            invalidatesTags: ['Master'],
        }),
    }),
});

export const { useGetMasterQuery, useEditMasterMutation } = masterApi;
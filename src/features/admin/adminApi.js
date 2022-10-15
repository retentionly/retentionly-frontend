import { apiSlice } from "../../app/api/apiSlice";
import { setAdmin } from "./adminSlice";

export const adminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAdmin: builder.query({
            query: (email) => `/admin/${email}`,
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setAdmin(result?.data?.admin))
                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});

export const { useGetAdminQuery } = adminApi;
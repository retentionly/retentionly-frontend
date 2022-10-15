import { apiSlice } from "../../app/api/apiSlice";
import { setEventConfirmed, setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (email) => `/user/${email}`,
            providesTags: ['User'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setUser(result?.data))
                } catch (err) {
                    // do nothing
                }
            },
        }),
        updateUserStatus: builder.mutation({
            query: (data) => ({
                url: '/userstatus',
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    "Access-Control-Allow-Origin": `${process.env.REACT_APP_CLIENT_URL}`,
                },
                body: JSON.stringify(data)
            }),
            invalidatesTags: ['User'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setEventConfirmed(result.data.success))
                } catch (err) {
                    // do nothing
                }
            },
        }),
        getUsers: builder.query({
            query: () => '/users'
        }),
        getUserAdmin: builder.query({
            query: (email) => `/user/${email}`
        }),
    }),
});

export const { useGetUserQuery, useGetUsersQuery, useGetUserAdminQuery, useUpdateUserStatusMutation } = userApi;
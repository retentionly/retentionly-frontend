import { apiSlice } from "../../app/api/apiSlice";
import { setTemplate } from "../template/templateSlice";
import { setMaster, setTemplates } from "../templates/templatesSlice";
import { setEventConfirmed, setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
    tagTypes: ['User', 'Template', 'Templates'],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (email) => `/user/${email}`,
            providesTags: ['User'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setUser(result?.data))
                    dispatch(setTemplates(result?.data?.templates))
                    dispatch(setMaster(result?.data?.master))
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
        getTemplates: builder.query({
            query: (email) => `/templates?email=${email}`,
            providesTags: ['Templates'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setTemplates(result?.data))
                } catch (err) {
                    // do nothing
                }
            }
        }),
        getTemplate: builder.query({
            query: (id) => `/template/${id}`,
            keepUnusedDataFor: 1,
            providesTags: ['Template'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setTemplate(result?.data))
                } catch (err) {
                    // do nothing
                }
            },
        }),
        editTemplate: builder.mutation({
            query: ({ id, data }) => ({
                url: `/template/${id}`,
                method: 'PATCH',
                body: data
            }
            ),
            invalidatesTags: ['Template', 'Templates', 'User'],
        }),
        deleteTemplate: builder.mutation({
            query: (id) => ({
                url: `/template/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['User', 'Template', 'Templates'],
        }),
    }),
});

export const { useGetUserQuery, useGetUsersQuery, useGetUserAdminQuery, useUpdateUserStatusMutation, useEditTemplateMutation, useDeleteTemplateMutation, useGetTemplatesQuery, useGetTemplateQuery } = userApi;
import { apiSlice } from "../../app/api/apiSlice";
import { setTemplate } from "./templateSlice";

// export const templateApi = apiSlice.injectEndpoints({
//     tagTypes: ['Templates, Template'],
//     endpoints: (builder) => ({
//         getTemplates: builder.query({
//             query: (email) => `/templates?email=${email}`,
//             providesTags: ['Templates'],
//         }),
//         getTemplate: builder.query({
//             query: (id) => `/template/${id}`,
//             keepUnusedDataFor: 1,
//             providesTags: ['Template'],
//             async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//                 try {
//                     const result = await queryFulfilled;
//                     dispatch(setTemplate(result?.data))
//                 } catch (err) {
//                     // do nothing
//                 }
//             },
//         }),
//         editTemplate: builder.mutation({
//             query: ({ id, data }) => ({
//                 url: `/template/${id}`,
//                 method: 'PATCH',
//                 body: data
//             }),
//             invalidatesTags: ['Template']
//         }),
//         deleteTemplate: builder.mutation({
//             query: (id) => ({
//                 url: `/template/${id}`,
//                 method: 'DELETE'
//             }),
//             invalidatesTags: ['Template','Templates']
//         }),
//     }),
// });

// export const {  } = templateApi;

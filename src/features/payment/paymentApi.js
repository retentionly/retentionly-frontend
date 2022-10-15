// import { apiSlice } from "../../app/api/apiSlice";
// import { setPaymentStatus } from "../user/userSlice";
// import { setPayment } from "./paymentSlice";

// export const paymentApi = apiSlice.injectEndpoints({
//     tagTypes: ['Payment'],
//     endpoints: (builder) => ({

//         getPaymentStatus: builder.query({
//             query: (email) => `/payment?email=${email}`,
//             keepUnusedDataFor: 1,
//             providesTags: ['Payment'],
//             async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//                 console.log(arg);
//                 try {
//                     const result = await queryFulfilled;
//                     dispatch(setPaymentStatus(result?.data?.success))
//                     dispatch(setPayment(result?.data?.payment))
//                 } catch (err) {
//                     // do nothing
//                     console.log(err);
//                 }
//             },
//         }),

//         updatePaymentStatus: builder.mutation({
//             query: (data) => ({
//                 url: '/payment',
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json',
//                     "Access-Control-Allow-Origin": `${process.env.REACT_APP_CLIENT_URL}`,
//                 },
//                 body: JSON.stringify(data)
//             }),
//             invalidatesTags: ['Payment'],
//             async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//                 try {
//                     const result = await queryFulfilled;
//                     dispatch(setPaymentStatus(result.data.success))
//                 } catch (err) {
//                     // do nothing
//                 }
//             },
//         })
//     }),
// });

// export const { useGetPaymentStatusQuery, useUpdatePaymentStatusMutation } = paymentApi;
import { apiSlice } from "../../app/api/apiSlice";
import { setAmount, setCategory, setShipping, setTransactionId } from "../payment/paymentSlice";
import { setEmail, setPaymentStatus } from "../user/userSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": `${process.env.REACT_APP_CLIENT_URL}`,
                },
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {

                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    );
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": `${process.env.REACT_APP_CLIENT_URL}`,
                },
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "accessToken",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        getPaymentStatus: builder.query({
            query: (email) => `/payment?email=${email}`,
            keepUnusedDataFor: 1,
            providesTags: ['Payment'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        
                try {
                    const result = await queryFulfilled;
                    dispatch(setPaymentStatus(result.data.success))
                    dispatch(setEmail(result.data.payment))
                    dispatch(setTransactionId(result.data.payment))
                    dispatch(setShipping(result.data.payment))
                    dispatch(setCategory(result.data.payment))
                    dispatch(setAmount(result.data.payment))
                } catch (err) {
                    // do nothing
                }
            },
        }),
        updatePaymentStatus: builder.mutation({
            query: (data) => ({
                url: '/payment',
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    "Access-Control-Allow-Origin": `${process.env.REACT_APP_CLIENT_URL}`,
                },
                body: JSON.stringify(data)
            }),
            invalidatesTags: ['Payment'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setPaymentStatus(result.data.success))
                } catch (err) {
                    // do nothing
                }
            },
        })
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetPaymentStatusQuery, useUpdatePaymentStatusMutation } = authApi;

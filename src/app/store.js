import { configureStore } from '@reduxjs/toolkit';
import masterReducer from '../features/master/masterSlice';
import paymentReducer from '../features/payment/paymentSlice';
import templateReducer from '../features/template/templateSlice';
import userReducer from '../features/user/userSlice';
import adminReducer from '../features/admin/adminSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({

  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    master: masterReducer,
    user: userReducer,
    template: templateReducer,
    payment: paymentReducer,
    admin: adminReducer
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

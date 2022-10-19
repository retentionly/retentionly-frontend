import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../features/admin/adminSlice';
import masterReducer from '../features/master/masterSlice';
import paymentReducer from '../features/payment/paymentSlice';
import templateReducer from '../features/template/templateSlice';
import templatesReducer from '../features/templates/templatesSlice';
import userReducer from '../features/user/userSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({

  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    master: masterReducer,
    user: userReducer,
    template: templateReducer,
    payment: paymentReducer,
    admin: adminReducer,
    templates: templatesReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

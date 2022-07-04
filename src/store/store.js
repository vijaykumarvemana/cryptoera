import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cryptoApi } from '../services/cryptoApi';

export const store = configureStore({
    reducer: {
        // reducer
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware),
});


setupListeners(store.dispatch);
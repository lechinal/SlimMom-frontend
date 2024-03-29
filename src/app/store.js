import { configureStore } from '@reduxjs/toolkit';
import { productListSlice } from '../redux/products/slice';
import { authReducer } from '../redux/auth/slice';
import { calculateReducer } from '../redux/calculate/slice';
import { loadingReducer } from '../redux/loader/slice';
import { dateReducer } from '../redux/date/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    calculate: calculateReducer,
    productList: productListSlice.reducer,
    loading: loadingReducer,
    date: dateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

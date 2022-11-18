import { configureStore } from '@reduxjs/toolkit'
import {shopApi} from '../services/shop'
import {setupListeners} from '@reduxjs/toolkit/query'
import {cartReducer} from '../redux/cartSlice'

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    'cart': cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)



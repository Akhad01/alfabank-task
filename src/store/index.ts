import { configureStore } from "@reduxjs/toolkit"; 
import { productsApi } from "../services/productsApi";
import likeReducer from './slices/like-slice'
import filterReducer from './slices/filter-slice'

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        likes: likeReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
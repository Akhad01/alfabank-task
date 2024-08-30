import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductItem } from '../types/product-item';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductItem[], void>({
            query: () => 'products',
        })
    })
})

export const { useGetProductsQuery } = productsApi
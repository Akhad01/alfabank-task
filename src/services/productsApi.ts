import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductItem } from '../types/product-item';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductItem[], void>({
            query: () => 'products'
        }),
        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `carts/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(productId, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                  productsApi.util.updateQueryData('getProducts', undefined, (draft) => {
                    return draft.filter(product => product.id !== productId);
                  })
                );
                try {
                  await queryFulfilled;
                } catch {
                  patchResult.undo();
                }
              },
        }),
    })
})

export const { useGetProductsQuery, useDeleteProductsMutation } = productsApi
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getSmartphones: builder.query({
      query: (name) => `products/category/smartphones`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.products.sort((a, b) => b.rating - a.rating).slice(0, 10)
      }
    }),
    getLaptops: builder.query({
      query: (name) => `products/category/laptops`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.products.sort((a, b) => b.rating - a.rating).slice(0, 10)
      }
    }),
    getProducts: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        let result = []
        const requests = [fetchWithBQ('products/category/laptops'), fetchWithBQ('products/category/smartphones')]

        const responsesData = await Promise.all(requests)
        responsesData.forEach(({data}) => {
          result = result.concat(data.products)
        })

        return {data: result.sort((a, b) => b.rating - a.rating).slice(0, 10)}
      },
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSmartphonesQuery, useGetLaptopsQuery, useGetProductsQuery } = shopApi

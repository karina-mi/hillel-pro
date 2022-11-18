// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getSmartphones: builder.query({
      query: (name) => `products/category/smartphones`,
    }),
    getLaptops: builder.query({
      query: (name) => `products/category/laptops`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSmartphonesQuery, useGetLaptopsQuery } = shopApi

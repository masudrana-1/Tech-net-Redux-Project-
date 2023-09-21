import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl : 'http://localhost:5000'}),
    endpoints: (builder) => ({

        //! get method
        getProducts : builder.query({
            query: ()=> "/products"
        }),
        getSingleProducts : builder.query({
            query: (id)=> `/product/${id}`
        }),

        //! post method 
        postComment: builder.mutation({
            query: ({id, data})=> ({
                url: `/comment/${id}`,
                method: "POST",
                body: data,
            }),
        }),

        //! get method
        getComment : builder.query({
            query: (id)=> `/comment/${id}`
        }),
    }),
});

export const {
    useGetProductsQuery, 
    useGetSingleProductsQuery, 
    usePostCommentMutation,
    useGetCommentQuery,
} = api;
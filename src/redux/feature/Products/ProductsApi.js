import { baseApi } from "../../baseApi/baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get all products
        getProducts: builder.query({
            query: () => "/products",
        }),

        // Get single product by id:
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),

        // Add new product (POST)
     addProduct: builder.mutation({
            query: (newProduct) =>({
                url: "/products",
                method: "POST",
                body: newProduct,
            })
        }),
        // Update product (PATCH)
        updateProduct: builder.mutation ({
            query: ({id, updateData}) =>({
                url: `/products/${id}`,
                method: "PATCH",
                body: updateData,
            })
        }),

        // Delete product
        deleteProduct: builder.mutation({
            query: (id) => ({
                url:`/products/${id}`,
                method: "DELETE"
            })
        })
    })
})
export const {useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation} = productApi;
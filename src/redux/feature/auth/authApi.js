
import { baseApi } from "../../baseApi/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: "authentication_app/signup/",
                method: "POST",
                body: data,
            })
        }),

        loginUser: builder.mutation({
            query: (data) => ({
                url: "authentication_app/signin/",
                method: "POST",
                body: data
            })
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
        }),
    }),
})

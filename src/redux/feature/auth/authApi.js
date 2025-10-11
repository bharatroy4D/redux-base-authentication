
import { baseApi } from "../../baseApi/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "authentication_app/signup/",
                method: "POST",
                body: data,
            })
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "authentication_app/signin/",
                method: "POST",
                body: data
            })
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/authentication_app/logout/",
                method: "POST",
            }),
        }),
    }),
})
export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;
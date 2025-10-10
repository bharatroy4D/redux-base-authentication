import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./baseApi/baseApi"
import {authReducer} from "./feature/auth/authSlice"

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(baseApi.middleware)
})
import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./baseApi/baseApi"
import authReducer from "./feature/auth/authSlice"
import productReducer from "./feature/Products/ProductsSlice"

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
        product: productReducer,
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(baseApi.middleware)
})
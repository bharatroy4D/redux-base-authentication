import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainlayout/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../components/PrivateRoute";
import Products from "../pages/products/Products";
import Home from "../pages/home/Home";
import VerifyOtp from "../components/VerifyOtp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/otp',
                element: <VerifyOtp />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/dashboard',
                element: <ProtectedRoute><Dashboard /></ProtectedRoute>
            },

        ]
    }
])
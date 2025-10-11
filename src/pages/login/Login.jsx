import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../redux/feature/auth/authApi';
import { setCredentials } from '../../redux/feature/auth/authSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth)
    const [login, { isLoading }] = useLoginMutation();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await login(form).unwrap();
            dispatch(setCredentials(res));
            navigate("/dashboard")
        } catch (error) {
            console.error("Login failed", error)
        }
    }
    return (
        <div>
            <form
                onSubmit={handleLogin}
                className="max-w-md mx-auto mt-24 bg-white shadow-xl rounded-3xl p-10 border border-gray-100"
            >
                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Welcome Back
                </h2>

                {/* Email */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border text-gray-700 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border text-gray-700 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                    />
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition duration-300"
                >
                    Login
                </button>

                {/* Footer Text */}
                <p className="text-sm text-center text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-indigo-600 font-medium hover:underline">
                        Register
                    </a>
                </p>
            </form>

        </div>
    );
};

export default Login;
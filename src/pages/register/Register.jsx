// src/components/RegisterForm.jsx
import React, { useState } from "react";
import { useRegisterMutation } from "../../redux/feature/auth/authApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [registerUser, { isLoading }] = useRegisterMutation();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUser(form).unwrap();
            console.log("User registered:", res);
            alert("Registration successful!");
            navigate("/login");
        } catch (err) {
            console.error("Register failed:", err);
            alert("Registration failed. Try again!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleRegister}
                className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                    Register
                </h2>
             
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-indigo-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    {isLoading ? "Registering..." : "Register"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">
                        Login here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Register;

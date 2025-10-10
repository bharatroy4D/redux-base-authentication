import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../redux/feature/auth/authApi';
import { setCredentials } from '../../redux/feature/auth/authSlice';
const Login = () => {
    const dispatch = useDispatch();
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
        } catch (error) {
            console.error("Login failed", error)
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={form.password}
                        onChange={handleChange}
                        required
                        id="" />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Login
                </button>
            </form>

        </div>
    );
};

export default Login;
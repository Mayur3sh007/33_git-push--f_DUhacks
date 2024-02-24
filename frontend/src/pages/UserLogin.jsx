import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await axios.post(
                "/api/v1/user/login",
                formData,
            );

            if (response.data && response.data.message) {
                console.log(response.data)
                alert(response.data.message);
                navigate("/");
            } else {
                // Handle error response properly
                alert("An error occurred while submitting the form");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gradient-to-r from-gray-700 to-black p-8 rounded-2xl shadow-slate-500 shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className='my-2'>
                            <div className='mb-2'>
                                <label htmlFor="email" className="">
                                    Email address:
                                </label>
                            </div>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-white bg-gradient-to-r from-black to-gray-800  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='my-2'>
                            <div className='my-2'>
                                <label htmlFor="password" className="mb-2">
                                    Password:
                                </label>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-white bg-gradient-to-r from-black to-gray-800  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm ">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to="/user-register" className='text-indigo-600 hover:text-indigo-500 text-center flex mx-auto justify-center my-0'>
                                Dont have an account?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <Link to="/supplier-login" className='text-indigo-600 hover:text-indigo-500 text-center flex justify-center'>
                    Are you a supplier?
                </Link>
            </div>
        </div>
    );
};

export default UserLogin;

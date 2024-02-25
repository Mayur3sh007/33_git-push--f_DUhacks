import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserRegister = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: null,
        imagePreview: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({
            ...formData,
            avatar: imageFile,
            imagePreview: URL.createObjectURL(imageFile),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        delete formData.imagePreview;
        try {
            const response = await axios.post(
                "/api/v1/user/register",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(response.data);
            alert(response.data.message);
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form");

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-[80%] space-y-8 bg-gradient-to-r from-gray-700 to-black p-8 rounded-2xl shadow-slate-500 shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold">Create an account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}
                    encType="multipart/form-data">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="flex rounded-md shadow-sm -space-y-px">
                        <div className='w-[45%] mx-6'>
                            <div className=''>
                                <label htmlFor="username" className="">
                                    Username:
                                </label>

                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="appearance-none m-2 rounded-lg relative block w-full px-3 py-2 border border-white bg-gradient-to-r from-black to-gray-800  rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="">
                                    Email address:
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none m-2 rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-gradient-to-r from-black to-gray-800  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="">
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none m-2 rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-gradient-to-r from-black to-gray-800  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div className="flex flex-col items-center mx-auto">
                            <label htmlFor="productImage" className="block mb-1 text-white">
                                Avatar Image:
                            </label>
                            <input
                                type="file"
                                id="productImage"
                                name="productImage"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                                required
                            />
                            {/* Display image preview */}
                            {formData.imagePreview && (
                                <img
                                    src={formData.imagePreview}
                                    alt="Product Preview"
                                    className="mt-2 max-w-52 mx-auto w[]"
                                />
                            )}
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="group relative w-[55%] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <Link to="/supplier-register" className='text-indigo-600 hover:text-indigo-500 text-center w-fit mx-auto flex'>
                    Are you a supplier?
                </Link>
            </div>
        </div>
    );
};

export default UserRegister;

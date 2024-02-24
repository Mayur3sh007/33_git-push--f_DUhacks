import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setData } from '../store/productSlice';
import { setUser } from '../store/userSlice';

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/product/getAllProducts');

        dispatch(setData(response.data)) //push all products into store
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  useEffect(() => {
    const checkIfUser = async () => {
      try {
        const response = await axios.get('/api/v1/user/getUser');

        dispatch(setUser(response.data))//push all products into store

        console.log("USER LOGGED IN as: ", response.data); // Log the user data

      } catch (error) {
        console.error("User is Not Logged IN:", error);
      }
    };

    checkIfUser(); // Call the function to check user on mount
  }, []); 

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

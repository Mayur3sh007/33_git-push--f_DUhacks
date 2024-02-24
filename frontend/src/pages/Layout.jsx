import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import useApi from '../hooks/useApi'
import { useEffect } from 'react'
import axios from 'axios'



function Layout() {
  useApi('/api/v1/products/getAllProducts');
  const navigate = useNavigate();
  let isLoggedIn;

  const checkIfUser = async () => {
    try {
      const response = await axios.get(
        "/api/v1/user/"
      );
      console.log("USERS LOGGED IN")
      console.log(response)
      isLoggedIn = (response.statusCode === 200);

    } catch (error) {
      console.error("User is Not Logged IN:", error);
    }
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
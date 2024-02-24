import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserRegister from './pages/UserRegister.jsx'
import SupplierLogin from './pages/SupplierLogin.jsx'
import SupplierRegister from './pages/SupplierRegister.jsx'
import PostForm from './pages/PostForm.jsx'
import AllProducts from './pages/AllProducts.jsx'
import ProductDetails from './components/ProdDetails/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
      {
        path: "user-login",
        element: <UserLogin />,
      },
      {
        path: "user-register",
        element: <UserRegister />,
      },
      {
        path: "supplier-login",
        element: <SupplierLogin />,
      },
      {
        path: "supplier-register",
        element: <SupplierRegister />
      },
      {
        path: "postform",
        element: <PostForm />
      },
      {
        path: "allProducts",
        element: <AllProducts />
      },
      {
        path: "productDetails/:slug",
        element: <ProductDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

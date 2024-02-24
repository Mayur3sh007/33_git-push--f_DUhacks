import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'


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
        path: "test",
        element: <Login />,
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

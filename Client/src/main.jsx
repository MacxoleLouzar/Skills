import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import Landing from '../Pages/Landing';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dash",
    element: <Dashboard />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

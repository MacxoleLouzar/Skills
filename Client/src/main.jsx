import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchEmployee from "../Components/searchEmployee";
import AppState from "../Context/AppState";
import Dashboard from "../Pages/Dashboard";
import DepartmentList from "../Pages/DepartmentList";
import EmployeeList from "../Pages/EmployeeList";
import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import PositionsList from "../Pages/PositionsList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dash",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employees",
    element: <EmployeeList />,
  },
  {
    path: "/departments",
    element: <DepartmentList />,
  },
  {
    path: "/positions",
    element: <PositionsList />,
  },
  {
    path: "/dash",
    element: <Dashboard />,
    children: [
      {
        path: "dash/employees",
        element: <EmployeeList />,
      },
      {
        path: "dash/departments",
        element: <DepartmentList />,
      },
      {
        path: "dash/positions",
        element: <PositionsList />,
      },
      {
        path: "dash/search",
        element: <SearchEmployee />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <RouterProvider router={router} />
      <ToastContainer limit={1} />
    </AppState>
  </React.StrictMode>
);

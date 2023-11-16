import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import "../src/App.css";
import DepartmentList from "./DepartmentList";
import EmployeeList from "./EmployeeList";
import PositionsList from "./PositionsList";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="dash">
          <div className="dashNav">
            <Link to="/employees">Employeess</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/positions">Position</Link>
          </div>
          <div className="container">
            <Outlet />
          </div>
        </div>

        <Routes>
          <Route path="dash" element={<Dashboard />}>
            <Route path="employees" element={<EmployeeList />} />
            <Route path="departments" element={<DepartmentList />} />
            <Route path="positions" element={<PositionsList />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;

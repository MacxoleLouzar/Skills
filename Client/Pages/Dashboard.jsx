import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../src/App.css";

const Dashboard = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="container">
        <div className="dash">
          <div className="dashNav">
            <Link to="dash/search">Search</Link>
            <Link to="dash/employees">Employees</Link>
            <Link to="dash/departments">Departments</Link>
            <Link to="dash/positions">Positions</Link>
            <Link to={"/dash"}>Reload</Link>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

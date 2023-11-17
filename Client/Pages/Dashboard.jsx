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
            <Link to="dash/employees">Employeess</Link>
            <Link to="dash/departments">Departments</Link>
            <Link to="dash/positions">Position</Link>
            <Link to={"/dash"} className="absolute right-96 px-6">
              Reload
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

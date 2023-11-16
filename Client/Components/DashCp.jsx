import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashCp = () => {
  return (
    <div className="dashCp">
      <div className="dashNav">
        <Link to="/employees">Employeess</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/positions">Positing</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default DashCp;

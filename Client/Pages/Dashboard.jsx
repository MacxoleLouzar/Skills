import React from "react";
import { Route, Routes } from "react-router-dom";
import DashCp from "../Components/DashCp";
import Sidebar from "../Components/Sidebar";
import DepartmentList from "./DepartmentList";
import EmployeeList from "./EmployeeList";
import PositionsList from "./PositionsList";
const Dashboard = () => {
  return (
    <div>
      {/* <Header /> */}
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="dashcp" element={<DashCp />}>
            <Route path="employees" element={<EmployeeList />} />
            <Route path="departments" element={<DepartmentList />} />
            <Route path="positions" element={<PositionsList />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [employees, setEmployee] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [positions, setPosition] = useState([]);
  const [deptId, setDeptId] = useState(0);
  const [empId, setEmpId] = useState(0);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const addEmployee = (emp) => {
    setEmployee(emp);
  };

  const updateEmployee = (data) => {
    setEmployee(data);
  };

  const findEmployee = (emp) => {
    let employee = employees.filter((x) => x._id === emp.id);
    setEmployee(employee);
  };
  const removeEmployee = (emp) => {
    let employee = employees.filter((x) => x._id !== emp.id);
    setEmployee(employee);
  };

  const updateAdmin = (data) => {
    setAdmin(data);
  };
  const addDepartment = (data) => {
    setDepartment(data);
  };

  const updateDepartment = (data) => {
    setDepartment(data);
  };
  const removeDepartment = (dep) => {
    let dept = departments.filter((x) => x._id !== dep.id);
    setDepartment(dept);
  };

  const addPosition = (data) => {
    setPosition(data);
  };
  const removePosition = (job) => {
    let jobs = positions.filter((x) => x._id !== job.id);
    setPosition(jobs);
  };

  return (
    <AppContext.Provider
      value={{
        empId,
        admin,
        setEmpId,
        employees,
        addEmployee,
        updateAdmin,
        updateEmployee,
        removeEmployee,
        departments,
        addDepartment,
        updateDepartment,
        removeDepartment,
        positions,
        addPosition,
        removePosition,
        deptId,
        setDeptId,
        findEmployee,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;

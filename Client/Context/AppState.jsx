import React, { useState } from "react";
import Get_pos_dep from "../utils/Get_pos_dep";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [employees, setEmployee] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [positions, setPosition] = useState([]);

  const addEmployee = (emp) => {
    setEmployee(emp);
  };

  const updateEmployee = (data) => {
    setEmployee(data);
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

  const addPositing = (data) => {
    setPosition([data]);
  };
  return (
    <AppContext.Provider
      value={{
        admin,
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
        addPositing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;

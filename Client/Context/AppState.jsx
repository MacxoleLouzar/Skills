import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [employees, setEmployee] = useState([]);

  const addEmployee = (data) => {
    setEmployee(data);
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
  return (
    <AppContext.Provider
      value={{
        admin,
        employees,
        addEmployee,
        updateAdmin,
        updateEmployee,
        removeEmployee,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;

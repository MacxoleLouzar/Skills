import React, { useContext, useEffect } from "react";
import EmployeesCp from "../Components/EmployeesCp";
import AppContext from "../Context/AppContext";

const EmployeeList = () => {
  const { employees, addEmployee } = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:1001/api/emp")
      .then((res) => res.json())
      .then((data) => addEmployee(data.employees))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="h-full">
        <div className="px-8"></div>
        {employees?.map((emp, index) => (
          <EmployeesCp key={index} emp={emp} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

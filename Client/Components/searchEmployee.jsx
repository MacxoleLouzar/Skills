import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import EmployeesCp from "./EmployeesCp";

const searchEmployee = () => {
  const { addEmployee, setEmployee, employees } = useContext(AppContext);
  const [employeeName, setEmployeeName] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1001/api/emp")
      .then((response) => response.json())
      .then((data) => {
        //setEmployee(data);
        addEmployee(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleSearch = () => {
    const name = employees.find((empname) => {
      return (
        empname.emp_name === employeeName || empname.emp_email === employeeName
      );
    });
    setSelectedEmployee(name);
  };

  return (
    <div>
      <div className="flex justify-center mt-24  gap-4">
        <div>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Search by first name..."
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>

        <button className="btn btn-neutral" onClick={handleSearch}>
          Search
        </button>
      </div>
      {selectedEmployee && <EmployeesCp />}
    </div>
  );
};

export default searchEmployee;

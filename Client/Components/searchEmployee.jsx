import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";

const searchEmployee = ({ emp }) => {
  const { addEmployee, employees } = useContext(AppContext);
  const [employeeName, setEmployeeName] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState({});

  useEffect(() => {
    fetch("http://localhost:1001/api/emp")
      .then((response) => response.json())
      .then((data) => {
        addEmployee(data.data);
        console.log(data.data);
      })
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleSearch = () => {
    const searchArray = employees.filter(
      (employee) =>
        employee.emp_name.toLowerCase() === employeeName.toLowerCase() &&
        employee
    );
    console.log(searchArray);
    setSelectedEmployee(searchArray);
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
        <br></br>
      </div>
      {selectedEmployee.length > 0 && (
        <div>
          <table>
            <tbody>
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0].emp_name}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0]?.emp_surname}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0]?.emp_email}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0]?.emp_salary}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0]?.dept_id}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0]?.pos_id}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0]?.emp_hireddate}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                  {selectedEmployee[0]?.emp_dob}
                </td>
                <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
                  <div className="btn-group">
                    <button className="btn btn-sm">View</button>
                    <button
                      className="btn btn-sm"
                      onClick={() => showUpdateModal(emp)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(emp?.emp_id)}
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default searchEmployee;

import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import UpdateEmployee from "./UpdateEmployee";

const EmployeesCp = ({ emp }) => {
  const { removeEmployee, setDeptId } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [selectEmplyee, SetSelectedEmployee] = useState({
    emp_id: null,
    emp_name: null,
    emp_surname: null,
    emp_email: null,
    emp_salary: null,
    dept_id: null,
    pos_id: null,
    emp_dob: null,
    emp_hireddate: null,
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:1001/api/emp/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        removeEmployee(data);
        toast.success("Succeesful Deleted");
        navigate("/employees");
      })
      .catch((error) => console.log(error));
  };

  const showUpdateModal = (employee) => {
    const {
      emp_id,
      emp_name,
      emp_surname,
      emp_email,
      emp_salary,
      dept_id,
      pos_id,
      emp_dob,
      emp_hireddate,
    } = employee;
    SetSelectedEmployee({
      emp_id,
      emp_name,
      emp_surname,
      emp_email,
      emp_salary,
      dept_id,
      pos_id,
      emp_dob,
      emp_hireddate,
    });
    console.log(employee);
    setShowModal(true);
  };

  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.emp_name}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.emp_surname}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.emp_email}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.emp_salary}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.dept_id}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.pos_id}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.emp_hireddate}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {emp?.emp_dob}
        </td>
        <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
          <div className="btn-group">
            <button className="btn btn-sm">View</button>
            <button className="btn btn-sm" onClick={() => showUpdateModal(emp)}>
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
      {showModal && (
        <UpdateEmployee
          id={emp?.emp_id}
          showModal={showModal}
          setShowModal={setDeptId}
          selectEmplyee={selectEmplyee}
        />
      )}
    </>
  );
};

export default EmployeesCp;

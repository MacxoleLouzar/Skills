import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

const EmployeesCp = ({ emp }) => {
  const { removeEmployee } = useContext(AppContext);

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
  return (
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
          <button className="btn btn-sm">Edit</button>
          <button
            className="btn btn-sm"
            onClick={() => handleDelete(emp?.emp_id)}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeesCp;

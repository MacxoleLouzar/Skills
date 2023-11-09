import React from "react";

const EmployeesCp = ({ emp }) => {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {emp?.emp_name}
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {emp?.emp_surnme}
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
        {emp?.rj_id}
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {emp?.emp_hired_date}
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {emp?.emp_dob}
      </td>
      <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
        <div className="btn-group">
          <button className="btn btn-sm">View</button>
          <button className="btn btn-sm">Edit</button>
          <button className="btn btn-sm">Remove</button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeesCp;

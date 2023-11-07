import React from "react";

const EmployeesCp = ({ emp }) => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="my-4 text-2xl text-center"> Employees</div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr className="flex">
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      First name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      Last name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      Salary
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      Hired Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      D.O.B
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left flex-1"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.emp_name}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.emp_surname}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.emp_email}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.emp_salary}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.dept_id}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.rj_id}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.emp_hired_date}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {emp.emp_dob}
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
                      <div className="btn-group">
                        <button className="btn btn-sm">View</button>
                        <button className="btn btn-sm">Edit</button>
                        <button className="btn btn-sm">Remove</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesCp;

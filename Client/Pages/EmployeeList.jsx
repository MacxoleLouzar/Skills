import React, { useContext, useEffect } from "react";
import AddEmployee from "../Components/AddEmployee";
import EmployeesCp from "../Components/EmployeesCp";
import AppContext from "../Context/AppContext";

const EmployeeList = () => {
  const { employees, addEmployee } = useContext(AppContext);
  const EmployeeList = Array.isArray(employees) ? employees : [];
  useEffect(() => {
    fetch("http://localhost:1001/api/emp")
      .then((res) => res.json())
      .then((serverData) => {
        console.log(serverData.data);
        addEmployee(serverData.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <AddEmployee />
      <div className="h-full">
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

                  <tbody className="">
                    {EmployeeList?.map((emp, index) => (
                      <EmployeesCp key={index} emp={emp} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AddDepartment from "../Components/AddDepartment";
import DepartmentCp from "../Components/DepartmentCp";
import AppContext from "../Context/AppContext";
//import UpdateDepartment from "../Components/UpdateDepartment";

const DepartmentList = () => {


  const { departments, addDepartment } = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:1001/api/dep")
      .then((res) => res.json())
      .then((data) => addDepartment(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col">
        <div className="my-4 text-2xl text-center"> Departments</div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">

                <table className="min-w-full">
                  <AddDepartment />
                  <thead className="bg-gray-200 border-b">
                    <tr className="flex">
                      <th
                        scope="col"
                        className="text-sm font-bold px-6 py-4 text-left flex-1"
                      >
                        Department Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-bold px-6 py-4 text-left flex-1"
                      >
                        Location
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
                    {departments?.map((dept, index) => (
                      <DepartmentCp key={index} dept={dept} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentList;

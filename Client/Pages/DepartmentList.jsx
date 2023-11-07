import React, { useContext, useEffect } from "react";
import DepartmentCp from "../Components/DepartmentCp";
import AppContext from "../Context/AppContext";

const DepartmentList = () => {
  const { departments, addDepartment } = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:1001/api/dep")
      .then((res) => res.json())
      .then((data) => addDepartment(data.departments))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="h-full">
        <div className="px-8"></div>
        {departments.map((dept, index) => (
          <DepartmentCp key={index} dep={dept} />
        ))}
      </div>
    </>
  );
};

export default DepartmentList;

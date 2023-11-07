import React, { useContext, useEffect } from "react";
import PositionCp from "../Components/PositionCp";
import AppContext from "../Context/AppContext";

const PositionsList = () => {
  const { positions, addPositing } = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:1001/api/job")
      .then((res) => res.json())
      .then((data) => addPositing(data.positions))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="h-full">
        <div className="px-8"></div>
        {positions?.map((job, index) => (
          <PositionCp key={index} job={job} />
        ))}
      </div>
    </>
  );
};

export default PositionsList;

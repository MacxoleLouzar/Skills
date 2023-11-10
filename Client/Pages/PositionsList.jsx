import React, { useContext, useEffect } from "react";
import AddPosition from "../Components/AddPosition";
import PositionCp from "../Components/PositionCp";
import AppContext from "../Context/AppContext";

const PositionsList = () => {
  const { positions, addPosition } = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:1001/api/job")
      .then((res) => res.json())
      .then((data) => addPosition(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col">
        <div className="my-4 text-2xl text-center"> Positions</div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <AddPosition />
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr className="flex">
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
                        Description
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
                    {positions?.map((job, index) => (
                      <PositionCp key={index} job={job} />
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

export default PositionsList;

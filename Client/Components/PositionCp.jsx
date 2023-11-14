import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

const PositionCp = ({ job }) => {
  const { removePosition } = useContext(AppContext);
  const handleDelete = (id) => {
    fetch(`http://localhost:1001/api/job/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        removePosition(data);
        toast.success("Succeesful Deleted");
        navigate("/positions");
      })
      .catch((error) => console.log(error));
  };
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {job?.pos_name}
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {job?.pos_description}
      </td>

      <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
        <div className="btn-group">
          <button className="btn btn-sm">View</button>
          <button className="btn btn-sm">Edit</button>
          <button
            className="btn btn-sm"
            onClick={() => handleDelete(job?.pos_id)}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PositionCp;

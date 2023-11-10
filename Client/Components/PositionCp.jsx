import React from "react";

const PositionCp = ({ job }) => {

  const handleDelete = (id) => {
    fetch(`http://localhost:1001/api/job/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Succeesful Deleted");
        navigate("/departments");
      })
      .catch((error) => setError(error));
  };
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {job?.rj_title}
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {job?.rj_description}
      </td>

      <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
        <div className="btn-group">
          <button className="btn btn-sm">View</button>
          <button className="btn btn-sm">Edit</button>
          <button className="btn btn-sm" onClick={()=>handleDelete(job?.rj_id)}>
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PositionCp;

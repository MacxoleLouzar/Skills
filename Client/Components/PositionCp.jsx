import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";
import UpdatePosition from "./UpdatePosition";

const PositionCp = ({ job }) => {
  const { removePosition, setDeptId } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  const [posName, setPositionName] = useState("");
  const [posDesc, setPosDesc] = useState("");

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

  const showUpdateModal = (position) => {
    const { pos_id, pos_name, pos_descrption } = position;
    setPositionName(pos_name);
    setPosDesc(pos_descrption);
    setDeptId(pos_id);
    setShowModal(true);
  };
  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {job?.pos_name}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
          {job?.pos_descrption}
        </td>

        <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
          <div className="btn-group">
            <button className="btn btn-sm">View</button>
            <button className="btn btn-sm" onClick={() => showUpdateModal(job)}>
              Edit
            </button>
            <button
              className="btn btn-sm"
              onClick={() => handleDelete(job?.pos_id)}
            >
              Remove
            </button>
          </div>
        </td>
      </tr>
      <div>{showModal && <UpdatePosition />}</div>
    </>
  );
};

export default PositionCp;

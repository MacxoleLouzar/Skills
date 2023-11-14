import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";

const DepartmentCp = ({ dept }) => {
  const { updateDepartment, removeDepartment } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [deptName, setDepartmentName] = useState("");
  const [deptAddress, setDeptAddress] = useState("");

  const updateDept = (e) => {
    e.preventDefault();
    if (!deptName || !deptAddress) {
      toast.error("All fields are required");
      return;
    }
    useEffect(() => {
      fetch(`http://localhost:1001/api/dep/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deptName, deptAddress }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDepartmentName(data.deptName);
          setDeptAddress(data.deptAddress);
          updateDepartment(data);
          toast.success("Succeesful Update");
          navigate("/departments");
        })
        .catch((error) => {
          toast.error("Server Error", error);
        });
    }, []);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:1001/api/dep/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        removeDepartment(data);
        toast.success("Succeesful Deleted");
        navigate("/departments");
      })
      .catch((error) => setError(error));
  };
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {dept?.dept_name}
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
        {dept?.dept_address}
      </td>

      <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
        <div className="btn-group">
          <button className="btn btn-sm">View</button>
          <button className="btn btn-sm">Edit</button>
          <button
            className="btn btn-sm"
            onClick={() => handleDelete(dept?.dept_id)}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DepartmentCp;

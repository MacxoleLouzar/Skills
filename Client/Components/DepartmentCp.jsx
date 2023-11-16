import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";
import UpdateDepartment from "./UpdateDepartment";

const DepartmentCp = ({ dept }) => {
  const { updateDepartment, removeDepartment } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [deptName, setDepartmentName] = useState("");
  const [deptAddress, setDeptAddress] = useState("");

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

  const handleEdit = (dept) => {
    setDepartmentName(dept.deptName);
    setDeptAddress(dept.deptAddress);
    setShowModal(true);
  };

  const handleUpdate = (updateDept) => {
    updateDepartment(updateDept);
    setShowModal(false);
  };

  const handleUpdateSuccess = () => {
    // Get the updated department information
    const updatedDept = {
      deptName: deptName,
      deptAddress: deptAddress,
    };
    // Call the handleUpdate function passed from the parent component
    handleUpdate(updatedDept);
  };
  return (
    <>
      <div>
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

              <button className="btn btn-sm" onClick={() => handleEdit(dept)}>
                Edit
              </button>
              <button
                className="btn btn-sm"
                onClick={() => handleDelete(dept?.dept_id)}
              >
                Remove
              </button>
            </div>
          </td>
        </tr>
        {showModal && (
          <UpdateDepartment handleUpdate={handleUpdate} dept={dept} />
        )}
      </div>
    </>
  );
};

export default DepartmentCp;

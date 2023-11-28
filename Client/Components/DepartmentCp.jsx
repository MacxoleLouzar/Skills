import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";
import UpdateDepartment from "./UpdateDepartment";

const DepartmentCp = ({ dept }) => {
  const { updateDepartment, removeDepartment, setDeptId } =
    useContext(AppContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployeeDept, setSelectedEmployeeDept] = useState({
    dept_id: null,
    dept_name: null,
    dept_address: null,
  });
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete?");
    if (shouldDelete) {
      try {
        fetch(`http://localhost:1001/api/dep/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            removeDepartment(data);
            toast.success("Succeesful Deleted");
            navigate("/dash/dash/departments");
          })
          .catch((error) => setError(error));
      } catch (error) {
        toast.error("something wrong try again later", error);
      }
    }
  };

  const showUpdateModal = (department) => {
    const { dept_id, dept_name, dept_address } = department;
    setSelectedEmployeeDept({ dept_id, dept_name, dept_address });
    console.log(department);
    setDeptId(dept_id);
    setShowModal(true);
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

              <button
                className="btn btn-sm"
                onClick={() => showUpdateModal(dept)}
              >
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
          <UpdateDepartment
            id={dept?.dept_id}
            showModal={showModal}
            setShowModal={setShowModal}
            selectedEmployeeDept={selectedEmployeeDept}
          />
        )}
      </div>
    </>
  );
};

export default DepartmentCp;

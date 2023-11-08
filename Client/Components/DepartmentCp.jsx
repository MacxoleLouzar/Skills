import { useContext, useEffect, useState } from "react";
import AddDepartment from "../Components/AddDepartment";
import UpdateDepartment from "./UpdateDepartment";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";

const DepartmentCp = ({ dep }) => {
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
    fetch(`http://localhost:8080/api/profiles/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => removeDepartment(data))
      .catch((error) => setError(error));
  };

  return (
    <div className="container mx-auto flex flex-col">
      <div className="my-4 text-2xl text-center"> Departments</div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <AddDepartment />
                <UpdateDepartment />
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
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-base-200 flex">
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {dep?.dept_name}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap flex-1">
                      {dep?.dept_address}
                    </td>

                    <td className="text-sm px-6 py-4 whitespace-nowrap flex-1">
                      <div className="btn-group">
                        <button className="btn btn-sm">View</button>
                        <button
                          className="btn btn-sm"
                          onClick={() => setShowModal(true)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm"
                          onClick={() => handleDelete(dep.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold w-80">
                    Update Department
                  </h3>
                  <button
                    className="pb-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-4"
                  >
                    <input
                      type="text"
                      placeholder="Department Name"
                      className="input input-bordered w-full max-w-xs"
                      value={deptName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Department Address"
                      className="input input-bordered w-full max-w-xs"
                      value={deptAddress}
                      onChange={(e) => setDeptAddress(e.target.value)}
                    />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <div className="btn-group">
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      onClick={updateDept(dep.id)}
                      className="btn btn-sm btn-neutral"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default DepartmentCp;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";

const AddDepartment = () => {
  const { addDepartment } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [deptName, setDepartmentName] = useState("");
  const [deptAddress, setDeptAddress] = useState("");

  const AddDept = () => {
    if (!deptName || !deptAddress) {
      toast.error("All fields are required");
      return;
    }
    let data = {
      dept_name: deptName,
      dept_address: deptAddress,
    };

    fetch("http://localhost:1001/api/dep", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.error) {
          toast.error(data.error);
          return;
        }
        addDepartment(data);
        navigate("/departments");
        toast.success("Succeesful Added");
      })
      .catch((error) => {
        toast.error("Server Error", error);
      });
  };

  return (
    <div>
      <button
        className="btn btn-circle btn-neutral fixed right-8 bottom-[30%] animate-bounce shadow-lg"
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold w-80">
                    Add New Department
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
                      onClick={AddDept}
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

export default AddDepartment;

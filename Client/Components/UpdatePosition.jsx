import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";

const UpdatePosition = ({ showModal, setShowModal, selectePosition }) => {
  const { addPosition, deptId } = useContext(AppContext);
  const navigate = useNavigate();

  const [posName, setPositionName] = useState(selectePosition.pos_name);
  const [posDesc, setPosDesc] = useState(selectePosition.pos_descrption);

  const handleUpdatePosition = () => {
    try {
      if (!posName || !posDesc) {
        toast.error("All fields are required");
      } else {
        let data = {
          pos_name: posName,
          pos_descrption: posDesc,
        };

        fetch(`http://localhost:1001/api/job/${deptId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            data.data;
            console.log(data.data);
            addPosition(data.data);
            toast.success("Data Updated");
            setShowModal(false);
          })
          .catch((error) => {
            console.log(error, "Something went wrong, try again");
          });
      }
    } catch (error) {
      toast.error(" Couldn't update, something went wrong");
      console.log(error);
    }
  };

  return (
    showModal && (
      <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-6xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-2xl font-semibold w-80">Update Position</h3>
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
                    placeholder="Position Name"
                    className="input input-bordered w-full max-w-xs"
                    value={posName}
                    onChange={(e) => setPositionName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Position Description"
                    className="input input-bordered w-full max-w-xs"
                    value={posDesc}
                    onChange={(e) => setPosDesc(e.target.value)}
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
                    onClick={handleUpdatePosition}
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
      </div>
    )
  );
};
export default UpdatePosition;

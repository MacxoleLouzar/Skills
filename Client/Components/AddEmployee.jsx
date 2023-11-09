import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../Context/AppContext";

import "react-datepicker/dist/react-datepicker.css";

const AddEmployee = () => {
  const [showModal, setShowModal] = useState(false);
  const { employees, departments, positions, addEmployee } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [hiredDate, setHiredDate] = useState(new Date());
  const [dob, setDob] = useState(new Date());

  const onAddEmployee = () => {
    if (!name || !surname || !email) {
      toast.error("NAME, SURNAME, EMAIL these fields are required");
      return;
    }

    // let data = {
    //   emp_name: name,
    //   emp_surnme: surname,
    //   emp_DOB: dob,
    //   emp_email: email,
    //   emp_hired_date: hiredDate,
    //   emp_Salary: salary,
    //   dept_id: selectedDepartment,
    //   rj_id: selectedPosition,
    // };

    let data = {
      emp_name: name,
      emp_surnme: surname,
      emp_DOB: dob,
      emp_email: email,
      emp_hired_date: hiredDate,
      emp_Salary: salary,
      dept_id: selectedDepartment,
      rj_id: 2,
    };

    fetch("http://localhost:1001/api/emp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((serverData) => {
        console.log(serverData);
        // toast.success("Employee Added");
        // setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
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
                    Add New Employee
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
                      placeholder="First name"
                      className="input input-bordered w-full max-w-xs"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="input input-bordered w-full max-w-xs"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered w-full max-w-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Salary"
                      className="input input-bordered w-full max-w-xs"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                    <select
                      className="select select-bordered input-sm w-full max-w-xs"
                      value={selectedDepartment}
                      onChange={(e) => e.target.value}
                    >
                      <option disabled selected>
                        Department
                      </option>
                      {departments.map((department) => (
                        <option
                          key={department.id}
                          value={department.id}
                        >
                          {department.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={selectedPosition}
                      onChange={(e) => e.target.value}
                      className="select select-bordered input-sm w-full max-w-xs"
                    >
                      <option disabled selected>
                        Position
                      </option>
                      {positions.map((position) => (
                        <option key={position.rj_id} value={position.rj_id}>
                          {position.rj_title}
                        </option>
                      ))}
                    </select>
                    <DatePicker
                      type="link"
                      placeholder="Hired Date"
                      className="input input-bordered w-full max-w-xs"
                      selected={hiredDate}
                      onChange={(date) => setHiredDate(date)}
                    />
                    <DatePicker
                      type="number"
                      placeholder="D.O.B"
                      className="input input-bordered w-full max-w-xs"
                      selected={dob}
                      onChange={(date) => setDob(date)}
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
                      className="btn btn-sm btn-neutral"
                      onClick={onAddEmployee}
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

export default AddEmployee;

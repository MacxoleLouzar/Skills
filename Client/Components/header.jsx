import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">EMS</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYhkw75R6IpG3cNf1XSMW7DMc1yvGTcUS3W3imzAvf-mlY6Zoheago8e0KEKAeREYvew&usqp=CAU" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/login'}>SignIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default header;

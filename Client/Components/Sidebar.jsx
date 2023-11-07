import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div
      className={`bg-gray-400 text-black-400 h-screen ${
        isSidebarVisible ? "w-64" : "w-0"
      } fixed top-0 left-0 flex flex-col transition-all duration-300 ease-in-out`}
    >
      <div className="p-4">
        <h1 className="text-2xl font-semibold">EMS</h1>
      </div>
      {isSidebarVisible && (
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link to={"/employees"} className="block p-3 hover:bg-red-300">
                Employees
              </Link>
            </li>
            <li>
              <Link to={"/departments"} className="block p-3 hover:bg-red-300">
                Departments
              </Link>
            </li>
            <li>
              <Link to={"/positions"} className="block p-3 hover:bg-red-300">
                Positions
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="p-4">
        <button
          className="bg-red-300 hover:bg-gray-600 text-white rounded-full py-2 px-4"
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? "Hide" : "+"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

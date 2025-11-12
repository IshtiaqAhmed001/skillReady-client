import React, { use } from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaBook,
  FaPlusCircle,
  FaSignOutAlt,
  FaUserGraduate,
  FaHome,
} from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

const DashboardLayout = () => {
  const {logoutUser}=use(AuthContext);
  
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("User logged out successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="col-span-3 lg:col-span-2 bg-white shadow-md border-r border-gray-100 p-6 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 mb-10 text-center">
            Dashboard
          </h1>

          {/* Menu */}
          <nav className="space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>

            <NavLink
              to="/dashboard/enrolledCourses"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FaUserGraduate /> My Enrolled Courses
            </NavLink>

            <NavLink
              to="/dashboard/addCourse"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FaPlusCircle /> Add Course
            </NavLink>

            <NavLink
              to="/dashboard/addedCourses"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FaBook /> My Added Courses
            </NavLink>
          </nav>
        </div>

        {/* Logout */}
        <button
        onClick={handleLogout}
         className="flex items-center gap-3 text-red-600 font-medium hover:text-red-700 mt-10 px-4 py-3 rounded-lg transition cursor-pointer">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="col-span-9 lg:col-span-10 p-10">
        <div className="bg-white rounded-2xl shadow-sm p-8 min-h-[85vh]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;




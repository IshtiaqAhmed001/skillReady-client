import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaBook,
  FaPlusCircle,
  FaSignOutAlt,
  FaUserGraduate,
  FaHome,
} from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

const DashboardLayout = () => {
  const { logoutUser } = useContext(AuthContext);
  const showAlert = useAlert();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        showAlert("success", "You have logged out successfully!");
      })
      .catch((error) => {
        showAlert(error.code, "Logout failed. Please try again!");
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-72 lg:w-60 bg-white shadow-md border-b md:border-b-0 md:border-r border-gray-100 p-6 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-900 mb-6 md:mb-10 text-center md:text-left">
            Dashboard
          </h1>

          {/* Menu */}
          <nav className="flex flex-col space-y-2 md:space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 md:py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>

            <NavLink
              to="/dashboard/enrolledCourses"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 md:py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FaUserGraduate /> My Enrolled Courses
            </NavLink>

            <NavLink
              to="/dashboard/addCourse"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 md:py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FaPlusCircle /> Add Course
            </NavLink>

            <NavLink
              to="/dashboard/addedCourses"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 md:py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-900"
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
          className="flex items-center gap-3 text-red-600 font-medium hover:text-red-700 mt-6 md:mt-10 px-4 py-2 md:py-3 rounded-lg transition cursor-pointer justify-center md:justify-start"
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 min-h-[70vh] md:min-h-[85vh]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

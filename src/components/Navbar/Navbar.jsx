import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const showAlert = useAlert();

  const links = (
    <>
      {[
        { name: "Home", to: "/" },
        { name: "All Courses", to: "/allCourses" },
        { name: "Contact", to: "/contact" },
        { name: "About", to: "/about" },
      ].map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                isActive
                  ? "bg-blue-100 text-blue-900"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
              }`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                isActive
                  ? "bg-blue-100 text-blue-900"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => showAlert("success", "You have logged out successfully!"))
      .catch((error) =>
        showAlert(error.code, "Logout failed. Please try again!")
      );
  };

  const handleThemeToggle = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    html.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-11/12 mx-auto px-2 sm:px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="text-primary text-2xl font-bold tracking-wider hover:text-blue-900 transition-colors duration-300"
            >
              SkillReady
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:space-x-4">
            <ul className="flex list-none gap-2">{links}</ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md text-sm transition-colors duration-300"
              title="Toggle Theme"
            >
              🌓
            </button>

            {user ? (
              <>
                {/* Avatar */}
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    className="w-8 h-8 rounded-full hidden sm:block border-2 border-blue-200"
                    alt={user.displayName || "User"}
                  />
                )}

                {/* Display Name */}
                {user.displayName && (
                  <span className="hidden sm:inline bg-blue-50 text-blue-900 px-2 py-1 rounded-full font-medium transition-colors duration-300">
                    {user.displayName.split(' ')[0]}
                  </span>
                )}

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="ml-2 bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-md text-sm transition-colors duration-300 hidden md:block"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth/login"
                className="bg-primary text-white hover:bg-indigo-800 px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 list-none"
              >
                {links}
                {user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-red-500 hover:bg-red-50 rounded-md px-2 py-1 transition md:hidden"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

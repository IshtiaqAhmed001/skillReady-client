import React from "react";
import { useNavigate } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <FaExclamationTriangle className="text-red-600 w-20 h-20 mb-6" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;

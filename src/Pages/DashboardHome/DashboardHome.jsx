import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { FaBook, FaUserGraduate, FaPlusCircle } from "react-icons/fa";
import useAlert from "../../hooks/useAlert";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [addedCoursesCount, setAddedCoursesCount] = useState(0);
  const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(0);
  const showAlert = useAlert();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://skill-ready-server.vercel.app/courses?createdBy=${user.email}`
        )
        .then((res) => setAddedCoursesCount(res.data.length))
        .catch((err) => showAlert(err.code, "Failed to fetch added courses!"));

      axios
        .get(`https://skill-ready-server.vercel.app/enroll?email=${user.email}`)
        .then((res) => setEnrolledCoursesCount(res.data.length))
        .catch((err) =>
          showAlert(err.code, "Failed to fetch enrolled courses!")
        );
    }
  }, [user, showAlert]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome back, {user?.displayName || "Learner"}!
      </h1>
      <p className="text-gray-600">
        Here's a quick overview of your courses and activities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <FaBook className="text-blue-900 w-8 h-8" />
            <div>
              <p className="text-gray-500">Added Courses</p>
              <p className="text-2xl font-bold text-gray-800">
                {addedCoursesCount}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-6 shadow hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <FaUserGraduate className="text-green-600 w-8 h-8" />
            <div>
              <p className="text-gray-500">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-800">
                {enrolledCoursesCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-gray-600">
        <p>
          Use the sidebar to navigate your courses, add new ones, or view your
          enrolled classes.
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;

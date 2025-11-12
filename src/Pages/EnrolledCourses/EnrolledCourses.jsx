import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBook, FaTrashAlt } from "react-icons/fa";

const EnrolledCourses = () => {
  const [enrolled, setEnrolled] = useState([]);

  // Fetch enrolled courses
  useEffect(() => {
    axios
      .get("http://localhost:3000/enroll")
      .then((res) => setEnrolled(res.data))
      .catch((err) => console.error("Error fetching enrolled courses:", err));
  }, []);

  // Unenroll handler
  const handleUnenroll = (id) => {
  
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <FaBook className="text-blue-600" /> My Enrolled Courses
      </h1>

      {enrolled.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          You haven’t enrolled in any courses yet.
        </p>
      ) : (
        <div className="space-y-4">
          {enrolled.map((course) => (
            <div
              key={course._id}
              className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 transition-all p-5 rounded-xl shadow-sm border border-blue-100"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500">{course.category}</p>
              </div>
              <button
                onClick={() => handleUnenroll(course._id)}
                className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-lg font-medium transition"
              >
                <FaTrashAlt /> Unenroll
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;

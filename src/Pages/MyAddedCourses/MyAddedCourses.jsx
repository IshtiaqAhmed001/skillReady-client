import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const MyAddedCourses = () => {
  const { user } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/courses?createdBy=${user.email}`)
        .then((res) => setMyCourses(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        My Added Courses
      </h1>

      {myCourses.length === 0 ? (
        <p className="text-gray-500 text-center mt-10 animate-pulse">
          You haven’t added any courses yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-md border border-gray-100">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700 font-medium">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-medium">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-medium">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-medium">
                  Price
                </th>
                <th className="px-6 py-3 text-center text-gray-700 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myCourses.map((course) => (
                <tr
                  key={course._id}
                  className="border-t border-gray-100 hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-20 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    {course.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{course.category}</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    ${course.price}
                  </td>
                  <td className="px-6 py-4 flex justify-center items-center gap-2">
                    <button
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md flex items-center gap-1 transition"
                      onClick={() => {
                        /* View Details handler */
                      }}
                    >
                      <FaEye /> View
                    </button>
                    <button
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md flex items-center gap-1 transition"
                      onClick={() => {
                        /* Update handler */
                      }}
                    >
                      <FaEdit /> Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-1 transition"
                      onClick={() => {
                        /* Delete handler */
                      }}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAddedCourses;

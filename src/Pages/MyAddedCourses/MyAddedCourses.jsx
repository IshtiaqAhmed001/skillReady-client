import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import useAlert from "../../hooks/useAlert";

const MyAddedCourses = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myCourses, setMyCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const showAlert = useAlert();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/courses?createdBy=${user.email}`)
        .then((res) => setMyCourses(res.data))
        .catch((err) => console.log(err));
    }
  }, [user, myCourses]);

  const openModal = (course) => {
    setSelectedCourse(course);
    document.getElementById("update_modal").showModal();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    try {
      const updatedCourse = { title, category, price, image, description };

      const result = await axios.put(
        `http://localhost:3000/courses/${selectedCourse._id}`,
        updatedCourse
      );

      if (result.data.modifiedCount) {
        showAlert("success", "Course updated successfully!");
      }
    } catch (error) {
      showAlert(error.message, "Error updating course!");
    }
  };

  const handleView = (id) => {
    navigate(`/allCourses/${id}`);
  };

 const handleDelete = async (id) => {
   const result = await axios.delete(`http://localhost:3000/courses/${id}`);
   if (result.data.deletedCount) {
     showAlert("success", "Course deleted successfully!");
   }
 };

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
                      onClick={() => handleView(course._id)}
                      className="bg-primary hover:bg-secondary text-white px-3 py-1 rounded-md flex items-center gap-1 transition"
                    >
                      <FaEye /> View
                    </button>
                    <button
                      className="bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded-md flex items-center gap-1 transition"
                      onClick={() => openModal(course)}
                    >
                      <FaEdit /> Update
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-1 transition"
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

      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update Course</h3>

          {selectedCourse && (
            <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-3">
              <input
                type="text"
                defaultValue={selectedCourse.title}
                placeholder="Title"
                name="title"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="category"
                defaultValue={selectedCourse.category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="price"
                defaultValue={selectedCourse.price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="image"
                defaultValue={selectedCourse.image}
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
              <textarea
                name="description"
                defaultValue={selectedCourse.description}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button type="submit" className="btn btn-primary mt-2">
                Update Course
              </button>
            </form>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyAddedCourses;

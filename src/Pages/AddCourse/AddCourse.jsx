import React, { use, useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import useAlert from "../../hooks/useAlert";

const AddCourse = () => {
  const { user } = use(AuthContext);
  const [newCourse, setNewCourse] = useState(null);
  const showAlert = useAlert();

  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const duration = form.duration.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const instructorPhoto = form.instructorPhoto.value;
    const newEntry = {
      title,
      category,
      duration,
      price,
      image,
      description,
      createdBy: user?.email,
      createdAt: new Date(),
      instructor: {
        name: instructorName,
        email: instructorEmail,
        photo: instructorPhoto,
      },
    };
    setNewCourse(newEntry);
  };

  useEffect(() => {
    if (newCourse) {
      axios
        .post("http://localhost:3000/courses", newCourse)
        .then((result) => {
          showAlert("success", "New Course added successfully!");
        })
        .catch((error) => {
          showAlert("error", "Failed to add new course!");
        });
    }
  }, [newCourse, showAlert]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <FaPlusCircle className="text-blue-900" /> Add a New Course
      </h1>

      <div className="bg-blue-50 rounded-2xl shadow-sm border border-blue-100 p-8">
        <form
          onSubmit={handleAddCourse}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Course Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="e.g., Web Development"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="e.g., 30 Hours"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              placeholder="e.g., 99"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Course Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Paste image link"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Course Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description of the course..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Instructor Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Instructor Name
            </label>
            <input
              type="text"
              name="instructorName"
              placeholder="Instructor full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
              defaultValue={user?.displayName}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Instructor Email
            </label>
            <input
              type="email"
              name="instructorEmail"
              placeholder="Instructor email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
              defaultValue={user?.email}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Instructor Photo URL
            </label>
            <input
              type="text"
              name="instructorPhoto"
              defaultValue={user?.photoURL}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-blue-900 cursor-pointer hover:bg-secondary text-white px-8 py-3 rounded-xl font-medium transition-all"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;

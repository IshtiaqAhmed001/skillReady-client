import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  FaClock,
  FaTag,
  FaUserGraduate,
  FaDollarSign,
  FaStar,
} from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/courses/${id}`)
      .then((res) => {
        setCourse(res.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-500 text-xl animate-pulse">
          Loading course details...
        </p>
      </div>
    );
  }
  const { title, image, price, duration, category, description, instructor } =
    course;

  const handleEnrollNow = async (id) => {
    const result = await axios.post(`http://localhost:3000/enroll`, { id });
    console.log("coursed enrolled", result.data);
  };

  return (
    <div className="max-w-11/12 mx-auto px-6 py-12">
      {/* Banner Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-200 flex items-center gap-2">
            <FaTag /> {category}
          </p>
        </div>
      </div>

      {/* Main Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Left: Course Info */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-3">About this course</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="mt-6 flex flex-wrap gap-5 text-gray-700">
            <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm">
              <FaClock className="text-blue-900" /> Duration: {duration}
            </span>
            <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm">
              <FaDollarSign className="text-green-600" /> Price: ${price}
            </span>
          </div>
        </div>

        {/* Right: Instructor Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
          <h3 className="text-xl font-semibold mb-4">Instructor</h3>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={instructor?.photo}
              alt={instructor?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <p className="text-lg font-medium">{instructor?.name}</p>
              <p className="text-sm text-gray-500">{instructor?.email}</p>
            </div>
          </div>

          <button
            onClick={() => {
              handleEnrollNow(id);
            }}
            className="w-full bg-blue-900 hover:bg-blue-800 cursor-pointer text-white py-3 rounded-xl font-medium transition-all"
          >
            Enroll Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default CourseDetails;

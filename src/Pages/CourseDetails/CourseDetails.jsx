import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  FaClock,
  FaTag,
  FaUserGraduate,
  FaDollarSign,
  FaStar,
} from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const showAlert = useAlert();

  useEffect(() => {
    axios
      .get(`https://skill-ready-server.vercel.app/courses/${id}`)
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

  const handleEnrollNow = async (id, email) => {
    try {
      const result = await axios.post(
        "https://skill-ready-server.vercel.app/enroll",
        {
          id,
          email,
        }
      );
      showAlert("success", "Successfully enrolled into course!");
    } catch (error) {
      console.error("Error enrolling into course:", error);
      showAlert("error", "Already enrolled!");
    }
  };

  return (
    <div className="max-w-11/12 mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Banner Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-96 object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
          <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
            {title}
          </h1>
          <p className="text-gray-200 flex items-center gap-2 text-sm sm:text-base">
            <FaTag /> {category}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 sm:mt-12">
        {/* Left: Course Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              About this course
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl shadow-sm text-gray-700">
              <FaClock className="text-blue-900" />
              <span>Duration: {duration}</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl shadow-sm text-gray-700">
              <FaDollarSign className="text-green-600" />
              <span>Price: ${price}</span>
            </div>
          </div>
        </div>

        {/* Right: Instructor Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Instructor</h3>
          <img
            src={instructor?.photo}
            alt={instructor?.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-blue-500 mb-4"
          />
          <p className="text-lg font-medium">{instructor?.name}</p>
          <p className="text-sm text-gray-500 mb-6">{instructor?.email}</p>
          <button
            onClick={() => handleEnrollNow(id, user?.email)}
            className="w-full bg-blue-900 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

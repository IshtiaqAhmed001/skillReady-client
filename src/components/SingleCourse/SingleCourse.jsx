import React from "react";

import { FaStar } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router";

const SingleCourse = ({ course }) => {
  const { _id, title, instructor, category, image, price, rating } = course;
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/allCourses/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      {/* Course Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Course Details */}
      <div className="p-4 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Instructor Info */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src={instructor?.photo}
            alt={instructor?.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-sm text-gray-500">By {instructor?.name}</p>
        </div>

        {/* Rating and Price */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <FaStar size={14} />
            <span className="text-gray-700 font-medium">{rating}</span>
          </div>
          <span className="text-blue-600 font-semibold">${price}</span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleViewDetails(_id)}
          className="mt-4 w-full btn btn-primary hover:bg-secondary text-white py-2 rounded-lg text-sm font-medium transition-all"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleCourse;

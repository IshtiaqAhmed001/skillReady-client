import React from "react";
import { FaStar } from "react-icons/fa";

const TopInstructors = () => {
  const instructors = [
    {
      name: "Sophia Turner",
      role: "Web Development Instructor",
      image: "https://i.ibb.co/mXG7tdm/instructor1.jpg",
      rating: 4.9,
    },
    {
      name: "Ethan Walker",
      role: "Data Science Mentor",
      image: "https://i.ibb.co/gv7bC8F/instructor2.jpg",
      rating: 4.8,
    },
    {
      name: "Olivia Martinez",
      role: "UI/UX Design Coach",
      image: "https://i.ibb.co/GFZx4yc/instructor3.jpg",
      rating: 4.9,
    },
    {
      name: "James Anderson",
      role: "Cybersecurity Expert",
      image: "https://i.ibb.co/GHzLttt/instructor4.jpg",
      rating: 4.7,
    },
  ];

  return (
    <section className="bg-white py-20 mt-20">
      <div className="max-w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Meet Our <span className="text-primary">Top Instructors</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Learn from the best — our expert instructors are passionate educators
          with years of professional experience in their fields.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-indigo-100 hover:-translate-y-1"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {instructor.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{instructor.role}</p>
                <div className="flex justify-center items-center gap-1 text-yellow-500 text-sm">
                  <FaStar />
                  <span className="text-gray-700 font-medium">
                    {instructor.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;

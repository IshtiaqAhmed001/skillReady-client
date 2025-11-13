import React from "react";
import { FaStar } from "react-icons/fa";

const TopInstructors = () => {

  const instructors1 = [
    {
      name: "Sophia Turner",
      role: "Web Development Instructor",
      image: "https://i.ibb.co/d0c56YX5/uifaces-human-avatar-2.jpg",
      rating: 4.9,
    },
    {
      name: "Ethan Walker",
      role: "Data Science Mentor",
      image: "https://i.ibb.co/Zzp6PqK3/uifaces-human-avatar.jpg",
      rating: 4.8,
    },
    {
      name: "Olivia Martinez",
      role: "UI/UX Design Coach",
      image: "https://i.ibb.co/0pBftgLt/uifaces-human-avatar-1.jpg",
      rating: 4.9,
    },
  ];


  const instructors2 = [
    {
      name: "James Anderson",
      role: "Cybersecurity Expert",
      image: "https://i.ibb.co/JRZxRqWS/uifaces-popular-avatar-2.jpg",
      rating: 4.7,
    },
    {
      name: "Emma Johnson",
      role: "Marketing Strategist",
      image: "https://i.ibb.co/Pvvscnyx/uifaces-popular-avatar.jpg",
      rating: 4.8,
    },
    {
      name: "Liam Brown",
      role: "Data Analytics Coach",
      image: "https://i.ibb.co/RkhxtMyH/uifaces-popular-avatar-1.jpg",
      rating: 4.9,
    },
  ];


  const renderCards = (array) =>
    array.map((inst, i) => (
      <div
        key={i}
        className="max-w-xs bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-all overflow-hidden"
      >
        <img
          src={inst.image}
          alt={inst.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {inst.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{inst.role}</p>
          <div className="flex justify-center items-center gap-1 text-yellow-500 text-sm">
            <FaStar />
            <span className="text-gray-700 font-medium">{inst.rating}</span>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="bg-blue-50 py-20 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Meet Our <span className="text-blue-900">Top Instructors</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Learn from the best — our expert instructors are passionate educators
          with years of professional experience in their fields.
        </p>

  
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div
            id="slide1"
            className="carousel-item relative w-full flex justify-center gap-6"
          >
            {renderCards(instructors1)}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn btn-circle bg-blue-900 text-white hover:bg-blue-800"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-blue-900 text-white hover:bg-blue-800"
              >
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            id="slide2"
            className="carousel-item relative w-full flex justify-center gap-6"
          >
            {renderCards(instructors2)}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn btn-circle bg-blue-900 text-white hover:bg-blue-800"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-blue-900 text-white hover:bg-blue-800"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;

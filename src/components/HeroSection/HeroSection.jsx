import React from "react";
import heroImage from "../../assets/slider1.jpg"; // Your main banner image
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden rounded-b-3xl shadow-lg">
     
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

    
      <div className="absolute inset-0 bg-linear-to-r from-indigo-900/80 via-indigo-800/50 to-transparent"></div>

     
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl drop-shadow-lg">
          Master New Skills <br /> Anytime, Anywhere
        </h1>

        <p className="text-gray-200 mt-4 max-w-xl text-base md:text-lg">
          Learn from industry experts with flexible online courses designed to
          help you grow your career and achieve your goals.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/allCourses"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
          >
            Browse Courses
          </Link>
          <Link
            to="/auth/register"
            className="bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg shadow-sm transition transform hover:-translate-y-0.5"
          >
            Join Now
          </Link>
        </div>
      </div>

      {/* Soft Bottom Fade to White */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import SingleCourse from "../SingleCourse/SingleCourse";
import Loader from "../Loader/Loader";

const PopularCourses = ({ courses,loading }) => {
  
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader />
        </div>
      );
    }
  return (
    <div className="max-w-11/12 mx-auto">
        <h2 className="mt-12 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-primary">Popular</span> Online Courses
            </h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {courses.map((course) => (
          <SingleCourse 
          key={course._id}
          course={course}
          ></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;

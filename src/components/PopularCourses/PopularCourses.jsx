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

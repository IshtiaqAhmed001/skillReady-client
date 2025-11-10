import React from "react";
import SingleCourse from "../SingleCourse/SingleCourse";

const PopularCourses = ({ courses }) => {
  return (
    <div className="max-w-11/12 mx-auto">
      <h1 className="text-5xl text-center my-10">Popular Online Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {courses.map((course) => (
          <SingleCourse course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;

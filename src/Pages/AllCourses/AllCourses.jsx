import React, { useEffect, useState } from "react";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import axios from "axios";

const AllCourses = () => {
  // const courses = use(allCoursesPromise);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => setCourses(res.data));
  }, [courses]);

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="my-10">
        <h1 className="text-5xl text-center">
          Skills to transform your career and life
        </h1>
        <p className="text-xl text-center mt-5">
          From critical skills to technical topics, SkillReady supports your
          professional development.
        </p>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {courses.map((course) => (
          <SingleCourse key={course._id} course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;

import React, { use } from 'react';
import SingleCourse from '../../components/SingleCourse/SingleCourse';


const allCoursesPromise = fetch("http://localhost:3000/courses").then((res) =>
  res.json()
);
const AllCourses = () => {
    const courses = use(allCoursesPromise);
    return (
      <div className="max-w-11/12 mx-auto">
        <div className='my-10'>
          <h1 className="text-5xl text-center">
            Skills to transform your career and life
          </h1>
          <p className="text-xl text-center mt-5">
            From critical skills to technical topics, SkillReady supports your
            professional development.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
{
    courses.map(course=><SingleCourse 
      key={course._id}
    course={course}
    ></SingleCourse>)
}
        </div>
      </div>
    );
};

export default AllCourses;
import React, { useEffect, useState } from "react";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import axios from "axios";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => {
        setCourses(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.log(err));
  }, []); // removed courses dependency to prevent duplication

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFiltered(
      courses.filter((course) => course.title.toLowerCase().includes(value))
    );
  };

  return (
    <div className="max-w-11/12 mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Skills to Transform{" "}
          <span className="text-primary">Your Career and Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          From creative skills to technical expertise, SkillReady helps you
          learn from the best — anytime, anywhere.
        </p>
      </div>

      {/* Search + Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={handleSearch}
          className="input input-bordered w-full md:w-1/2 shadow-sm focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
        />

        <select className="select select-bordered w-full md:w-1/4 border-blue-900 text-blue-900">
          <option disabled selected>
            Filter by Category
          </option>
          <option>Web Development</option>
          <option>Design</option>
          <option>Data Science</option>
          <option>Marketing</option>
        </select>
      </div>

      {/* Courses Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((course) => (
            <SingleCourse key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg animate-pulse">
            No courses found. Try searching for something else.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllCourses;

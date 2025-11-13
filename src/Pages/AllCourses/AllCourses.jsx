import React, { useEffect, useState } from "react";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import axios from "axios";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Fetch courses once
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => {
        setCourses(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Unified filter handler for search + category
  const handleFilter = (searchValue, categoryValue) => {
    const filteredCourses = courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory = categoryValue
        ? course.category === categoryValue
        : true;
      return matchesSearch && matchesCategory;
    });
    setFiltered(filteredCourses);
  };

  return (
    <div className="max-w-11/12 mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Skills to Transform{" "}
          <span className="text-blue-900">Your Career and Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          From creative skills to technical expertise, SkillReady helps you
          learn from the best — anytime, anywhere.
        </p>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            handleFilter(value, selectedCategory);
          }}
          className="input input-bordered w-full md:w-1/2 shadow-sm focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            const category = e.target.value;
            setSelectedCategory(category);
            handleFilter(search, category);
          }}
          className="select select-bordered w-full md:w-1/4 border-blue-900 text-blue-900"
        >
          <option value="">Filter by Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Data Science">Data Science</option>
          <option value="Marketing">Marketing</option>
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

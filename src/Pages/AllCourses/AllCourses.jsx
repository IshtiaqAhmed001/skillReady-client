import React, { useEffect, useState } from "react";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const AllCourses = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://skill-ready-server.vercel.app/courses")
      .then((res) => {
        setCourses(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

const handleFilter = (searchValue, categoryValue) => {
  const filteredCourses = courses.filter((course) => {
    // Search matches title OR category
    const matchesSearch =
      course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      course.category.toLowerCase().includes(searchValue.toLowerCase());

    // Category filter from dropdown
    const matchesCategory = categoryValue
      ? course.category === categoryValue
      : true;

    return matchesSearch && matchesCategory;
  });

  setFiltered(filteredCourses);
};
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-11/12 mx-auto py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Transform Your Career with{" "}
          <span className="text-blue-900">SkillReady</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          From creative skills to technical expertise, learn from the best —
          anytime, anywhere.
        </p>
      </div>

      {/* Search & Filter in card style */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 bg-white p-6 sm:p-8 rounded-2xl shadow-md">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            handleFilter(value, selectedCategory);
          }}
          className="input input-bordered w-full sm:w-3/5 md:w-1/2 shadow-sm focus:border-blue-900 focus:ring-2 focus:ring-blue-200 rounded-lg"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            const category = e.target.value;
            setSelectedCategory(category);
            handleFilter(search, category);
          }}
          className="select select-bordered w-full sm:w-2/5 md:w-1/4 border-blue-900 text-blue-900 rounded-lg"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {filtered.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-100 overflow-hidden"
            >
              {/* Optional: add gradient header */}
              <div className="bg-linear-to-r from-blue-100 via-blue-50 to-blue-100 p-3">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {course.category}
                </h3>
              </div>

              {/* Course card content */}
              <div className="p-4">
                <SingleCourse course={course} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl animate-pulse">
            No courses found. Try searching for something else.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllCourses;

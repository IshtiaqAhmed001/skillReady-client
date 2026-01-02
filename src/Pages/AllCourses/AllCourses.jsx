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
      .finally(() => {
        setLoading(false);
      });
  }, []);

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


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader />
      </div>
    );
  }


  return (
    <div className="max-w-11/12 mx-auto py-8 sm:py-10 md:py-12">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800">
          Skills to Transform{" "}
          <span className="text-blue-900">Your Career and Life</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto">
          From creative skills to technical expertise, SkillReady helps you
          learn from the best — anytime, anywhere.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            handleFilter(value, selectedCategory);
          }}
          className="input input-bordered w-full sm:w-3/5 md:w-1/2 shadow-sm focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            const category = e.target.value;
            setSelectedCategory(category);
            handleFilter(search, category);
          }}
          className="select select-bordered w-full sm:w-2/5 md:w-1/4 border-blue-900 text-blue-900"
        >
          <option value="">Filter by Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Data Science">Data Science</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filtered.map((course) => (
            <SingleCourse key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <p className="text-gray-500 text-base sm:text-lg md:text-xl animate-pulse">
            No courses found. Try searching for something else.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllCourses;

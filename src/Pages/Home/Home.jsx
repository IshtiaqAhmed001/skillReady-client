import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { Link, useLoaderData } from "react-router";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TopInstructors from "../../components/TopInstructors/TopInstructors";

const Home = () => {
  const courses = useLoaderData();
  const popularCourses = courses.slice(1, 7);

  return (
    <div>
      <HeroSection></HeroSection>
      <section className="max-w-11/12 mx-auto px-5 md:px-10 mt-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Upgrade Your Skills, Transform Your Career
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Explore a wide range of courses and learn at your own pace. From
          technical skills to soft skills, we’ve got you covered.
        </p>
        <div className="mt-6">
          <Link
            to="/allCourses"
            className="btn btn-primary btn-lg px-6 py-3 transition-all hover:scale-105"
          >
            Browse All Courses
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Popular Online Courses
        </h2>
      <PopularCourses courses={popularCourses}></PopularCourses>
      
      </section>

      <WhyChooseUs></WhyChooseUs>
      <TopInstructors></TopInstructors>

    </div>
  );
};

export default Home;

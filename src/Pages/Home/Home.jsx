import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { useLoaderData } from "react-router";
import PopularCourses from "../../components/PopularCourses/PopularCourses";

const Home = () => {
  const courses = useLoaderData();
  const popularCourses = courses.slice(1, 7);

  return (
    <div>
      <HeroSection></HeroSection>
      <PopularCourses courses={popularCourses}></PopularCourses>
    </div>
  );
};

export default Home;

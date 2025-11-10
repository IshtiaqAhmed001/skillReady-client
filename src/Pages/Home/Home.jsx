import React, { use } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { useLoaderData } from "react-router";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const courses = useLoaderData();
  const popularCourses = courses.slice(1, 7);
  const {name} = use(AuthContext)
  console.log(name)
  return (
    <div>
      <HeroSection></HeroSection>
      <PopularCourses courses={popularCourses}></PopularCourses>
    </div>
  );
};

export default Home;

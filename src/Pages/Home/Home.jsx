import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TopInstructors from "../../components/TopInstructors/TopInstructors";
import axios, { Axios } from "axios";

const Home = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://skill-ready-server.vercel.app/popular-courses")
      .then((res) => {
        setPopularCourses(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const featuredCourses = popularCourses.slice(0, 6);

  // Simple fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };


  return (
    <div>
      <HeroSection />

      <motion.section
        className="max-w-11/12 mx-auto px-4 sm:px-6 md:px-10 mt-12 md:mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800">
          Upgrade Your Skills, Transform Your Career
        </h2>
        <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
          Explore a wide range of courses and learn at your own pace. From
          technical skills to soft skills, we’ve got you covered.
        </p>
        <div className="mt-4 sm:mt-6">
          <Link
            to="/allCourses"
            className="btn btn-primary btn-lg px-4 sm:px-6 md:px-6 py-2 sm:py-3 transition-all hover:scale-105"
          >
            Browse All Courses
          </Link>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 sm:mt-16 md:mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-primary">Popular</span> Online Courses
        </h2>

        <PopularCourses courses={featuredCourses} loading={loading} />
      </motion.section>

      <motion.div
        className="mt-12 sm:mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        className="mt-12 sm:mt-16 md:mt-20 mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <TopInstructors />
      </motion.div>
    </div>
  );
};

export default Home;

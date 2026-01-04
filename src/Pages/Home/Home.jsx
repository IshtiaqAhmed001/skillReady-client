import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TopInstructors from "../../components/TopInstructors/TopInstructors";
import axios from "axios";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://skill-ready-server.vercel.app/popular-courses")
      .then((res) => setPopularCourses(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const featuredCourses = popularCourses.slice(0, 6);

  // Simple fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Banner CTA Section */}
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

      {/* Popular Courses */}
      {/* <motion.section
        className="mt-12 sm:mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      > */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
        <span className="text-primary">Popular</span> Online Courses
      </h2>
      <PopularCourses courses={featuredCourses} loading={loading} />
      {/* </motion.section> */}

      {/* Why Choose Us */}
      <motion.div
        className="mt-12 sm:mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <WhyChooseUs />
      </motion.div>

      {/* Top Instructors */}
      <motion.div
        className="mt-12 sm:mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <TopInstructors />
      </motion.div>

      {/* Statistics / Achievements */}
      <motion.section
        className="mt-12 sm:mt-16 md:mt-20 py-12 bg-white rounded-xl shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Achievements
        </h2>
        <div className="max-w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary">1,200+</h3>
            <p className="text-gray-600 mt-2">Students Enrolled</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">150+</h3>
            <p className="text-gray-600 mt-2">Courses Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">95%</h3>
            <p className="text-gray-600 mt-2">Course Completion Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">50+</h3>
            <p className="text-gray-600 mt-2">Top Instructors</p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials / Reviews */}
      <motion.section
        className="mt-12 sm:mt-16 md:mt-20 bg-blue-50 py-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
       <Testimonials/>
      </motion.section>
    </div>
  );
};

export default Home;

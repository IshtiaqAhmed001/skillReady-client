import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TopInstructors from "../../components/TopInstructors/TopInstructors";
import axios from "axios";

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
      <motion.section
        className="mt-12 sm:mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-primary">Popular</span> Online Courses
        </h2>
        <PopularCourses courses={featuredCourses} loading={loading} />
      </motion.section>

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
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Hear From Our <span className="text-primary">Students</span>
        </h2>

        <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-1/3 relative z-30 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.ibb.co/Pvvscnyx/uifaces-popular-avatar.jpg"
                alt="Sarah L."
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-semibold text-gray-800">Sarah L.</h4>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The courses are well-structured and engaging. I landed my dream
              job thanks to SkillReady!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-linear-to-r from-primary/20 via-indigo-50 to-secondary/20 p-6 md:p-8 rounded-2xl shadow-xl w-full md:w-1/3 relative z-20 transform hover:scale-105 transition-transform -mt-8 md:mt-0">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.ibb.co/RkhxtMyH/uifaces-popular-avatar-1.jpg"
                alt="David P."
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-semibold text-gray-800">David P.</h4>
                <p className="text-sm text-gray-500">Data Analyst</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "SkillReady helped me transition into a completely new career with
              confidence. Highly recommended!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-1/3 relative z-10 transform hover:scale-105 transition-transform -mt-16 md:-mt-0">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.ibb.co/0pBftgLt/uifaces-human-avatar-1.jpg"
                alt="Emily R."
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-semibold text-gray-800">Emily R.</h4>
                <p className="text-sm text-gray-500">UI/UX Designer</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Great content, flexible learning, and supportive instructors. I
              loved the practical approach!"
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-primary via-indigo-900 to-secondary text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* About / Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">
              SkillReady
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Empowering learners with practical skills and knowledge to
              transform their career and life.
            </p>
            <div className="flex gap-4 mt-5 text-lg">
              <a href="#" className="hover:text-indigo-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-indigo-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/allCourses"
                  className="hover:text-indigo-400 transition"
                >
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/addCourse"
                  className="hover:text-indigo-400 transition"
                >
                  Add Course
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/addedCourses"
                  className="hover:text-indigo-400 transition"
                >
                  My Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-indigo-500 inline-block pb-1">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-indigo-500 inline-block pb-1">
              Contact Us
            </h3>
            <p className="text-gray-400">
              123 Skill Street, Learning City, ED 4567
            </p>
            <p className="text-gray-400 mt-2">Email: support@skillready.com</p>
            <p className="text-gray-400 mt-2">Phone: +1 (234) 567-890</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-indigo-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SkillReady. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

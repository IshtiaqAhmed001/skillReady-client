import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-11/12 mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About / Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">SkillReady</h2>
            <p className="text-gray-400">
              Empowering learners with practical skills and knowledge to
              transform their career and life.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/allCourses" className="hover:text-white transition">
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/addCourse"
                  className="hover:text-white transition"
                >
                  Add Course
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/addedCourses"
                  className="hover:text-white transition"
                >
                  My Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400">
              123 Skill Street, Learning City, ED 4567
            </p>
            <p className="text-gray-400 mt-2">Email: support@skillready.com</p>
            <p className="text-gray-400 mt-2">Phone: +1 (234) 567-890</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SkillReady. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

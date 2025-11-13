import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUserFriends,
  FaCertificate,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-indigo-700 text-4xl" />,
      title: "Expert Instructors",
      desc: "Learn from top industry professionals and educators who bring real-world experience into the classroom.",
    },
    {
      icon: <FaLaptopCode className="text-indigo-700 text-4xl" />,
      title: "Practical Learning",
      desc: "Hands-on projects and interactive lessons designed to help you apply your skills immediately.",
    },
    {
      icon: <FaUserFriends className="text-indigo-700 text-4xl" />,
      title: "Global Community",
      desc: "Join a vibrant network of learners and professionals from across the globe and grow together.",
    },
    {
      icon: <FaCertificate className="text-indigo-700 text-4xl" />,
      title: "Certified Courses",
      desc: "Get recognized credentials upon course completion to boost your resume and career opportunities.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-indigo-50 to-white py-20 mt-20">
      <div className="max-w-11/12 mx-auto  text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose <span className="text-primary">SkillReady</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Discover what makes us the most trusted online learning platform for
          professionals and lifelong learners.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Hear From Our <span className="text-primary">Students</span>
      </h2>

      <div className="max-w-11/12 md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
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
          <p className="text-gray-700 italic">
            "The courses are well-structured and engaging. I landed my dream job
            thanks to SkillReady!"
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-linear-to-r from-primary/20 via-indigo-50 to-secondary/20 p-6 md:p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
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
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
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
          <p className="text-gray-700 italic">
            "Great content, flexible learning, and supportive instructors. I
            loved the practical approach!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

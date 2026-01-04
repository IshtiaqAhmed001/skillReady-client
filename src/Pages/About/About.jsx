import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Sophia Turner",
      role: "Web Development Instructor",
      img: "https://i.ibb.co/d0c56YX5/uifaces-human-avatar-2.jpg",
    },
    {
      name: "Ethan Walker",
      role: "Data Science Mentor",
      img: "https://i.ibb.co/Zzp6PqK3/uifaces-human-avatar.jpg",
    },
    {
      name: "Olivia Martinez",
      role: "UI/UX Design Coach",
      img: "https://i.ibb.co/0pBftgLt/uifaces-human-avatar-1.jpg",
    },
    {
      name: "James Anderson",
      role: "Cybersecurity Expert",
      img: "https://i.ibb.co/JRZxRqWS/uifaces-popular-avatar-2.jpg",
    },
    {
      name: "Emma Johnson",
      role: "Marketing Strategist",
      img: "https://i.ibb.co/Pvvscnyx/uifaces-popular-avatar.jpg",
    },
    {
      name: "Liam Brown",
      role: "Data Analytics Coach",
      img: "https://i.ibb.co/RkhxtMyH/uifaces-popular-avatar-1.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-blue-50 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20">
   
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-linear-to-r from-primary via-indigo-900 to-secondary inline-block px-4 py-2 rounded-lg shadow-lg">
          About SkillReady
        </h1>
        <p className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg">
          Empowering learners with practical skills and knowledge to transform
          their careers and life. We help you grow at your own pace with the
          guidance of expert instructors.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide accessible, high-quality online courses that equip
            learners with the skills they need to succeed in today’s fast-paced
            digital world.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become a leading platform for skill development, bridging the gap
            between education and employment, and helping learners achieve their
            full potential.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Ready to Upskill?
        </h2>
        <p className="text-gray-700 mb-6">
          Join thousands of learners who are transforming their careers with
          SkillReady. Explore courses and start learning today!
        </p>
        <a
          href="/allCourses"
          className="inline-block bg-linear-to-r from-primary via-indigo-900 to-secondary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Browse Courses
        </a>
      </div>
    </section>
  );
};

export default About;

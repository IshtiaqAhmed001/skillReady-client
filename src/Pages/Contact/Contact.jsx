import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: `Thank you for reaching out  ${
        formData.name.split(" ")[0]
      }. We'll get back to you soon.`,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-blue-50 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-linear-to-r from-primary via-indigo-900 to-secondary text-white p-8 md:p-12 flex flex-col justify-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="text-indigo-200">
              Have questions or want to learn more? Reach out to us and our team
              will respond promptly.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-300 w-5 h-5" />
                <span>support@skillready.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-300 w-5 h-5" />
                <span>+61 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-300 w-5 h-5" />
                <span>Canberra, ACT, Australia</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="textarea textarea-bordered w-full resize-none"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

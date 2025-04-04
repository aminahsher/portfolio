"use client";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("⚠️ Please fill in all fields.");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("✅ Message sent successfully!");
    setErrorMessage("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-xl text-white">
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <MdSend size={28} className="text-blue-400" /> Get in Touch
        </h2>
        
        {errorMessage && <p className="text-red-400 text-center font-semibold mb-3">{errorMessage}</p>}
        {successMessage && <p className="text-green-400 text-center font-semibold mb-3">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition duration-200 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

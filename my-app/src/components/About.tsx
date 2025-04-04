import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto p-6 mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl rounded-xl"
    >
      <h2 className="text-5xl font-extrabold mb-6 text-blue-400">About Me</h2>
      <p className="text-lg mb-6 leading-relaxed">
        Hey there! 👋 I'm <span className="font-semibold text-blue-300">Aminah</span>, a passionate web developer who thrives on building elegant, high-performing web applications. I love creating immersive user experiences and solving challenging problems with modern web technologies.
      </p>
      
      <h3 className="text-3xl font-semibold mb-4 text-blue-300">Skills & Expertise 🚀</h3>
      <ul className="list-none flex flex-wrap gap-4 mb-6">
        {[
          "JavaScript (ES6+)",
          "React",
          "Node.js",
          "Tailwind CSS",
          "HTML & CSS",
          "Git & GitHub",
        ].map((skill, index) => (
          <li
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-blue-600 transition-all"
          >
            {skill}
          </li>
        ))}
      </ul>
      
      <h3 className="text-3xl font-semibold mb-4 text-blue-300">Let's Connect! 🌍</h3>
      <p className="text-lg">
        Want to collaborate or just say hi? You can find me on:
      </p>
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/aminahsher"
          className="bg-gray-800 px-6 py-3 rounded-lg text-white font-bold shadow-lg hover:bg-gray-700 transition-all"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aminah-ali-931b142b7/"
          className="bg-blue-700 px-6 py-3 rounded-lg text-white font-bold shadow-lg hover:bg-blue-600 transition-all"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your-email@example.com"
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold shadow-lg hover:bg-green-500 transition-all"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default About;

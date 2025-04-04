import React from "react";

const skills = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "ShadCN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" }, // Placeholder icon
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        My Skills
      </h2>
      <p className="text-lg text-gray-300 text-center mt-2">
        Technologies I work with
      </p>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="mt-4 text-lg font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

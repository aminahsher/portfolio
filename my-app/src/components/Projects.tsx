"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const data: Project[] = [
  {
    id: 0,
    title: "Weather App",
    description: "A sleek and responsive weather app providing real-time updates and forecasts worldwide.",
    img: "/weather.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    description: "Set and track countdowns for events and tasks with a stylish UI.",
    img: "/wordcounter.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
  {
    id: 2,
    title: "Timetable App",
    description: "Organize and manage schedules, classes, and tasks efficiently.",
    img: "/timetable.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
  {
    id: 3,
    title: "To-Do App",
    description: "An intuitive to-do app for managing tasks and staying organized.",
    img: "/todoapp.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
  {
    id: 4,
    title: "Gen Art",
    description: "An AI-powered app that generates stunning visuals from user-defined prompts.",
    img: "/genart.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
  {
    id: 5,
    title: "Library App",
    description: "Browse, reserve, and manage your reading lists and library resources effortlessly.",
    img: "/libraryapp.png",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
  },
  {
    id: 6,
    title: "Shopping Cart App",
    description: "A user-friendly shopping cart app that simplifies browsing and managing purchases.",
    img: "/shoppingcart.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
  {
    id: 7,
    title: "Pizza App",
    description: "Customize and manage pizza orders easily with a fun, interactive interface.",
    img: "/pizza.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-12">
        My Projects
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all"
    >
      <Image
        src={project.img}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-100">{project.title}</h2>
        <p className="text-gray-300 text-sm mt-2">{project.description}</p>
        <div className="flex flex-wrap mt-4 gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl"></div>
    </motion.div>
  );
};

export default Projects;

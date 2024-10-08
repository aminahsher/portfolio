 "use client"

import React from 'react';
import Image from 'next/image';

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
        title: "WEATHER APP",
        description: "A sleek and responsive weather- apps, providing updates and forecasts for any location worldwide.",
        img: "/weather.png",
        tags: ["Next Js", "Tailwind", "TypeScript", "REACT"]
    },
    {
        id: 1,
        title: "CountDown Timer",
        description: "An app that allows users to easily set and track countdowns for events and tasks.",
        img: "/wordcounter.png",
        tags: [ "Next Js", "Tailwind", "TypeScript", "REACT"]
    },
    {
        id: 2,
        title: "TIMETABLE APP",
        description: "A timetable app that organize and manage schedules, classes, and tasks efficiently.",
        img: "/timetable.png",
        tags: [ "Next Js", "Tailwind", "TypeScript", "REACT"]
    },
    {
        id: 3,
        title: "TODO APP",
        description: "An intuitive to-do app that enables users to efficiently manage tasks and stay organized.",
        img: "/todoapp.png",
        tags: [ "Next Js", "Tailwind", "TypeScript", "REACT"]
    },
    {
        id: 4,
        title: "GEN ART",
        description: "An app that creates stunning visuals from user-defined prompts, harnessing the power of AI.",
        img: "/genart.png",
        tags: ["Next Js", "Tailwind", "TypeScript", "REACT"]
    },
    {
        id: 5,
        title: "LIBRARY APP",
        description: "A library app that allows users to browse, reserve, and manage their reading lists and library resources.",
        img: "/libraryapp.png",
        tags: ["Next Js", "Tailwind", "NODE", "TypeScript"]
    },
    {
        id: 6,
        title: "SHOPPING-CART APP",
        description: "A user-friendly shopping cart app that simplifies browsing and managing books and resources.",
        img: "/shoppingcart.png",
        tags: [ "Next Js", "Tailwind", "TypeScript", "REACT"]
    },
    {
        id: 7,
        title: "PIZZA APP",
        description: "A fun pizza ordering app for managing orders and customizing pizzas.",
        img: "/pizza.png",
        tags: [ "Next Js", "Tailwind", "TypeScript", "REACT"]
    }
];

const Projects: React.FC = () => {
    return (
        <div id="projects" className="container mx-auto p-4">
            <h1 className="text-4xl text-center font-bold mb-4">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                {/* Uncomment if you have project links */}
                {/* <Link href={project.link} passHref>
                    <span className="text-blue-500 hover:underline cursor-pointer">View Project</span>
                </Link> */}
            </div>
            <div className="p-4">
                <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover"
                />
            </div>
            <div className="mt-2 mb-2">
                    <h3 className="text-gray-700 font-medium">Tags:</h3>
                    <div className="flex flex-wrap">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Projects;

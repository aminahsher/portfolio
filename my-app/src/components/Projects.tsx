 "use client"

// import React from 'react'
// import Heading from '@/components/Heading'
// import Card from './Card'
// import Link from 'next/link';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const data = [
//     {
//         id:0,
//         title: "WEATHER APP",
//         description:"A sleek and responsive weather app built with Next.js, providing real-time weather updates and forecasts for any location worldwide.",
//         img:"/weather.png",
//         tags:["Next Js", "Tailwind", "TypeScript","NODE", "OpenWeatherMap", "ShadCN"]
//     },
//     {
//         id:1,
//         title: "CountDown Timer",
//         description:"A minimalist countdown timer app that allows users to easily set and track countdowns for events and tasks",
//         img:"/wordcounter.png",
//         tags:["Next Js", "Tailwind", "TypeScript", "NODE","ShadCN"]
//     },
//     {
//         id:2,
//         title: "TIMETABLE APP",
//         description:"A user-friendly timetable app that helps organize and manage schedules, classes, and tasks efficiently",
//         img:"/timetable.png",
//         tags:["Next Js", "Tailwind","NODE", "TypeScript"]
//     },
//     {
//         id:3,
//         title: "TODO APP",
//         description:"A simple and intuitive to-do app that enables users to efficiently manage tasks and stay organized.",
//         img:"/todoapp.png",
//         tags:["Next Js", "Tailwind","NODE", "TypeScript"]
//     },
//     {
//         id:4,
//         title: "GEN ART",
//         description:"An AI image generator app that creates stunning visuals from user-defined prompts, harnessing the power of artificial intelligence.",
//         img:"/genart.png",
//         tags:["Next Js", "Tailwind", "TypeScript","NODE", "shadCN", "prisma", "Neon"]
//     },
//     {
//         id:5,
//         title: "LIBRARY APP",
//         description:"A comprehensive library app that allows users to browse, reserve, and manage their reading lists and library resources seamlessly.",
//         img:"/libraryapp.png",
//         tags:["Next Js", "Tailwind","NODE", "TypeScript"]
//     },
//     {
//         id:6,
//         title: "SHOPPING-CART APP",
//         description:"A user-friendly library app that simplifies browsing, checking out, and managing books and resources",
//         img:"/shoppingcart.png",
//         tags:["Next Js", "Tailwind","NODE", "TypeScript"]
//     },
//     {
//       id:7,
//       title: "PIZZA APP",
//       description:"A user-friendly library app that simplifies browsing, checking out, and managing books and resources",
//       img:"/pizza.png",
//       tags:["Next Js", "Tailwind","NODE", "TypeScript"]
//   }
    



// ]

// // const Projects = () => {
// //   return (
// //     <div id='projects' className='container pt-32'>
// //       <Heading title='My Projects'/>
// //       <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
// //         {data.map((el)=>(<Card
// //         key={el.id}
// //         title={el.title}
// //         description={el.description}
// //         img={el.img}
// //         tags={el.tags}
// //         />))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default Projects
// function Projects() {
//   return (
//       <div id="projects" className="container mx-auto p-4">
//           <h1 className="text-4xl flex items-center justify-center font-bold mb-4">My Projects</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {data.map(project => (
//                   <ProjectCard key={project.id} project={project} />
//               ))}
//           </div>
//       </div>
//   );
// }

// function ProjectCard({ project }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//       const interval = setInterval(() => {
//           setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.img.length);
//       }, 3000); // Change image every 3 seconds

//       return () => clearInterval(interval); // Cleanup on component unmount
//   }, [project.img.length]);

//   return (
//       <div className="border rounded-lg shadow-md overflow-hidden">
//           <div className="p-4">
//               <h2 className="text-xl font-semibold">{project.title}</h2>
//               <p className="text-gray-600">{project.description}</p>
//               {/* <Link href={project.link} passHref>
//                   <span className="text-blue-500 hover:underline cursor-pointer">View Project</span>
//               </Link> */}
//           </div>
//           <div className="p-4">
//               <Image
//                   src={project.img[currentImageIndex]}
//                   alt={`${project.title} Image ${currentImageIndex + 1}`}
//                   width={400}
//                   height={300}
//                   className="object-cover"
//               />
//           </div>
//       </div>
//   );
// }

// export default Projects;

 

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
        description: "A sleek and responsive weather app built with Next.js, providing real-time weather updates and forecasts for any location worldwide.",
        img: "/weather.png",
        tags: ["Next Js", "Tailwind", "TypeScript", "NODE", "OpenWeatherMap", "ShadCN"]
    },
    {
        id: 1,
        title: "CountDown Timer",
        description: "A minimalist countdown timer app that allows users to easily set and track countdowns for events and tasks.",
        img: "/wordcounter.png",
        tags: ["Next Js", "Tailwind", "TypeScript", "NODE", "ShadCN"]
    },
    {
        id: 2,
        title: "TIMETABLE APP",
        description: "A user-friendly timetable app that helps organize and manage schedules, classes, and tasks efficiently.",
        img: "/timetable.png",
        tags: ["Next Js", "Tailwind", "NODE", "TypeScript"]
    },
    {
        id: 3,
        title: "TODO APP",
        description: "A simple and intuitive to-do app that enables users to efficiently manage tasks and stay organized.",
        img: "/todoapp.png",
        tags: ["Next Js", "Tailwind", "NODE", "TypeScript"]
    },
    {
        id: 4,
        title: "GEN ART",
        description: "An AI image generator app that creates stunning visuals from user-defined prompts, harnessing the power of artificial intelligence.",
        img: "/genart.png",
        tags: ["Next Js", "Tailwind", "TypeScript", "NODE", "shadCN", "prisma", "Neon"]
    },
    {
        id: 5,
        title: "LIBRARY APP",
        description: "A comprehensive library app that allows users to browse, reserve, and manage their reading lists and library resources seamlessly.",
        img: "/libraryapp.png",
        tags: ["Next Js", "Tailwind", "NODE", "TypeScript"]
    },
    {
        id: 6,
        title: "SHOPPING-CART APP",
        description: "A user-friendly shopping cart app that simplifies browsing and managing books and resources.",
        img: "/shoppingcart.png",
        tags: ["Next Js", "Tailwind", "NODE", "TypeScript"]
    },
    {
        id: 7,
        title: "PIZZA APP",
        description: "A fun pizza ordering app for managing orders and customizing pizzas.",
        img: "/pizza.png",
        tags: ["Next Js", "Tailwind", "NODE", "TypeScript"]
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
        </div>
    );
};

export default Projects;

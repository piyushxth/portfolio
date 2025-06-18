// import Image from "next/image";
// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Kamal’s Portfolio",
//       description:
//         "Created a custom blogging platform with Next.js, MongoDB, and JWT-based authentication. Enabled rich-text editing and dynamic content management.",
//       image: "/project1.png",
//       liveDemo: "https://kamalsami.vercel.app",
//       github: "https://kamalsami.vercel.app",
//       technologies: ["Next.js", "Tailwindcss", "Shadcn"],
//     },
//     {
//       id: 2,
//       title: "Kamal’s Portfolio",
//       description: "Kamal portfolio",
//       image: "/b.jpg",
//       liveDemo: "https://kamalsami.vercel.app",
//       github: "https://kamalsami.vercel.app",
//       technologies: ["Next.js", "Tailwindcss", "Shadcn"],
//     },
//     {
//       id: 3,
//       title: "Kamal’s Portfolio",
//       description: "Kamal portfolio",
//       image: "/b.png",
//       liveDemo: "https://kamalsami.vercel.app",
//       github: "https://kamalsami.vercel.app",
//       technologies: ["Next.js", "Tailwindcss", "Shadcn"],
//     },
//     {
//       id: 4,
//       title: "Kamal’s Portfolio",
//       description: "Kamal portfolio",
//       image: "/image.png",
//       liveDemo: "https://kamalsami.vercel.app",
//       github: "https://kamalsami.vercel.app",
//       technologies: ["Next.js", "Tailwindcss", "Shadcn"],
//     },
//   ];
//   return (
//     <section className="mt-32 mb-10  relative flex flex-col gap-1 md:gap-10">
//       <div className=" text-center flex flex-col gap-4">
//         <span className=" text-sm font-medium text-indigo-600">
//           Featured Projects
//         </span>
//         <h2 className="mx-auto  max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
//           Bringing ideas to life through code & creativity
//         </h2>
//       </div>

//       <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="relative bg-card/50 items-center rounded-xl overflow-hidden border border-border/50"
//           >
//             <a
//               className="block relative aspect-[16/10] overflow-hidden items-center"
//               href={`/projects/${project.title
//                 .toLowerCase()
//                 .replace(/\s+/g, "")}`}
//             >
//               <Image
//                 alt={project.title}
//                 loading="lazy"
//                 width="1000"
//                 height="600"
//                 decoding="async"
//                 className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
//                 src={project.image}
//               />
//             </a>
//             <div className="relative p-6">
//               <div className="flex flex-col gap-2">
//                 {/* <h5 className="text-[#3672f8] dark:text-[#bee71f] pt-2 font-bold">
//                   Side Project
//                 </h5> */}
//                 {/* <div className="flex items-center flex-wrap justify-between gap-4">
//                   <h4 className="items-center leading-tight transition-colors text-primary">
//                     {project.title}
//                   </h4>
//                   <div className="flex items-center gap-4">
//                     <a
//                       target="_blank"
//                       className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
//                       href={project.liveDemo}
//                     >
//                       <span className="text-sm font-medium">Live Demo</span>
//                     </a>
//                     <a
//                       target="_blank"
//                       className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
//                       href={project.github}
//                     >
//                       <span className="text-sm font-medium">GitHub</span>
//                     </a>
//                   </div>
//                 </div> */}
//                 <div className="p-4 flex flex-col gap-2">
//                   <h4 className="text-lg font-semibold text-primary">
//                     {project.title}
//                   </h4>
//                   <p className="text-sm text-secondary line-clamp-2">
//                     {project.description}
//                   </p>
//                 </div>
//                 {/* <div className="mt-4 flex flex-wrap gap-2">
//                   {project.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="inline-flex items-center px-4 cursor-pointer py-2 rounded-md text-sm font-medium bg-primary/10 text-primary dark:text-white hover:bg-[#3fd2f9] transition-all duration-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import Image from "next/image";
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kamal’s Portfolio",
      description:
        "Created a custom blogging platform with Next.js, MongoDB, and JWT-based authentication.",
      image: "/project1.png",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
    },
    {
      id: 2,
      title: "Travel Website",
      description: "A beautiful travel booking platform with modern UI.",
      image: "/b.jpg",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
    },
    {
      id: 3,
      title: "Ecommerce Store",
      description: "Fully functional ecommerce store with cart and payments.",
      image: "/b.png",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Dynamic content management with markdown support.",
      image: "/image.png",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
    },
  ];

  return (
    <section className="mt-32 mb-10 relative flex flex-col gap-1 md:gap-10">
      <div className="text-center flex flex-col gap-4">
        <span className="text-sm font-medium text-indigo-600">
          Featured Projects
        </span>
        <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
          Bringing ideas to life through code & creativity
        </h2>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-card/50 items-center rounded-xl overflow-hidden border border-border/50"
          >
            <a
              href={`/projects/${project.title
                .toLowerCase()
                .replace(/\s+/g, "")}`}
              className="relative block aspect-[16/10] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </a>
            <div className="p-6 flex flex-col gap-2">
              <h2 className="text-lg font-semibold leading-7 tracking-tight text-primary">
                {project.title}
              </h2>

              <p className="flex-grow leading-7 text-secondary">
                {project.description}
              </p>
              <div className="flex items-center my-2 gap-4">
                <a
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                  href={project.liveDemo}
                >
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
                <a
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                  href={project.github}
                >
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import Image from "next/image";
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kamal’s Portfolio",
      description:
        "Created a custom blogging platform with Next.js, MongoDB, and JWT-based authentication. Enabled rich-text editing and dynamic content management.",
      image: "/project1.png",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
      technologies: ["Next.js", "Tailwindcss", "Shadcn"],
    },
    {
      id: 2,
      title: "Kamal’s Portfolio",
      description: "Kamal portfolio",
      image: "/b.jpg",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
      technologies: ["Next.js", "Tailwindcss", "Shadcn"],
    },
    {
      id: 3,
      title: "Kamal’s Portfolio",
      description: "Kamal portfolio",
      image: "/b.png",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
      technologies: ["Next.js", "Tailwindcss", "Shadcn"],
    },
    {
      id: 4,
      title: "Kamal’s Portfolio",
      description: "Kamal portfolio",
      image: "/image.png",
      liveDemo: "https://kamalsami.vercel.app",
      github: "https://kamalsami.vercel.app",
      technologies: ["Next.js", "Tailwindcss", "Shadcn"],
    },
  ];
  return (
    <>
      <div className="container my-10 md:my-32">
        <div className="mb-10 md:mb-20 space-y-4 text-center text-primary">
          <h1>Featured Projects</h1>
          <h5>A collection of things I&apos;ve built.</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card/50 items-center rounded-xl overflow-hidden border border-border/50"
            >
              <a
                className="block relative aspect-[16/10] overflow-hidden items-center"
                href={`/projects/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "")}`}
              >
                <Image
                  alt={project.title}
                  loading="lazy"
                  width="1000"
                  height="600"
                  decoding="async"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                />
              </a>
              <div className="relative p-6">
                <div className="flex flex-col gap-2">
                  <h5 className="text-[#3672f8] dark:text-[#bee71f] pt-2 font-bold">
                    Side Project
                  </h5>
                  <div className="flex items-center flex-wrap justify-between gap-4">
                    <h3 className="items-center leading-tight hover:text-red transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4">
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
                  <p className="mt-2 text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 cursor-pointer py-2 rounded-md text-sm font-medium bg-primary/10 text-primary dark:text-white hover:bg-[#3fd2f9] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

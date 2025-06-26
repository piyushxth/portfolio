"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Commit Your Code Conference Website",
    description:
      "A web development conference for charity, the Commit Your Code Conference website was designed and built by me using Figma, Next.js and Tailwind CSS.",
    image: "/projects/project1.jpeg",
    link: "https://www.commityourcode.com/",
  },
  {
    title: "Commit Your Code Conference Website",
    description:
      "A web development conference for charity, the Commit Your Code Conference website was designed and built by me using Figma, Next.js and Tailwind CSS.",
    image: "/projects/project1.jpeg",
    link: "https://www.commityourcode.com/",
  },
];

const Page = () => {
  return (
    <section className="container my-14 mb-10 relative flex flex-col gap-10">
      {/* Heading Section */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-primary md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
      </div>

      {/* Projects Section */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="px-10 flex flex-col gap-10">
            {/* Project Image */}
            <div className="relative w-full">
              <Image
                alt={project.title}
                src={project.image}
                width={1200}
                height={800}
                className="rounded-xl shadow-xl object-cover w-full h-auto"
              />
            </div>

            {/* Project Content */}
            <div className="relative w-full">
              <div className="w-full md:max-w-2xl text-balance">
                <h2 className="mb-3 text-2xl font-medium leading-6 tracking-tight text-primary md:leading-none">
                  {project.title}
                </h2>
                <p className="mb-3 text-base leading-6 text-secondary">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-indigo-600"
                >
                  Visit {project.title}
                  <svg
                    className="relative ml-2.5 mt-px overflow-visible"
                    width="3"
                    height="6"
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;

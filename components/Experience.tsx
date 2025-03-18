import Image from "next/image";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "IT Training Nepal",
      role: "Full Stack Developer Intern",
      date: "Jan 2024 - Present",
      description:
        "Assisted in developing web applications using Next.js, React, and MongoDB. Worked on authentication, admin panel, and REST API integration.",
      image: "/experience/one.png",
    },
    {
      company: "Optimus AI Lab",
      role: "Mid-Level Frontend Engineer",
      date: "Nov 25, 2024 - Nov 25, 2024",
      description:
        "Developed scalable UI components, optimized website performance, and implemented TanStack Query for data fetching.",
      image: "/experience/two.png",
    },
    {
      company: "Iconical Clothing",
      role: "Freelance Frontend Developer",
      date: "Sep 2023 - Dec 2023",
      description:
        "Built an eCommerce platform for a clothing brand using Next.js & Tailwind CSS. Focused on SEO, accessibility, and performance optimization.",
      image: "/experience/three.png",
    },
    {
      company: "E Leather Nepal",
      role: "Web Developer",
      date: "Jul 2023 - Oct 2023",
      description:
        "Designed and developed an eCommerce website for leather products. Worked on admin panel, product filtering, and order management system.",
      image: "/experience/four.png",
    },
    {
      company: "Personal Blog CMS Project",
      role: "Full-Stack Developer",
      date: "May 2023 - Aug 2023",
      description:
        "Created a custom blogging platform with Next.js, MongoDB, and JWT-based authentication. Enabled rich-text editing and dynamic content management.",
      image: "/experience/five.png",
    },
    {
      company: "Crime Report System",
      role: "Frontend Developer",
      date: "Feb 2023 - Apr 2023",
      description:
        "Developed an incident reporting system with a user-friendly UI. Implemented interactive maps, role-based authentication, and real-time notifications.",
      image: "/experience/six.png",
    },
  ];

  return (
    <div className="container my-32 ff-primary">
      <div className="mb-20 space-y-4 text-center text-primary">
        <h1>Work Experience</h1>
        <h5 className="tracking-wider text-fs-xl">
          A collection of things I&apos;ve built.
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 gap-x-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6 relative max-w-2xl group">
            <div className="min-h-[80px] min-w-[80px] h-[80px] w-[80px] exp-img p-2 bg-red dark:bg-[#27272B66] border dark:border-[#262629] rounded-lg place-items-center">
              <Image
                width={100}
                height={100}
                src={exp.image}
                alt={exp.company}
                className="w-[50px] h-[50px]"
              />
            </div>
            <div>
              <h3 className="text-fs-3xl md:text-3xl text-[#2b2a2a] dark:text-[#DCDCEE] font-semibold">
                {exp.company}
              </h3>
              <h4 className=" text-[#2b2a2a] dark:text-[#DCDCEE] font-semibold py-2">
                {exp.role}
              </h4>
              <time className="text-md text-[#424242]  dark:text-[#71717A] uppercase tracking-[.1em] ">
                {exp.date}
              </time>
              <p className="my-4 text-[#494848] tracking-wide text-lg md:text-xl dark:text-[#A1A1AA]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

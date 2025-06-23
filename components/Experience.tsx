// import Image from "next/image";
// import React from "react";

// const Experience = () => {
//   const experiences = [
//     {
//       company: "IT Training Nepal",
//       role: "Full Stack Developer Intern",
//       date: "Jan 2024 - Present",
//       description:
//         "Assisted in developing web applications using Next.js, React, and MongoDB. Worked on authentication, admin panel, and REST API integration.",
//       image: "/experience/one.png",
//     },
//     {
//       company: "Optimus AI Lab",
//       role: "Mid-Level Frontend Engineer",
//       date: "Nov 25, 2024 - Nov 25, 2024",
//       description:
//         "Developed scalable UI components, optimized website performance, and implemented TanStack Query for data fetching.",
//       image: "/experience/two.png",
//     },
//     {
//       company: "Iconical Clothing",
//       role: "Freelance Frontend Developer",
//       date: "Sep 2023 - Dec 2023",
//       description:
//         "Built an eCommerce platform for a clothing brand using Next.js & Tailwind CSS. Focused on SEO, accessibility, and performance optimization.",
//       image: "/experience/three.png",
//     },
//     {
//       company: "E Leather Nepal",
//       role: "Web Developer",
//       date: "Jul 2023 - Oct 2023",
//       description:
//         "Designed and developed an eCommerce website for leather products. Worked on admin panel, product filtering, and order management system.",
//       image: "/experience/four.png",
//     },
//     {
//       company: "Personal Blog CMS Project",
//       role: "Full-Stack Developer",
//       date: "May 2023 - Aug 2023",
//       description:
//         "Created a custom blogging platform with Next.js, MongoDB, and JWT-based authentication. Enabled rich-text editing and dynamic content management.",
//       image: "/experience/five.png",
//     },
//     {
//       company: "Crime Report System",
//       role: "Frontend Developer",
//       date: "Feb 2023 - Apr 2023",
//       description:
//         "Developed an incident reporting system with a user-friendly UI. Implemented interactive maps, role-based authentication, and real-time notifications.",
//       image: "/experience/six.png",
//     },
//   ];

//   return (
//     <section className="mt-32 mb-10  relative flex flex-col gap-1 md:gap-10">
//       <div className=" text-center flex flex-col gap-4">
//         <span className=" text-sm font-medium text-indigo-600">
//           Work Experience
//         </span>
//         <h2 className="mx-auto  max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
//           My journey through teams, tech & timelines
//         </h2>
//       </div>

//       <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 gap-x-12">
//         {experiences.map((exp, index) => (
//           <div key={index} className="flex gap-6 relative max-w-2xl group">
//             <div className="min-h-[60px] min-w-[60px] h-[60px] w-[60px] exp-img p-2 bg-red dark:bg-[#27272B66] border dark:border-[#262629] rounded-lg place-items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 src={exp.image}
//                 alt={exp.company}
//                 className="w-[30px] h-[30px]"
//               />
//             </div>
//             <div>
//               <h3 className="text-fs-3xl md:text-xl text-[#2b2a2a] dark:text-[#DCDCEE] font-semibold">
//                 {exp.company}
//               </h3>
//               <h4 className=" text-[#2b2a2a] text-lg dark:text-[#DCDCEE] font-semibold py-2">
//                 {exp.role}
//               </h4>
//               <time className="text-md text-[#424242] text-md  dark:text-[#71717A] uppercase tracking-[.1em] ">
//                 {exp.date}
//               </time>
//               <p className="my-4 text-[#494848] tracking-wide text-md dark:text-[#A1A1AA]">
//                 {exp.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;
"use client";

import React from "react";
import Image from "next/image";

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

const Experience = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 relative flex flex-col gap-10">
      <div className=" text-center flex flex-col gap-4">
        <span className=" text-sm font-medium text-indigo-600">
          Work Experience
        </span>
        <h2 className="mx-auto  max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
          My journey through teams, tech & timelines
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="relative divide-y divide-gray-100">
        {/* Timeline vertical line & image */}
        <div className="absolute top-0 left-[5%] md:left-[25%] h-full w-12 ">
          <div className="absolute top-0 bottom-0 left-1/2 w-2 -translate-x-1/2 rounded-full bg-[#E8ECEF] shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.32)]" />

          <div className="sticky top-1/2 -translate-y-1/2">
            <div className="relative mx-auto h-10 w-10 overflow-hidden rounded-full border-2 border-primary bg-primary shadow-md">
              <Image
                alt="Profile"
                src="/face.png"
                width={100}
                height={100}
                className="object-cover h-12 w-auto"
              />
            </div>
          </div>
        </div>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr,5fr] gap-6 py-12 md:grid-cols-[2fr,1fr,4fr]"
          >
            {/* Company Info */}
            <div className="hidden md:flex flex-col gap-1">
              <h3 className="text-xl font-bold">{exp.company}</h3>
              <p className="text-sm text-secondary">{exp.date}</p>
            </div>

            {/* Spacer */}
            <div />

            {/* Role Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-gray-300 shadow-md">
                  <Image
                    alt={exp.company}
                    src={exp.image}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold">{exp.role}</h4>
                  <p className="text-secondary text-sm">{exp.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

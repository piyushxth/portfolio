// "use client";
// import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Image from "next/image";
// import { ContactDetails } from "@/constants";
// import { User } from "lucide-react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <>
//       <section className="container justify-center">
//         <div className="flex justify-center ">
//           <h1 className="text-xl font-semibold">About Me</h1>
//         </div>
//         <section className="mb-10 py-10 px-4 sm:px-5 flex flex-col justify-center sm:justify-between lg:flex-row gap-10">
//           <motion.div
//             className="hidden lg:flex bg-about_shape_light dark:bg-about_shape_dark bg-contain bg-no-repeat min-w-[18rem] h-[18rem] relative"
//             animate={{ y: [0, -20, 0] }}
//             transition={{ repeat: Infinity, duration: 5 }}
//           >
//             <Image
//               src={"/about-profile1.png"}
//               alt="profile"
//               height={700}
//               width={700}
//               className="h-[308px] w-96"
//               priority
//             />
//           </motion.div>
//           <div className="flex justify-start sm:justify-center w-full min-h-[400px]">
//             <Tabs defaultValue="personal_info" className="w-full">
//               <TabsList className="w-full">
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <TabsTrigger value="personal_info">Personal Info</TabsTrigger>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <TabsTrigger value="qualification">Qualification</TabsTrigger>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <TabsTrigger value="skills">Skills</TabsTrigger>
//                 </motion.div>
//               </TabsList>

//               <TabsContent value="personal_info" className="w-full">
//                 <h1 className="text-base sm:text-xl font-bold">
//                   Web developer specializing in Next.js and UI/UX design.
//                 </h1>
//                 <p className="fs-300 text-muted-foreground mt-3">
//                   I am a passionate and dedicated full stack developer with a
//                   strong foundation in HTML, CSS, Javascript and React js.
//                 </p>
//                 <div className="mt-7 flex flex-col md:grid md:grid-cols-2 gap-4 items-center text-center justify-center">
//                   {ContactDetails.map((details) => (
//                     <span
//                       key={details.key}
//                       className="flex gap-2 fs-300 fw-medium"
//                     >
//                       <details.icon
//                         size={16}
//                         className="text-primary min-w-auto"
//                       />{" "}
//                       {details.text}
//                     </span>
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="qualification" className="w-full">
//                 <h1 className="text-base sm:text-xl font-bold pb-5">
//                   My Awesome Journey
//                 </h1>
//                 <section className="grid xs:grid-cols-2 grid-cols-1 gap-5">
//                   <div>
//                     <div className="flex gap-x-2 text-primary items-center mb-3">
//                       <User size={16} />
//                       <h2 className="">Experience</h2>
//                     </div>
//                     <div className="flex group gap-x-3 sm:w-auto xs:w-[150px]">
//                       <div className="h-[84px] w-[1px] bg-border relative ml-2">
//                         <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
//                       </div>
//                       <div className="text-left flex flex-col gap-y-2">
//                         <h1 className="fw-semi-bold fs-600">ABC INC.</h1>
//                         <h3 className="fs-300">Software Engineer</h3>
//                         <h2 className="fs-400 text-primary fw-medium pl-1">
//                           2018-2020
//                         </h2>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex gap-x-2 text-primary items-center mb-3">
//                       <User size={16} />
//                       <h2 className="">Experience</h2>
//                     </div>
//                     <div className="flex group gap-x-3 sm:w-auto xs:w-[150px]">
//                       <div className="h-[84px] w-[1px] bg-border relative ml-2">
//                         <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
//                       </div>
//                       <div className="text-left flex flex-col gap-y-2">
//                         <h1 className="fw-semi-bold fs-600">ABC INC.</h1>
//                         <h3 className="fs-300">Software Engineer</h3>
//                         <h2 className="fs-400 text-primary fw-medium pl-1">
//                           2018-2020
//                         </h2>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </TabsContent>

//               <TabsContent value="skills" className="w-full">
//                 <h1 className="text-base sm:text-xl font-bold pb-5">
//                   Tools I Use Everyday
//                 </h1>
//                 <h1 className="fs-600 fw-semi-bold border-b text-primary">
//                   Skills
//                 </h1>
//                 <div className="flex flex-col fs-500 pt-2 fw-medium text-muted-foreground">
//                   <span>HTML,CSS</span>
//                   <span>Frontend Development</span>
//                   <span>Javascript PHP</span>
//                   <span>Backend Development</span>
//                 </div>
//                 <div className="mt-4">
//                   <h3 className="fs-500 fw-semi-bold border-b text-primary">
//                     Tools
//                   </h3>
//                   <div className="flex gap-4 mt-3 justify-center lg:justify-start">
//                     <Image
//                       src={"/vscode.svg"}
//                       alt="vscode"
//                       height={100}
//                       width={100}
//                       className="h-6 w-6"
//                     />
//                     <Image
//                       src={"/figma.svg"}
//                       alt="vscode"
//                       height={100}
//                       width={100}
//                       className="h-6 w-6"
//                     />
//                     <Image
//                       src={"/notion.svg"}
//                       alt="vscode"
//                       height={100}
//                       width={100}
//                       className="h-6 w-6"
//                     />
//                     <Image
//                       src={"/wordpress.svg"}
//                       alt="vscode"
//                       height={100}
//                       width={100}
//                       className="h-6 w-6"
//                     />
//                   </div>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default About;"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="relative w-full space-y-12 before:absolute before:top-0 before:h-px before:bg-border-primary/50 before:-left-4 before:right-[-1rem] md:before:-left-8 md:before:right-[-2rem] lg:before:inset-x-0 after:absolute after:bottom-0 after:h-px after:bg-border-primary/50 after:-left-4 after:right-[-1rem] md:after:-left-8 md:after:right-[-2rem] lg:after:inset-x-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
        {/* Text Section */}
        <div className="order-2 mx-auto max-w-lg text-center lg:order-1 lg:mx-0 lg:max-w-3xl lg:pr-12 lg:text-left">
          <div className="text-sm font-medium text-indigo-600">
            <span>Good evening!</span>
          </div>
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl lg:leading-[64px]">
            I'm Piyush, a creative frontend developer.
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            I build fast and beautiful web experiences using Next.js, Tailwind
            CSS, and modern UI practices. Passionate about clean code,
            performance, and user experience.
          </p>
        </div>

        {/* Images Section */}
        <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
          <div className="relative mx-auto w-full max-w-[400px] grid grid-cols-3 gap-2">
            {/* Image 1 */}
            <div className="relative z-20 -translate-y-2">
              <div
                className="relative mx-auto h-[140px] w-[140px] overflow-hidden rounded-lg shadow-sm shadow-slate-900/30"
                style={{ transform: "rotate(-2deg)" }}
              >
                <Image
                  src="/hero-images/hero1.jpg"
                  alt="Piyush"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative z-30">
              <div
                className="relative mx-auto h-[140px] w-[140px] overflow-hidden rounded-lg shadow-sm shadow-slate-900/30"
                style={{ transform: "rotate(3deg)" }}
              >
                <Image
                  src="/hero-images/hero2.jpg"
                  alt="Piyush"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative z-20 translate-y-4">
              <div
                className="relative mx-auto h-[140px] w-[140px] overflow-hidden rounded-lg shadow-sm shadow-slate-900/30"
                style={{ transform: "scale(1.1) rotate(-2deg)" }}
              >
                <Image
                  src="/hero-images/hero3.jpg"
                  alt="Piyush"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

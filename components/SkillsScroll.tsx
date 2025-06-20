// import Image from "next/image";
// import React from "react";

// const SkillsScroll = () => {
//   return (
//     <section className="mt-32 mb-10  relative flex flex-col gap-1 md:gap-10">
//       <div className=" text-center flex flex-col gap-4">
//         <span className=" text-sm font-medium text-indigo-600">Skills</span>
//         <h2 className="mx-auto  max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
//           Things I&apos;m good at — and always improving
//         </h2>
//       </div>
//       <div>
//         <div
//           className="scroll"
//           style={{ "--time": "15s" } as React.CSSProperties}
//         >
//           <div>
//             <span>HTML</span>
//             <span>CSS</span>
//             <span>JavaScript</span>
//             <span>ReactJS</span>
//             <span>Figma</span>
//             <span>Photoshop</span>
//             <span>Premiere Pro</span>
//             <span>Figma</span>
//             <span>Angular</span>
//             <span>Node JS</span>
//           </div>
//           <div>
//             <span>HTML</span>
//             <span>CSS</span>
//             <span>JavaScript</span>
//             <span>ReactJS</span>
//             <span>Figma</span>
//             <span>Photoshop</span>
//             <span>Premiere Pro</span>
//             <span>Figma</span>
//             <span>Angular</span>
//             <span>Node JS</span>
//           </div>
//         </div>

//         <div
//           className="scroll"
//           style={{ "--time": "30s" } as React.CSSProperties}
//         >
//           <div>
//             <span>HTML</span>
//             <span>CSS</span>
//             <span>JavaScript</span>
//             <span>ReactJS</span>
//             <span>Figma</span>
//             <span>Photoshop</span>
//             <span>Premiere Pro</span>
//             <span>Figma</span>
//             <span>Angular</span>
//             <span>Node JS</span>
//           </div>
//           <div>
//             <span>HTML</span>
//             <span>CSS</span>
//             <span>JavaScript</span>
//             <span>ReactJS</span>
//             <span>Figma</span>
//             <span>Photoshop</span>
//             <span>Premiere Pro</span>
//             <span>Figma</span>
//             <span>Angular</span>
//             <span>Node JS</span>
//           </div>
//         </div>

//         <div
//           className="scroll imgBox"
//           style={{ "--time": "25s" } as React.CSSProperties}
//         >
//           <div>
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/css.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/css.png"
//               alt=""
//             />

//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/js.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/React.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/angular.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/figma.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/photoshop.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/mui.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/tailwind.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/premierePro.png"
//               alt=""
//             />
//           </div>
//           <div>
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/css.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/css.png"
//               alt=""
//             />

//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/js.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/React.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/angular.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/figma.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/photoshop.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/mui.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/tailwind.png"
//               alt=""
//             />
//             <Image
//               height={100}
//               width={100}
//               className="h-[80px] w-auto"
//               src="/skills-icons/premierePro.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsScroll;
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "css.png",
  "js.png",
  "React.png",
  "angular.png",
  "figma.png",
  "photoshop.png",
  "mui.png",
  "tailwind.png",
  "premierePro.png",
];

const SkillsGrid = () => {
  return (
    <section className="mt-32 mb-10 text-center  flex flex-col gap-10">
      <div className="text-center flex flex-col gap-4">
        <span className=" text-sm font-medium text-indigo-600">Skills</span>
        <h2 className="mx-auto  max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
          Things I&apos;m good at — and always improving
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((icon, index) => (
          <motion.div
            key={index}
            className="h-20 w-20 relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={`/skills-icons/${icon}`}
              alt={icon.replace(".png", "")}
              width={80}
              height={80}
              className="object-contain h-[60px] w-auto"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;

// "use client";

// import React, { useEffect, useRef } from "react";
// import { Button } from "./ui/button";
// import Socials from "./Socials";
// import { useRouter } from "next/navigation";
// import { motion, useAnimation } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import { Cover } from "./ui/cover";
// import { Spotlight } from "./ui/spotlight";
// import { HeroHighlight } from "./ui/hero-highlight";
// import Image from "next/image";

// const MotionButton = motion.create(Button);

// const DraggableImage = ({
//   src,
//   alt,
//   className = "",
//   rotate = 0,
//   scale = 1,
// }: {
//   src: string;
//   alt: string;
//   className?: string;
//   rotate?: number;
//   scale?: number;
// }) => {
//   const controls = useAnimation();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const initial = { x: 0, y: 0 };

//   useEffect(() => {
//     controls.start({
//       ...initial,
//       transition: {
//         delay: 0.4,
//         type: "spring",
//         stiffness: 200,
//         damping: 20,
//       },
//     });
//   }, [controls]);

//   const handleDragEnd = () => {
//     controls.start({
//       ...initial,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 20,
//       },
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={`relative h-[140px] w-[140px] ${className}`}
//     >
//       <motion.div
//         drag
//         dragConstraints={containerRef}
//         dragElastic={0.25}
//         animate={controls}
//         onDragEnd={handleDragEnd}
//         whileHover={{
//           scale: scale + 0.1,
//           rotate: rotate + 2, // rotate more on hover
//         }}
//         whileTap={{
//           scale: scale + 0.15,
//           rotate: rotate + 4, // rotate even more when clicked/held
//         }}
//         className="absolute h-[140px] w-[140px] cursor-grab active:cursor-grabbing"
//         style={{
//           rotate,
//           scale,
//           userSelect: "none",
//           touchAction: "none",
//         }}
//       >
//         <div className="relative h-full w-full overflow-hidden rounded-lg shadow-sm shadow-slate-900/30">
//           <Image
//             src={src}
//             alt={alt}
//             fill
//             className="rounded-lg object-cover"
//             draggable={false}
//             priority
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const Hero = () => {
//   const router = useRouter();

//   const handleDownloadCV = () => {
//     const link = document.createElement("a");
//     link.href = "/resume.jpg";
//     link.download = "resume.jpg";
//     link.click();
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0.0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         delay: 0.3,
//         duration: 0.8,
//         ease: "easeInOut",
//       }}
//       viewport={{ once: true }}
//       className="flex flex-col items-center gap-10 container"
//     >
//       <div className="relative text-wrap md:text-balance flex flex-col text-center  fw-extra-bold px-4 pt-10 sm:pt-16 ff-tertiary dark:text-white">
//         <div className="relative w-full">
//           <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
//             Hey, I&apos;m{" "}
//             <Cover>
//               <span className="text-red">Piyush!</span>
//             </Cover>{" "}
//             <br /> Welcome to my corner of the internet!
//           </h1>
//         </div>
//         <div className="relative w-full">
//           <div className="mt-4 text-center md:mt-8">
//             <p className="leading-8 font-normal text-secondary">
//               I&apos;m a full-stack developer with a love for design and a knack
//               for development. This site is my portfolio — and also my testing
//               ground to play with new tech, build cool stuff, and have a bit of
//               fun along the way.
//             </p>
//           </div>
//         </div>
//         <div className="text-fs-2xl pt-2 md:pt-8 fw-semi-bold text-[#994ECC]">
//           <Typewriter
//             options={{
//               strings: [
//                 "Web Developer",
//                 "UI/UX Designer",
//                 "Full Stack Developer",
//               ],
//               autoStart: true,
//               loop: true,
//               delay: 60,
//               deleteSpeed: 60,
//             }}
//           />
//         </div>
//       </div>
//       {/* Cards Section */}
//       <div className="flex gap-6">
//         {/* <Image
//           priority
//           height={500}
//           width={500}
//           src="/hero-images/hero1.jpg"
//           alt="hero"
//           className=" lg:flex h-[18rem] w-[250px] lg:max-w-[200px]  rounded-2xl rotate-0 md:-rotate-12"
//         />{" "}
//         <Image
//           priority
//           height={500}
//           width={500}
//           src="/hero-images/hero2.jpg"
//           alt="hero"
//           className="hidden md:flex h-[18rem] w-full lg:max-w-[200px]  rounded-2xl rotate-6"
//         />{" "}
//         <Image
//           priority
//           height={500}
//           width={500}
//           src="/hero-images/hero4.jpg"
//           alt="hero"
//           className="hidden lg:flex h-[18rem] max-w-[200px]  rounded-2xl -rotate-6"
//         />{" "}
//         <Image
//           priority
//           height={500}
//           width={500}
//           src="/hero-images/hero3.jpg"
//           alt="hero"
//           className="hidden lg:flex h-[18rem] max-w-[200px]  rounded-2xl rotate-6"
//         /> */}
//         <div className="relative mx-auto w-full grid grid-cols-5 gap-2 justify-center">
//           <DraggableImage
//             src="/hero-images/hero1.jpg"
//             alt="Piyush 1"
//             className="z-20 -translate-y-2"
//             rotate={1.83753}
//           />
//           <DraggableImage
//             src="/hero-images/hero2.jpg"
//             alt="Piyush 2"
//             className=""
//             rotate={3.76451}
//           />
//           <DraggableImage
//             src="/hero-images/hero3.jpg"
//             alt="Piyush 3"
//             className=""
//             rotate={3.86482}
//           />
//           <DraggableImage
//             src="/hero-images/hero4.jpg"
//             alt="Piyush 3"
//             className=""
//             rotate={3.96098}
//           />{" "}
//           <DraggableImage
//             src="/hero-images/hero3.jpg"
//             alt="Piyush 3"
//             className=""
//             rotate={1.74997}
//           />
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;
"use client";

import React from "react";
import { Button } from "./ui/button";
import Socials from "./Socials";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Cover } from "./ui/cover";
import { Spotlight } from "./ui/spotlight";
import { HeroHighlight } from "./ui/hero-highlight";
import Image from "next/image";

const MotionButton = motion.create(Button);

const Hero = () => {
  const router = useRouter();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.jpg";
    link.download = "resume.jpg";
    link.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-10 container"
    >
      <div className="relative text-wrap md:text-balance flex flex-col text-center  fw-extra-bold px-4 pt-10 sm:pt-16 ff-tertiary dark:text-white">
        <div className="relative w-full">
          <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            Hey, I&apos;m{" "}
            <Cover>
              <span className="text-red">Piyush!</span>
            </Cover>{" "}
            <br /> Welcome to my corner of the internet!
          </h1>
        </div>
        <div className="relative w-full">
          <div className="mt-4 text-center md:mt-8">
            <p className="leading-8 font-normal text-secondary">
              I&apos;m a full-stack developer with a love for design and a knack
              for development. This site is my portfolio — and also my testing
              ground to play with new tech, build cool stuff, and have a bit of
              fun along the way.
            </p>
          </div>
        </div>
        <div className="text-fs-2xl pt-2 md:pt-8 fw-semi-bold text-[#994ECC]">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 60,
            }}
          />
        </div>
      </div>
      {/* Cards Section */}
      <div className="flex gap-6">
        <Image
          priority
          height={500}
          width={500}
          src="/hero-images/hero1.jpg"
          alt="hero"
          className=" lg:flex h-[18rem] w-[250px] lg:max-w-[200px]  rounded-2xl rotate-0 md:-rotate-12"
        />{" "}
        <Image
          priority
          height={500}
          width={500}
          src="/hero-images/hero2.jpg"
          alt="hero"
          className="hidden md:flex h-[18rem] w-full lg:max-w-[200px]  rounded-2xl rotate-6"
        />{" "}
        <Image
          priority
          height={500}
          width={500}
          src="/hero-images/hero4.jpg"
          alt="hero"
          className="hidden lg:flex h-[18rem] max-w-[200px]  rounded-2xl -rotate-6"
        />{" "}
        <Image
          priority
          height={500}
          width={500}
          src="/hero-images/hero3.jpg"
          alt="hero"
          className="hidden lg:flex h-[18rem] max-w-[200px]  rounded-2xl rotate-6"
        />
      </div>
    </motion.section>
  );
};

export default Hero;

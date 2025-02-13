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
    // <section className="h-screen pt-20 lg:pt-32 mb-32 flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 sm:h-screen border">
    //   {/* Left Content - Text and Buttons */}
    //   <div className="order-2 sm:order-1 text-center sm:text-left max-w-xl">
    //     <h2 className="text-lg font-medium text-foreground pb-2">
    //       Hi, I am Piyush Shrestha
    //     </h2>

    //     <h1 className="text-primary font-bold text-4xl sm:text-5xl mb-4">
    //       <Typewriter
    //         options={{
    //           strings: ["Web Developer", "UI/UX Designer"],
    //           autoStart: true,
    //           loop: true,
    //           delay: 60,
    //           deleteSpeed: 60,
    //         }}
    //       />
    //     </h1>

    //     <p className="text-gray-700 text-base sm:text-lg font-medium mb-7 leading-relaxed">
    //       I am a passionate and dedicated web developer with a love for creating
    //       dynamic and engaging web applications.
    //     </p>

    //     <div>
    //       <span className="text-gray-500 text-sm font-medium pb-3 block">
    //         Find Me On
    //       </span>
    //       <Socials />

    //       <div className="flex gap-5 justify-center sm:justify-start mt-5">
    //         <MotionButton
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.9 }}
    //           onClick={() => router.push("/Contact")}
    //           className="px-6 py-2"
    //         >
    //           Contact Me
    //         </MotionButton>

    //         <MotionButton
    //           variant="secondary"
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.9 }}
    //           onClick={handleDownloadCV}
    //           className="px-6 py-2"
    //         >
    //           Download CV
    //         </MotionButton>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Right Content - Profile Image */}
    //   <motion.div
    //     className="order-1 sm:order-2 hidden xs:flex bg-hero_shape2_light dark:bg-hero_shape2_dark bg-no-repeat bg-contain
    //       w-[13rem] h-[13rem] md:w-[15rem] md:h-[15rem] lg:w-[18rem] lg:h-[18rem]"
    //     animate={{ y: [0, -20, 0] }}
    //     transition={{ repeat: Infinity, duration: 5 }}
    //   >
    //     <div
    //       className="bg-hero_shape bg-contain bg-no-repeat bg-center -ml-2 -mt-1
    //      w-[14rem] h-[13rem] md:w-[16rem] md:h-[15rem] lg:w-[19rem] lg:h-[18rem]"
    //     >
    //       <Image
    //         src={"/hero-profile1.png"}
    //         alt="profile"
    //         height={700}
    //         width={700}
    //         className="h-[219px] md:h-[252px] lg:h-[302px] "
    //         priority
    //       />
    //     </div>
    //   </motion.div>
    // </section>
    // <section className="container flex flex-col lg:flex-row justify-between  gap-12 py-10">
    //   <div className="w-full lg:w-1/2 pl-3 sm:pl-0">
    //     <p className="text-fs-5xl md:text-fs-7xl xl:text-fs-8xl fw-black leading-[1.083]">
    //       Hi I'm <span className="text-red">Piyush Shrestha.</span> I am a
    //       passionate <span className="text-green"> Web Developer</span> focused
    //       on creating dynamic and
    //       <span className="text-blue"> engaging applications.</span>
    //     </p>
    //     <p className="text-fs-xl text-primary pt-10 fw-medium leading-[1.556]">
    //       Welcome to my portfolio! I'm a web developer passionate about creating
    //       clean, user-friendly websites and applications. I specialize in
    //       building responsive, modern web experiences using technologies like
    //       React, Next.js, and Tailwind CSS. My goal is to deliver intuitive and
    //       engaging digital solutions that are both functional and visually
    //       appealing. Explore my work and see how I bring ideas to life on the
    //       web!
    //     </p>
    //   </div>
    //   <div className="w-1/2 flex justify-center mt-8 sm:mt-0">
    //     <p className="text-fs-5xl lg:text-fs-7xl xl:text-fs-8xl fw-black leading-[1.083]">
    //       Driven to build dynamic, user-centered web experiences that meet
    //       modern standards and enhance every interaction.
    //     </p>
    //     {/* <Image
    //       src={"/hero-profile1.png"}
    //       alt="profile"
    //       height={700}
    //       width={700}
    //       className="w-[300px] h-[219px] md:h-[252px] lg:h-[302px]"
    //       priority
    //     /> */}
    //   </div>
    // </section>

    <motion.section
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center gap-10 h-screen"
    >
      {" "}
      <div className="flex flex-col text-center text-fs-5xl sm:text-fs-7xl xl:text-fs-8xl fw-extra-bold leading-none px-4 pt-10 sm:pt-16 ff-tertiary text-secondary dark:text-white">
        <h1>
          {"Hey, I’m"}{" "}
          <Cover>
            {" "}
            <span className="text-red">Piyush!</span>
          </Cover>
        </h1>
        <p>
          Welcome to my corner <br /> of the internet!
        </p>
        <div className="text-fs-2xl pt-8 fw-semi-bold text-[#994ECC]">
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
        <img
          src="/hero-images/hero1.jpg"
          alt="hero"
          className=" lg:flex h-[18rem] w-full lg:max-w-[200px]  rounded-2xl rotate-0 md:-rotate-12"
        />{" "}
        <img
          src="/hero-images/hero2.jpg"
          alt="hero"
          className="hidden md:flex h-[18rem] w-full lg:max-w-[200px]  rounded-2xl rotate-6"
        />{" "}
        <img
          src="/hero-images/hero4.jpg"
          alt="hero"
          className="hidden lg:flex h-[18rem] max-w-[200px]  rounded-2xl -rotate-6"
        />{" "}
        <img
          src="/hero-images/hero3.jpg"
          alt="hero"
          className="hidden lg:flex h-[18rem] max-w-[200px]  rounded-2xl rotate-6"
        />
      </div>
    </motion.section>
  );
};

export default Hero;

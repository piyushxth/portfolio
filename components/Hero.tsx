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
      {" "}
      {/* <div className="flex flex-col text-center  fw-extra-bold px-4 pt-10 sm:pt-16 ff-tertiary text-secondary dark:text-white">
                    <h1>
                      {"Hey, I'm "}
                      <Cover>
                        <span className="text-red">Piyush!</span>
                      </Cover>
                    </h1>
                    <p className="pt-2 text-fs-5xl sm:text-fs-7xl xl:text-fs-8xl max-w-[650px] leading-normal md:leading-tight">
                      Welcome to my corner of the internet!
                    </p>
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
                  </div> */}
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

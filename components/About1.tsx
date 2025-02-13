"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "./ui/wobble-card";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
const About1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="container flex flex-col  h-auto items-center py-32 lg:py-[20rem]"
    >
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
      </div> */}
      <div className="grid grid-cols-2 border">
        <div className="border">
          <CardContainer className="inter-var">
            <CardBody className=" relative group/card  w-auto sm:w-[30rem] h-[500px] rounded-xl bg-black/20">
              <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
                <Image
                  width={1000}
                  height={1000}
                  src="/hero-images/hero3.jpg"
                  alt="hero"
                  className="h-[500px] w-auto object-cover md:flex  rounded-2xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          {/* <div className="flex items-center p-4 gap-1">
            <div className="">
              <Image
                src="/hero-profile1.png"
                alt="profile"
                width={100}
                height={100}
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-snug tracking-tighter">
              <h3 className="text-fs-5xl fw-bold ">Piyush Shrestha</h3>
              <h3 className="text-fs-lg fw-semi-bold text-[#8989BB] uppercase">
                Web Developer
              </h3>
            </div>
          </div> */}

          <div className="py-10 text-fs-2xl text-primary max-w-2xl">
            <p>
              I&apos;m an experienced front-end developer with a passion for
              design and a knack for tinkering. Web development is my
              playground, where I push boundaries and chase new horizons. 🤤
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About1;

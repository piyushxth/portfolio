"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "./ui/wobble-card";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const About1 = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="container flex flex-col xl:flex-row justify-between pb-20 relative my-10 md:my-40"
      >
        <div className=" text-fs-2xl space-y-5">
          <h1 className="font-semibold text-[64px]">About Me</h1>
          <p className="text-[#11111180] dark:text-[#DCDCEE]  text-[24px]">
            Hello, I&apos;m a designer and developer from The Netherlands.
            I&apos;ve previously founded Flitsmeister, a navigation app for iOS
            and Android which has become one of the most well-known brands in
            The Netherlands. Starting from scratch, we successfully grew our
            userbase from 0 to 3 million users. In the initial stages, my focus
            was on designing and developing the iOS app, but as we evolved, I
            shifted towards leading the design team and doing some React.js
            development. Flitsmeister was acquired in 2019.
          </p>
          <p className="text-[#11111180] dark:text-[#DCDCEE]  text-[24px]">
            Over the years I&apos;ve developed all kinds of apps in all kinds of
            languages. From C++ to C#, Java, Objective-C, Swift, Javascript and
            many others. I&apos;ve done a lot of motion and 3D design too. I
            love working on side projects. Over the years, I&apos;ve launched a
            lot of them, some of which are showcased here, others are at the
            graveyard. I&apos;m working on 2 apps for web developers which will
            be launched early 2024.
          </p>
          <p className="text-[#11111180] dark:text-[#DCDCEE]  text-[24px]">
            I&apos;m currently helping startups and business with the design and
            development of their apps and websites. Sometimes I help agencies
            too. If you want me to help you with your Website design, App design
            (mobile or MacOS), React.js development, or Framer website, feel
            free to send me an email or drop me a DM on Twitter/X.
          </p>
        </div>

        <div className="hidden lg:block  mb-10">
          <div className="sticky top-5 max-h-[500px] p-5 rounded-lg">
            <CardContainer className="sticky top-0 inter-var  max-h-[400px]">
              <CardBody className="  group/card  w-auto md:w-[30rem] rounded-xl flex justify-center">
                <CardItem className=" text-xl font-bold text-neutral-600 dark:text-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="/hero-images/hero3.jpg"
                    alt="hero"
                    className="max-h-[400px] w-[20rem] md:w-auto object-cover md:flex  rounded-2xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About1;

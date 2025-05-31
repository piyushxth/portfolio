"use client";
import Image from "next/image";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import { Button } from "./ui/button";

const About1 = () => {
  return (
    <>
      <section className="container my-32 flex flex-col xl:flex-row justify-center pb-20 relative">
        <div className=" text-fs-2xl">
          <div className="space-y-7">
            <h1 className="mb-5 space-y-4 text-center text-primary">
              About Me
            </h1>

            <p className="text-[#424242] font-medium dark:text-[#a1a1aa] text-fs-2xl md:text-[24px] md:leading-relaxed">
              Hi, I&apos;m a frontend developer passionate about building
              modern, responsive, and user-friendly web applications. I
              specialize in{" "}
              <span className="text-yellow">
                Next.js, Tailwind CSS, and React.js
              </span>
              , creating seamless and high-performing websites.
            </p>
            <p className="text-[#424242] font-medium dark:text-[#a1a1aa] text-fs-2xl md:text-[24px] md:leading-relaxed">
              Over the years, I&apos;ve worked on various projects, from{" "}
              <span className="text-red">eCommerce platforms </span>
              to admin dashboards and travel websites. I love bringing ideas to
              life through clean design and efficient code.
            </p>
            <p className="text-[#424242] font-medium dark:text-[#a1a1aa] text-fs-2xl md:text-[24px] md:leading-relaxed">
              I&apos;m always open to collaborating with startups, businesses,
              or agencies needing
              <span className="text-green">
                {" "}
                website design, app development, or frontend expertise
              </span>
              . If you&apos;re looking for someone to help with your{" "}
              <span className="text-blue">
                Next.js, Tailwind CSS, or React.js projects
              </span>
              , feel free to send me an email or drop me a DM on Twitter/X.
            </p>
          </div>
          <div className="border rounded-3xl leading-[1.75rem] mt-14 p-[1.5rem] tracking-[-.025em] text-[#424242] font-medium dark:text-[#a1a1aa]">
            If you ever spot me in the wild, don&apos;t hesitate to say hello!
            Let&apos;s grab a drink and geek-out over the latest advancements in
            front-end development or discuss our favorite programming language.
            ⚡
          </div>
        </div>

        <div className="hidden lg:block min-w-[30rem] pt-10">
          <div className="sticky top-24 rounded-lg">
            <CardContainer className="min-w-[30rem] h-full">
              <CardBody className=" group/card w-full h-[80%] rounded-xl flex justify-center">
                <CardItem className=" text-xl font-bold text-neutral-600 dark:text-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="/hero-images/hero3.jpg"
                    alt="hero"
                    className="h-[30rem] w-[25rem] object-cover md:flex  rounded-2xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            {/* <div className="flex justify-center gap-2 mt-5">
              <Button className="w-4/5 text-white  bg-red/90 hover:bg-red font-medium tracking-tight rounded-lg  py-6">
                Get My Resume
              </Button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;

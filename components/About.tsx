"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const DraggableImage = ({
  src,
  alt,
  className = "",
  rotate = 0,
  scale = 1,
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: number;
  scale?: number;
}) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const initial = { x: 0, y: 0 };

  useEffect(() => {
    controls.start({
      ...initial,
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    });
  }, [controls]);

  const handleDragEnd = () => {
    controls.start({
      ...initial,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-[140px] w-[140px] ${className}`}
    >
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0.25}
        animate={controls}
        onDragEnd={handleDragEnd}
        whileHover={{
          scale: scale + 0.05,
          rotate: rotate + 2, // rotate more on hover
        }}
        whileTap={{
          scale: scale + 0.12,
          rotate: rotate + 4, // rotate even more when clicked/held
        }}
        className="absolute h-[140px] w-[140px] cursor-grab active:cursor-grabbing"
        style={{
          rotate,
          scale,
          userSelect: "none",
          touchAction: "none",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow-sm shadow-slate-900/30">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-lg object-cover"
            draggable={false}
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative w-full space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
        {/* Text Section */}
        <div className="order-2 mx-auto max-w-lg text-center lg:order-1 lg:mx-0 lg:max-w-3xl lg:pr-12 lg:text-left">
          <div className="text-sm font-medium text-indigo-600">
            <span>Good evening!</span>
          </div>
          <h1 className=" max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl lg:leading-[64px]">
            I'm Piyush, a creative frontend developer.
          </h1>
        </div>

        {/* Images Section */}
        <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
          <div className="relative mx-auto w-full max-w-[400px] grid grid-cols-3 gap-2">
            <DraggableImage
              src="/hero-images/hero1.jpg"
              alt="Piyush 1"
              className="z-20 -translate-y-2"
              rotate={-3.2}
            />

            <DraggableImage
              src="/hero-images/hero2.jpg"
              alt="Piyush 2"
              className="z-30"
              rotate={3}
            />

            <DraggableImage
              src="/hero-images/hero3.jpg"
              alt="Piyush 3"
              className="z-20 translate-y-4"
              rotate={-2}
              scale={1.1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

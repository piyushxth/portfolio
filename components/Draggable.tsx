"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Draggable = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const initialPosition = { x: 30, y: 30 }; // can adjust this

  useEffect(() => {
    controls.start({
      ...initialPosition,
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
      ...initialPosition,
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
      className="relative mx-auto mt-20 h-[240px] w-[240px] rounded-xl border border-dashed border-slate-400 bg-slate-100 shadow-inner"
    >
      <motion.div
        className="absolute z-10 h-[140px] w-[140px] cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={containerRef}
        dragElastic={0.25}
        animate={controls}
        onDragEnd={handleDragEnd}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.12 }}
        style={{
          rotate: "-3deg",
          perspective: "400px",
          userSelect: "none",
          touchAction: "none",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow-sm shadow-slate-900/30">
          <Image
            src="/braydon_speaking_photo.jpeg"
            alt="Piyush Shrestha"
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

export default Draggable;

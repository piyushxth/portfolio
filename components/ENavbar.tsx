"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import MobileNav from "./ui/mobile-nav";
import { Navlinks } from "@/constants";

const ENavbar = () => {
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="w-full p-2"></div>

      <header
        className={`bg-transparent backdrop-blur-none sticky top-0 z-50 transition-all duration-300  ${
          atTop
            ? "bg-transparent"
            : "backdrop-saturate-150 bg-white/[.90] dark:bg-background/[.65] backdrop-blur-sm"
        }`}
      >
        <nav className="container relative flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center cursor-pointer"
          >
            <Link href="/">
              <Image
                src="/sa.png"
                alt="logo"
                height={40}
                width={40}
                className="w-12 h-12 object-contain"
                priority
              />
            </Link>
          </motion.div>
          <div className="flex items-center gap-6">
            {Navlinks.map((link) => (
              <div key={link.key} className="hidden sm:flex relative uppercase">
                <Link
                  href={link.href}
                  className="font-semibold hover:opacity-100 opacity-80 transition-colors"
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <ModeToggle />
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default ENavbar;

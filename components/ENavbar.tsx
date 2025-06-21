"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import MobileNav from "./ui/mobile-nav";
import { Navlinks } from "@/constants";

const ENavbar = () => {
  return (
    <header className="w-full" role="banner">
      <nav
        aria-label="Primary Navigation"
        className="container flex h-16 items-center justify-between"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link href="/" aria-label="Go to home">
            <Image
              src="/sa.png"
              alt="Site logo"
              width={40}
              height={40}
              className="h-12 w-12 object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex place-items-center space-x-4 rounded-full border border-border-primary px-5 py-2 text-sm text-gray-500">
          {Navlinks.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="font-medium transition-colors text-primary/90 hover:text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ENavbar;

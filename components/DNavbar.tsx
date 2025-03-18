// "use client";
// import React from "react";
// import MobileNav from "./ui/mobile-nav";
// import { ModeToggle } from "./ui/toggle-mode";
// import Image from "next/image";
// import Link from "next/link";
// import { Navlinks } from "@/constants/index";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

// const DNavbar = () => {
//   const pathname = usePathname();

//   return (
//     <nav className="container  py-9 w-full flex items-center justify-between">
//       {/* Logo Section */}
//       <motion.div
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ scale: 0.9 }}
//         className="flex items-center p-3 cursor-pointer"
//       >
//         <Link href="/">
//           <Image
//             src="/sa.png"
//             alt="logo"
//             height={40}
//             width={40}
//             className="w-12 h-12 object-contain"
//             priority
//           />
//         </Link>
//       </motion.div>

//       {/* Centered Links */}
//       <div className="flex items-center gap-6 ">
//         {Navlinks.map((link) => (
//           <div key={link.key} className="hidden sm:flex relative">
//             <Link
//               href={link.href}
//               className={`text-fs-lg text-lg hover:opacity-100 opacity-80 transition-colors
//               }`}
//             >
//               {link.name}
//             </Link>
//           </div>
//         ))}
//         {/* Right Section (ModeToggle and MobileNav) */}
//         <div className="flex gap-2 items-center">
//           <ModeToggle />
//           <MobileNav />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default DNavbar;
"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navlinks } from "@/constants/index";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ui/toggle-mode";
import MobileNav from "./ui/mobile-nav";

const DNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="border w-11/12 fixed  top-0 z-50 left-1/2 -translate-x-1/2 50 flex h-14 items-center justify-between mt-5 rounded-full max-w-7xl  bg-background/20 backdrop-blur-lg ">
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center p-3 cursor-pointer"
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
      </div>
      {/* Centered Links */}
      <div className="flex items-center gap-6 ">
        {Navlinks.map((link) => (
          <div key={link.key} className="hidden sm:flex relative">
            <Link
              href={link.href}
              className={`font-semibold text-fs-lg text-lg hover:opacity-100 opacity-80 transition-colors
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
        {/* Right Section (ModeToggle and MobileNav) */}
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default DNavbar;

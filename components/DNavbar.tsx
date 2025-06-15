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
    <nav className=" container fixed  top-0 z-50 left-1/2 -translate-x-1/2 50 flex pr-2 h-12 items-center justify-between mt-2 rounded-full max-w-7xl backdrop-saturate-150 bg-white/[.90] dark:bg-background/[.65] backdrop-blur-sm ">
      {/* <nav className="flex z-40 w-full h-12 items-center justify-between px-10 py-2 data-[menu-open=true]:border-none fixed top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-white/[.90] dark:bg-background/[.65]"></nav> */}
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
              className={`font-semibold hover:opacity-100 opacity-80 transition-colors
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

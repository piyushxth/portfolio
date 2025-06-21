"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import Socials from "../Socials";
import { Navlinks } from "@/constants";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="flex flex-col w-full max-w-none p-0" // Full width
      >
        {/* Logo */}
        <div className="flex h-14 items-center justify-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/sa.png" alt="logo" height={40} width={40} />
            <span>Piyush Shrestha</span>
          </Link>
        </div>

        {/* Accessibility metadata */}
        <VisuallyHidden>
          <SheetTitle className="text-sm px-3">Main Links</SheetTitle>
          <SheetDescription>Sidebar navigation links</SheetDescription>
        </VisuallyHidden>

        {/* Navigation Grid */}
        <nav className="grid grid-cols-1 gap-1 px-2 pt-10 text-xl font-medium sm:px-4">
          {Navlinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <SheetClose asChild key={link.key}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg  px-3 py-2 text-xl/9 ${
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  } data-active:bg-gray-950/5`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="px-2 sm:px-4 pt-10">
          <Socials />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Briefcase,
  Contact,
  FileCode2,
  Home,
  Layers,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebar } from "../sidebar-provider";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FileCode2,
  },
  {
    title: "About",
    href: "/admin/about",
    icon: User,
  },
  {
    title: "Skills",
    href: "/admin/skills",
    icon: Layers,
  },
  {
    title: "Experience",
    href: "/admin/experience",
    icon: Briefcase,
  },
  {
    title: "Contact",
    href: "/admin/contact",
    icon: Contact,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { isOpen, toggle, isMobile } = useSidebar();

  const SidebarContent = (
    <ScrollArea className="h-full py-6">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-fs-lg font-semibold">Navigation</h2>
        <div className="space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === item.href
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-secondary hover:text-secondary-foreground"
              )}
              asChild
            >
              <Link href={item.href} onClick={isMobile ? toggle : undefined}>
                <item.icon className="mr-2 h-5 w-5" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={toggle}>
        <SheetContent side="left" className="w-[240px] p-0 fixed">
          {SidebarContent}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cn(
        "h-screen border-r bg-background transition-all duration-300",
        isOpen ? "w-[240px]" : "w-[70px]"
      )}
    >
      {isOpen ? (
        SidebarContent
      ) : (
        <div className="flex h-full flex-col items-center py-6">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              size="icon"
              className="mb-2 h-10 w-10"
              asChild
            >
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

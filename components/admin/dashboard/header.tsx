"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSidebar } from "../sidebar-provider";
import { UserNav } from "./user-nav";
import { ThemeToggle } from "../theme-toggle";

export function DashboardHeader() {
  const { isOpen, toggle, isMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        className="md:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex-1">
        <h1 className="text-fs-2xl font-bold">Portfolio Admin</h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}

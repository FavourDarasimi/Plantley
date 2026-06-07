"use client";

import { Leaf01Icon } from "hugeicons-react";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 ">
      <div className="h-full flex items-center justify-between px-4">
        <a
          href="#hero"
          className="flex items-center gap-2 rounded-full bg-[var(--bg-pill)] border border-[var(--border-pill)] px-3 py-1.5 text-[var(--text-primary)]"
        >
          <Leaf01Icon
            size={24}
            className="text-green-600 dark:text-green-500"
            strokeWidth={2}
          />
          <span className="font-medium text-sm">Plantley</span>
        </a>

        <DarkModeToggle />
      </div>
    </header>
  );
}

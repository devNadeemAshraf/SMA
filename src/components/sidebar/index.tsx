"use client";

import { useState } from "react";
import SidebarItem from "./sidebar-item";
import {
  Home,
  MessageCircle,
  UserSquare2,
  X,
  ArrowRightFromLine,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type SidebarState = "expanded" | "collapsed";

export default function Sidebar() {
  const [sidebarState, setSidebarState] = useState<SidebarState>("collapsed");

  return (
    <aside
      className={cn([
        "relative h-full flex flex-col items-center justify-start gap-2 border border-input bg-background rounded-md rounded-tr-none py-2 transition-[width]",
        sidebarState === "expanded" ? "w-[240px]" : "w-[50px]",
      ])}
    >
      {/* Close Sidebar Component */}
      <button
        onClick={() => {
          if (sidebarState === "expanded") {
            setSidebarState("collapsed");
          } else {
            setSidebarState("expanded");
          }
        }}
        className="absolute border border-input hover:bg-accent hover:text-accent-foreground top-[-1px] right-[-40px] h-10 w-10 rounded-md rounded-tl-none rounded-bl-none flex items-center justify-center transition-colors"
      >
        {sidebarState === "expanded" ? (
          <X className="w-4 h-4" />
        ) : (
          <ArrowRightFromLine className="w-4 h-4" />
        )}
      </button>
      {/* Sidebar Elements */}
      <SidebarItem
        state={sidebarState}
        selected
        icon={<Home className="w-4 h-4 left-0" />}
        title="Home"
      />
      <SidebarItem
        state={sidebarState}
        selected={false}
        icon={<MessageCircle className="w-4 h-4 left-0" />}
        title="Messages"
      />
    </aside>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

export function SectionIndicator() {
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = portfolioData.navItems.map(item => item.href.replace("#", ""));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm">
      {portfolioData.navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            activeSection === item.href.replace("#", "")
              ? "bg-primary scale-150"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
          )}
          title={item.name}
        />
      ))}
    </div>
  );
}

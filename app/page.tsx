"use client";

import * as React from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { SectionIndicator } from "@/components/SectionIndicator";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import AIAutomation from "@/sections/AIAutomation";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <SectionIndicator />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <AIAutomation />
      <Projects />
      <Contact />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AnimatedText } from "@/components/AnimatedText";
import { Smartphone, Cpu, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  Smartphone,
  Cpu,
  ShieldCheck,
  Users,
};

export default function About() {
  const { aboutHighlights } = portfolioData;

  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedText className="text-primary font-medium mb-2">About Me</AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Combining engineering precision with AI intelligence.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a dedicated developer focused on building robust mobile applications and
              cutting-edge automation workflows. My approach combines deep technical
              expertise in Swift, Flutter, and React Native with a passion for AI, ensuring that every
              product I build is not just functional, but highly efficient and user-centric.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHighlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] || Cpu;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AnimatedText } from "@/components/AnimatedText";
import { cn } from "@/lib/utils";

export default function Skills() {
  const skillsGroups = portfolioData.skills;
  const categories = Object.entries(skillsGroups);

  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText className="text-primary font-medium mb-2">Expertise</AnimatedText>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Technical Skillset
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-6 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium border transition-all hover:border-primary hover:text-primary",
                      "bg-secondary text-secondary-foreground border-border"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

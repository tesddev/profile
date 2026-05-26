"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AnimatedText } from "@/components/AnimatedText";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText className="text-primary font-medium mb-2">Career Journey</AnimatedText>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Professional Experience
          </h2>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8",
                index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"
              )}
            >
              {/* Timeline dot */}
              <div className={cn(
                "absolute left-0 top-4 w-10 h-10 rounded-full border-4 border-background bg-primary z-10 hidden md:flex items-center justify-center",
                "md:left-1/2 md:-translate-x-1/2"
              )} />
              <div className="absolute left-2 top-5 w-4 h-4 rounded-full bg-primary z-10 md:hidden" />

              <div className={cn(
                "p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm",
                index % 2 === 0 ? "md:text-right md:col-start-1" : "md:text-left md:col-start-2"
              )}>
                <span className="text-xs font-medium text-primary mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

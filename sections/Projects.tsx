"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AnimatedText } from "@/components/AnimatedText";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText className="text-primary font-medium mb-2">Work</AnimatedText>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Project
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

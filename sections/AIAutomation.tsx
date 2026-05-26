"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AnimatedText } from "@/components/AnimatedText";
import { ExternalLink, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIAutomation() {
  const { aiAutomationProjects } = portfolioData;
  const aiSiteUrl = "https://tes-profile.vercel.app/";

  return (
    <SectionWrapper id="ai-automation">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <AnimatedText className="text-primary font-medium mb-2">AI & Automation</AnimatedText>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            AI Automation Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Selected automation projects with short descriptions. For full demos and details, visit the AI automation website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiAutomationProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={aiSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
          >
            See more AI automation work
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

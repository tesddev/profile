"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AnimatedText } from "@/components/AnimatedText";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { contactLinks } = portfolioData;

  const contactCards = [
    {
      label: "Email",
      value: portfolioData.personalInfo.email,
      href: contactLinks.email,
      icon: Mail,
      color: "text-blue-500"
    },
    {
      label: "Phone",
      value: portfolioData.personalInfo.phone,
      href: contactLinks.phone,
      icon: Phone,
      color: "text-emerald-500"
    },
    {
      label: "GitHub",
      value: "github.com/tesddev",
      href: contactLinks.github,
      icon: Github,
      color: "text-slate-500"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/tesleemamuda",
      href: contactLinks.linkedin,
      icon: Linkedin,
      color: "text-blue-600"
    }
  ];

  return (
    <SectionWrapper id="contact" className="text-center">
      <div className="max-w-4xl mx-auto">
        <AnimatedText className="text-primary font-medium mb-2">Get in Touch</AnimatedText>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Let’s build something useful.
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          Whether it’s a mobile app, automation workflow, or product experience,
          I’m open to meaningful collaborations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-between hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center", card.color)}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-muted-foreground">{card.label}</p>
                    <p className="font-semibold">{card.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-24 pt-8 border-t border-border text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tesleem Amuda. All rights reserved.
        </div>
      </div>
    </SectionWrapper>
  );
}

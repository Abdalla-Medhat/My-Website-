"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "./AnimatedSection";
import {
  Code2,
  Database,
  GitBranch,
  Box,
  Cloud,
  Palette,
  Workflow,
} from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Languages & Frameworks": Code2,
  "Backend & APIs": Cloud,
  "State Management": Box,
  "Databases & Storage": Database,
  Firebase: Cloud,
  "Async & Architecture": Workflow,
  "UI & Animation": Palette,
  "Tools & Practices": GitBranch,
};

export function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary-bg/50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([category, items], catIndex) => {
            const Icon = categoryIcons[category] || Code2;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover-lift hover:border-accent-blue/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20 group-hover:bg-accent-blue/20 transition-colors">
                      <Icon className="h-4 w-4 text-accent-blue" />
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs text-text-secondary bg-white/5 rounded-full border border-white/5 hover:border-accent-blue/20 hover:text-accent-blue transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

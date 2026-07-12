"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "./AnimatedSection";

export function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary-bg/50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10 md:pl-12"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent" />

              <div className="absolute left-[-4.5px] top-1">
                <div className="w-[10px] h-[10px] rounded-full bg-accent-blue border-2 border-primary-bg glow-blue" />
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 hover-lift mb-8">
                <div className="flex items-center gap-3 mb-1">
                  <Briefcase className="h-4 w-4 text-accent-blue" />
                  <span className="text-xs text-accent-cyan font-medium uppercase tracking-wider">
                    {exp.company}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                  {exp.role}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

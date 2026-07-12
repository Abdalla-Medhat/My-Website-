"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "./AnimatedSection";

export function Education() {
  const { education } = portfolio;

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Education"
          subtitle="My academic background"
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 hover-lift text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20 shrink-0">
                    <GraduationCap className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-cyan text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-text-secondary text-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

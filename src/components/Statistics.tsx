"use client";

import { motion } from "framer-motion";
import { Code2, Award, FolderGit2, Globe } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const stats = [
  {
    icon: FolderGit2,
    value: portfolio.projects.length,
    label: "Projects",
  },
  {
    icon: Award,
    value: portfolio.certifications.length,
    label: "Certifications",
  },
  {
    icon: Code2,
    value: Object.values(portfolio.skills).flat().length,
    label: "Skills",
  },
  {
    icon: Globe,
    value: portfolio.languages.length,
    label: "Languages",
  },
];

export function Statistics() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-secondary-bg/50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2.5 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                  <stat.icon className="h-5 w-5 text-accent-blue" />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-text-secondary uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

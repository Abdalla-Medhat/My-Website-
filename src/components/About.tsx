"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Briefcase, GraduationCap, Languages } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./AnimatedSection";

export function About() {
  const { personal, languages, education } = portfolio;

  const infoItems = [
    { icon: MapPin, label: "Location", value: personal.location },
    { icon: Phone, label: "Phone", value: personal.phone },
    { icon: Briefcase, label: "Work Preference", value: personal.workPreference },
    { icon: GraduationCap, label: "Education", value: education[0].degree },
    {
      icon: Languages,
      label: "Languages",
      value: languages.map((l) => `${l.name} (${l.level})`).join(" | "),
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="About Me" subtitle="Get to know me a little better" />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <GlassCard glow="blue">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                Who I Am
              </h3>
              <p className="text-text-secondary leading-relaxed text-base">
                {personal.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full text-sm font-medium transition-all duration-200"
                >
                  Let&apos;s Work Together
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent-blue/50 text-text-primary rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/5"
                >
                  View LinkedIn
                </a>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20 shrink-0">
                      <item.icon className="h-4 w-4 text-accent-blue" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-secondary uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-text-primary break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

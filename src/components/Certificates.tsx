"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "./AnimatedSection";
import { GlassCard } from "./GlassCard";

export function Certificates() {
  const { certifications } = portfolio;

  return (
    <section id="certificates" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and achievements"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard glow="blue" className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                    <Award className="h-4 w-4 text-accent-blue" />
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary uppercase tracking-wider">
                      {cert.issuer.split(" ")[0]}
                    </span>
                    {cert.year && (
                      <div className="flex items-center gap-1 text-xs text-accent-cyan mt-0.5">
                        <Calendar className="h-3 w-3" />
                        <span>{cert.year}</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-semibold text-text-primary mb-3 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {cert.description}
                </p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xs text-text-secondary">{cert.issuer}</span>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent-blue hover:text-accent-cyan text-sm font-medium transition-colors mt-4"
                >
                  View Certificate
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

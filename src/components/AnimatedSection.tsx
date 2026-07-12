"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-accent-blue/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
        <span className="h-px w-12 bg-accent-cyan/50" />
      </div>
    </div>
  );
}

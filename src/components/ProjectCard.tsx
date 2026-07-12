"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  status: string | null;
  index: number;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  status,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-surface p-6 md:p-8 transition-all duration-300 hover-lift
          ${featured ? "md:col-span-2" : ""}`}
      >
        {featured && (
          <div className="absolute top-0 right-0">
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-accent-blue/10 blur-xl" />
              <span className="relative inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-bl-2xl rounded-tr-2xl border border-accent-cyan/20">
                Featured
              </span>
            </div>
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className="h-10 w-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 border border-accent-blue/20">
            <svg
              className="h-5 w-5 text-accent-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <div className="flex gap-2">
              <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
              aria-label={`View ${title} on GitHub`}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200"
              aria-label={`Open ${title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
            {title}
          </h3>
          {status && (
            <span className="inline-block px-2.5 py-0.5 text-xs font-medium text-warning bg-warning/10 rounded-full border border-warning/20 mb-3">
              {status}
            </span>
          )}
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-accent-blue bg-accent-blue/8 rounded-full border border-accent-blue/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

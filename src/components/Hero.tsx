"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { personal } = portfolio;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-accent-blue/10 blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-cyan/8 blur-[120px] animate-blob-delay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[150px] animate-blob-slow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="shrink-0"
          >
            <div className="image-frame-glow p-1">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/10 glass">
                <Image
                  src="/images/profile.png"
                  alt={personal.name}
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-accent-cyan font-medium text-sm md:text-base mb-3 tracking-wider uppercase">
                {personal.title}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {personal.name.split(" ")[0]}{" "}
                <span className="text-gradient">{personal.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
                {personal.summary}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent-blue/25"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent-blue/50 text-text-primary rounded-full font-medium transition-all duration-200 hover:bg-white/5"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:border-accent-blue/50 text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:border-accent-cyan/50 text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-full border border-border hover:border-accent-blue/50 text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-text-secondary hover:text-text-primary transition-colors group"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

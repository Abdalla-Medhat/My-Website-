"use client";

import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./AnimatedSection";

export function Projects() {
  const { projects } = portfolio;
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Projects that showcase my skills and experience"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              featured
            />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-center mb-8 text-text-secondary">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {other.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

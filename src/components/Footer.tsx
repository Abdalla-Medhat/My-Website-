import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const { personal } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="text-gradient">AM</span>
              <span className="text-text-secondary">.</span>
            </a>
            <p className="text-sm text-text-secondary mt-1">
              &copy; {year} {personal.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <div className="w-px h-6 bg-border mx-1" />
            <a
              href="#"
              className="p-2 rounded-lg text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

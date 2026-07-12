"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "./AnimatedSection";
import { GlassCard } from "./GlassCard";

export function Contact() {
  const { personal } = portfolio;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const mailto = `mailto:${personal.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary-bg/50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project in mind? Let's build something great together"
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <GlassCard>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20 group-hover:bg-accent-blue/20 transition-colors">
                        <item.icon className="h-4 w-4 text-accent-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                        <item.icon className="h-4 w-4 text-accent-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-text-primary">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <GlassCard>
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                  Social Links
                </p>
                <div className="flex gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-border hover:border-accent-blue/50 text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-border hover:border-accent-cyan/50 text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-2.5 rounded-lg border border-border hover:border-accent-blue/50 text-text-secondary hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard glow="blue">
              <h3 className="text-lg font-semibold text-text-primary mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-primary-bg border border-border text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-primary-bg border border-border text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-primary-bg border border-border text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-colors text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent-blue/25 disabled:opacity-70 text-sm"
                >
                  {submitted ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

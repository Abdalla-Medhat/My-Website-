"use client";

import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "cyan" | "none";
}

export function GlassCard({
  children,
  className = "",
  glow = "none",
}: GlassCardProps) {
  const glowClass =
    glow === "blue"
      ? "glow-blue"
      : glow === "cyan"
        ? "glow-cyan"
        : "";

  return (
    <div
      className={`glass rounded-2xl p-6 md:p-8 hover-lift ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}

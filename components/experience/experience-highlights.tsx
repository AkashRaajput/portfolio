"use client";

import type { ExperienceHighlight } from "@/types";
import { StaggerContainer, staggerItem } from "@/components/motion/stagger-container";
import { motion } from "framer-motion";

export function ExperienceHighlights({ items }: { items: ExperienceHighlight[] }) {
  return (
    <StaggerContainer className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-4">
      {items.map((item) => (
        <motion.div
          key={item.label}
          variants={staggerItem}
          className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/50 p-4 backdrop-blur-sm transition-colors hover:border-primary/35 hover:bg-card/80"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <item.icon className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xl font-semibold tracking-tight text-foreground">{item.value}</p>
              <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{item.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </StaggerContainer>
  );
}

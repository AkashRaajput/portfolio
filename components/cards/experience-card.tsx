"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import type { Experience } from "@/types";
import { Badge } from "@/components/ui/badge";
import { staggerItem } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";

export function ExperienceCard({
  experience,
  index,
  isLast = false,
}: {
  experience: Experience;
  index: number;
  isLast?: boolean;
}) {
  const Icon = experience.employmentType === "Internship" ? GraduationCap : Briefcase;
  const alignRight = index % 2 === 1;

  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        "relative grid gap-8 lg:grid-cols-2 lg:gap-12",
        alignRight ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : "",
      )}
    >
      {/* Date column */}
      <div
        className={cn(
          "flex flex-col justify-center lg:px-4",
          alignRight ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right",
        )}
      >
        <time className="font-mono text-sm font-medium tracking-wide text-primary">{experience.period}</time>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground lg:justify-end">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          {experience.location}
        </p>
        <Badge
          className={cn(
            "mt-3 w-fit border-border bg-white/5",
            experience.isCurrent && "border-primary/30 bg-primary/10 text-primary",
          )}
        >
          {experience.employmentType}
          {experience.isCurrent ? " · Current" : ""}
        </Badge>
      </div>

      {/* Card column */}
      <div className={cn("relative", !isLast && "pb-4 lg:pb-16")}>
        {/* Timeline node — desktop center rail */}
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 22, delay: index * 0.1 }}
          className={cn(
            "absolute left-4 top-10 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-background shadow-lg lg:left-1/2 lg:size-11",
            experience.isCurrent
              ? "border-primary text-primary shadow-primary/25"
              : "border-border text-muted-foreground",
          )}
          aria-hidden="true"
        >
          <Icon className="size-4" />
        </motion.span>

        <div
          className={cn(
            "relative ml-10 overflow-hidden rounded-2xl border backdrop-blur-sm sm:ml-12 lg:ml-0",
            experience.isCurrent
              ? "border-primary/30 bg-card/80 shadow-xl shadow-primary/10"
              : "border-border/80 bg-card/60",
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-32 bg-gradient-to-br", experience.accent)} aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-primary/40" aria-hidden="true" />

          <div className="relative p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex size-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold",
                    experience.isCurrent
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "border border-border bg-background/60 text-foreground",
                  )}
                >
                  {experience.initials}
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                    {experience.company}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{experience.role}</h3>
                </div>
              </div>
              {experience.isCurrent ? (
                <Badge className="border-primary/30 bg-primary/15 text-primary">Now</Badge>
              ) : null}
            </div>

            <p className="mt-5 text-base leading-8 text-muted-foreground">{experience.summary}</p>

            {experience.highlights.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/40 px-3 py-2"
                  >
                    <highlight.icon className="size-3.5 text-primary" aria-hidden="true" />
                    <span className="text-xs font-medium text-foreground">{highlight.value}</span>
                    <span className="text-xs text-muted-foreground">{highlight.label}</span>
                  </div>
                ))}
              </div>
            ) : null}

            <ul className="mt-6 grid gap-3 border-t border-border/80 pt-6">
              {experience.impact.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

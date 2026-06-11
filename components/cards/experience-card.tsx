"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import type { Experience } from "@/types";
import { Badge } from "@/components/ui/badge";
import { staggerItem } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";

function ExperienceMeta({
  experience,
  className,
}: {
  experience: Experience;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      <time className="font-mono text-sm font-medium tracking-wide text-primary">{experience.period}</time>
      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
        {experience.location}
      </p>
      <Badge
        className={cn(
          "border-border bg-white/5",
          experience.isCurrent && "border-primary/30 bg-primary/10 text-primary",
        )}
      >
        {experience.employmentType}
        {experience.isCurrent ? " · Current" : ""}
      </Badge>
    </div>
  );
}

function ExperienceCardBody({ experience }: { experience: Experience }) {
  const Icon = experience.employmentType === "Internship" ? GraduationCap : Briefcase;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-sm",
        experience.isCurrent
          ? "border-primary/30 bg-card/80 shadow-xl shadow-primary/10"
          : "border-border/80 bg-card/60",
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-32 bg-gradient-to-br", experience.accent)} aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-primary/40" aria-hidden="true" />

      <div className="relative p-5 sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
            <div
              className={cn(
                "flex size-12 shrink-0 items-center justify-center rounded-xl text-base font-bold sm:size-14 sm:text-lg",
                experience.isCurrent
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border border-border bg-background/60 text-foreground",
              )}
            >
              {experience.initials}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary sm:text-sm sm:tracking-[0.16em]">
                {experience.company}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight sm:text-xl lg:text-2xl">
                {experience.role}
              </h3>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {experience.isCurrent ? (
              <Badge className="border-primary/30 bg-primary/15 text-primary">Now</Badge>
            ) : null}
            <span
              className={cn(
                "flex size-9 items-center justify-center rounded-full border bg-background lg:hidden",
                experience.isCurrent ? "border-primary/40 text-primary" : "border-border text-muted-foreground",
              )}
              aria-hidden="true"
            >
              <Icon className="size-4" />
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">
          {experience.summary}
        </p>

        {experience.highlights.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {experience.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="inline-flex max-w-full items-center gap-2 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1.5 sm:px-3 sm:py-2"
              >
                <highlight.icon className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-xs font-medium text-foreground">{highlight.value}</span>
                <span className="hidden text-xs text-muted-foreground sm:inline">{highlight.label}</span>
              </div>
            ))}
          </div>
        ) : null}

        <ul className="mt-5 grid gap-2.5 border-t border-border/80 pt-5 sm:mt-6 sm:gap-3 sm:pt-6">
          {experience.impact.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground sm:leading-7">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
    <motion.article variants={staggerItem} className="relative">
      {/* Mobile & tablet: stacked cards — no overlapping timeline rail */}
      <div className={cn("lg:hidden", !isLast && "pb-8")}>
        <ExperienceMeta experience={experience} className="mb-4" />
        <div className="relative">
          <ExperienceCardBody experience={experience} />
        </div>
      </div>

      {/* Desktop: alternating timeline */}
      <div
        className={cn(
          "relative hidden gap-12 lg:grid lg:grid-cols-2",
          alignRight ? "[&>div:first-child]:order-2 [&>div:last-child]:order-1" : "",
          !isLast && "lg:pb-16",
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center px-4",
            alignRight ? "items-start text-left" : "items-end text-right",
          )}
        >
          <time className="font-mono text-sm font-medium tracking-wide text-primary">{experience.period}</time>
          <p
            className={cn(
              "mt-2 flex items-center gap-1.5 text-sm text-muted-foreground",
              !alignRight && "justify-end",
            )}
          >
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

        <div className="relative">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 22, delay: index * 0.1 }}
            className={cn(
              "absolute top-14 z-10 flex size-11 items-center justify-center rounded-full border-2 bg-background shadow-lg",
              alignRight ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2",
              experience.isCurrent
                ? "border-primary text-primary shadow-primary/25"
                : "border-border text-muted-foreground",
            )}
            aria-hidden="true"
          >
            <Icon className="size-4" />
          </motion.span>

          <ExperienceCardBody experience={experience} />
        </div>
      </div>
    </motion.article>
  );
}

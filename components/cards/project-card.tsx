"use client";

import type { ElementType } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  FlaskConical,
  Lightbulb,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { staggerItem } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";

function ProjectDetailBlock({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon: ElementType;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center gap-2">
        <Icon className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
      </div>
      <div className="text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.category === "Personal Project" ? FlaskConical : BriefcaseBusiness;
  const isProfessional = project.category === "Professional Project";

  return (
    <motion.article variants={staggerItem} layout className="h-full">
      <div
        className={cn(
          "group relative h-full min-h-[26rem] overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm",
          "transition-all duration-500 hover:border-primary/45 hover:shadow-2xl hover:shadow-primary/10",
          "lg:min-h-[28rem]",
        )}
      >
        <div
          className={cn("pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-br", project.accent)}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/40" aria-hidden="true" />

        {/* Desktop front face */}
        <div className="relative hidden h-full flex-col p-6 lg:flex lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:scale-[0.97] lg:group-hover:opacity-0">
          <div className="flex items-start justify-between gap-3">
            <Badge className="border-primary/25 bg-background/70 text-primary backdrop-blur-sm">
              {isProfessional ? "Professional" : "Personal"}
            </Badge>
            {project.featured ? (
              <Badge className="border-amber-400/30 bg-amber-400/10 text-amber-200">Featured</Badge>
            ) : null}
          </div>

          <div className="mt-6 flex size-14 items-center justify-center rounded-xl border border-border/80 bg-background/50 backdrop-blur-sm">
            <Icon className="size-6 text-primary" />
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight">{project.title}</h3>
          {project.headline ? (
            <p className="mt-2 text-sm font-medium text-primary/90">{project.headline}</p>
          ) : null}
          {project.period ? (
            <p className="mt-2 font-mono text-xs text-muted-foreground">{project.period}</p>
          ) : null}
          <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-muted-foreground">{project.overview}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} className="border-border/60 bg-background/40 font-mono text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-5">
            <span className="font-mono text-xs text-primary">{project.metric}</span>
            <span className="text-xs text-muted-foreground">View details</span>
          </div>
        </div>

        {/* Mobile / touch layout */}
        <div className="relative flex h-full flex-col p-6 lg:hidden">
          <div className="flex items-start justify-between gap-3">
            <Badge className="border-primary/25 bg-background/70 text-primary">
              {isProfessional ? "Professional" : "Personal"}
            </Badge>
            <div className="flex size-10 items-center justify-center rounded-lg border border-border/80 bg-background/50">
              <Icon className="size-4 text-primary" />
            </div>
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{project.overview}</p>

          <div className="mt-5 space-y-4">
            <ProjectDetailBlock icon={Target} label="Problem">
              <p className="line-clamp-2">{project.problem}</p>
            </ProjectDetailBlock>
            <ProjectDetailBlock icon={Wrench} label="Solution">
              <p className="line-clamp-2">{project.solution}</p>
            </ProjectDetailBlock>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} className="font-mono text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-border/80 pt-5">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary"
              >
                View live site
                <ArrowUpRight className="size-4" />
              </Link>
            ) : null}
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary"
            >
              View project
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Desktop hover detail panel */}
        <div
          className={cn(
            "absolute inset-0 z-10 flex flex-col bg-background/95 p-5 opacity-0 backdrop-blur-md",
            "transition-all duration-500 ease-out",
            "lg:group-hover:opacity-100 lg:group-hover:backdrop-blur-xl",
            "pointer-events-none lg:group-hover:pointer-events-auto",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <Link
              href={`/projects/${project.slug}`}
              className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-primary text-primary-foreground transition-transform hover:scale-105"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-4 flex-1 space-y-3.5 overflow-y-auto pr-1">
            <ProjectDetailBlock icon={Target} label="Problem">
              <p>{project.problem}</p>
            </ProjectDetailBlock>

            <ProjectDetailBlock icon={Lightbulb} label="Solution">
              <p>{project.solution}</p>
            </ProjectDetailBlock>

            <ProjectDetailBlock icon={Wrench} label="Technologies">
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="border-border/60 bg-white/5 font-mono text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </ProjectDetailBlock>

            <ProjectDetailBlock icon={CheckCircle2} label="My contributions">
              <ul className="space-y-1.5">
                {project.keyContributions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ProjectDetailBlock>

            <ProjectDetailBlock icon={Sparkles} label="Results">
              <ul className="space-y-1.5">
                {project.results.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ProjectDetailBlock>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                View live site
                <ArrowUpRight className="size-4" />
              </Link>
            ) : null}
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              View project
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

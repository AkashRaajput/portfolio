"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/cards";
import { ProjectFilter, type ProjectFilterValue } from "@/components/projects/project-filter";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { personalProjects, professionalProjects, projects } from "@/data/projects";

function sortProjects(list: typeof projects) {
  return [...list].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

export function ProjectsSection({ standalone = false }: { standalone?: boolean }) {
  const [filter, setFilter] = useState<ProjectFilterValue>("all");

  const counts = useMemo(
    () => ({
      all: projects.length,
      "Professional Project": professionalProjects.length,
      "Personal Project": personalProjects.length,
    }),
    [],
  );

  const filteredProjects = useMemo(() => {
    if (filter === "all") return sortProjects(projects);
    return sortProjects(projects.filter((project) => project.category === filter));
  }, [filter]);

  return (
    <section
      id="projects"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected projects"
            description="Client work and personal builds across HubSpot CMS, integrations, and Python."
            as={standalone ? "h1" : "h2"}
          />
          {!standalone ? (
            <Button asChild variant="outline" className="w-fit shrink-0">
              <Link href="/projects">
                Full project index
                <ArrowRight />
              </Link>
            </Button>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <ProjectFilter value={filter} onChange={setFilter} counts={counts} />
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium text-foreground">{filteredProjects.length}</span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-10 lg:mt-12"
          >
            <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">No projects in this category.</p>
        ) : null}
      </Container>
    </section>
  );
}

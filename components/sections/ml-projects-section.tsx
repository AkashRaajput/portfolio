"use client";

import { ProjectCard } from "@/components/cards";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { mlProjects } from "@/data/ml-projects";

export function MLProjectsSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="ml-projects"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <SectionHeading
          eyebrow="Machine Learning & AI"
          title="Machine Learning & AI projects"
          description="Applied machine learning builds focused on classification, feature engineering, model evaluation, and Flask-based deployment prototypes."
          as={standalone ? "h1" : "h2"}
        />

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 lg:mt-16">
          {mlProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

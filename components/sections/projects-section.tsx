"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/cards";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { projects as hubspotProjects } from "@/data/projects";

function sortProjects(list: typeof hubspotProjects) {
  return [...list].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

export function ProjectsSection({ standalone = false }: { standalone?: boolean }) {
  const sortedProjects = sortProjects(hubspotProjects);

  return (
    <section
      id="hubspot-projects"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="HubSpot"
            title="HubSpot projects"
            description="Enterprise HubSpot CMS, HubDB, membership portals, CRM integrations, and workflow automation for North American clients."
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

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 lg:mt-16">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

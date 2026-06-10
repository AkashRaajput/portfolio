import { ProjectCard } from "@/components/cards";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { personalProjects, professionalProjects } from "@/data/projects";

export function ProjectsSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="projects" className={standalone ? "py-20 sm:py-24" : "py-16 sm:py-20"}>
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected development work."
          description="A practical look at personal AI projects and professional CMS work, focused on what was built, the technical approach, and the business outcome."
        />

        <div className="mt-12 grid gap-12">
          <div>
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Personal Projects</p>
                <h3 className="mt-2 text-2xl font-semibold">Applied Python and machine learning</h3>
              </div>
              <p className="hidden text-sm text-muted-foreground sm:block">{personalProjects.length} case studies</p>
            </div>
            <StaggerContainer className="grid gap-5 md:grid-cols-2">
              {personalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </StaggerContainer>
          </div>

          <div>
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Professional Projects</p>
                <h3 className="mt-2 text-2xl font-semibold">HubSpot CMS and website delivery</h3>
              </div>
              <p className="hidden text-sm text-muted-foreground sm:block">{professionalProjects.length} case studies</p>
            </div>
            <StaggerContainer className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {professionalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}

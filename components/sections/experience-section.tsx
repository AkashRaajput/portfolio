import { ExperienceCard } from "@/components/cards/experience-card";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences } from "@/data/experience";

export function ExperienceSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="experience" className={standalone ? "py-20 sm:py-24" : "py-16 sm:py-20"}>
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Two years of professional CMS, integration, and Python work."
          description="Experience across HubSpot CMS delivery, HubDB and HubL development, WordPress, Next.js, API integrations, membership systems, CRM integrations, and applied AI learning."
        />
        <StaggerContainer className="mt-10 grid gap-5">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

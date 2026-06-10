import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

const focusAreas = [
  {
    title: "HubSpot CMS delivery",
    detail: "Templates, modules, HubDB, and editor-ready systems for marketing teams.",
  },
  {
    title: "Integrations & CRM",
    detail: "Forms, APIs, membership flows, and workflow-connected web properties.",
  },
  {
    title: "Python & applied AI",
    detail: "Flask services, automation, and ML prototypes that extend delivery capability.",
  },
];

export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="about"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="CMS engineering with business context."
              description={profile.bio}
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="overflow-hidden">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <p className="text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                  I work where marketing websites meet engineering: scalable HubSpot builds, reliable
                  integrations, and Python tooling that helps teams ship faster without sacrificing maintainability.
                </p>
                <div className="mt-10 grid gap-4">
                  {focusAreas.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border/80 bg-white/[0.02] p-5 transition-colors hover:border-primary/25"
                    >
                      <p className="font-semibold tracking-tight">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

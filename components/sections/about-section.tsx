import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="about" className={standalone ? "py-20 sm:py-24" : "py-16 sm:py-20"}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="A CMS developer who connects polished websites with real business workflows."
              description={profile.bio}
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <p className="text-lg leading-8 text-muted-foreground">
                  I work across HubSpot CMS, HubDB, HubL, WordPress, Next.js, Python, and integrations, with a
                  focus on building websites that are easy to manage, reliable in production, and connected to
                  the systems teams depend on.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {["HubSpot CMS", "API workflows", "AI curiosity"].map((item) => (
                    <div key={item} className="rounded-lg border border-border bg-white/5 p-4">
                      <Badge className="mb-3 bg-primary/10 text-primary">Focus</Badge>
                      <p className="font-medium">{item}</p>
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

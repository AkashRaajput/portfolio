import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink, Layers3, Target, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: `${project.title} — ${project.overview}`,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.overview,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    {
      title: "Problem",
      icon: Target,
      content: project.problem,
    },
    {
      title: "Solution",
      icon: Wrench,
      content: project.solution,
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft />
            Back to projects
          </Link>
        </Button>

        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10">
          <div className={`absolute inset-x-0 top-0 h-56 bg-gradient-to-br ${project.accent}`} />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.34fr] lg:items-end">
            <div>
              <Badge className="border-primary/25 bg-primary/10 text-primary">{project.category}</Badge>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{project.overview}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.period ? (
                  <Badge className="bg-background/40 font-mono text-xs">{project.period}</Badge>
                ) : null}
                {project.liveUrl ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink />
                      View live site
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
            <Card className="bg-background/35">
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">Project focus</p>
                <p className="mt-2 text-2xl font-semibold text-primary">{project.metric}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardContent className="p-6 sm:p-8">
                <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <section.icon className="size-5" />
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="mt-4 leading-8 text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers3 className="size-5" />
              </div>
              <h2 className="text-2xl font-semibold">Technologies</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology} className="bg-white/5">
                    {technology}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Key Contributions</h2>
              <div className="mt-6 grid gap-4">
                {project.keyContributions.map((contribution) => (
                  <div key={contribution} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                    <p className="leading-7 text-muted-foreground">{contribution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-5">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Results</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.results.map((result) => (
                <div key={result} className="rounded-lg border border-border bg-white/5 p-5">
                  <p className="leading-7 text-muted-foreground">{result}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

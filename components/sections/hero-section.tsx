"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export function HeroSection() {
  return (
    <section className="relative overflow-hidden section-padding">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-24 top-0 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-16 top-24 size-[22rem] rounded-full bg-sky-500/8 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <motion.div {...fadeUp(0)}>
              <Badge className="border-primary/30 bg-primary/10 px-3 py-1 text-primary">
                <span className="mr-2 inline-block size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {profile.availability}
              </Badge>
            </motion.div>

            <motion.p {...fadeUp(0.06)} className="eyebrow mt-8">
              {profile.title} · {profile.company}
            </motion.p>

            <motion.h1 {...fadeUp(0.12)} className="display-xl mt-5">
              {profile.headline}
            </motion.h1>

            <motion.p {...fadeUp(0.18)} className="lead mt-6 max-w-2xl">
              I&apos;m <span className="font-medium text-foreground">{profile.name}</span> — {profile.tagline}
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-2">
              {profile.highlights.map((item) => (
                <Badge
                  key={item}
                  className="border-border/80 bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {item}
                </Badge>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/projects">
                  View selected work
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6">
                <Link href={siteConfig.resume.href} download={siteConfig.resume.filename}>
                  <Download />
                  Download resume
                </Link>
              </Button>
            </motion.div>

            <motion.div {...fadeUp(0.36)} className="mt-8 flex gap-2">
              {profile.socials.map((item) => (
                <Button key={item.label} asChild variant="ghost" size="icon" className="size-11">
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                  >
                    <item.icon />
                  </Link>
                </Button>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="glass relative overflow-hidden rounded-2xl p-1"
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="relative rounded-[calc(1rem-4px)] border border-border/60 bg-background/50 p-6 sm:p-8">
              <div className="flex items-start gap-4 border-b border-border pb-6">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-xl font-bold text-primary-foreground shadow-lg shadow-primary/20">
                  AK
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-semibold tracking-tight">{profile.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
                  <p className="mt-1 text-sm font-medium text-primary">{profile.company}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 py-6">
                {profile.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-border bg-white/[0.03] px-3 py-4 text-center"
                  >
                    <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-3">
                {profile.quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 rounded-xl border border-border/80 bg-white/[0.02] p-4"
                  >
                    <fact.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-muted-foreground">{fact.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="section-divider mt-20 pt-14"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Featured work</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Recent client and product delivery
              </h2>
            </div>
            <Button asChild variant="ghost" className="w-fit text-primary">
              <Link href="/projects">
                All projects
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.55 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <Badge className="border-primary/20 bg-primary/5 text-[10px] uppercase tracking-wider text-primary">
                      {project.category === "Professional Project" ? "Client" : "Personal"}
                    </Badge>
                    <span className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                    {project.headline ?? project.overview}
                  </p>
                  <p className="mt-4 font-mono text-xs text-primary">{project.metric}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

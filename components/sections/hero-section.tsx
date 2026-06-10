"use client";

import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge className="border-primary/25 bg-primary/10 text-primary">{profile.availability}</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {profile.name} builds HubSpot CMS websites and Python solutions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{profile.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">
                  View projects
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume" download>
                  <Download />
                  Resume
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { icon: Github, href: profile.socials[0].href, label: "GitHub" },
                { icon: Linkedin, href: profile.socials[1].href, label: "LinkedIn" },
                { icon: Mail, href: profile.socials[2].href, label: "Email" },
              ].map((item) => (
                <Button key={item.label} asChild variant="ghost" size="icon">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="glass relative overflow-hidden rounded-2xl p-5"
          >
            <div className="rounded-xl border border-border bg-background/40 p-5">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                  AK
                </div>
                <div>
                  <p className="font-semibold">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">{profile.role}</p>
                </div>
              </div>
              <div className="grid gap-3 py-5">
                {profile.quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-3 rounded-lg border border-border bg-white/5 p-3">
                    <fact.icon className="size-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{fact.label}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

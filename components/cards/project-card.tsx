"use client";

import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerItem } from "@/components/motion/stagger-container";

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.category === "Personal Project" ? FlaskConical : BriefcaseBusiness;

  return (
    <motion.article variants={staggerItem} className="h-full">
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <Card className="relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10">
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
          <CardHeader className="relative">
            <div className="mb-8 flex items-center justify-between gap-4">
              <Badge className="border-primary/20 bg-primary/5 text-primary">{project.category}</Badge>
              <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-background/30 text-muted-foreground transition-all duration-300 group-hover:border-primary/45 group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
              <Icon className="size-5" />
            </div>
            <CardTitle className="text-2xl leading-tight">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <p className="leading-7 text-muted-foreground">{project.overview}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((item) => (
                <Badge key={item} className="bg-secondary">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
              <p className="text-sm font-medium text-foreground">{project.metric}</p>
              <p className="text-sm text-primary">View case study</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.article>
  );
}

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="transition-colors hover:text-foreground">
              {route.label}
            </Link>
          ))}
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
            GitHub
          </Link>
          <Link
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}

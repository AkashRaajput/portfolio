"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu } from "lucide-react";
import { useState } from "react";

import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            AK
          </span>
          <span className="hidden font-semibold tracking-tight sm:block">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                pathname === route.href && "bg-secondary text-foreground",
              )}
              aria-current={pathname === route.href ? "page" : undefined}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href={siteConfig.resume.href} download={siteConfig.resume.filename}>
              <Download />
              Resume
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Hire me</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-border px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  pathname === route.href && "bg-secondary text-foreground",
                )}
                aria-current={pathname === route.href ? "page" : undefined}
              >
                {route.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resume.href}
              download={siteConfig.resume.filename}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Download className="size-4" />
              Resume
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

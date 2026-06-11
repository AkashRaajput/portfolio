import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-6xl">Page not found</h1>
      <p className="mt-5 text-muted-foreground">The page you requested does not exist.</p>
      <Button asChild className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </section>
  );
}

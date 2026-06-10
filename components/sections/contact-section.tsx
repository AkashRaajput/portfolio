"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      toast.success("Message sent. I will get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please email me directly instead.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className={standalone ? "py-20 sm:py-24" : "py-16 sm:py-20"}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact"
              title="Have a role, product, or collaboration in mind?"
              description="Send a short note and I will reply with availability, context, and next steps."
            />
            <div className="mt-8 grid gap-4">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                {siteConfig.email}
              </Link>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                {siteConfig.location}
              </p>
              <div className="flex gap-3 pt-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={siteConfig.socials.github} target="_blank" rel="noreferrer">
                    <Github />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="contact-name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="contact-name" name="name" placeholder="Akash Kumar" autoComplete="name" required />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="contact-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="hidden">
                    <label htmlFor="company">Company</label>
                    <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="contact-subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="contact-subject" name="subject" placeholder="Project inquiry" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="contact-message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder={`Hi ${profile.name.split(" ")[0]}, I would like to talk about...`}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-fit" disabled={isSubmitting}>
                    <Send />
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

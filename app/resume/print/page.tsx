import type { Metadata } from "next";

import { ResumeDocument } from "@/components/resume/resume-document";

export const metadata: Metadata = {
  title: "Resume",
  robots: { index: false, follow: false },
};

export default function ResumePrintPage() {
  return (
    <main className="min-h-screen bg-white print:min-h-0">
      <ResumeDocument />
    </main>
  );
}

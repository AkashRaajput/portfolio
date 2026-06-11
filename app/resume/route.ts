import { readFile } from "fs/promises";
import path from "path";

import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "resume", siteConfig.resume.filename);

  try {
    const pdf = await readFile(filePath);

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${siteConfig.resume.filename}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume file not found." }, { status: 404 });
  }
}

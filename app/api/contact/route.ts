import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  company: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid contact payload." }, { status: 400 });
  }

  if (result.data.company) {
    return NextResponse.json({ ok: true });
  }

  if (process.env.CONTACT_WEBHOOK_URL) {
    await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: result.data.name,
        email: result.data.email,
        subject: result.data.subject,
        message: result.data.message,
        source: "akash-kumar-portfolio",
      }),
    });
  }

  return NextResponse.json({ ok: true });
}

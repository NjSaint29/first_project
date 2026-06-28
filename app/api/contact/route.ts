import { NextResponse } from "next/server";

// Basic email shape check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  // The enquiry is validated and accepted here. To deliver it somewhere real,
  // wire this up to an email provider (Resend, Postmark, SendGrid…) or a
  // database using an environment variable for the API key. For now we log it
  // server-side so nothing is lost during development.
  console.log("New enquiry:", { name, email, message });

  return NextResponse.json({ ok: true });
}

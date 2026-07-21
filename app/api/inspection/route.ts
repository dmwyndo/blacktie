import { site } from "@/lib/site";
import { NextResponse } from "next/server";

type InspectionPayload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  city?: string;
  message?: string;
  company?: string;
};

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: InspectionPayload;

  try {
    payload = (await request.json()) as InspectionPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (clean(payload.company, 120)) {
    return NextResponse.json({ ok: true });
  }

  const firstName = clean(payload.firstName, 80);
  const lastName = clean(payload.lastName, 80);
  const phone = clean(payload.phone, 40);
  const email = clean(payload.email, 120);
  const city = clean(payload.city, 120);
  const message = clean(payload.message, 2000);

  if (!firstName || !lastName || !phone || !email) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.inspectionFormTo)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Inspection request from ${firstName} ${lastName}`,
        _template: "basic",
        _captcha: "false",
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        phone,
        email,
        city: city || "Not provided",
        message: message || "Not provided",
      }),
    },
  );

  if (!response.ok) {
    console.error("FormSubmit error:", await response.text());
    return NextResponse.json(
      { error: "Unable to send your request right now. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

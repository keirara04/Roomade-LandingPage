import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const { email } = await request.json();

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
  );

  const { error } = await supabase
    .from("waitlist_signups")
    .insert({ email: email.toLowerCase().trim() });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, alreadySignedUp: true });
    }
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

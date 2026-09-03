"use client";

import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-display text-xl font-bold text-navy">
        You&apos;re on the list. We&apos;ll email you.
      </p>
    );
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row">
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-[14px] bg-surface-sunken px-4 py-3 text-base text-ink outline-none placeholder:text-ink/60 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        />
        {/* Honeypot. Bots fill it, people never see it. */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute h-0 w-0 opacity-0"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-[14px] bg-navy px-6 py-3 font-display text-base font-bold text-white outline-none transition-[background-color,transform] duration-150 hover:bg-navy-lift active:scale-[0.98] disabled:opacity-60 motion-reduce:active:scale-100 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </form>
      <p role="status" aria-live="polite" className="min-h-5 text-sm text-danger">
        {status === "error" ? "Something went wrong. Try that again." : ""}
      </p>
    </div>
  );
}

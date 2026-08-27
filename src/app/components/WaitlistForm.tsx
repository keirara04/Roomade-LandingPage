"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
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
      <p className="font-[family-name:var(--font-marker)] text-2xl text-sage">
        Pinned. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-end gap-3 border-b-2 border-dashed border-ink/25 pb-1"
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 bg-transparent py-1 text-center text-sm text-ink outline-none placeholder:text-ink/40"
        />
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
          className="shrink-0 rounded-sm bg-ink px-4 py-1.5 font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-wide text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" ? "Pinning…" : "Join"}
        </button>
      </form>
      <p role="status" aria-live="polite" className="text-sm text-coral">
        {status === "error" ? "Something went wrong. Try again." : ""}
      </p>
    </div>
  );
}

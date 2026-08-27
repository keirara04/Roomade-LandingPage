import RevealOnScroll from "../RevealOnScroll";

const steps = [
  {
    n: "1",
    title: "Start a household",
    body: "One person creates it in a minute, name it, and it's ready for the rest of the flat.",
  },
  {
    n: "2",
    title: "Invite by link or QR",
    body: "Send the link or hold up the QR code. Everyone who joins sees the same board.",
  },
  {
    n: "3",
    title: "Pin the first card",
    body: "An issue, a spend, a heads-up, whatever's live right now. The activity feed keeps everyone caught up on what changed while they were out.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full max-w-4xl px-6 py-20">
      <RevealOnScroll className="text-center">
        <p className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-[0.25em] text-paper/70">
          Getting started
        </p>
        <h2 className="mx-auto mt-3 max-w-md font-[family-name:var(--font-marker)] text-3xl leading-tight text-paper sm:text-4xl">
          From empty flat to full board in three steps.
        </h2>
      </RevealOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <RevealOnScroll key={step.n} delay={`${i * 100}ms`}>
            <div className="paper-panel h-full rounded-sm p-6">
              <span className="font-[family-name:var(--font-marker)] text-4xl text-coral">
                {step.n}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-marker)] text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {step.body}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

import Panel from "../Panel";
import RevealOnScroll from "../RevealOnScroll";

// Trimmed to a consistent length. Step three used to run half again as long
// as the other two, which left the three cards visibly lopsided.
const steps = [
  {
    n: "1",
    title: "Start a house",
    body: "One person creates it and names it. Takes a minute, nothing to configure.",
  },
  {
    n: "2",
    title: "Get everyone in",
    body: "Send the invite link or hold up the QR. Everyone who joins sees the same board.",
  },
  {
    n: "3",
    title: "Post the first thing",
    body: "The tap, the shopping, Friday. From there the board tracks what changed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full max-w-6xl px-6 py-14 sm:py-20 xl:max-w-7xl">
      <RevealOnScroll className="text-center">
        <p className="text-sm font-semibold tracking-wide text-cream-text">
          Getting started
        </p>
        <h2 className="font-display mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          <span className="text-cream-text">Three steps</span> and your house
          is on it.
        </h2>
      </RevealOnScroll>

      <div className="relative mt-14">
        {/* The rule that turns three cards into a sequence. Sits behind them,
            spans only the middle third so it reads as joining the cards rather
            than underlining the row, and is hidden below sm where the cards
            stack and a horizontal line would mean nothing. */}
        <div
          aria-hidden="true"
          // 2.75rem = the card's p-6 padding (1.5rem) plus half the 2.5rem
          // dot, so the rule meets the dots on their centre line rather than
          // running under them.
          className="pointer-events-none absolute inset-x-[16%] top-[2.75rem] hidden border-t-2 border-dashed border-white/25 sm:block"
        />

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.n} delay={`${i * 90}ms`}>
              <Panel className="relative h-full overflow-hidden p-6">
                {/* The numeral doubled as decoration and as the step marker.
                    Splitting it: a solid dot anchors the connecting rule, and
                    a large ghost numeral gives the card its own weight. */}
                <span
                  aria-hidden="true"
                  className="font-display pointer-events-none absolute -right-2 -top-4 text-[6rem] font-extrabold leading-none text-navy/[0.06]"
                >
                  {step.n}
                </span>

                <span
                  aria-hidden="true"
                  className="font-display relative flex h-10 w-10 items-center justify-center rounded-full bg-navy text-lg font-bold text-white"
                >
                  {step.n}
                </span>

                <h3 className="font-display relative mt-4 text-xl font-bold">
                  {step.title}
                </h3>
                <p className="relative mt-2 leading-relaxed text-ink/75">
                  {step.body}
                </p>
              </Panel>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* The section explained how to start without offering any way to. */}
      <RevealOnScroll delay="270ms" className="mt-10 text-center">
        <a
          href="#hero-waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-display text-base font-bold text-white outline-none transition-colors duration-150 hover:bg-navy-lift focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal"
        >
          Join the waitlist
          <span aria-hidden="true">&rarr;</span>
        </a>
      </RevealOnScroll>
    </section>
  );
}

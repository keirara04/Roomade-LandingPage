import Panel from "../Panel";
import RevealOnScroll from "../RevealOnScroll";

const steps = [
  {
    n: "1",
    title: "Start a house",
    body: "One person creates it and names it. That takes about a minute and there's nothing to configure.",
  },
  {
    n: "2",
    title: "Get everyone in",
    body: "Send the invite link, or have them scan the QR. Everyone who joins sees the same board and the same chat.",
  },
  {
    n: "3",
    title: "Post the first thing",
    body: "Whatever's live right now: the tap, the shopping, Friday. From then on the board keeps track of what changed while you were out.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full max-w-6xl px-6 py-24 xl:max-w-7xl">
      <RevealOnScroll className="text-center">
        <p className="text-sm font-semibold tracking-wide text-cream-text">
          Getting started
        </p>
        <h2 className="font-display mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          <span className="text-cream-text">Three steps</span> and your house
          is on it.
        </h2>
      </RevealOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <RevealOnScroll key={step.n} delay={`${i * 90}ms`}>
            <Panel className="h-full p-6">
              <span
                aria-hidden="true"
                className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-navy text-lg font-bold text-white"
              >
                {step.n}
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/75">{step.body}</p>
            </Panel>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

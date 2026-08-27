import RevealOnScroll from "../RevealOnScroll";

const points = [
  {
    label: "iOS first",
    body: "Roomade is a native iPhone app. Android and web aren't built yet.",
  },
  {
    label: "TestFlight, then App Store",
    body: "Early access goes out over TestFlight before a public App Store launch.",
  },
  {
    label: "Tracks money, doesn't move it",
    body: "Settle Up tells you who owes what. You still pay each other however you already do.",
  },
];

export default function ScopeAndRoadmap() {
  return (
    <section className="w-full max-w-3xl px-6 py-20">
      <RevealOnScroll className="paper-panel rounded-sm p-8 sm:p-10">
        <p className="font-[family-name:var(--font-label)] text-[0.65rem] font-bold uppercase tracking-widest text-ink/50">
          Where things stand
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-marker)] text-2xl text-ink sm:text-3xl">
          What Roomade is, and isn&apos;t, right now
        </h2>
        <dl className="mt-6 flex flex-col gap-5">
          {points.map((p) => (
            <div key={p.label}>
              <dt className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-wide text-coral">
                {p.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink/75">
                {p.body}
              </dd>
            </div>
          ))}
        </dl>
      </RevealOnScroll>
    </section>
  );
}

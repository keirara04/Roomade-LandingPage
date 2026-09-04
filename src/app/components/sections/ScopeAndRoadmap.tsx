import Panel from "../Panel";
import RevealOnScroll from "../RevealOnScroll";
import ShapeScatter from "../ShapeScatter";

const points = [
  {
    label: "iPhone first, Android close behind",
    body: "Roomade is native on both. iPhone leads and gets the first invites; Android is being built alongside it. Web isn't in scope.",
  },
  {
    label: "Early access, by invite",
    body: "Invites go out to the waitlist before any public App Store launch.",
  },
  {
    label: "It tracks money, it doesn't move it",
    body: "Roomade works out the number and hands you the QR or the account details. The transfer still happens in your banking app.",
  },
  {
    label: "Built around MYR, not limited to it",
    body: "DuitNow and Malaysian bank details are first-class. Any currency works, and a house can run several at once.",
  },
];

export default function ScopeAndRoadmap() {
  return (
    <section className="ground-deep w-full px-6 py-14 sm:py-20">
      <ShapeScatter opacity={0.07} />
      <div className="mx-auto w-full max-w-5xl">
        <RevealOnScroll>
          <Panel className="p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-wide text-ink/65">
              Where things stand
            </p>
            <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">
              What Roomade is, and{" "}
              <span className="text-navy">isn&apos;t</span>, right now
            </h2>
            {/* Two columns from sm up. In one column at this width each point
                ran short lines against a lot of empty panel. */}
            <dl className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10">
              {points.map((p) => (
                <div key={p.label}>
                  <dt className="font-display text-base font-bold text-navy">
                    {p.label}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-ink/75">{p.body}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </RevealOnScroll>
      </div>
    </section>
  );
}

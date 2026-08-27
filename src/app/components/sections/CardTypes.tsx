import PinCard from "../PinCard";
import StatusPill from "../StatusPill";
import RevealOnScroll from "../RevealOnScroll";

const types = [
  {
    kind: "Issue / Need",
    pin: "bg-coral",
    tape: "bg-coral/30",
    tilt: "-2deg",
    accent: "text-coral",
    blurb:
      "Something to fix or buy. One person claims it, and it's resolved when it's done. Reopen it if it isn't, really.",
    flow: ["OPEN", "CLAIMED", "RESOLVED"],
    flowColor: "bg-coral text-paper",
  },
  {
    kind: "Spend",
    pin: "bg-sage",
    tape: "bg-sage/30",
    tilt: "2deg",
    accent: "text-sage",
    blurb:
      "A shared expense, split equally. Everyone's share is tracked paid or unpaid, individually, so no more guessing who still owes for Costco.",
    flow: ["PENDING SETTLEMENT", "SETTLED"],
    flowColor: "bg-sage text-paper",
  },
  {
    kind: "Heads-Up",
    pin: "bg-butter",
    tape: "bg-butter/40",
    tilt: "-2deg",
    accent: "text-ink",
    blurb:
      "A text announcement, like “guest staying overnight,” that kind of thing. No resolve workflow, just an acknowledgement so you know it's been seen.",
    flow: ["POSTED", "EXPIRED"],
    flowColor: "bg-ink text-paper",
  },
];

export default function CardTypes() {
  return (
    <section className="w-full max-w-4xl px-6 py-20">
      <RevealOnScroll className="text-center">
        <p className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-[0.25em] text-paper/70">
          The board
        </p>
        <h2 className="mx-auto mt-3 max-w-lg font-[family-name:var(--font-marker)] text-3xl leading-tight text-paper sm:text-4xl">
          Three kinds of card. That&apos;s the whole system.
        </h2>
      </RevealOnScroll>

      <div className="mt-14 flex flex-col gap-10">
        {types.map((type, i) => (
          <RevealOnScroll
            key={type.kind}
            tilt={type.tilt}
            delay={`${i * 100}ms`}
          >
            <PinCard
              tilt={type.tilt}
              pinColor={type.pin}
              tapeColor={type.tape}
              className="mx-auto w-full max-w-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:max-w-sm">
                  <h3
                    className={`font-[family-name:var(--font-marker)] text-2xl ${type.accent}`}
                  >
                    {type.kind}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {type.blurb}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  {type.flow.map((step, j) => (
                    <span key={step} className="flex items-center gap-2">
                      <StatusPill
                        color={
                          j === type.flow.length - 1
                            ? type.flowColor
                            : "bg-ink/10 text-ink/60"
                        }
                      >
                        {step}
                      </StatusPill>
                      {j < type.flow.length - 1 && (
                        <span className="text-ink/30">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </PinCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

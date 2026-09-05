import Panel from "../Panel";
import Chip from "../Chip";
import PhoneFrame from "../PhoneFrame";
import RevealOnScroll from "../RevealOnScroll";
import boardShot from "../../../../public/Board.png";

const types = [
  {
    kind: "Issue or need",
    dot: "bg-[#f0873f]",
    blurb:
      "Something to fix, or something to buy. Claim it, resolve it, reopen it if it isn't done. Add photos so nobody has to ask which tap.",
    flow: ["Open", "Claimed", "Resolved"],
  },
  {
    kind: "Spend",
    dot: "bg-money-in",
    blurb:
      "A shared cost. Everyone's share is tracked separately, so you can see who has settled and who hasn't without asking anyone.",
    flow: ["To settle", "Settled"],
  },
  {
    kind: "Heads-up",
    dot: "bg-[#a349c4]",
    blurb:
      "“My parents are staying this weekend.” No workflow, nothing to resolve. Just an acknowledgement so you know everyone has actually seen it.",
    flow: ["Posted", "Seen"],
  },
  {
    kind: "Reminder",
    dot: "bg-[#5b5bd6]",
    blurb:
      "A heads-up with a date on it. Invite whoever needs to be there. It gets its own section on the board and its own day in the calendar.",
    flow: ["Dated", "In the calendar"],
  },
];

export default function CardTypes() {
  return (
    <section className="w-full max-w-6xl px-6 py-14 sm:py-20 xl:max-w-7xl">
      <RevealOnScroll className="text-center">
        <p className="text-sm font-semibold tracking-wide text-cream-text">
          The board
        </p>
        <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          <span className="text-cream-text">Three</span> things to post.{" "}
          <span className="text-cream-text">Four</span> kinds of card.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          Post an issue, a spend, or a heads-up. Put a date on a heads-up and
          it becomes a reminder. Same card, its own section.
        </p>
      </RevealOnScroll>

      <div className="mt-12 sm:mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <RevealOnScroll className="flex justify-center">
          <PhoneFrame
            src={boardShot}
            alt="The board opens with a greeting, a line saying three payments are awaiting settlement, and tappable counts for heads-ups, reminders and settlements."
            className="w-[15rem] sm:w-[17rem]"
            yaw="8deg"
            pitch="2deg"
            sizes="(max-width: 640px) 62vw, 17rem"
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <Panel className="p-6 sm:p-7">
            <Chip tone="bg-navy/10 text-navy">Opens to this</Chip>
            <h3 className="font-display mt-3 text-xl font-bold">
              One line telling you if anything needs you
            </h3>
            <p className="mt-2 leading-relaxed text-ink/75">
              Not a wall of numbers. The board leads with what&apos;s yours,
              then what&apos;s waiting on a housemate, then money to
              settle or says &ldquo;all clear.&rdquo; Tap a count to
              jump to that section.
            </p>
          </Panel>
        </RevealOnScroll>
      </div>

      {/* Pulled out of the phone-adjacent column into its own full-width
          grid: four stacked panels next to a sticky phone read as one long,
          dense list. Spread across the section's full width instead, they
          read as a feature set. */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {types.map((type, i) => (
          <RevealOnScroll key={type.kind} delay={`${i * 60}ms`}>
            <Panel className="flex h-full flex-col p-6 sm:p-7">
              <h3 className="font-display flex items-center gap-2.5 text-xl font-bold">
                <span
                  aria-hidden="true"
                  className={`h-2.5 w-2.5 rounded-full ${type.dot}`}
                />
                {type.kind}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/75">
                {type.blurb}
              </p>
              {/* mt-auto rather than mt-4: with h-full flex-col on the
                  Panel, this pins the flow row to the card's bottom edge
                  regardless of blurb length, so mismatched text lengths in
                  the same grid row don't leave the chips at different
                  heights. */}
              <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
                {type.flow.map((step, j) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <Chip
                      tone={
                        j === type.flow.length - 1
                          ? "bg-navy text-white"
                          : "bg-ink/8 text-ink/70"
                      }
                    >
                      {step}
                    </Chip>
                    {j < type.flow.length - 1 && (
                      <span aria-hidden="true" className="text-ink/30">
                        ›
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </Panel>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

import WaitlistForm from "../WaitlistForm";
import PinCard from "../PinCard";
import StatusPill from "../StatusPill";

const cards = [
  {
    kind: "Issue",
    pin: "bg-coral",
    tape: "bg-coral/30",
    tilt: "-4deg",
    delay: "0ms",
    title: "Kitchen tap won't stop dripping",
    body: "Been going since Tuesday, driving Priya up the wall.",
    status: "OPEN",
    statusColor: "bg-coral text-paper",
    foot: "claimed by Priya",
  },
  {
    kind: "Spend",
    pin: "bg-sage",
    tape: "bg-sage/30",
    tilt: "3deg",
    delay: "120ms",
    title: "Costco run: $86.40",
    body: "Split four ways. Toilet paper, oat milk, the good coffee.",
    status: "3/4 PAID",
    statusColor: "bg-sage text-paper",
    foot: "you owe $21.60",
  },
  {
    kind: "Heads-Up",
    pin: "bg-butter",
    tape: "bg-butter/40",
    tilt: "-2deg",
    delay: "240ms",
    title: "Sam's parents staying this weekend",
    body: "Arriving Friday night, gone by Sunday lunch.",
    status: "SEEN · 2/3",
    statusColor: "bg-ink text-paper",
    foot: "posted by Sam",
  },
];

export default function Hero() {
  return (
    <div className="w-full max-w-5xl px-6 pt-20 pb-24 sm:pt-28">
      <p className="pin-drop text-center font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-[0.25em] text-paper/80">
        Shared-flat coordination
      </p>
      <h1
        className="pin-drop mx-auto mt-3 max-w-2xl text-center font-[family-name:var(--font-marker)] text-4xl leading-[1.05] text-paper drop-shadow-[0_2px_2px_rgba(43,36,32,0.35)] sm:text-6xl"
        style={{ animationDelay: "60ms" }}
      >
        Whatever&apos;s happening in your flat, it&apos;s on the board.
      </h1>
      <p
        className="pin-drop mx-auto mt-5 max-w-md text-center text-base text-paper/90"
        style={{ animationDelay: "100ms" }}
      >
        Roomade turns the group chat into a board: issues to fix, money to
        split, and things people need to know, pinned, not buried.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3 sm:gap-y-0">
        {cards.map((card) => (
          <div
            key={card.kind}
            className="pin-drop relative"
            style={
              { "--tilt": card.tilt, "--delay": card.delay } as React.CSSProperties
            }
          >
            <PinCard
              tilt={card.tilt}
              pinColor={card.pin}
              tapeColor={card.tape}
              className="mx-auto w-full max-w-[15rem] p-5"
            >
              <p className="font-[family-name:var(--font-label)] text-[0.65rem] font-bold uppercase tracking-widest text-ink/50">
                {card.kind}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-marker)] text-2xl leading-tight text-ink">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-snug text-ink/70">
                {card.body}
              </p>
              <div className="mt-4 flex items-center justify-between gap-2">
                <StatusPill color={card.statusColor}>{card.status}</StatusPill>
                <span className="text-[0.7rem] text-ink/50">{card.foot}</span>
              </div>
            </PinCard>
          </div>
        ))}
      </div>

      <div
        id="hero-waitlist"
        className="pin-drop relative mx-auto mt-20 w-full max-w-sm"
        style={{ "--tilt": "-1.5deg", "--delay": "320ms" } as React.CSSProperties}
      >
        <PinCard tilt="-1.5deg" className="p-6 text-center">
          <p className="font-[family-name:var(--font-marker)] text-3xl text-ink">
            Get on the board
          </p>
          <p className="mt-1 mb-5 text-sm text-ink/70">
            We&apos;ll email you when Roomade opens up.
          </p>
          <WaitlistForm />
        </PinCard>
      </div>
    </div>
  );
}

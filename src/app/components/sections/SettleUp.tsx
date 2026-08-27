import PinCard from "../PinCard";
import RevealOnScroll from "../RevealOnScroll";

const balances = [
  { name: "You", amount: "owed $34.20", positive: true },
  { name: "Priya", amount: "owes $12.60", positive: false },
  { name: "Sam", amount: "owes $21.60", positive: false },
];

export default function SettleUp() {
  return (
    <section className="w-full max-w-4xl px-6 py-20">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-center sm:gap-16">
        <RevealOnScroll className="max-w-sm text-center sm:text-left">
          <p className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-[0.25em] text-paper/70">
            Settle up
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-marker)] text-3xl leading-tight text-paper sm:text-4xl">
            One net balance per person, not a pile of receipts.
          </h2>
          <p className="mt-4 text-base leading-7 text-paper/85">
            Every Spend card feeds one running total per household member.
            Mark your share paid when you&apos;ve actually paid it. Roomade
            tracks who owes what, it doesn&apos;t move the money for you.
          </p>
        </RevealOnScroll>

        <RevealOnScroll tilt="1.5deg" delay="120ms">
          <PinCard tilt="1.5deg" pinColor="bg-sage" className="w-72 p-6">
            <p className="font-[family-name:var(--font-label)] text-[0.65rem] font-bold uppercase tracking-widest text-ink/50">
              Net balances
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {balances.map((b) => (
                <li
                  key={b.name}
                  className="flex items-center justify-between border-b border-dashed border-ink/15 pb-2 text-sm last:border-0"
                >
                  <span className="text-ink/80">{b.name}</span>
                  <span
                    className={
                      b.positive
                        ? "font-medium text-sage"
                        : "font-medium text-coral"
                    }
                  >
                    {b.amount}
                  </span>
                </li>
              ))}
            </ul>
          </PinCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}

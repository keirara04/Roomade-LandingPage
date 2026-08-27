import RevealOnScroll from "../RevealOnScroll";

const faqs = [
  {
    q: "Is it free?",
    a: "Yes, for now. There's no pricing plan while Roomade is in early access.",
  },
  {
    q: "When does it launch?",
    a: "We don't have a fixed date yet. Waitlist signups get the first TestFlight invites.",
  },
  {
    q: "Is it iOS only?",
    a: "For now, yes. It's a native iPhone app; Android and web aren't in scope yet.",
  },
  {
    q: "Does it actually move money?",
    a: "No. Settle Up tracks who owes what. You still settle up however your flat already pays each other.",
  },
  {
    q: "How is this different from a group chat or Splitwise?",
    a: "A group chat has no status and no memory. Splitwise only does the money. Roomade puts issues, spends, and heads-ups on one board, each with its own status.",
  },
  {
    q: "What do you do with my email?",
    a: "Just used to invite you to early access. See our Privacy Policy for details.",
  },
];

export default function Faq() {
  return (
    <section className="w-full max-w-2xl px-6 py-20">
      <RevealOnScroll className="text-center">
        <p className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-[0.25em] text-paper/70">
          FAQ
        </p>
        <h2 className="mx-auto mt-3 font-[family-name:var(--font-marker)] text-3xl leading-tight text-paper sm:text-4xl">
          Questions people actually ask
        </h2>
      </RevealOnScroll>

      <div className="paper-panel mt-12 rounded-sm divide-y divide-dashed divide-ink/15">
        {faqs.map((item) => (
          <div key={item.q} className="p-5 sm:p-6">
            <p className="font-[family-name:var(--font-marker)] text-xl text-ink">
              {item.q}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

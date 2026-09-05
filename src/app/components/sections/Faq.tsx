import RevealOnScroll from "../RevealOnScroll";

// Five questions, each handling a real objection. "When does it launch?" went
// because the announcement bar answers it above the fold; the Malaysia answer
// folded into the money one; WhatsApp and Splitwise merged, since both are the
// same question about what Roomade does that a single-purpose tool doesn't.
const faqs = [
  {
    q: "Is it free?",
    a: "Yes, for now. There's no pricing while Roomade is in early access.",
  },
  {
    q: "Is Android coming?",
    a: "Yes. Android is in active development, with the same board, chat and settle up. iPhone is further along and gets the first invites; Android follows. Web isn't in scope.",
  },
  {
    q: "Does it actually move money?",
    a: "No.Roomade never moves money. It works out who pays what, then hands you the QR, bank details, or payment link they saved; you send it in your own banking app. Any currency works, and a house can track several at once, though DuitNow and Malaysian bank details are the ones built out properly.",
  },
  {
    q: "Why not just use WhatsApp, or Splitwise?",
    a: "A chat can't tell you what's still unresolved, and Splitwise stops at the money. In Roomade the conversation sits next to a board where the tap has a status, the shopping has a balance, and Friday has a date. The chat is for talking; the board remembers.",
  },
  {
    q: "What do you do with my email?",
    a: "It's used to invite you to early access, and nothing else. See the privacy policy for the details.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full max-w-5xl px-6 py-14 sm:py-20">
      <RevealOnScroll className="text-center">
        <p className="text-sm font-semibold tracking-wide text-cream-text">FAQ</p>
        <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Questions people <span className="text-cream-text">actually ask</span>
        </h2>
      </RevealOnScroll>

      {/* Two independent columns rather than a CSS multi-column flow: each
          panel owns its own items, so opening one answer grows only that
          column instead of reflowing every question after it. */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
        {[faqs.slice(0, Math.ceil(faqs.length / 2)), faqs.slice(Math.ceil(faqs.length / 2))].map(
          (column, col) => (
            <div key={col} className="panel divide-y divide-ink/10 text-ink">
              {column.map((item, i) => (
          <RevealOnScroll key={item.q} delay={`${i * 50}ms`}>
            <details className="faq-item group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg outline-none [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-4 focus-visible:ring-offset-surface">
                <span className="font-display text-lg font-bold">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="faq-marker shrink-0 text-2xl leading-none text-navy"
                >
                  +
                </span>
              </summary>
              <p className="faq-content mt-3 leading-relaxed text-ink/75">
                {item.a}
              </p>
            </details>
          </RevealOnScroll>
              ))}
            </div>
          ),
        )}
      </div>
    </section>
  );
}

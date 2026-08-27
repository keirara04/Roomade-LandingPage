import RevealOnScroll from "../RevealOnScroll";

export default function ProblemBoard() {
  return (
    <section className="cork-tile--dark w-full px-6 py-20 text-center">
      <div className="mx-auto w-full max-w-3xl">
        <RevealOnScroll>
          <p className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-[0.25em] text-paper/95">
            The problem
          </p>
          <h2 className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-marker)] text-3xl leading-tight text-paper sm:text-4xl">
            The boiler guy&apos;s number is 400 messages up.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-paper/95">
            Every flat has a group chat holding it together, until the thing
            you actually need is buried under a meme, a &ldquo;who has the
            spare key,&rdquo; and three days of silence. Nothing has a
            status. Nothing resolves. It just scrolls.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

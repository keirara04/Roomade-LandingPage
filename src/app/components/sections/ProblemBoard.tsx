import RevealOnScroll from "../RevealOnScroll";
import ShapeScatter from "../ShapeScatter";

export default function ProblemBoard() {
  return (
    <section className="ground-deep w-full px-6 py-14 sm:py-20 text-center">
      <ShapeScatter opacity={0.07} />
      <div className="mx-auto w-full max-w-4xl">
        <RevealOnScroll>
          <p className="text-sm font-semibold tracking-wide text-cream-text">
            The problem
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Your group chat is fine. It just{" "}
            <span className="text-cream-text">can&apos;t remember</span>{" "}
            anything.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Someone mentions the boiler. Someone pays for the shopping. Three
            days later it&apos;s scrolled past, and nobody knows what&apos;s
            settled.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Roomade keeps the chat; it&apos;s built in. It just stops being
            the filing system.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

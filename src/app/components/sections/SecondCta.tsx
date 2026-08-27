import WaitlistForm from "../WaitlistForm";
import PinCard from "../PinCard";
import RevealOnScroll from "../RevealOnScroll";

export default function SecondCta() {
  return (
    <section className="w-full max-w-4xl px-6 py-20">
      <RevealOnScroll tilt="-1deg" className="mx-auto w-full max-w-md">
        <PinCard tilt="-1deg" pinColor="bg-coral" className="p-8 text-center">
          <p className="font-[family-name:var(--font-marker)] text-3xl text-ink">
            Nothing to install yet. Something to save your spot for.
          </p>
          <p className="mt-2 mb-6 text-sm text-ink/70">
            Early TestFlight invites go to the waitlist first.
          </p>
          <WaitlistForm />
        </PinCard>
      </RevealOnScroll>
    </section>
  );
}

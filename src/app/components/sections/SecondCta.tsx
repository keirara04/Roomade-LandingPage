import Image from "next/image";
import WaitlistForm from "../WaitlistForm";
import Panel from "../Panel";
import RevealOnScroll from "../RevealOnScroll";
import icon from "../../../../public/icon-512.png";

export default function SecondCta() {
  return (
    <section className="w-full max-w-5xl px-6 py-24">
      <RevealOnScroll className="mx-auto w-full max-w-2xl">
        <Panel className="p-8 text-center sm:p-10">
          <Image
            src={icon}
            alt=""
            width={72}
            height={72}
            className="mx-auto rounded-[28%] shadow-[0_12px_24px_-14px_rgba(0,0,0,0.6)]"
          />
          <p className="font-display mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">
            Nothing to install yet. Somewhere to{" "}
            <span className="text-navy">save your spot</span>.
          </p>
          <p className="mt-3 mb-7 text-ink/70">
            Early access invites go to the waitlist first.
          </p>
          <WaitlistForm />
        </Panel>
      </RevealOnScroll>
    </section>
  );
}

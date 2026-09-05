"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, initMotion } from "../../lib/motion";
import boardShot from "../../../../public/Board.png";
import settleShot from "../../../../public/SettleUp.png";
import paidShot from "../../../../public/SettingUpSettleUp.png";
import chatShot from "../../../../public/ChatPage.png";

type Step = {
  id: string;
  src: StaticImageData;
  eyebrow: string;
  line: string;
  alt: string;
  focus: "full" | "top";
};

// One short line each, deliberately. The written sections below cover the same
// four things in detail; if this repeated them it would read as padding.
const STEPS: Step[] = [
  {
    id: "board",
    src: boardShot,
    eyebrow: "The board",
    line: "Everything the house needs, on one board.",
    alt: "The Roomade board: a greeting, counts for heads-ups, reminders and settlements, and the cards beneath.",
    focus: "full",
  },
  {
    id: "money",
    src: settleShot,
    eyebrow: "Settle up",
    line: "You pay, or you get back. Never who owes who.",
    alt: "The Settle Up screen showing a KRW line and an MYR line, split into what you pay and what you get back.",
    focus: "top",
  },
  {
    id: "paid",
    src: paidShot,
    eyebrow: "Getting paid",
    line: "Your DuitNow QR, ready when someone settles.",
    alt: "The Getting paid screen with a saved DuitNow handle and options to add a QR, payment link or bank account.",
    focus: "top",
  },
  {
    id: "chat",
    src: chatShot,
    eyebrow: "Chat",
    line: "And the group chat, right next to all of it.",
    alt: "A house chat thread with a pinned heads-up, day dividers and each housemate in their own name colour.",
    focus: "full",
  },
];

export default function ProductShowcase() {
  const scope = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      initMotion();

      const media = gsap.matchMedia();

      // Pinned scrub is desktop-only and motion-safe only. This project's own
      // motion reference is explicit that pinning fights native scroll on
      // mobile, and a pinned scrub on a phone is the standard way to make a
      // page feel broken. Everywhere else the steps just stack.
      media.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const screens = gsap.utils.toArray<HTMLElement>(".showcase-screen");
          const captions = gsap.utils.toArray<HTMLElement>(".showcase-caption");
          if (screens.length < 2) return;

          gsap.set(screens.slice(1), { autoAlpha: 0 });
          gsap.set(captions.slice(1), { autoAlpha: 0, y: 16 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: track.current,
              start: "top top",
              end: "bottom bottom",
              pin: stage.current,
              pinSpacing: false,
              scrub: 1,
            },
          });

          // Step i is fully settled at timeline position i/(n-1), which is
          // also where its anchor marker sits. Each crossfade therefore has to
          // *end* on that position, not straddle it: a transition centred on
          // the label leaves every anchor landing halfway between two screens.
          const gap = 1 / (screens.length - 1);
          const fade = gap * 0.66;

          screens.forEach((screen, i) => {
            if (i === 0) return;
            const label = i * gap;
            const start = label - fade;

            tl.to(screens[i - 1], { autoAlpha: 0, duration: fade }, start)
              .to(screen, { autoAlpha: 1, duration: fade }, start)
              .to(
                captions[i - 1],
                { autoAlpha: 0, y: -16, duration: fade * 0.6 },
                start,
              )
              .to(
                captions[i],
                { autoAlpha: 1, y: 0, duration: fade * 0.6 },
                start + fade * 0.4,
              );
          });

          // No explicit refresh here. Creating the trigger already measures
          // the pin, and lib/motion.ts refreshes again on fonts.ready and
          // load, which is after this runs. An extra refresh only widens the
          // window in which one can land on top of a visitor's scroll.

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
            gsap.set([...screens, ...captions], { clearProps: "all" });
          };
        },
      );

      return () => media.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      aria-label="What Roomade looks like"
      className="w-full px-6 py-14 sm:py-20"
    >
      {/* Desktop: a tall track whose height is the scroll distance the pinned
          stage consumes. Mobile falls back to the stacked list below. */}
      <div
        ref={track}
        className="relative mx-auto hidden w-full max-w-6xl md:block xl:max-w-7xl"
        style={{ height: `${STEPS.length * 90}vh` }}
      >
        {/* Anchor markers live here, in the track, NOT in the pinned stage.
            Ids inside a pinned element travel with the pin, so anchoring to
            them lands at the wrong scroll position. The track's height maps
            linearly to timeline progress, so a marker at 25% of the track is
            the scroll position where step two is showing. */}
        {STEPS.map((step, i) => (
          <div
            key={step.id}
            id={step.id}
            aria-hidden="true"
            className="pointer-events-none absolute h-0 w-0"
            // The pin runs from the track's top until its bottom meets the
            // viewport bottom, so the scrollable pin range is the track height
            // MINUS one viewport, not the whole track. Spacing markers evenly
            // across 100% would put #money mid-crossfade and #chat past the
            // point where the pin has already released.
            style={{
              top: `calc((100% - 100vh) * ${i / (STEPS.length - 1)})`,
            }}
          />
        ))}

        <div
          ref={stage}
          className="flex h-screen items-center justify-center gap-12 lg:gap-20"
        >
          <div className="relative w-full max-w-md">
            {STEPS.map((step) => (
              <p
                key={step.id}
                className="showcase-caption absolute inset-x-0 top-1/2 -translate-y-1/2"
              >
                <span className="block text-sm font-semibold tracking-wide text-cream-text">
                  {step.eyebrow}
                </span>
                <span className="font-display mt-3 block text-3xl font-extrabold leading-tight text-white lg:text-4xl">
                  {step.line}
                </span>
              </p>
            ))}
          </div>

          <div className="relative w-[16rem] shrink-0 lg:w-[19rem]">
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                className={`showcase-screen ${i === 0 ? "relative" : "absolute inset-0"}`}
              >
                <Screen step={step} eager={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile, and anyone who asked for reduced motion. */}
      <div className="mx-auto flex w-full max-w-md flex-col gap-14 md:hidden">
        {STEPS.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold tracking-wide text-cream-text">
              {step.eyebrow}
            </p>
            <p className="font-display mt-2 text-2xl font-extrabold leading-tight text-white">
              {step.line}
            </p>
            <div className="mt-7 w-[15rem]">
              <Screen step={step} eager={false} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const ASPECT = { full: "1320 / 2868", top: "1320 / 1500" } as const;

/**
 * The bezel here is deliberately not PhoneFrame. PhoneFrame applies a
 * perspective transform, and a transformed ancestor breaks position: fixed,
 * which is exactly how ScrollTrigger implements pinning.
 */
function Screen({ step, eager }: { step: Step; eager: boolean }) {
  return (
    <div className="rounded-[42px] border border-white/10 bg-gradient-to-b from-white to-[#b9c0c5] p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]">
      <div
        className="overflow-hidden rounded-[34px] bg-surface-sunken"
        style={{ aspectRatio: ASPECT[step.focus] }}
      >
        <Image
          src={step.src}
          alt={step.alt}
          sizes="(max-width: 768px) 60vw, 19rem"
          quality={90}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover"
          style={{ objectPosition: step.focus === "top" ? "top" : "center" }}
        />
      </div>
    </div>
  );
}

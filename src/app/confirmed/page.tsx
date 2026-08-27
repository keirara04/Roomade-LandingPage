import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PinCard from "../components/PinCard";
import StatusPill from "../components/StatusPill";
import roomadeMark from "../lib/roomade-mark.png";

export const metadata: Metadata = {
  title: "You're confirmed | Roomade",
  robots: { index: false },
};

export default function ConfirmedPage() {
  return (
    <div className="corkboard flex flex-1 flex-col items-center justify-center px-6 py-20">
      <div
        className="pin-drop relative mx-auto w-full max-w-sm"
        style={{ "--tilt": "-1.5deg" } as React.CSSProperties}
      >
        <PinCard tilt="-1.5deg" pinColor="bg-sage" className="p-8 text-center">
          <Image
            src={roomadeMark}
            alt=""
            width={80}
            height={80}
            className="mx-auto"
          />
          <div className="mt-3">
            <StatusPill color="bg-sage text-paper">CONFIRMED</StatusPill>
          </div>
          <p className="mt-4 font-[family-name:var(--font-marker)] text-4xl leading-tight text-ink">
            You&apos;re signed up.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Go ahead and open the Roomade app now.
          </p>
        </PinCard>
      </div>

      <Link
        href="/"
        className="mt-12 font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-wide text-paper/95 underline decoration-paper/40 underline-offset-4 hover:text-paper"
      >
        Back to Roomade
      </Link>
    </div>
  );
}

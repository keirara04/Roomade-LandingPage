import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Panel from "../components/Panel";
import Chip from "../components/Chip";
import icon from "../../../public/icon-512.png";

export const metadata: Metadata = {
  title: "You're confirmed | Roomade",
  robots: { index: false },
};

export default function ConfirmedPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-teal px-6 py-20">
      <div className="lift-in w-full max-w-sm">
        <Panel className="p-8 text-center">
          <Image
            src={icon}
            alt=""
            width={80}
            height={80}
            className="mx-auto rounded-[28%] shadow-[0_14px_28px_-16px_rgba(0,0,0,0.6)]"
          />
          <div className="mt-4">
            <Chip tone="bg-money-in/12 text-money-in">Confirmed</Chip>
          </div>
          <p className="font-display mt-4 text-3xl font-extrabold leading-tight">
            You&apos;re signed up.
          </p>
          <p className="mt-3 leading-relaxed text-ink/70">
            Go ahead and open the Roomade app now.
          </p>
        </Panel>
      </div>

      <Link
        href="/"
        className="mt-10 text-sm font-semibold text-white/90 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
      >
        Back to Roomade
      </Link>
    </div>
  );
}

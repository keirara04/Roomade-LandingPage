import Panel from "../Panel";
import Chip from "../Chip";
import PhoneFrame from "../PhoneFrame";
import RevealOnScroll from "../RevealOnScroll";
import payShot from "../../../../public/SettingUpSettleUp.png";

const methods = [
  {
    label: "DuitNow QR",
    body: "Save your QR once. When a housemate goes to pay you, it's already on screen for them to scan.",
  },
  {
    label: "Bank account",
    body: "Bank, account number, account holder. The details people always end up retyping into the chat.",
  },
  {
    label: "Payment link",
    body: "Anything else you use to get paid. One link, saved to your profile.",
  },
];

export default function GettingPaid() {
  return (
    <section className="w-full max-w-6xl px-6 py-24 xl:max-w-7xl">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <RevealOnScroll>
            <p className="text-sm font-semibold tracking-wide text-cream-text">
              Getting paid
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Built for how{" "}
              <span className="text-cream-text">Malaysian houses</span>{" "}
              actually pay each other.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
              Settling up in a shared house is usually two steps: work out the
              number, then dig up someone&apos;s bank details. Roomade does the
              first and saves you the second.
            </p>
          </RevealOnScroll>

          <div className="mt-8 flex flex-col gap-4">
            {methods.map((method, i) => (
              <RevealOnScroll key={method.label} delay={`${i * 80}ms`}>
                <Panel className="p-5 sm:p-6">
                  <Chip tone="bg-navy/10 text-navy">{method.label}</Chip>
                  <p className="mt-3 leading-relaxed text-ink/75">
                    {method.body}
                  </p>
                </Panel>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay="240ms">
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white">
              Only people in your households can see these.{" "}
              <span className="font-semibold text-cream-text">
                Roomade never moves money
              </span>
              ; it just saves you retyping.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="flex justify-center">
          <PhoneFrame
            src={payShot}
            alt="The Getting paid screen: a saved DuitNow handle, and options to add a DuitNow QR, a payment link, or a bank account."
            className="w-[15rem] sm:w-[17rem]"
            yaw="-10deg"
            pitch="2deg"
            focus="top"
            sizes="(max-width: 640px) 62vw, 17rem"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}

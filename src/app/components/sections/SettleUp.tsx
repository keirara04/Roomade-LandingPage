import Panel from "../Panel";
import PhoneFrame from "../PhoneFrame";
import RevealOnScroll from "../RevealOnScroll";
import ShapeScatter from "../ShapeScatter";
import settleShot from "../../../../public/SettleUp.png";
import spendShot from "../../../../public/SpendCard.png";

const points = [
  {
    title: "Split it however it actually happened",
    body: "Type an amount for anyone whose share you already know. Leave a field blank and they'll split what's left evenly. Not everything divides by four.",
  },
  {
    title: "One net figure per person",
    body: "Every spend feeds one running total. You pay, or you get back. No pile of receipts to reconcile, and no “who owes who” arithmetic in the chat.",
  },
  {
    title: "More than one currency at once",
    body: "Someone books a trip in KRW while the groceries stay in MYR. Roomade keeps each currency on its own line instead of guessing an exchange rate.",
  },
];

export default function SettleUp() {
  return (
    <section className="ground-deep w-full px-6 py-14 sm:py-20">
      <ShapeScatter opacity={0.07} />
      <div className="mx-auto w-full max-w-6xl xl:max-w-7xl">
        <RevealOnScroll className="text-center">
          <p className="text-sm font-semibold tracking-wide text-cream-text">
            Money
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            You pay, or you get back. That&apos;s{" "}
            <span className="text-cream-text">the whole vocabulary</span>.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <RevealOnScroll className="flex items-end justify-center gap-4">
            <PhoneFrame
              src={spendShot}
              alt="Adding a spend: an amount in MYR, a description, and a list of housemates each with their own editable share."
              className="w-[11rem] sm:w-[13rem]"
              yaw="12deg"
              pitch="3deg"
              focus="middle"
              sizes="(max-width: 640px) 44vw, 13rem"
            />
            <PhoneFrame
              src={settleShot}
              alt="The Settle Up screen showing a KRW line and an MYR line, each split into what you pay and what you get back."
              className="w-[12rem] sm:w-[14rem]"
              yaw="-6deg"
              pitch="2deg"
              focus="top"
              sizes="(max-width: 640px) 48vw, 14rem"
            />
          </RevealOnScroll>

          <div className="flex flex-col gap-5">
            {points.map((point, i) => (
              <RevealOnScroll key={point.title} delay={`${i * 80}ms`}>
                <Panel className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold">
                    {point.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/75">
                    {point.body}
                  </p>
                </Panel>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

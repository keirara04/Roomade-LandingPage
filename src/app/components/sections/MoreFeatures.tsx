import Panel from "../Panel";
import PhoneFrame from "../PhoneFrame";
import RevealOnScroll from "../RevealOnScroll";
import ShapeScatter from "../ShapeScatter";
import loginShot from "../../../../public/LoginPage.png";

const features = [
  {
    title: "More than one house",
    body: "A flat and a family home, or a place you're moving out of. Switch between them; each keeps its own board, chat and balances.",
  },
  {
    title: "Join by link or QR",
    body: "Share a link or hold up the code. Scan a housemate's QR from inside the app to join theirs.",
  },
  {
    title: "A streak for turning up",
    body: "A small flame next to your name for checking in each day. Low stakes, but it does get people opening the board.",
  },
  {
    title: "Notifications you choose",
    body: "Four switches: new cards, activity on cards, messages, reminders. Turn off the ones you don't want.",
  },
  {
    title: "Comments and a full history",
    body: "Every card keeps its own thread and its own log of who did what, so “I already did that” has a receipt.",
  },
  {
    title: "Sign in however you like",
    body: "Apple, Google, or an email and password.",
  },
];

export default function MoreFeatures() {
  return (
    <section className="ground-deep w-full px-6 py-14 sm:py-20">
      <ShapeScatter opacity={0.07} />
      <div className="mx-auto w-full max-w-6xl xl:max-w-7xl">
        <RevealOnScroll className="text-center">
          <p className="text-sm font-semibold tracking-wide text-cream-text">
            The rest of it
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            The small things that decide whether a house app{" "}
            <span className="text-cream-text">survives a month</span>.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, i) => (
              <RevealOnScroll key={feature.title} delay={`${i * 60}ms`}>
                <Panel className="h-full p-6">
                  <h3 className="font-display text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/75">
                    {feature.body}
                  </p>
                </Panel>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay="120ms" className="flex justify-center">
            <PhoneFrame
              src={loginShot}
              alt="The Roomade sign-in screen, with email fields plus Sign in with Apple and Continue with Google."
              className="w-[13rem] sm:w-[15rem]"
              yaw="-8deg"
              pitch="2deg"
              focus="top"
              sizes="(max-width: 640px) 54vw, 15rem"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

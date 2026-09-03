import Panel from "../Panel";
import PhoneFrame from "../PhoneFrame";
import RevealOnScroll from "../RevealOnScroll";
import ShapeScatter from "../ShapeScatter";
import chatShot from "../../../../public/ChatPage.png";

const features = [
  {
    title: "One thread per house",
    body: "In more than one household? They're separate conversations in one inbox, with their own unread counts.",
  },
  {
    title: "Pin a card into the chat",
    body: "Drop an issue or a spend straight into the conversation instead of describing it again. Tap it to open the card.",
  },
  {
    title: "GIFs, emoji, read receipts",
    body: "It's a real group chat, not a notifications feed. Everyone gets their own name colour so threads stay readable.",
  },
  {
    title: "The calendar is one tap away",
    body: "Every dated reminder in the house, grouped by day, from inside the thread you're already in.",
  },
];

export default function Chat() {
  return (
    <section id="chat" className="ground-deep w-full px-6 py-24">
      <ShapeScatter opacity={0.07} />
      <div className="mx-auto w-full max-w-6xl xl:max-w-7xl">
        <RevealOnScroll className="text-center">
          <p className="text-sm font-semibold tracking-wide text-cream-text">
            Chat
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            The chat didn&apos;t go anywhere. It just stopped doing a{" "}
            <span className="text-cream-text">filing clerk&apos;s job</span>.
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <RevealOnScroll className="flex justify-center">
            <PhoneFrame
              src={chatShot}
              alt="A house chat thread with a pinned heads-up at the top, day dividers, and each housemate's messages in their own name colour."
              className="w-[15rem] sm:w-[17rem]"
              yaw="9deg"
              pitch="2deg"
              sizes="(max-width: 640px) 62vw, 17rem"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, i) => (
              <RevealOnScroll key={feature.title} delay={`${i * 70}ms`}>
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
        </div>
      </div>
    </section>
  );
}

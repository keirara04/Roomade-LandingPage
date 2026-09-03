import Panel from "../Panel";
import PhoneFrame from "../PhoneFrame";
import RevealOnScroll from "../RevealOnScroll";
import issueShot from "../../../../public/IssueCard.png";
import headsUpShot from "../../../../public/Heads-UpCard.png";

export default function Compose() {
  return (
    <section className="w-full max-w-6xl px-6 py-24 xl:max-w-7xl">
      <RevealOnScroll className="text-center">
        <p className="text-sm font-semibold tracking-wide text-cream-text">
          Posting
        </p>
        <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          One button. Three tabs.{" "}
          <span className="text-cream-text">No forms</span> to hunt for.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          The add button sits in the middle of the tab bar and opens a sheet
          over whatever you were doing. It doesn&apos;t throw you back to the
          board afterwards.
        </p>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <RevealOnScroll className="flex flex-col items-center gap-7">
          <PhoneFrame
            src={issueShot}
            alt="The Issue tab of the add sheet: a kind selector set to “Fix something”, a title, an optional note, and an Add photos button."
            className="w-[14rem] sm:w-[16rem]"
            yaw="-8deg"
            pitch="2deg"
            focus="top"
            sizes="(max-width: 640px) 58vw, 16rem"
          />
          <Panel className="w-full max-w-sm p-6">
            <h3 className="font-display text-xl font-bold">
              Show it instead of describing it
            </h3>
            <p className="mt-2 leading-relaxed text-ink/75">
              Attach up to four photos to an issue. They&apos;re resized on
              your phone before they upload, so it works on house wifi.
            </p>
          </Panel>
        </RevealOnScroll>

        <RevealOnScroll delay="100ms" className="flex flex-col items-center gap-7">
          <PhoneFrame
            src={headsUpShot}
            alt="The Heads-up tab of the add sheet, with an “Add a date” toggle and a list of housemates to invite."
            className="w-[14rem] sm:w-[16rem]"
            yaw="8deg"
            pitch="2deg"
            focus="top"
            sizes="(max-width: 640px) 58vw, 16rem"
          />
          <Panel className="w-full max-w-sm p-6">
            <h3 className="font-display text-xl font-bold">
              Add a date, get a reminder
            </h3>
            <p className="mt-2 leading-relaxed text-ink/75">
              A heads-up with the date toggle off is an FYI. Toggle it on,
              invite whoever needs to be there, and it becomes a reminder with
              its own place on the board and in the calendar.
            </p>
          </Panel>
        </RevealOnScroll>
      </div>
    </section>
  );
}

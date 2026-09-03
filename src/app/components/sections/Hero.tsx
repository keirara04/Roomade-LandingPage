import WaitlistForm from "../WaitlistForm";
import PhoneFrame from "../PhoneFrame";
import Panel from "../Panel";
import Mascot from "../Mascot";
import RotatingPhrase from "../RotatingPhrase";
import ShapeScatter from "../ShapeScatter";
import boardShot from "../../../../public/Board.png";

export default function Hero() {
  return (
    <section className="relative z-0 w-full px-6 pt-16 pb-24 sm:pt-24">
      <ShapeScatter opacity={0.18} />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 xl:max-w-7xl lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="lift-in text-sm font-semibold tracking-wide text-cream-text">
            For shared houses
          </p>

          <h1
            className="lift-in font-display mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl"
            style={{ "--delay": "60ms" } as React.CSSProperties}
          >
            Everything your house needs,{" "}
            <span className="text-cream-text">in one place</span>.
          </h1>

          <div
            className="lift-in mx-auto mt-5 max-w-lg lg:mx-0"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            <RotatingPhrase />
          </div>

          <p
            className="lift-in mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/90 lg:mx-0"
            style={{ "--delay": "150ms" } as React.CSSProperties}
          >
            What needs fixing, who paid for what, what&apos;s happening this
            week, and the group chat that goes with it. One board your whole
            house can see.
          </p>

          <div
            id="hero-waitlist"
            className="lift-in mt-10"
            style={{ "--delay": "180ms" } as React.CSSProperties}
          >
            <Panel className="mx-auto max-w-lg p-6 lg:mx-0">
              <p className="font-display text-xl font-bold">
                Get early access
              </p>
              <p className="mt-1 mb-5 text-sm text-ink/70">
                Roomade is on iPhone, in early access. Leave your email and
                we&apos;ll let you in.
              </p>
              <WaitlistForm />
            </Panel>
          </div>
        </div>

        {/* The app icon sits on the phone's lower-left corner, in front of it,
            so the two read as one scene rather than two stickers. */}
        <div className="relative flex items-center justify-center pb-16 sm:pb-20">
          <div
            className="lift-in relative z-10"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            <PhoneFrame
              src={boardShot}
              alt="The Roomade board, showing a personal greeting, counts for heads-ups, reminders and settlements, and the cards underneath."
              className="w-[16rem] sm:w-[19rem]"
              yaw="-9deg"
              pitch="3deg"
              eager
              sizes="(max-width: 640px) 70vw, 19rem"
            />
          </div>

          {/* Behind the phone, not in front of it. As a square the icon covers
              whatever it overlaps, so sitting on top meant hiding the board
              rows and the tab bar the screenshot exists to show. Tucked behind
              the corner it peeks out instead, which is what the character was
              always doing.

              Kept inside the column too: the page clips overflow-x, so a
              negative left offset here disappears entirely at desktop widths. */}
          <div className="absolute bottom-0 left-0 z-0 w-[9rem] sm:w-[13rem]">
            <Mascot />
          </div>
        </div>
      </div>
    </section>
  );
}

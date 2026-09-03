import Hero from "./components/sections/Hero";
import ProblemBoard from "./components/sections/ProblemBoard";
import CardTypes from "./components/sections/CardTypes";
import SettleUp from "./components/sections/SettleUp";
import GettingPaid from "./components/sections/GettingPaid";
import Chat from "./components/sections/Chat";
import Compose from "./components/sections/Compose";
import MoreFeatures from "./components/sections/MoreFeatures";
import HowItWorks from "./components/sections/HowItWorks";
import ScopeAndRoadmap from "./components/sections/ScopeAndRoadmap";
import SecondCta from "./components/sections/SecondCta";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";
import StickyWaitlistBar from "./components/StickyWaitlistBar";
import Header from "./components/Header";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center overflow-x-hidden bg-teal pt-[4.5rem]">
      <Header />
      <Hero />
      <Marquee />
      <ProblemBoard />
      <CardTypes />
      <SettleUp />
      <GettingPaid />
      <Chat />
      <Compose />
      <MoreFeatures />
      <HowItWorks />
      <ScopeAndRoadmap />
      <SecondCta />
      <Faq />
      <Footer />
      <StickyWaitlistBar
        watchSelector="#hero-waitlist"
        hideSelector="#site-footer"
      />
    </div>
  );
}

import Hero from "./components/sections/Hero";
import ProblemBoard from "./components/sections/ProblemBoard";
import CardTypes from "./components/sections/CardTypes";
import SettleUp from "./components/sections/SettleUp";
import HowItWorks from "./components/sections/HowItWorks";
import ScopeAndRoadmap from "./components/sections/ScopeAndRoadmap";
import SecondCta from "./components/sections/SecondCta";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";
import StickyWaitlistBar from "./components/StickyWaitlistBar";

export default function Home() {
  return (
    <div className="corkboard flex flex-1 flex-col items-center overflow-x-hidden">
      <Hero />
      <ProblemBoard />
      <CardTypes />
      <SettleUp />
      <HowItWorks />
      <ScopeAndRoadmap />
      <SecondCta />
      <Faq />
      <Footer />
      <StickyWaitlistBar watchSelector="#hero-waitlist" hideSelector="#site-footer" />
    </div>
  );
}

import Hero from "./components/sections/Hero";
import ProblemBoard from "./components/sections/ProblemBoard";
import CardTypes from "./components/sections/CardTypes";
import SettleUp from "./components/sections/SettleUp";
import GettingPaid from "./components/sections/GettingPaid";
import Chat from "./components/sections/Chat";
import HowItWorks from "./components/sections/HowItWorks";
import SecondCta from "./components/sections/SecondCta";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";
import StickyWaitlistBar from "./components/StickyWaitlistBar";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import ProductShowcase from "./components/sections/ProductShowcase";

export default function Home() {
  return (
    <div
      className="flex flex-1 flex-col items-center overflow-x-hidden bg-teal"
      // Follows the header's measured height, so dismissing the announcement
      // strip does not leave a gap the size of the strip at the top of the page.
      style={{ paddingTop: "var(--header-offset)" }}
    >
      <Header />
      <Hero />
      <Marquee />
      <ProductShowcase />
      <ProblemBoard />
      <CardTypes />
      <SettleUp />
      <GettingPaid />
      <Chat />
      <HowItWorks />
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

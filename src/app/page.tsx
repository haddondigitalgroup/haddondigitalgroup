import HeroSection from "@/components/landing/HeroSection";
import ReviewSection from "@/components/landing/ReviewSection";
import VideoShowcaseSection from "@/components/landing/VideoShowcaseSection";
import PricingSection from "@/components/landing/PricingSection";
import SiteHeader from "@/components/landing/SiteHeader";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* Hero / splash: full-width container at top */}
        <HeroSection />
        <VideoShowcaseSection />
        <PricingSection />
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
}

import HeroSection from "@/components/landing/HeroSection";
import ReviewSection from "@/components/landing/ReviewSection";
import VideoShowcaseSection from "@/components/landing/VideoShowcaseSection";
import PricingSection from "@/components/landing/PricingSection";
import SiteHeader from "@/components/landing/SiteHeader";
import Footer from "@/components/landing/Footer";
import ContactSection from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <HeroSection />
        <VideoShowcaseSection />
        <PricingSection />
        <ReviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import MiniCta from "@/components/MiniCta";

import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TransformationSection from "@/components/TransformationSection";
import GallerySection from "@/components/GallerySection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCta from "@/components/StickyMobileCta";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <MiniCta />
      
      <AboutSection />
      <WhyChooseSection />
      <TransformationSection />
      <GallerySection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCta />
    </div>
  );
};

export default Index;

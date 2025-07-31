import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import FAQSection from "@/components/sections/FAQSection";
import InstaPage from "@/components/sections/InstaPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <FAQSection />
      <div className="flex flex-col md:flex-row items-stretch md:h-[600px]">
        <div className="w-full md:w-1/2 p-4 h-[600px] md:h-full">
          <CTASection />
        </div>
        <div className="w-full md:w-1/2 p-4 h-[600px] md:h-full">
          <InstaPage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

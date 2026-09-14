import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DevelopmentBanner from "../components/landing/DevelopmentBanner";
import ScrollProgress from "../components/landing/ScrollProgress";
import BackgroundOrbs from "../components/landing/BackgroundOrbs";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import UsersSection from "../components/landing/UsersSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

const IntroPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;

    window.scrollTo({
      top: elementPosition + window.pageYOffset - offset,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#0A80F5] border-t-transparent rounded-full animate-spin mx-auto mb-3 sm:mb-4" />

          <p className="text-gray-600 text-sm sm:text-base">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-x-hidden">

      <DevelopmentBanner />

      <ScrollProgress />

      <BackgroundOrbs />

      <Navbar
        scrollToSection={scrollToSection}
        navigate={navigate}
      />

      <main>
        <HeroSection />

        <HowItWorks />

        <Features />

        <UsersSection navigate={navigate} />

        <BenefitsSection />

        <CTASection navigate={navigate} />
      </main>

      <Footer scrollToSection={scrollToSection} />

    </div>
  );
};

export default IntroPage;
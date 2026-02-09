import { useState, useEffect } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Facilities from "@/components/sections/Facilities";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import AdmissionProcess from "@/components/sections/AdmissionProcess";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(false);

  // Auto popup after 15 seconds
  useEffect(() => {
    if (hasShownAutoPopup) return;

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
      setHasShownAutoPopup(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasShownAutoPopup]);

  // Auto popup on scroll (50% of page)
  useEffect(() => {
    if (hasShownAutoPopup) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      if (scrollPercentage > 50) {
        setIsPopupOpen(true);
        setHasShownAutoPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownAutoPopup]);

  const handleEnquiryClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <TopBar />
      <Navbar onEnquiryClick={handleEnquiryClick} />
      <Hero onEnquiryClick={handleEnquiryClick} />
      <About />
      <Programs />
      <Facilities />
      <Team />
      <Gallery />
      <AdmissionProcess />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
      <EnquiryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default Index;
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
// import AboutSection from "../components/sections/AboutSection";
import OurProcessSection from "../components/sections/OurProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
// import ContactSection from "../components/sections/ContactSection";
import BrandLogosSection from "../components/sections/BrandLogosSection";
import End2EndSection from "../components/sections/End2EndSection";
import SolutionSection from "../components/sections/SolutionsSection";
import IndustrySection from "../components/sections/IndustrySection";
import ProjectSection from "../components/sections/ProjectSection";
import FAQSection from "../components/sections/FAQSection";
import LetsTalkSection from "../components/sections/LetsTalkSection";
import Footer from "../components/layout/Footer";
// import Success from "../components/layout/Success";
// import Popup from "../components/layout/Popup";
// import type { PopupProps } from "../types";
// export default function Home(){}

const Home = () => {
  return (
    // <Popup>
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <BrandLogosSection />
        <End2EndSection />
        {/* <AboutSection /> */}
        <OurProcessSection />
        <SolutionSection />
        <IndustrySection />
        <ProjectSection />
        <TestimonialsSection />
        <FAQSection />
        <LetsTalkSection />
        {/* <ContactSection /> */}
      </main>

      {/* <Footer /> */}
      <Footer />
    </div>
    // </Popup>
  );
};

export default Home;

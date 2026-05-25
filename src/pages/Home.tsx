import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
// import AboutSection from "../components/sections/AboutSection";
import OurProcessSection from "../components/sections/OurProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
// import ContactSection from "../components/sections/ContactSection";
import BrandLogosSection from "../components/sections/BrandLogosSection";
import End2EndSection from "../components/sections/End2EndSection";
// export default function Home(){}

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <BrandLogosSection />
        <End2EndSection />
        {/* <AboutSection /> */}
        <OurProcessSection />
        <TestimonialsSection />
        {/* <ContactSection /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

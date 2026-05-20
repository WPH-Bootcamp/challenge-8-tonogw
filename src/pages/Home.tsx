// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import HeroSection from "../components/sections/HeroSection";
// import AboutSection from "../components/sections/AboutSection";
// import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
// import ContactSection from "../components/sections/ContactSection";
import CompanyLogoSection from "../components/sections/CompanyLogoSection";
// import NavbarSection from "../components/layout/Navbar";
// export default function Home(){}

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* <NavbarSection /> */}
      <CompanyLogoSection />

      <main>
        {/* <HeroSection /> */}
        {/* <AboutSection /> */}
        {/* <ServicesSection /> */}
        <TestimonialsSection />
        {/* <ContactSection /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

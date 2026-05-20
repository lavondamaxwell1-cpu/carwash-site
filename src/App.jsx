import { useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecialOffer from "./components/SpecialOffer";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Memberships from "./components/Memberships";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import BusinessInfo from "./components/BusinessInfo";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import MobileStickyBar from "./components/MobileStickyBar";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      id="top"
      className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0"
    >
      <TopBar />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <SpecialOffer />
      <About />
      <WhyChooseUs />
      <ServiceArea />
      <Services />
      <Pricing />
      <Memberships />
      <Gallery />
      <Testimonials />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BookingForm />
      <BusinessInfo />
      <MapSection />
      <Footer />
      <BackToTop />
      <MobileStickyBar />
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Baiki Mesin Basuh Rawang",
  url: "https://www.baikimesinbasuh.com",
  telephone: "+60136642601",
  image: "https://www.baikimesinbasuh.com/images/hero.png",
  areaServed: [
    "Rawang",
    "Sungai Buloh",
    "Kundang",
    "Kuang",
    "Ijok",
    "Selayang",
    "Gombak",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawang",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
};

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandSlider from "../components/BrandSlider";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Booking from "../components/Booking";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import ScrollTop from "../components/ScrollTop";
import FloatingCall from "../components/FloatingCall";
import BackToTopProgress from "../components/BackToTopProgress";
import DarkMode from "../components/DarkMode";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <Navbar />
      <Hero />
      <BrandSlider />
      <Stats />
      <About />
      <Services />
      <Brands />
      <Gallery />
      <Reviews />
      <WhyChooseUs />
      <Faq />
      <Contact />
      <Booking />
      <CTA />
      <Footer />
      <FloatingWhatsapp />
      <ScrollTop />
      <FloatingCall />
      <BackToTopProgress />
      <DarkMode />
    </>
  );
}
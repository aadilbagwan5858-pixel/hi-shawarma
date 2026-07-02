import Hero from "../components/home/Hero";
import FeaturedMenu from "../components/home/FeaturedMenu";
import WhyChoose from "../components/home/WhyChoose";
import SpecialOffer from "../components/home/SpecialOffer";
import About from "../components/home/About";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <WhyChoose />
      <SpecialOffer />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
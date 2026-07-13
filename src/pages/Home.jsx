import { motion } from "framer-motion";

import Hero from "../components/home/Hero";
import BestSellers from "../components/home/BestSellers";
import MenuSection from "../components/menu/MenuSection";
import WhyChoose from "../components/home/WhyChoose";
import SpecialOffer from "../components/home/SpecialOffer";
import About from "../components/home/About";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Hero />

      <BestSellers />

      <MenuSection />

      <WhyChoose />

      <SpecialOffer />

      <About />

      <Gallery />

      <Testimonials />

      <Contact />
    </motion.main>
  );
}
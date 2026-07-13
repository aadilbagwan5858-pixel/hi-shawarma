import { motion } from "framer-motion";

import MenuHero from "../components/menu/MenuHero";
import MenuSection from "../components/menu/MenuSection";

function Menu() {
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
      <MenuHero />

      <MenuSection />
    </motion.main>
  );
}

export default Menu;
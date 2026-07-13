import { motion } from "framer-motion";

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
}) {
  let initial = {};

  switch (direction) {
    case "left":
      initial = { opacity: 0, x: -80 };
      break;

    case "right":
      initial = { opacity: 0, x: 80 };
      break;

    case "down":
      initial = { opacity: 0, y: -80 };
      break;

    default:
      initial = { opacity: 0, y: 80 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
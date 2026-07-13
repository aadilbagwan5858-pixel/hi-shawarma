import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 120,
        y: position.y - 120,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[1] h-60 w-60 rounded-full bg-orange-500/20 blur-3xl"
    />
  );
}
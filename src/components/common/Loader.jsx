import { motion } from "framer-motion";
import logo from "../../assets/logo.jpeg";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950">

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Hi Shawarma"
        initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="h-32 w-32 rounded-full border-4 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.6)]"
      />

      {/* Brand Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-6 text-4xl font-extrabold tracking-wide text-orange-500"
      >
        Hi Shawarma
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2 text-slate-400"
      >
        Fresh • Juicy • Loaded With Flavor
      </motion.p>

      {/* Loading Bar */}
      <div className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="h-full w-1/2 rounded-full bg-orange-500"
        />
      </div>

    </div>
  );
}

export default Loader;
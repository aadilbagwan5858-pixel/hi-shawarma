import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950">

      {/* Logo */}
      <motion.h1
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-orange-500"
      >
        🌯 Hi Shawarma
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-slate-300"
      >
        Fresh • Juicy • Delicious
      </motion.p>

      {/* Loading Dots */}
      <div className="mt-8 flex gap-2">
        <motion.div
          className="h-3 w-3 rounded-full bg-orange-500"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />

        <motion.div
          className="h-3 w-3 rounded-full bg-orange-500"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
        />

        <motion.div
          className="h-3 w-3 rounded-full bg-orange-500"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
        />
      </div>

    </div>
  );
}

export default Loader;
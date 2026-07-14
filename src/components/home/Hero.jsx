import { motion } from "framer-motion";
import { FaStar, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Hero() {
 return (
  <section
    id="home"
    className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white"
  >
    {/* Background Glow */}
    <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />
    <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-[120px]" />

    <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 pt-20 pb-10 text-center sm:px-6 sm:pt-24">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >

        <span className="inline-flex items-center rounded-full border border-orange-500 bg-orange-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-orange-500 sm:text-sm">
          🌯 AUTHENTIC SHAWARMA
        </span>

        <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Fresh.
          <br />
          Juicy.
          <br />
          Loaded With Flavor.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base md:text-lg">
          Experience authentic shawarma made with fresh ingredients,
          premium spices and unforgettable taste.
          Every bite is packed with rich flavor and quality.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">

        <Button>
  Order Now
</Button>

<Link
  to="/menu"
  className="rounded-full border-2 border-orange-500 px-5 py-2 text-sm font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white sm:px-7 sm:py-3 sm:text-base"
>
  View Menu
</Link>

</div>

{/* Rating */}
<div className="mt-6 flex flex-wrap items-center justify-center gap-2">

  {[...Array(5)].map((_, index) => (
    <FaStar
      key={index}
      className="text-sm text-yellow-400 sm:text-base"
    />
  ))}

  <span className="text-sm text-slate-600 dark:text-slate-300">
    4.9 Rating • 500+ Happy Customers
  </span>

</div>

{/* Stats */}
<div className="mt-8 grid w-full max-w-md grid-cols-3 gap-3">

  <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-center shadow-lg backdrop-blur-md transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900/70">
    <h3 className="text-xl font-bold text-orange-500 sm:text-2xl">
      500+
    </h3>

    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
      Customers
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-center shadow-lg backdrop-blur-md transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900/70">
    <h3 className="text-xl font-bold text-orange-500 sm:text-2xl">
      4.9★
    </h3>

    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
      Rating
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-center shadow-lg backdrop-blur-md transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900/70">
    <h3 className="text-xl font-bold text-orange-500 sm:text-2xl">
      100%
    </h3>

    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
      Fresh Daily
    </p>
  </div>

</div>

</motion.div>    

            {/* Right Side (Reserved for Future Image) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex w-full items-center justify-center lg:w-1/2"
      ></motion.div>

    </div>

    {/* Scroll Down */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 text-orange-500"
    >
      <FaChevronDown className="text-2xl sm:text-3xl" />
    </motion.div>

  </section>
);
}

export default Hero;
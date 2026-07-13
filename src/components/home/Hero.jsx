import { motion } from "framer-motion";
import { FaStar, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-600/20 blur-[140px]" />

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >

          <span className="inline-flex items-center rounded-full border border-orange-500 bg-orange-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-orange-500">
            🌯 AUTHENTIC SHAWARMA
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Fresh.
            <br />
            Juicy.
            <br />
            Loaded With Flavor.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Experience authentic shawarma made with fresh ingredients,
            premium spices and unforgettable taste.
            Every bite is packed with rich flavor and quality.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Button>
              Order Now
            </Button>

            <Link
              to="/menu"
              className="rounded-full border-2 border-orange-500 px-7 py-3 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
            >
              View Menu
            </Link>

          </div>

                  {/* Rating */}
        <div className="mt-8 flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))}

          <span className="ml-2 text-slate-600 dark:text-slate-300">
            4.9 Rating • 500+ Happy Customers
          </span>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-lg backdrop-blur-md transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900/70">
            <h3 className="text-2xl font-bold text-orange-500">500+</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Customers
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-lg backdrop-blur-md transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900/70">
            <h3 className="text-2xl font-bold text-orange-500">4.9★</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Rating
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-lg backdrop-blur-md transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900/70">
            <h3 className="text-2xl font-bold text-orange-500">100%</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Fresh Daily
            </p>
          </div>
        </div>

      </motion.div>

      {/* Right Side (Image Removed for Now) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex w-full items-center justify-center lg:w-1/2"
      ></motion.div>
       
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-500"
      >
        <FaChevronDown className="text-3xl" />
      </motion.div>
    </section>
  );
}

export default Hero;
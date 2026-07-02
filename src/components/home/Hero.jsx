import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Button from "../ui/Button";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl"></div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 pt-28 md:flex-row">

        {/* Left Content */}
        <div className="max-w-xl">

          <span className="rounded-full border border-orange-500 bg-orange-500/10 px-4 py-2 text-sm font-semibold tracking-widest text-orange-400">
            🌯 AUTHENTIC SHAWARMA
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Fresh.
            <br />
            Juicy.
            <br />
            Loaded With Flavor.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Experience authentic shawarma made with fresh ingredients,
            premium spices and unforgettable taste.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Order Now</Button>

            <button className="rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white">
              View Menu
            </button>
          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}

            <span className="ml-2 text-slate-300">
              4.9 Rating • 500+ Happy Customers
            </span>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">

            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-center backdrop-blur-md transition hover:border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500">
                500+
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Customers
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-center backdrop-blur-md transition hover:border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500">
                4.9★
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Rating
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-center backdrop-blur-md transition hover:border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500">
                100%
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Fresh Daily
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="mt-16 md:mt-0">

          <img
            src={heroImage}
            alt="Hi Shawarma"
            className="w-[320px] md:w-[520px] transition-all duration-500 hover:scale-105 hover:rotate-2 drop-shadow-[0_0_70px_rgba(255,115,0,0.45)]"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
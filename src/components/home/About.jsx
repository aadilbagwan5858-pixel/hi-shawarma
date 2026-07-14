import heroImage from "../../assets/hero.png";
import Button from "../ui/Button";

function About() {
  return (
    <section className="bg-white py-14 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row">

        {/* Image */}
        <div className="flex flex-1 justify-center">

          <img
            src={heroImage}
            alt="Hi Shawarma"
            className="w-64 rounded-3xl shadow-[0_0_30px_rgba(249,115,22,0.25)] sm:w-80 lg:w-[380px]"
          />

        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">

          <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500 sm:text-sm">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            The Taste Everyone Loves ❤️
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            At Hi Shawarma, every shawarma is made with fresh ingredients,
            premium chicken, authentic Arabian spices and delicious sauces.
            Our mission is to serve quality food with unforgettable taste.
          </p>

          {/* Features */}
          <div className="mt-6 grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-800">
              ✅ Fresh Ingredients
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-800">
              🌯 Authentic Recipe
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-800">
              ⭐ Premium Quality
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-800">
              ⚡ Fast Service
            </div>

          </div>

          <div className="mt-6">
            <Button>Know More</Button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
import heroImage from "../../assets/hero.png";
import Button from "../ui/Button";

function About() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Hi Shawarma"
            className="mx-auto w-[420px] rounded-3xl shadow-[0_0_40px_rgba(249,115,22,0.25)]"
          />
        </div>

        {/* Content */}
        <div className="flex-1">

          <p className="font-semibold uppercase tracking-widest text-orange-500">
            About Us
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            The Taste Everyone Loves ❤️
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            At Hi Shawarma, every shawarma is made with fresh ingredients,
            premium chicken, authentic Arabian spices and delicious sauces.
            Our mission is to serve quality food with unforgettable taste.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-slate-800 p-4">
              ✅ Fresh Ingredients
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              🌯 Authentic Recipe
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              ⭐ Premium Quality
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              ⚡ Fast Service
            </div>

          </div>

          <div className="mt-10">
            <Button>Know More</Button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
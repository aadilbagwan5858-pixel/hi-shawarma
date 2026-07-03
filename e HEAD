import { motion } from "framer-motion";

function SpecialOffer() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 p-12 text-white shadow-2xl"
        >

          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

            <div>
              <p className="text-lg font-semibold uppercase tracking-widest">
                🔥 Limited Time Offer
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
                Get 50% OFF
              </h2>

              <p className="mt-5 max-w-xl text-lg text-orange-100">
                Every Friday enjoy delicious Chicken Shawarma with an
                exclusive 50% discount. Freshly prepared and served hot.
              </p>
            </div>

            <button className="rounded-full bg-white px-8 py-4 text-lg font-bold text-orange-600 transition duration-300 hover:scale-105">
              Order Now 🌯
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default SpecialOffer;
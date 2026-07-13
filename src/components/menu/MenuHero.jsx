import { motion } from "framer-motion";

function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-white md:text-7xl"
        >
          Our <span className="text-orange-500">Shawarma Menu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          Freshly prepared shawarmas made with premium ingredients,
          authentic spices and unforgettable taste.
        </motion.p>

      </div>
    </section>
  );
}

export default MenuHero;
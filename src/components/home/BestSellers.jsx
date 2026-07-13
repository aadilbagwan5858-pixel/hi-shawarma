import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BestSellers() {
  const items = [
    {
      name: "Hi Shawarma Special",
      price: "₹140",
      badge: "👑 Best Seller",
    },
    {
      name: "Classic Shawarma",
      price: "₹80",
      badge: "🔥 Popular",
    },
    {
      name: "Ottoman Shawarma",
      price: "₹120",
      badge: "⭐ Premium",
    },
  ];

  return (
    <section className="bg-white py-24 transition-colors duration-500 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-orange-500">
            Customer Favorites
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-slate-900 transition-colors duration-500 dark:text-white md:text-6xl">
            🔥 Best Sellers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 transition-colors duration-500 dark:text-slate-400">
            Taste the shawarmas our customers love the most. Fresh, juicy and
            packed with authentic flavors.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-orange-500 dark:border-slate-800 dark:bg-slate-900/70"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"></div>
              </div>

              <span className="relative rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">
                {item.badge}
              </span>

              <h3 className="relative mt-8 text-3xl font-bold text-slate-900 transition-colors duration-500 dark:text-white">
                {item.name}
              </h3>

              <p className="relative mt-4 text-4xl font-extrabold text-orange-500">
                {item.price}
              </p>

              <button className="relative mt-8 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-block rounded-full border border-orange-500 px-8 py-4 font-bold text-orange-500 transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white"
          >
            View Full Menu →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default BestSellers;
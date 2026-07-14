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
    <section className="bg-white py-14 transition-colors duration-500 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-orange-500 text-xs sm:text-sm">
            Customer Favorites
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            🔥 Best Sellers
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Taste the shawarmas our customers love the most.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-lg transition-all hover:border-orange-500 dark:border-slate-800 dark:bg-slate-900"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-16 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"></div>
              </div>

              <span className="relative rounded-full bg-orange-500 px-2 py-1 text-[10px] font-bold text-white sm:px-3 sm:text-xs">
                {item.badge}
              </span>

              <h3 className="relative mt-4 text-base font-bold text-slate-900 dark:text-white sm:text-xl">
                {item.name}
              </h3>

              <p className="relative mt-2 text-2xl font-extrabold text-orange-500 sm:text-3xl">
                {item.price}
              </p>

              <button className="relative mt-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:px-5 sm:py-2.5 sm:text-sm">
                Order Now
              </button>

            </motion.div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="inline-block rounded-full border border-orange-500 px-6 py-3 text-sm font-bold text-orange-500 transition hover:bg-orange-500 hover:text-white sm:px-8 sm:py-4 sm:text-base"
          >
            View Full Menu →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default BestSellers;
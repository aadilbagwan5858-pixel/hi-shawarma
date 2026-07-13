import { motion } from "framer-motion";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";

import gallery1 from "../../assets/gallery/gallery1.jfif";
import gallery2 from "../../assets/gallery/gallery2.jfif";
import gallery3 from "../../assets/gallery/gallery3.jfif";

const menuItems = [
  {
    id: 1,
    image: gallery1,
    name: "Chicken Shawarma",
    price: "₹149",
    rating: "4.9",
    reviews: "320",
    desc: "Loaded with juicy grilled chicken and garlic sauce.",
    badge: "Best Seller",
  },

  {
    id: 2,
    image: gallery2,
    name: "Special Shawarma",
    price: "₹199",
    rating: "4.8",
    reviews: "280",
    desc: "Double chicken, extra cheese and premium sauces.",
    badge: "Chef's Choice",
  },

  {
    id: 3,
    image: gallery3,
    name: "Shawarma Roll",
    price: "₹129",
    rating: "4.7",
    reviews: "190",
    desc: "Perfect quick bite with authentic Arabian taste.",
    badge: "Hot",
  },
];

function FeaturedMenu() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Our Menu
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Shawarmas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Fresh ingredients, authentic spices and unforgettable taste.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {menuItems.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >

              <div className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]">

                {/* Badge */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  {item.badge}
                </span>

                {/* Heart */}
                <button className="absolute right-4 top-4 z-10 rounded-full bg-slate-900/70 p-2 transition hover:bg-red-500">
                  <FaHeart className="text-sm text-white" />
                </button>

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <FaStar className="text-yellow-400" />

                    <span className="font-semibold">
                      {item.rating}
                    </span>

                    <span className="text-slate-400">
                      ({item.reviews} Reviews)
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-2xl font-bold text-orange-500">
                      {item.price}
                    </span>

                    <button className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-semibold transition hover:scale-105 hover:bg-orange-600">
                      <FaShoppingCart />
                      Add
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedMenu;
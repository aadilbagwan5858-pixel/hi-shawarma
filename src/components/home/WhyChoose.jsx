import { motion } from "framer-motion";
import {
  FaLeaf,
  FaShippingFast,
  FaStar,
  FaUtensils,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaLeaf size={28} />,
    title: "Fresh Ingredients",
    desc: "Fresh vegetables, premium chicken & authentic spices.",
  },
  {
    id: 2,
    icon: <FaUtensils size={28} />,
    title: "Authentic Taste",
    desc: "Original shawarma recipe made with passion.",
  },
  {
    id: 3,
    icon: <FaShippingFast size={28} />,
    title: "Fast Delivery",
    desc: "Hot & fresh food delivered quickly.",
  },
  {
    id: 4,
    icon: <FaStar size={28} />,
    title: "Top Rated",
    desc: "Loved by hundreds of happy customers.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-white py-14 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500 sm:text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Why Hi Shawarma?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Every shawarma is prepared with fresh ingredients,
            authentic flavours and lots of passion.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {features.map((feature, index) => (

            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <div className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-orange-200 dark:border-slate-800 dark:bg-slate-900">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white transition group-hover:scale-110">

                  {feature.icon}

                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400 sm:text-sm">
                  {feature.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;
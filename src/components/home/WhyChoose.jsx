import { motion } from "framer-motion";
import { FaLeaf, FaShippingFast, FaStar, FaUtensils } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaLeaf size={34} />,
    title: "Fresh Ingredients",
    desc: "We use only fresh vegetables, premium chicken and authentic spices.",
  },
  {
    id: 2,
    icon: <FaUtensils size={34} />,
    title: "Authentic Taste",
    desc: "Original shawarma recipe prepared with passion and quality.",
  },
  {
    id: 3,
    icon: <FaShippingFast size={34} />,
    title: "Fast Delivery",
    desc: "Hot & fresh food delivered quickly to your doorstep.",
  },
  {
    id: 4,
    icon: <FaStar size={34} />,
    title: "Top Rated",
    desc: "Loved by hundreds of happy customers every week.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-slate-950 py-24 text-white">
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
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Why Hi Shawarma?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Every shawarma is prepared with fresh ingredients,
            authentic flavours and lots of passion.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (

            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white transition duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
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
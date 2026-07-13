import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import Button from "../ui/Button";
import { SiSwiggy, SiZomato } from "react-icons/si";

function Contact() {
  
  return (
    <section
      id="contact"
      className="bg-white py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white"
    >
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
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Visit Hi Shawarma
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            We'd love to serve you fresh and delicious shawarma every day.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900">
              <FaMapMarkerAlt className="text-2xl text-orange-500" />
              <div>
                <h3 className="font-bold">Visit Us</h3>

                <p className="text-slate-600 dark:text-slate-400">
                  Sindhi Colony Road
                  <br />
                  Opposite Guru Datta Mandir
                  <br />
                  Akashwani Chowk
                  <br />
                  Jalgaon
                </p>

                <a
                  href="https://maps.app.goo.gl/zxUeVAiTnfQpveBWA?g_st=ac"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-orange-500 hover:underline"
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900">
              <FaClock className="text-2xl text-orange-500" />

              <div>
                <h3 className="font-bold">Opening Hours</h3>

                <p className="text-slate-600 dark:text-slate-400">
                  Everyday
                  <br />
                  5:00 PM – 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:border-pink-500 dark:border-slate-700 dark:bg-slate-900">
              <FaInstagram className="text-2xl text-pink-500" />

              <div>
                <h3 className="font-bold">Instagram</h3>

                <a
                  href="https://instagram.com/hi_shawarma_19"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-pink-500 dark:text-slate-400"
                >
                  @hi_shawarma_19
                </a>
              </div>
            </div>

            {/* Available On */}
<div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:border hover:border-orange-500 dark:bg-slate-900">

  <div className="text-3xl">🛵</div>

  <div className="w-full">
    <h3 className="font-bold text-slate-900 dark:text-white">
      Available On
    </h3>

    <div className="mt-4 flex flex-wrap gap-4">

      {/* Swiggy */}
      <a
        href="https://www.swiggy.com/menu/1320093?source=sharing"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#FC8019] px-5 py-3 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <SiSwiggy className="text-2xl" />
        <span className="font-semibold">Swiggy</span>
      </a>

      {/* Zomato */}
      <a
        href="https://zomato.onelink.me/xqzv/goipjfk3"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#E23744] px-5 py-3 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <SiZomato className="text-2xl" />
        <span className="font-semibold">Zomato</span>
      </a>

    </div>

  </div>

</div>
            
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">

  <h3 className="text-3xl font-bold text-center">
    🌯 Order Online
  </h3>

  <p className="mt-3 text-center text-slate-600 dark:text-slate-400">
    Choose your favourite delivery partner and enjoy fresh Hi Shawarma at your doorstep.
  </p>

  <div className="mt-8 space-y-4">

    {/* Swiggy */}
    <a
      href="https://www.swiggy.com/menu/1320093?source=sharing"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-3 rounded-2xl bg-[#FC8019] px-6 py-4 font-semibold text-white transition hover:scale-105"
    >
      <SiSwiggy className="text-3xl" />
      Order on Swiggy
    </a>

    {/* Zomato */}
    <a
      href="https://zomato.onelink.me/xqzv/goipjfk3"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-3 rounded-2xl bg-[#E23744] px-6 py-4 font-semibold text-white transition hover:scale-105"
    >
      <SiZomato className="text-3xl" />
      Order on Zomato
    </a>

    {/* Call */}
    <a
      href="tel:+918087943596"
      className="flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:scale-105"
    >
      <FaPhoneAlt />
      Call for Pickup
    </a>

  </div>

  <div className="mt-8 rounded-2xl bg-orange-50 p-5 text-center dark:bg-slate-800">
    <p className="font-semibold text-orange-500">
      ⭐ Freshly Prepared
    </p>

    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
      Average Delivery Time
    </p>

    <p className="mt-1 text-2xl font-bold">
      25 - 30 Minutes
    </p>
  </div>

</div>

            <div className="overflow-hidden rounded-3xl border border-slate-300 dark:border-slate-700">
              <iframe
                src="https://www.google.com/maps?q=Sindhi+Colony+Road+Opposite+Guru+Datta+Mandir+Akashwani+Chowk+Jalgaon&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hi Shawarma Location"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
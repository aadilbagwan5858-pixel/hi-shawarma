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
  className="bg-white py-14 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white"
>
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
        Contact Us
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
        Visit Hi Shawarma
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
        We'd love to serve you fresh and delicious shawarma every day.
      </p>
    </motion.div>

    <div className="mt-10 grid gap-6 lg:grid-cols-2">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-4"
      >

        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900">

          <FaMapMarkerAlt className="mt-1 text-xl text-orange-500" />

          <div>

            <h3 className="font-bold">Visit Us</h3>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
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
              className="mt-2 inline-block text-sm text-orange-500 hover:underline"
            >
              📍 Open in Google Maps
            </a>

          </div>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow transition hover:border-orange-500 dark:border-slate-700 dark:bg-slate-900">

          <FaClock className="text-xl text-orange-500" />

          <div>

            <h3 className="font-bold">Opening Hours</h3>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Everyday
              <br />
              5:00 PM – 11:00 PM
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow transition hover:border-pink-500 dark:border-slate-700 dark:bg-slate-900">

          <FaInstagram className="text-xl text-pink-500" />

          <div>

            <h3 className="font-bold">Instagram</h3>

            <a
              href="https://instagram.com/hi_shawarma_19"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-600 hover:text-pink-500 dark:text-slate-400"
            >
              @hi_shawarma_19
            </a>

          </div>

        </div>

        {/* Available On */}
        <div className="rounded-2xl bg-white p-4 shadow-lg dark:bg-slate-900">

          <h3 className="font-bold text-slate-900 dark:text-white">
            🛵 Available On
          </h3>

          <div className="mt-4 flex gap-3">

            <a
              href="https://www.swiggy.com/menu/1320093?source=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FC8019] px-4 py-3 text-sm font-semibold text-white"
            >
              <SiSwiggy />
              Swiggy
            </a>

            <a
              href="https://zomato.onelink.me/xqzv/goipjfk3"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#E23744] px-4 py-3 text-sm font-semibold text-white"
            >
              <SiZomato />
              Zomato
            </a>

          </div>

        </div>

      </motion.div> 

                {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-4"
      >

        {/* Order Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow dark:border-slate-700 dark:bg-slate-900">

          <h3 className="text-2xl font-bold text-center">
            🌯 Order Online
          </h3>

          <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
            Choose your favourite delivery partner.
          </p>

          <div className="mt-6 space-y-3">

            {/* Swiggy */}
            <a
              href="https://www.swiggy.com/menu/1320093?source=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#FC8019] px-5 py-3 font-semibold text-white transition hover:scale-105"
            >
              <SiSwiggy className="text-2xl" />
              Order on Swiggy
            </a>

            {/* Zomato */}
            <a
              href="https://zomato.onelink.me/xqzv/goipjfk3"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#E23744] px-5 py-3 font-semibold text-white transition hover:scale-105"
            >
              <SiZomato className="text-2xl" />
              Order on Zomato
            </a>

            {/* Call */}
            <a
              href="tel:+918087943596"
              className="flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
            >
              <FaPhoneAlt />
              Call for Pickup
            </a>

          </div>

          <div className="mt-5 rounded-xl bg-orange-50 p-4 text-center dark:bg-slate-800">

            <p className="font-semibold text-orange-500">
              ⭐ Freshly Prepared
            </p>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Average Delivery Time
            </p>

            <p className="text-xl font-bold">
              25 - 30 Minutes
            </p>

          </div>

        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700">

          <iframe
            src="https://www.google.com/maps?q=Sindhi+Colony+Road+Opposite+Guru+Datta+Mandir+Akashwani+Chowk+Jalgaon&output=embed"
            width="100%"
            height="260"
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
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import Button from "../ui/Button";

function Contact() {
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
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Visit Hi Shawarma
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            We'd love to serve you fresh and delicious shawarma every day.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Phone */}
            <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-6 transition hover:border hover:border-orange-500">

              <FaPhoneAlt className="text-2xl text-orange-500" />

              <div>
                <h3 className="font-bold">Call Us</h3>

                <a
                  href="tel:8087943596"
                  className="block text-slate-400 hover:text-orange-500"
                >
                  +91 8087943596
                </a>

                <a
                  href="tel:8055463417"
                  className="block text-slate-400 hover:text-orange-500"
                >
                  +91 8055463417
                </a>
              </div>

            </div>

            {/* Address */}
            <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-6 transition hover:border hover:border-orange-500">

              <FaMapMarkerAlt className="text-2xl text-orange-500" />

              <div>
                <h3 className="font-bold">Visit Us</h3>

                <p className="text-slate-400">
                  Sindhi Colony Road,
                  <br />
                  Opposite Guru Datta Mandir,
                  <br />
                  Akashwani Chowk,
                  <br />
                  Jalgaon
                </p>

                <a
                  href="https://maps.app.goo.gl/zxUeVAiTnfQpveBWA?g_st=ac"
                  rel="noreferrer"
                  className="mt-2 inline-block text-orange-500 hover:underline"
                >
                  📍 Open in Google Maps
                </a>

              </div>

            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-6 transition hover:border hover:border-orange-500">

              <FaClock className="text-2xl text-orange-500" />

              <div>
                <h3 className="font-bold">Opening Hours</h3>

                <p className="text-slate-400">
                  5:00 PM – 11:00 PM
                </p>

              </div>

            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-6 transition hover:border hover:border-orange-500">

              <FaInstagram className="text-2xl text-pink-500" />

              <div>
                <h3 className="font-bold">Instagram</h3>

                <a
                  href="https://instagram.com/hi_shawarma_19"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-pink-500"
                >
                  @hi_shawarma_19
                </a>

              </div>

            </div>

          </motion.div>

          {/* Right */}
          {/* Right */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="space-y-6"
>

  {/* Contact Form */}
  <div className="rounded-3xl bg-slate-900 p-8">

    <input
      type="text"
      placeholder="Your Name"
      className="mb-4 w-full rounded-xl bg-slate-800 p-4 outline-none"
    />

    <input
      type="email"
      placeholder="Email"
      className="mb-4 w-full rounded-xl bg-slate-800 p-4 outline-none"
    />

    <textarea
      rows="5"
      placeholder="Message"
      className="mb-6 w-full rounded-xl bg-slate-800 p-4 outline-none"
    ></textarea>

    <Button>Send Message</Button>

  </div>

  {/* Google Map */}
  <div className="overflow-hidden rounded-3xl border border-slate-800">

    <iframe
      src="https://www.google.com/maps?q=Sindhi+Colony+Road+Opposite+Guru+Datta+Mandir+Akashwani+Chowk+Jalgaon&output=embed"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Hi Shawarma Location"
    ></iframe>

  </div>

</motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
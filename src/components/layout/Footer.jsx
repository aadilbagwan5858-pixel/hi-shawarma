import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900 transition-colors duration-500 dark:border-slate-800 dark:bg-black dark:text-white">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Hi Shawarma"
                className="h-12 w-12 rounded-full border-2 border-orange-500 object-cover"
              />

              <h2 className="text-2xl font-bold text-orange-500">
                Hi Shawarma
              </h2>

            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Fresh • Juicy • Delicious
              <br />
              Authentic Shawarma in Jalgaon.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">

              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/menu" className="hover:text-orange-500">
                  Menu
                </Link>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-500">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">

              <div className="flex gap-2">
                <FaPhoneAlt className="mt-1 text-orange-500" />

                <div>
                  <a href="tel:8087943596">+91 8087943596</a>
                  <br />
                  <a href="tel:8055463417">+91 8055463417</a>
                </div>

              </div>

              <div className="flex gap-2">
                <FaMapMarkerAlt className="mt-1 text-orange-500" />

                <p>
                  Sindhi Colony Road
                  <br />
                  Akashwani Chowk
                  <br />
                  Jalgaon
                </p>

              </div>

              <div className="flex gap-2">
                <FaClock className="mt-1 text-orange-500" />
                <span>5 PM – 11 PM</span>
              </div>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-lg font-bold">
              Follow Us
            </h3>

            <div className="mt-4 flex gap-3">

              <a
                href="https://instagram.com/hi_shawarma_19"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-pink-600 p-3 text-white transition hover:scale-110"
              >
                <FaInstagram />
              </a>

            </div>

            <a
              href="https://maps.app.goo.gl/zxUeVAiTnfQpveBWA?g_st=ac"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              📍 Open Google Maps
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-slate-200 pt-5 text-center text-xs text-slate-500 dark:border-slate-800">

          © 2026 Hi Shawarma. All Rights Reserved.

          <br />

          <span className="mt-1 block">
            Made with ❤️ by Aadil
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
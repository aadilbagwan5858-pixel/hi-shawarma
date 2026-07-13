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
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="flex items-center gap-3">
           <img
             src={logo}
             alt="Hi Shawarma"
             className="h-14 w-14 rounded-full border-2 border-orange-500 object-cover shadow-lg"
           />

          <h2 className="text-3xl font-bold text-orange-500">
          Hi Shawarma
          </h2>
        </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
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
            <h3 className="text-xl font-bold">Contact</h3>

            <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-400">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <div>
                  <a href="tel:8087943596" className="hover:text-orange-500">
                    +91 8087943596
                  </a>
                  <br />
                  <a href="tel:8055463417" className="hover:text-orange-500">
                    +91 8055463417
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-orange-500" />
                <p>
                  Sindhi Colony Road,
                  <br />
                  Opp. Guru Datta Mandir,
                  <br />
                  Akashwani Chowk,
                  <br />
                  Jalgaon
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-orange-500" />
                <span>Everyday • 5 PM – 11 PM</span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold">Follow Us</h3>

            <div className="mt-5 flex gap-4">

              <a
                href="https://instagram.com/hi_shawarma_19"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-pink-600 p-4 transition hover:scale-110"
              >
                <FaInstagram />
              </a>

            </div>

            <a
              href="https://maps.app.goo.gl/zxUeVAiTnfQpveBWA?g_st=ac"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-orange-500 px-5 py-3 font-semibold transition hover:bg-orange-600"
            >
              📍 Open Google Maps
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-slate-500 dark:border-slate-800">

          © 2026 Hi Shawarma. All Rights Reserved.

          <br />

          <span className="text-slate-500 dark:text-slate-600">
            Made with ❤️ by Aadil
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
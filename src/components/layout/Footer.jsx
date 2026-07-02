import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500">
              Hi Shawarma 🌯
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Serving authentic shawarma with fresh ingredients,
              premium taste and unforgettable flavours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-4">

              <div className="rounded-full bg-orange-500 p-4 transition hover:scale-110 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="rounded-full bg-orange-500 p-4 transition hover:scale-110 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="rounded-full bg-orange-500 p-4 transition hover:scale-110 cursor-pointer">
                <FaWhatsapp />
              </div>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 Hi Shawarma. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
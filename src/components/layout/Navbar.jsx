import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-orange-500/20 bg-slate-950/95 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-orange-500 transition hover:scale-105"
        >
          🌯 Hi Shawarma
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="font-medium text-white transition hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#menu"
            className="font-medium text-white transition hover:text-orange-500"
          >
            Menu
          </a>

          <a
            href="#about"
            className="font-medium text-white transition hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="font-medium text-white transition hover:text-orange-500"
          >
            Contact
          </a>

        </div>

        {/* Desktop Button */}
        <button className="hidden rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 md:block">
          Order Now
        </button>

        {/* Mobile Icon */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-orange-500"
            >
              Menu
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-orange-500"
            >
              Contact
            </a>

            <button className="mt-3 rounded-full bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
              Order Now
            </button>

          </div>

        </div>
      )}
    </header>
  );
}
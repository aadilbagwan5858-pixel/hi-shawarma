import logo from "../../assets/logo.jpeg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import OrderModal from "../common/OrderModal";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
  `font-medium transition duration-300 ${
    isActive
      ? "text-orange-500"
      : "text-slate-800 hover:text-orange-500 dark:text-white"
  }`;

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
           ? "border-b border-orange-500/20 bg-white/95 backdrop-blur-xl shadow-2xl dark:bg-slate-950/95"
           : "bg-transparent" 
        }`}
      >
        <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Hi Shawarma Logo"
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-orange-500 object-cover"
            />

            <h1 className="text-lg sm:text-2xl font-extrabold text-orange-500">
              Hi Shawarma
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/menu" className={navClass}>
              Menu
            </NavLink>

            <a
              href="#about"
              className="font-medium text-slate-800 transition hover:text-orange-500 dark:text-white"
            >
              About
            </a>

            <a
              href="#gallery"
              className="font-medium text-slate-800 transition hover:text-orange-500 dark:text-white"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="font-medium text-slate-800 transition hover:text-orange-500 dark:text-white"
            >
              Contact
            </a>

          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-4 md:flex">

            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

          <div
             onClick={() => setCartOpen(true)}
             className="relative cursor-pointer"
         >
            <FaShoppingCart className="text-2xl text-slate-800 transition hover:text-orange-500 dark:text-white" /> 

             {totalItems > 0 && (
             <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
             {totalItems}
           </span>
           )}
        </div>

            <button
              onClick={() => setOrderOpen(true)}
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Order Now
            </button>

          </div>

          <div className="flex items-center gap-3 md:hidden">

  <div
    onClick={() => setCartOpen(true)}
    className="relative cursor-pointer"
  >
    <FaShoppingCart className="text-xl text-slate-800 dark:text-white" />

    {totalItems > 0 && (
      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
        {totalItems}
      </span>
    )}

  </div>

  <button
    onClick={toggleTheme}
    className="text-xl text-orange-500"
  >
    {theme === "dark" ? <FaSun /> : <FaMoon />}
  </button>

</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-3 text-2xl text-slate-800 dark:text-white md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-900 md:hidden">

            <div className="flex flex-col gap-5">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/menu"
                onClick={() => setMenuOpen(false)}
                className={navClass}
              >
                Menu
              </NavLink>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-slate-800 hover:text-orange-500 dark:text-white"
              >
                About
              </a>

              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="text-slate-800 hover:text-orange-500 dark:text-white "
              >
                Gallery
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-slate-800 hover:text-orange-500 dark:text-white"
              >
                Contact
              </a>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 rounded-full border border-orange-500 py-3 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
                Change Theme
              </button>

              <button
                onClick={() => {
                  setOrderOpen(true);
                  setMenuOpen(false);
                }}
                className="rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Order Now
              </button>

            </div>

          </div>
        )}
      </header>

      <OrderModal
         isOpen={orderOpen}
         onClose={() => setOrderOpen(false)}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";

function OrderModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-[9999] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-orange-500/20 bg-slate-900 p-8 shadow-[0_0_80px_rgba(249,115,22,.25)]"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-xl text-slate-400 hover:text-orange-500"
            >
              <FaTimes />
            </button>

            <h2 className="text-center text-3xl font-bold text-white">
              🌯 Order Hi Shawarma
            </h2>

            <p className="mt-3 text-center text-slate-400">
              Choose your preferred ordering method.
            </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

  {/* Call */}
  <a
    href="tel:+918087943596"
    className="group rounded-2xl border border-orange-500/30 bg-orange-500/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,.5)]"
  >
    <FaPhoneAlt className="mx-auto text-5xl text-orange-500 transition group-hover:scale-110 group-hover:text-white" />
    <p className="mt-3 text-center font-bold text-white">
      Call
    </p>
  </a>

  {/* Swiggy */}
  <a
    href="https://www.swiggy.com/menu/1320093?source=sharing"
    target="_blank"
    rel="noreferrer"
    className="group rounded-2xl border border-[#FC8019]/30 bg-[#FC8019]/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-[#FC8019] hover:shadow-[0_0_25px_rgba(252,128,25,.5)]"
  >
    <SiSwiggy className="mx-auto text-5xl text-[#FC8019] transition group-hover:scale-110 group-hover:text-white" />
    <p className="mt-3 text-center font-bold text-white">
      Swiggy
    </p>
  </a>

  {/* Zomato */}
  <a
    href="https://zomato.onelink.me/xqzv/goipjfk3"
    target="_blank"
    rel="noreferrer"
    className="group rounded-2xl border border-[#E23744]/30 bg-[#E23744]/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-[#E23744] hover:shadow-[0_0_25px_rgba(226,55,68,.5)]"
  >
    <SiZomato className="mx-auto text-5xl text-[#E23744] transition group-hover:scale-110 group-hover:text-white" />
    <p className="mt-3 text-center font-bold text-white">
      Zomato
    </p>
  </a>

</div> 
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default OrderModal;
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

function MenuCard({ item }) {
  
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] dark:border-slate-800 dark:bg-slate-900">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {item.badge && (
          <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
            {item.badge}
          </span>
        )}

        <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
          {item.name}
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          {item.description}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            4.9
          </span>
          <span className="text-slate-500">
            (200+ Reviews)
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-3xl font-bold text-orange-500">
            ₹{item.price}
          </span>

          <div className="flex gap-3">

            <button
              onClick={() => {
                addToCart(item);
                toast.success(`${item.name} added to cart!`);
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-900 transition hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-white"
            >
              <FaShoppingCart />
            </button>

            <a
              href="https://www.swiggy.com/menu/1320093?source=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Order Now
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default MenuCard;
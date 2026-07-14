import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

function MenuCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] dark:border-slate-800 dark:bg-slate-900">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-32 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-52 md:h-64"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-6">

        {item.badge && (
          <span className="rounded-full bg-orange-500 px-2 py-1 text-[10px] font-bold text-white sm:px-3 sm:text-xs">
            {item.badge}
          </span>
        )}

        <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white sm:mt-4 sm:text-2xl">
          {item.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">
          {item.description}
        </p>

        <div className="mt-2 flex items-center gap-1 sm:mt-4 sm:gap-2">
          <FaStar className="text-xs text-yellow-400 sm:text-base" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
            4.9
          </span>
          <span className="hidden text-sm text-slate-500 sm:inline">
            (200+ Reviews)
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-2xl font-bold text-orange-500 sm:text-3xl">
            ₹{item.price}
          </span>

          <div className="flex items-center gap-2">

            <button
              onClick={() => {
                addToCart(item);
                toast.success(`${item.name} added to cart!`);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-900 transition hover:bg-orange-500 hover:text-white sm:h-12 sm:w-12 dark:bg-slate-800 dark:text-white"
            >
              <FaShoppingCart />
            </button>

            <a
              href="https://www.swiggy.com/menu/1320093?source=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:px-5 sm:py-3 sm:text-base"
            >
              Order
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default MenuCard;
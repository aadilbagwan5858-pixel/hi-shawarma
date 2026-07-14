import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

function MenuCard({ item }) {
  const { addToCart } = useCart();

  return (
  <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] dark:border-slate-800 dark:bg-slate-900">

    {/* Image */}
    <div className="overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 sm:h-56 md:h-64 w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-4 sm:p-6">

      {item.badge && (
        <span className="rounded-full bg-orange-500 px-3 py-1 text-[10px] sm:text-xs font-bold text-white">
          {item.badge}
        </span>
      )}

      <h3 className="mt-3 min-h-[55px] text-xl sm:text-2xl font-bold leading-tight text-slate-900 dark:text-white">
        {item.name}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
        {item.description}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <FaStar className="text-yellow-400" />
        <span className="font-semibold text-slate-900 dark:text-white">
          4.9
        </span>

        <span className="text-sm text-slate-500">
          (200+)
        </span>
      </div>

      {/* Bottom */}
      <div className="mt-5">

        <span className="text-3xl font-bold text-orange-500">
          ₹{item.price}
        </span>

        <div className="mt-3 flex items-center gap-2">

          <button
            onClick={() => {
              addToCart(item);
              toast.success(`${item.name} added to cart!`);
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-900 transition hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-white"
          >
            <FaShoppingCart />
          </button>

          <a
            href="https://zomato.onelink.me/xqzv/goipjfk3"
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-orange-500 py-3 text-center text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
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
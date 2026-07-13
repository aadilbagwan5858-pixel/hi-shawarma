import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const {
    cart,
    totalItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl transition-colors duration-500 dark:bg-slate-950">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            🛒 Shopping Cart ({totalItems})
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-slate-700 transition hover:text-orange-500 dark:text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Cart is Empty 😔
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Add your favourite shawarma.
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 space-y-5 overflow-y-auto p-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow transition dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover"
                    />

                    <div className="flex flex-1 flex-col">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>

                      <p className="mt-1 font-semibold text-orange-500">
                        ₹{item.price}
                      </p>

                      <div className="mt-4 flex items-center gap-3">

                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="rounded-full bg-slate-200 p-2 text-slate-800 transition hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-white"
                        >
                          <FaMinus />
                        </button>

                        <span className="font-bold text-slate-900 dark:text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="rounded-full bg-orange-500 p-2 text-white transition hover:bg-orange-600"
                        >
                          <FaPlus />
                        </button>

                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 transition hover:text-red-400"
                    >
                      <FaTrash />
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 p-6 dark:border-slate-800">

              <div className="mb-5 flex items-center justify-between">
                <span className="text-xl font-semibold text-slate-900 dark:text-white">
                  Total
                </span>

                <span className="text-3xl font-bold text-orange-500">
                  ₹{totalPrice}
                </span>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://zomato.onelink.me/xqzv/goipjfk3",
                    "_blank"
                  )
                }
                className="w-full rounded-full bg-[#E23744] py-4 text-lg font-bold text-white transition hover:opacity-90"
              >
                Order on Zomato 🚀
              </button>

            </div>
          </>
        )}
      </div>
    </>
  );
}
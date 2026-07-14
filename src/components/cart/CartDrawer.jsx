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

  const deliveryFee = cart.length > 0 ? 30 : 0;

  const gst = Math.round(totalPrice * 0.05);

  const grandTotal =
    totalPrice + deliveryFee + gst;

  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl transition-all duration-300 dark:bg-slate-950">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            🛒 Shopping Cart
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-slate-700 transition hover:text-orange-500 dark:text-white"
          >
            <FaTimes />
          </button>

        </div>

        {/* Total Items */}

        <div className="border-b border-slate-200 px-5 py-3 dark:border-slate-800">

          <p className="text-sm text-slate-500 dark:text-slate-400">

            {totalItems} Item{totalItems !== 1 && "s"} in Cart

          </p>

        </div>

                {/* Empty Cart */}

        {cart.length === 0 ? (

          <div className="flex flex-1 flex-col items-center justify-center px-6">

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              😔 Your Cart is Empty
            </h3>

            <p className="mt-2 text-center text-slate-500 dark:text-slate-400">
              Add your favourite shawarma and enjoy delicious food.
            </p>

          </div>

        ) : (

          <>

            {/* Cart Items */}

            <div className="flex-1 overflow-y-auto space-y-4 px-5 py-5 pb-44">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition dark:border-slate-800 dark:bg-slate-900"
                >

                  <div className="flex gap-4">

                    {/* Image */}

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />

                    {/* Details */}

                    <div className="flex flex-1 flex-col">

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>

                      <p className="mt-1 font-semibold text-orange-500">
                        ₹{item.price}
                      </p>

                      {/* Quantity */}

                      <div className="mt-4 flex items-center gap-3">

                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 transition hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-white"
                        >
                          <FaMinus />
                        </button>

                        <span className="min-w-[25px] text-center font-bold text-slate-900 dark:text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600"
                        >
                          <FaPlus />
                        </button>

                      </div>

                    </div>

                    {/* Remove */}

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="self-start text-red-500 transition hover:text-red-700"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </div>

              ))}

            </div>

                        {/* Sticky Checkout */}

            <div className="sticky bottom-0 border-t border-slate-200 bg-white p-5 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] dark:border-slate-800 dark:bg-slate-950">

              <div className="space-y-3">

                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>

                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>GST (5%)</span>
                  <span>₹{gst}</span>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-dashed border-slate-300 pt-3 text-xl font-bold dark:border-slate-700">

                  <span className="text-slate-900 dark:text-white">
                    Grand Total
                  </span>

                  <span className="text-orange-500">
                    ₹{grandTotal}
                  </span>

                </div>

              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://zomato.onelink.me/xqzv/goipjfk3",
                    "_blank"
                  )
                }
                className="mt-5 w-full rounded-full bg-[#E23744] py-3 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-95"
              >
                🚀 Order on Zomato
              </button>

            </div>

          </>
        )}

      </div>
    </>
  );
}
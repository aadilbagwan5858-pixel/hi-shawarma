import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ayaan Khan",
    review:
      "Best shawarma in town! Fresh ingredients and amazing taste.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    review:
      "Fast service and delicious food. Definitely coming back!",
  },
  {
    id: 3,
    name: "Sara Ali",
    review:
      "Loved the Special Shawarma. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 transition-colors duration-500 dark:text-slate-400">
            Hundreds of happy customers love Hi Shawarma.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 dark:border-slate-800 dark:bg-slate-800"
            >
              <div className="mb-4 flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="leading-7 text-slate-600 transition-colors duration-500 dark:text-slate-300">
                "{review.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-orange-500">
                {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
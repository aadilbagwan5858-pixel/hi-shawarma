import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ayaan Khan",
    review: "Best shawarma in town! Fresh ingredients and amazing taste.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    review: "Fast service and delicious food. Definitely coming back!",
  },
  {
    id: 3,
    name: "Sara Ali",
    review: "Loved the Special Shawarma. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-14 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500 sm:text-sm">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Hundreds of happy customers love Hi Shawarma.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:border-orange-500 dark:border-slate-800 dark:bg-slate-800"
            >

              <div className="mb-3 flex gap-1 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                "{review.review}"
              </p>

              <h3 className="mt-4 text-lg font-bold text-orange-500">
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
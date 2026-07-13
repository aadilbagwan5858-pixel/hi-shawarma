import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">

        <h1 className="text-8xl font-extrabold text-orange-500">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-orange-600"
        >
          <FaHome />
          Back To Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;
import chicken from "../../assets/chicken.png";
import special from "../../assets/special.png";
import roll from "../../assets/roll.png";
import hero from "../../assets/hero.png";

const images = [chicken, special, roll, hero];

function Gallery() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Delicious Moments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Every shawarma is prepared with passion and served fresh.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt="Hi Shawarma"
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;
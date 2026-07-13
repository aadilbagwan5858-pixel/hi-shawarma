import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import gallery1 from "../../assets/gallery/gallery1.jfif";
import gallery2 from "../../assets/gallery/gallery2.jfif";
import gallery3 from "../../assets/gallery/gallery3.jfif";
import gallery4 from "../../assets/gallery/gallery4.jfif";
import gallery5 from "../../assets/gallery/gallery5.jfif";
import gallery6 from "../../assets/gallery/gallery6.jfif";
import gallery7 from "../../assets/gallery/gallery7.jfif";
import gallery8 from "../../assets/gallery/gallery8.jfif";
import gallery9 from "../../assets/gallery/gallery9.jfif";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="gallery"
      className="bg-white py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Food Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Fresh • Juicy • Delicious
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            A glimpse of our delicious shawarmas made fresh every day.
          </p>
        </motion.div>

        {/* Images */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-slate-200 shadow-lg transition hover:border-orange-500 dark:border-slate-800"
            >
              <img
                src={image}
                alt={`Shawarma ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className="h-80 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-3xl text-white"
          >
            <FaTimes />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-3xl text-white hover:text-orange-500"
          >
            <FaChevronLeft />
          </button>

          <img
            src={images[selectedImage]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-3xl text-white hover:text-orange-500"
          >
            <FaChevronRight />
          </button>

        </div>
      )}
    </section>
  );
}

export default Gallery;
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Lightbox({ images, currentIndex, setCurrentIndex, onClose }) {
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">

      <button
        onClick={onClose}
        className="absolute right-8 top-8 text-4xl text-white hover:text-orange-500"
      >
        <FaTimes />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-6 text-4xl text-white hover:text-orange-500"
      >
        <FaChevronLeft />
      </button>

      <img
        src={images[currentIndex]}
        alt=""
        className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl"
      />

      <button
        onClick={nextImage}
        className="absolute right-6 text-4xl text-white hover:text-orange-500"
      >
        <FaChevronRight />
      </button>

    </div>
  );
}

export default Lightbox;
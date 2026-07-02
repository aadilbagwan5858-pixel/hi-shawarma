import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "919999999999"; // Apna WhatsApp number daalna
  const message = "Hi! I want to order Shawarma.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
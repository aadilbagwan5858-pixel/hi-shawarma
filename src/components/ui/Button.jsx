function Button({ children }) {
  return (
    <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105">
      {children}
    </button>
  );
}

export default Button;
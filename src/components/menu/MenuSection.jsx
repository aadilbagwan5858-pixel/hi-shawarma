import { useState } from "react";
import menuData from "../../data/menuData";
import MenuCard from "./MenuCard";

function MenuSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(menuData.map((item) => item.category)),
  ];

  const filteredMenu = menuData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-white py-20 transition-colors duration-500 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Hi Shawarma
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
            Our Delicious Menu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Fresh ingredients, authentic flavours and premium quality in every
            bite.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-md">
            <input
              type="text"
              placeholder="🔍 Search your favourite shawarma..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-slate-300 bg-white px-6 py-4 text-slate-900 outline-none transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>

          {/* Category Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-slate-200 text-slate-800 hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-slate-500 dark:text-slate-400">
              😔 No Shawarma Found
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default MenuSection;
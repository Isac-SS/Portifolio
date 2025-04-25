"use client";

const Filter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeCategory === category
              ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;

const Filter = ({ categories, activeCategory, setActiveCategory }) => {
    return (
      <div className="flex gap-4 justify-center my-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition ${
              activeCategory === category ? "bg-red-500 text-white" : "bg-gray-200"
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
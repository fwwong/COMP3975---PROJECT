import React from "react";

function Categories() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Furniture" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Books" },
    { id: 5, name: "Sports" },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li key={category.id}>
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

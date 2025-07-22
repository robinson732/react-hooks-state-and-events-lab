import React, { useState } from "react";
import Item from "./Item"; // assuming you already have this

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 1: Event handler for dropdown
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Step 2: Filter items based on selected category
  const visibleItems = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          {/* Add more if needed */}
        </select>
      </div>

      <ul className="Items">
        {visibleItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Initialize state for selectedCategory
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add an event handler to update selectedCategory when the <select> value changes
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on selectedCategory
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/*Connect the state and event handler to the <select> element */}
        <select
          name="filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Map over the filteredItems instead of items */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


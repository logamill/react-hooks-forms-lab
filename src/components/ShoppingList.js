import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {

  const [searchItem, setSearchItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchItem(e.target.value)
  }

  const itemsToDisplay = items
  .filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory)

  .filter(
    (item) => item.name.toLowerCase().includes(searchItem.toLowerCase()))

  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory && item.name.includes(searchItem);
  // });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

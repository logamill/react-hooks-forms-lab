import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit }) {

  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('')

  function handleNameChange(e) {
    setItemName(e.target.value)
  }

  function handleCategoryChange(e) {
    setItemCategory(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    onItemFormSubmit({
        id: uuid(),
        name: itemName,
        category: itemCategory,
      });
  }


  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

import { Search, ShoppingBag, Plus } from "lucide-react";
import { useState } from "react";

export default function Form({ addItem }) {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [category, setcategory] = useState("Produce");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!item || !qty) return;

    const newItems = {
      name: item,
      qty,
      category,
      id: crypto.randomUUID(),
      checked: false,
    };
    addItem(newItems);

    setItem("");
    setQty("");
    setcategory("Produce");
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <div className="item-form__field item-form__field--name">
        <label className="visually-hidden" htmlFor="item-name">
          Item name
        </label>
        <span aria-hidden="true">
          <Search />
        </span>
        <input
          className="item-form__input"
          id="item-name"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add an item..."
        />
      </div>
      <div className="item-form__field item-form__field--quantity">
        <label className="item-form__label" htmlFor="item-quantity">
          Qty
        </label>
        <input
          className="item-form__quantity"
          id="item-quantity"
          type="number"
          value={qty}
          onChange={(e) => setQty(+e.target.value)}
        />
      </div>
      <div className="item-form__field item-form__field--category">
        <span>
          <ShoppingBag />
        </span>
        <div className="item-form__field--category__container">
          <label className="item-form__label" htmlFor="item-category">
            Category
          </label>
          <select
            className="item-form__category"
            id="item-category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Pantry">Pantry</option>
            <option value="Beverages">Beverages</option>
            <option value="Household">Household</option>
          </select>
        </div>
      </div>
      <button className="item-form__submit" type="submit">
        <span aria-hidden="true">
          <Plus />
        </span>{" "}
        Add Item
      </button>
    </form>
  );
}
// <!-- Show when React validation finds an error: -->
// <!-- <p className="item-form__error" role="alert">Please enter an item name.</p> -->

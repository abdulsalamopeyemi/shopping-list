import Form from "./Form";
import Summary from "./Summary";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import { useEffect, useState } from "react";

const intialItem = [
  {
    emoji: " 🍌",
    category: "produce",
    qty: 6,
    checked: false,
    name: "Banana",
    id: crypto.randomUUID(),
  },
  {
    emoji: "🥛 ",
    category: "dairy",
    qty: 1,
    checked: false,
    name: "milk",
    id: crypto.randomUUID(),
  },
  {
    emoji: " 🍞",
    category: "produce",
    qty: 1,
    checked: false,
    name: "Bread",
    id: crypto.randomUUID(),
  },
  {
    emoji: " 🥚",
    category: "dairy",
    qty: 1,
    checked: true,
    name: "Eggs",
    id: crypto.randomUUID(),
  },
  {
    emoji: " 🍗",
    category: "meat",
    qty: 2,
    checked: true,
    name: "Chicken Breast",
    id: crypto.randomUUID(),
  },
  {
    emoji: " 🍝",
    category: "pantry",
    qty: 1,
    checked: false,
    name: "Pasta",
    id: crypto.randomUUID(),
  },
  {
    emoji: "🍅",
    category: "produce",
    qty: 4,
    checked: false,
    name: "Tomatoes",
    id: crypto.randomUUID(),
  },
  {
    emoji: " 🧀",
    category: "produce",
    qty: 1,
    checked: true,
    name: "Cheese",
    id: crypto.randomUUID(),
  },
];
export default function Main() {
  const [active, setActive] = useState(1);
  const [sortBy, setSortBy] = useState("default-order");
  const [items, setItems] = useState(() => {
    const items = JSON.parse(localStorage.getItem("shoppingList")) || [];
    return items;
  });

  useEffect(
    () => localStorage.setItem("shoppingList", JSON.stringify(items)),
    [items],
  );

  // const updating and manipulating  the items state
  const handleAddItems = function (item) {
    setItems((items) => [...items, item]);
  };

  const handleChecked = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleclearItems = function () {
    const confirm =
      items.length > 0 &&
      window.confirm("Are you sure you want to clear all the Items ⚠");

    if (confirm) {
      setItems([]);
      setActive(1);
      setSortBy("default-order");
    }
  };

  const handleDeleteItem = function (id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  //  show items state number
  const totalItems = items.length;
  const purchased = items.filter((item) => item.checked).length;
  const unpurchased = items.filter((item) => !item.checked).length;

  // show current state
  let current, sortedBy;
  if (active === 1) current = items;
  if (active === 2) current = items.slice().filter((item) => !item.checked);
  if (active === 3) current = items.slice().filter((item) => item.checked);

  if (sortBy === "default-order") sortedBy = current;
  if (sortBy === "a-z")
    sortedBy = current.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "z-a")
    sortedBy = current.slice().sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === "number")
    sortedBy = current.slice().sort((a, b) => a.qty - b.qty);
  if (sortBy === "category")
    sortedBy = current
      .slice()
      .sort((a, b) => a.category.localeCompare(b.category));
  if (sortBy === "purchased")
    sortedBy = current.slice().sort((a, b) => +b.checked - +a.checked);
  return (
    <main className="dashboard-main">
      <Form addItem={handleAddItems} />
      <Summary
        items={items}
        totalItems={totalItems}
        purchased={purchased}
        unpurchased={unpurchased}
      />
      <Filter
        items={items}
        onActive={setActive}
        active={active}
        totalItems={totalItems}
        purchased={purchased}
        unpurchased={unpurchased}
        onClear={handleclearItems}
        sort={sortBy}
        setSortBy={setSortBy}
      />
      <ShoppingList
        items={sortedBy}
        onToggle={handleChecked}
        onDelete={handleDeleteItem}
      />
    </main>
  );
}

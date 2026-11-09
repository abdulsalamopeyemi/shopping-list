import { Pencil, Trash2 } from "lucide-react";
import { use, useState } from "react";
export default function ShoppingList({ items, onToggle, onDelete }) {
  return (
    <ul className="shopping-list">
      {items.map((item) => (
        <List
          item={item}
          key={item.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

function List({ item, onToggle, onDelete }) {
  return (
    <li
      className={`shopping-item ${item.checked ? "shopping-item--purchased" : ""}`}
    >
      <input
        className="shopping-item__checkbox"
        type="checkbox"
        checked={item.checked}
        aria-label={`Mark ${item.name}  as purchased`}
        onChange={() => onToggle(item.id)}
      />

      <span className="shopping-item__emoji" aria-hidden="true">
        {item.emoji}
      </span>
      <p className="shopping-item__name">{item.name}</p>
      <div className="shopping-item__meta">
        <span
          className={`shopping-item__category category-badge category-badge--${item.category.toLowerCase()}`}
        >
          {item.category}
        </span>
        <span className="shopping-item__quantity">Qty: {item.qty}</span>
      </div>

      <div className="shopping-item__actions">
        {/* <Button
          content={
            <span>
              <Pencil />
            </span>
          }
          btnFunc="edit"
          name={item.name}
        /> */}

        <Button
          content={
            <span>
              <Trash2 />
            </span>
          }
          btnFunc="delete"
          name={item.name}
          onClick={() => onDelete(item.id)}
        />
      </div>
    </li>
  );
}

function Button({ content, onClick, btnFunc, name }) {
  return (
    <button
      onClick={onClick}
      className={`item-action item-action--${btnFunc}`}
      type="button"
      title={btnFunc}
      aria-label={`${btnFunc} ${name}`}
    >
      {content}
    </button>
  );
}

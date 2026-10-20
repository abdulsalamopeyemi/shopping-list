import { Trash2 } from "lucide-react";
export default function Filters({
  onActive,
  active,
  purchased,
  unpurchased,
  totalItems,
  onClear,
  sort,
  setSortBy,
}) {
  return (
    <div className="shopping-toolbar">
      <div
        className="filter-tabs"
        role="group"
        aria-label="Filter shopping items"
      >
        <button
          className={`filter-tabs__button filter-tabs__button--${active === 1 ? "active" : ""}`}
          type="button"
          aria-pressed="true"
          onClick={() => onActive(1)}
        >
          All ({totalItems})
        </button>
        <button
          className={`filter-tabs__button filter-tabs__button--${active === 2 ? "active" : ""}`}
          type="button"
          aria-pressed="false"
          onClick={() => onActive(2)}
        >
          Active ({unpurchased})
        </button>
        <button
          className={`filter-tabs__button filter-tabs__button--${active === 3 ? "active" : ""}`}
          type="button"
          aria-pressed="false"
          onClick={() => onActive(3)}
        >
          Purchased ({purchased})
        </button>
      </div>
      <div className="shopping-toolbar__sort-control">
        <label
          htmlFor="sortby"
          className="shopping-toolbar__sort-control__label"
        >
          Sort By
        </label>
        <select
          id="sortby"
          className="shopping-toolbar__sort-control__select"
          value={sort}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default-order">Default Order</option>
          <option value="a-z">Name: A-Z</option>
          <option value="z-a">Name: Z-A </option>
          <option value="number">Number</option>
          <option value="category">Category</option>
          <option value="purchased">Purchased</option>
        </select>
      </div>
      <button
        className="clear-purchased-button"
        type="button"
        onClick={onClear}
      >
        <span>
          <Trash2 />
        </span>
        Clear Purchased
      </button>
    </div>
  );
}

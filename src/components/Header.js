import { ShoppingBasket, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__brand">
        <span className="app-header__logo" aria-hidden="true">
          <ShoppingBasket />
        </span>
        <div>
          <h1 className="app-header__title">Shopping List</h1>
          <p className="app-header__subtitle">
            Plan what to buy and track what you already have.
          </p>
        </div>
      </div>
      <div className="app-header__actions">
        <button className="icon-button" type="button" aria-label="Change theme">
          <Sun />
        </button>
        <span className="app-header__avatar" aria-label="Demo avatar">
          JS
        </span>
      </div>
    </header>
  );
}

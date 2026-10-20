import { Lightbulb, Sprout, Check } from "lucide-react";

export default function Aside() {
  return (
    <aside className="dashboard-sidebar" aria-label="Shopping tips">
      <section className="promo-card">
        <div className="promo-card__illustration" aria-hidden="true">
          <img
            src="/grocery-bag-illustration.png"
            alt="grocery-bag-illustration"
          />
        </div>
        <h2 className="promo-card__title">Stay organized</h2>
        <p className="promo-card__description">
          A simple way to keep track of everything you need.
        </p>
      </section>
      <section className="tips-card">
        <div className="tips-card__heading">
          <span className="tips-card__icon" aria-hidden="true">
            <Lightbulb />
          </span>
          <h2 className="tips-card__title">Tips &amp; Ideas</h2>
        </div>
        <ul className="tips-card__list">
          <li className="tips-card__item">
            <span className="tips-card__check" aria-hidden="true">
              <Check />
            </span>
            Group items by category
          </li>
          <li className="tips-card__item">
            <span className="tips-card__check" aria-hidden="true">
              <Check />
            </span>
            Check off items as you shop
          </li>
          <li className="tips-card__item">
            <span className="tips-card__check" aria-hidden="true">
              <Check />
            </span>
            Use quantities to stay accurate
          </li>
          <li className="tips-card__item">
            <span className="tips-card__check" aria-hidden="true">
              <Check />
            </span>
            Clear purchased items when done
          </li>
          <li className="tips-card__item">
            <span className="tips-card__check" aria-hidden="true">
              <Check />
            </span>
            Keep your list updated regularly
          </li>
        </ul>
      </section>
      <section className="info-card">
        <span className="info-card__icon" aria-hidden="true">
          <Sprout />
        </span>
        <div>
          <h2 className="info-card__title">Need some ideas?</h2>
          <p className="info-card__text">
            Common categories include produce, dairy, meat, pantry, beverages,
            and household items.
          </p>
        </div>
      </section>
    </aside>
  );
}

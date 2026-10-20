import { List, Clock3, CircleCheck } from "lucide-react";

export default function SummaryCard({ totalItems, purchased, unpurchased }) {
  return (
    <section className="stats-grid" aria-label="Shopping list summary">
      <div className="stat-card stat-card--total">
        <span className="stat-card__icon" aria-hidden="true">
          <List />
        </span>
        <div>
          <p className="stat-card__label">Total Items</p>
          <p className="stat-card__value">{totalItems}</p>
        </div>
      </div>
      <div className="stat-card stat-card--remaining">
        <span className="stat-card__icon" aria-hidden="true">
          <Clock3 />
        </span>
        <div>
          <p className="stat-card__label">Remaining</p>
          <p className="stat-card__value">{unpurchased}</p>
        </div>
      </div>
      <div className="stat-card stat-card--purchased">
        <span className="stat-card__icon" aria-hidden="true">
          <CircleCheck />
        </span>
        <div>
          <p className="stat-card__label">Purchased</p>
          <p className="stat-card__value">{purchased}</p>
        </div>
      </div>
    </section>
  );
}

# Shopping List — SCSS class-name guide

This guide goes with `shopping-list.scss`. The styling is provided; you implement the React components, state, and event handlers yourself.

## Setup

1. Make sure `sass` is installed in your React project (`npm install -D sass`).
2. Place `shopping-list.scss` at `src/styles/shopping-list.scss` (or your preferred location).
3. Import the stylesheet into your main React entry component. It does not require Tailwind or Bootstrap.
4. Install Lucide React icons with `npm install lucide-react`.
5. Use the class names below **exactly**, including their hyphens and modifiers.

## Component / DOM class map

### Page and header

- `app-shell` — outer white, rounded application surface
  - `app-header` — logo/title/actions row
    - `app-header__brand` — flex grouping for logo + text
      - `app-header__logo` — square green icon container (`ShoppingBasket`)
      - `app-header__title` — Shopping List heading
      - `app-header__subtitle` — smaller description
    - `app-header__actions` — optional icon and avatar
      - `icon-button` — generic small icon action, e.g. theme button (`Sun`)
      - `app-header__avatar` — initials circle; decorative/optional

### Main content and sidebar

- `dashboard-layout` — desktop two-column layout that becomes one column on narrow screens
  - `dashboard-main` — form, stats, filters, and shopping rows
  - `dashboard-sidebar` — promotional panel and tips
    - `promo-card` — large illustration card (hidden on narrow screens)
      - `promo-card__illustration` — grocery-bag illustration or emoji
      - `promo-card__title`, `promo-card__description`
    - `tips-card` — tips panel (remains visible on mobile)
      - `tips-card__heading`, `tips-card__icon`, `tips-card__title`
      - `tips-card__list`, `tips-card__item`, `tips-card__check`
    - `info-card` — smaller contextual note (hidden on narrow screens)
      - `info-card__icon`, `info-card__title`, `info-card__text`

### Add-item form

- `item-form` — the form element (grid)
  - `item-form__field item-form__field--name` — wrapper around item-name input
    - `item-form__input` — actual text `<input>`
  - `item-form__field item-form__field--quantity` — wrapper around quantity input
    - `item-form__quantity` — actual `<input type="number">`
  - `item-form__field item-form__field--category` — wrapper around category selector
    - `item-form__category` — actual `<select>`
  - `item-form__submit` — Add Item button
  - `item-form__error` — inline validation message; show only when appropriate

Optional `item-form__label` styles a small visible label in the quantity/category field.

### Counter cards

- `stats-grid` — three responsive summary cards
  - `stat-card stat-card--total` — first card
  - `stat-card stat-card--remaining` — second, orange-accented card
  - `stat-card stat-card--purchased` — third, green-accented card

Within each card, use:

- `stat-card__icon` — icon background circle
- `stat-card__label` — Total Items, Remaining, etc.
- `stat-card__value` — the number

### Filters and actions

- `shopping-toolbar` — filters and bulk delete button
  - `filter-tabs` — All / Active / Purchased button group
    - `filter-tabs__button` — one filter button
    - `filter-tabs__button filter-tabs__button--active` — currently selected filter
  - `clear-purchased-button` — remove purchased items action

### Individual shopping items

- `shopping-list` — the `<ul>` containing the items
  - `shopping-item` — one `<li>`
    - `shopping-item__checkbox` — actual checkbox input
    - `shopping-item__emoji` — optional food emoji
    - `shopping-item__name` — the product name
    - `shopping-item__meta` — wrapper containing category + quantity
      - `shopping-item__category category-badge category-badge--produce` — one category badge
      - `shopping-item__quantity` — quantity text
    - `shopping-item__actions` — edit and delete button group
      - `item-action item-action--edit` — pencil action
      - `item-action item-action--delete` — trash action

When an item is purchased, add `shopping-item--purchased` to the row. For editing, you can add `shopping-item--editing`.

Available badge variations:

- `category-badge--produce`
- `category-badge--dairy`
- `category-badge--bakery`
- `category-badge--meat`
- `category-badge--pantry`
- `category-badge--beverages`
- `category-badge--household`

### Empty state

- `empty-state`, `empty-state__icon`, `empty-state__title`, `empty-state__text`

Use the empty state when there are no items to show. That can mean no shopping items at all, or no results matching the selected filter; you decide the messages in React.

## Suggested React component breakdown (names only)

- `App`
  - `AppHeader`
  - `ShoppingDashboard`
    - `AddItemForm`
    - `ShoppingStats`
    - `FilterToolbar`
    - `ShoppingList`
      - `ShoppingItem` (repeated)
  - `DashboardSidebar`
    - `PromoCard` (optional)
    - `TipsCard`
    - `InfoCard` (optional)

This is a guide, not a required component hierarchy. Small presentation components may be combined.

## Icon suggestions — from `lucide-react`

| Purpose | Lucide React export |
|---|---|
| App logo | `ShoppingBasket` |
| Add | `Plus` |
| Search / input adornment | `Search` |
| Quantity/category selector | `ChevronDown` |
| Total items | `List` |
| Remaining items | `Clock3` |
| Purchased | `CircleCheck` |
| Check / tip bullet | `Check` |
| Edit | `Pencil` |
| Delete | `Trash2` |
| Optional theme icon | `Sun` |
| Tips heading | `Lightbulb` |
| Additional ideas card | `Sprout` |

Food emojis shown in the mockup: 🍌 🥛 🍞 🥚 🍗 🍝 🍅 🧀. Native emoji appearance varies between operating systems; that's fine for this practice project.

The big illustrated grocery bag is artwork from the mockup, not an icon included with Lucide. Use a grocery-bag emoji or substitute illustration if you don't have an asset.

## What the SCSS does automatically

- Desktop: two-column dashboard with a main content area and a sidebar.
- Tablet: sidebar content moves below the main area; secondary illustration/note cards are hidden.
- Mobile: form fields reorganize into rows, counters become compact, shopping item metadata wraps below the name.
- Narrow phones: paddings and buttons tighten to avoid horizontal scrolling.
- Purchased row: subdued text plus strikethrough.
- Keyboard accessibility: visible focus styles on buttons and form controls.
- Reduced motion: honors user preferences.

## Your logic to implement

- Initialize the list (optionally from localStorage).
- Add valid items with unique IDs.
- Toggle purchased/unpurchased.
- Edit name, quantity, category.
- Delete one item, or clear all purchased items.
- Derive total, remaining, purchased counts.
- Filter by All / Active / Purchased.
- Persist item changes to localStorage.

The optional theme control and initials avatar are visual features from the mockup; omit them for version 1 if you want to focus strictly on the shopping-list logic.

# Shopping List

A simple, responsive shopping-list app for planning what to buy and tracking items as you shop.

**[Live site](https://deluxe-dusk-a0b6c8.netlify.app)**

## Features

- Add items with a quantity and category.
- Mark items as purchased, or remove individual items from the list.
- View all items, active items, or purchased items.
- Sort the list by name, quantity, category, or purchase status.
- See a summary of total, remaining, and purchased items.
- Keep your list saved in your browser with `localStorage`.
- Clear the list after confirming the action.

## Built with

- React
- Sass
- lucide-react

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) and npm

### Install and run

```bash
git clone https://github.com/abdulsalamopeyemi/shopping-list.git
cd shopping-list
npm install
npm start
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server. |
| `npm test` | Run tests in interactive watch mode. |
| `npm run build` | Create an optimized production build in `build/`. |

## Data storage

Shopping-list items are stored in the browser's `localStorage`. They remain available on that browser after a reload, but are not synced across devices or browsers.

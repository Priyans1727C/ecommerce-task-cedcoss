<div align="center">

# 📦 BulkBuy 
**Wholesale Stationery Ordering Platform**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Website-2ea44f?style=for-the-badge&logo=render)](https://ecommerce-task-cedcoss-z24h.onrender.com/)

![React](https://img.shields.io/badge/React-18-blue.svg?style=flat&logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple.svg?style=flat&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC.svg?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-B73BFE.svg?style=flat&logo=vite)

> A modern, responsive web application for individuals and organizations to browse, configure, and place bulk orders on stationery products — with transparent tiered wholesale pricing built in.

</div>

---

## 🗂️ Table of Contents

- [About the Project](#-about-the-project)
- [Live Features](#-live-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Application Pages & Routing](#️-application-pages--routing)
- [State Management](#-state-management)
- [Tiered Pricing System](#-tiered-pricing-system)
- [Data Persistence](#-data-persistence)
- [UI & Design System](#-ui--design-system)
- [Key Components](#-key-components)
- [Product Catalog](#️-product-catalog)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## 📖 About the Project

**BulkBuy** is a wholesale stationery web application designed for studios, offices, schools, and organizations that need to order stationery items in quantity. It provides a seamless end-to-end shopping experience — from browsing a categorized product catalog and configuring bulk quantities, to checkout and order tracking.

The platform rewards volume purchasing through a **tiered discount system**: the more you order, the lower your per-unit cost — with savings clearly displayed before you commit. No hidden fees, no haggling.

---

## ✨ Live Features

| Feature | Description |
| :--- | :--- |
| 🏠 **Landing Page** | Hero section with stats, featured products, and value proposition cards. |
| 🗂️ **Product Catalog** | Browsable product grid with category filters, sort options, and pagination. |
| 🔍 **Product Detail Page** | Full-page view with image gallery, tiered pricing table, and quantity configurator. |
| 🛒 **Shopping Cart** | Persistent cart with quantity adjustment, line totals, and bulk discount summary. |
| 💳 **Checkout** | Multi-section form for shipping info and payment method (Card / Invoice / Purchase Order). |
| ✅ **Order Success** | Confirmation modal showing order ID, total, and status after placement. |
| 🧾 **Receipt Modal** | Detailed line-item receipt view with a download option. |
| 📋 **Orders Page** | Full order history showing status, items, quantities, and totals. |
| 🔔 **Notifications** | Animated feedback toasts for cart additions and order placements. |
| 📱 **Responsive UI** | Mobile-first layout with a collapsible hamburger navigation menu. |

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) with Vite |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (with custom CSS variables) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Inter (body), Playfair Display (headings) |
| **Images** | [Unsplash](https://unsplash.com/) via dynamic URL construction |
| **Persistence** | Browser `localStorage` |
| **Language** | JavaScript (JSX) |

---

## 📁 Project Structure

```
Frontend/
└── src/
    ├── App.jsx                        # Root component — mounts routing
    ├── main.jsx                       # Entry point — Redux Provider + BrowserRouter
    ├── index.css                      # Tailwind config + custom design tokens
    │
    ├── app/
    │   └── store.js                   # Redux store configuration
    │
    ├── components/
    │   └── site/
    │       ├── Navbar.jsx             # Sticky top navigation with cart badge
    │       ├── Footer.jsx             # Site footer with column links
    │       └── Toast.jsx              # Auto-dismissing notification toast
    │
    ├── data/
    │   ├── products.js                # Product catalog data + helper functions
    │   └── cart.js                    # Mock order seed data
    │
    ├── features/
    │   ├── cart/
    │   │   ├── CartPage.jsx           # Cart view with line items and summary panel
    │   │   └── cartSlice.js           # Redux slice: addToCart, updateCartItem, removeFromCart, clearCart
    │   │
    │   ├── checkout/
    │   │   ├── Checkout.jsx           # Checkout form: shipping + payment
    │   │   └── component/
    │   │       └── CheckoutModals.jsx # OrderSuccessModal + ReceiptModal
    │   │
    │   ├── orders/
    │   │   ├── Orders.jsx             # Order history list page
    │   │   └── orderSlice.js          # Redux slice: placeOrder, updateOrderStatus, clearOrders
    │   │
    │   └── products/
    │       ├── ProductList.jsx        # Catalog page with filters, sort, pagination
    │       ├── ProductDetails.jsx     # Individual product page with gallery + pricing
    │       └── components/
    │           └── ProductCard.jsx    # Reusable product card used on catalog + home
    │
    ├── layouts/
    │   └── MainLayout.jsx             # Shared layout wrapper: Navbar + Outlet + Footer
    │
    ├── pages/
    │   └── Home.jsx                   # Landing page
    │
    ├── routes/
    │   └── routes.jsx                 # Centralized route definitions
    │
    └── utils/
        └── helpers.js                 # Utility functions: imgUrl, priceFor, calculateCartTotals
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) — version **18 or above** recommended
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Priyans1727C/ecommerce-task-cedcoss.git
cd ecommerce-task-cedcoss
```

**2. Navigate into the frontend directory**

```bash
cd Frontend
```

**3. Install dependencies**

```bash
npm install
```

### Running the App

**Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default (Vite's standard port).

**Build for production**

```bash
npm run build
```

**Preview the production build**

```bash
npm run preview
```

---

## 🗺️ Application Pages & Routing

All routes are wrapped under `MainLayout`, which provides the shared `Navbar` and `Footer`.

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page with hero, features, and featured products |
| `/products` | `ProductList` | Full product catalog with filters and sort |
| `/products/:slug` | `ProductDetails` | Individual product page (e.g. `/products/executive-matte-notebook`) |
| `/cart` | `CartPage` | Review cart items, adjust quantities, see discount summary |
| `/checkout` | `Checkout` | Enter shipping details, choose payment method, and place order |
| `/orders` | `Orders` | View all placed orders with status and line items |

---

## 🧠 State Management

BulkBuy uses **Redux Toolkit** with two slices:

### `cartSlice` — `/features/cart/cartSlice.js`

Manages the shopping cart. State is an array of `{ productId, qty }` objects.

| Action | Description |
|---|---|
| `addToCart({ id, qty })` | Adds a new item or increments quantity if already in cart |
| `updateCartItem({ id, qty })` | Sets a specific quantity for an item |
| `removeFromCart(productId)` | Removes an item from the cart |
| `clearCart()` | Empties the entire cart (called after successful checkout) |

### `orderSlice` — `/features/orders/orderSlice.js`

Manages the order history. State is an array of order objects.

| Action | Description |
|---|---|
| `placeOrder(payload)` | Prepends a new order with auto-generated ID and today's date |
| `updateOrderStatus({ id, status })` | Updates the status of an existing order |
| `clearOrders()` | Clears all order history |

---

## 💰 Tiered Pricing System

Each product defines a `tiers` array that drives bulk discount logic. Pricing is calculated dynamically based on the quantity selected by the user.

**Example — Executive Matte Notebook:**

| Quantity Range | Price / Set | Discount |
|---|---|---|
| 1 – 50 | ₹120.00 | 0% |
| 51 – 100 | ₹108.00 | 10% OFF |
| 101 + | ₹96.00 | 20% OFF |

The active tier is highlighted in the pricing table on the product detail page. The `priceFor(product, qty)` utility function (in `helpers.js`) resolves the correct price at any given quantity, and is used consistently across the cart, checkout, and order summary.

---

## 💾 Data Persistence

BulkBuy uses the browser's `localStorage` to persist state across page refreshes:

- **Cart** — saved under the key `"cart"` and reloaded as the initial Redux state on mount.
- **Orders** — saved under the key `"orders"`. On first load, if no orders exist in localStorage, the app seeds with `MOCK_ORDERS` (two sample past orders) to demonstrate the orders page.

> **Note:** This is a frontend-only application. There is no backend or database. All data lives in the browser's local storage.

---

## 🎨 UI & Design System

BulkBuy uses a custom design system built on top of **Tailwind CSS v4** with CSS custom properties (variables) defined in `index.css`.

**Color Palette:**

| Token | Value | Usage |
|---|---|---|
| `--beige` | `oklch(0.88 0.018 70)` | Product image backgrounds, accents |
| `--beige-soft` | `oklch(0.94 0.012 75)` | Light fills, image containers |
| `--ink` | `oklch(0.30 0 0)` | Dark text and primary buttons |
| `--background` | Light warm off-white | Page background |
| `--foreground` | Dark charcoal | Primary text and interactive elements |
| `--muted` | Soft grey | Secondary sections and disabled states |
| `--border` | Warm light grey | Card and input borders |

**Typography:**

- **Body:** `Inter` — clean, modern sans-serif for readability
- **Display/Headings:** `Playfair Display` — editorial serif for brand personality

**Border Radius:**

Consistent use of `rounded-xl` (12px) and `rounded-2xl` (16px) for cards and interactive surfaces; `rounded-full` for pills, buttons, and badges.

---

## 🧩 Key Components

### `Navbar`
- Sticky, with a frosted glass `backdrop-blur` effect
- Displays a live cart item count badge (updates from Redux state)
- Responsive with a slide-down mobile menu and search link

### `ProductCard`
- Used on both the Home page and the Product Catalog
- Shows discount badge, category label, price with strikethrough, minimum order, and add-to-cart button
- Triggers a toast notification on successful cart addition

### `Toast`
- Fixed-position, centered at the top of the viewport
- Auto-dismisses after 3 seconds using `useEffect` with `setTimeout`
- Accepts a `message` prop and `onClose` callback

### `CheckoutModals`
- **`OrderSuccessModal`** — Appears after order submission with the order ID, total, and status
- **`ReceiptModal`** — Drill-down view with ship-to address, line items, and totals

---

## 🗃️ Product Catalog

BulkBuy ships with **13 stationery products** across 6 categories:

| Category | Products |
|---|---|
| **Notebooks** | Executive Matte Notebook, Soft Bound PU Journal, College Spiral Notebook |
| **Pens** | Standard Blue Gel Pens, Bulk Ballpoint Pens (Pack of 50) |
| **Drawing** | Student Graphite Pencil Set |
| **Sketchbooks** | Basic Spiral Sketchbook |
| **Desk** | Standard Glass Paperweight, MDF Wooden Desk Organizer, Plastic Mesh Pen Stand |
| **Paper** | Basic Neon Sticky Notes, Standard A4 Printer Paper |
| **Office** | Standard Stapler & Punch Combo |

All product images are sourced from Unsplash via dynamically constructed URLs using the `imgUrl(photoId, sig)` helper.

---

## 🔮 Future Improvements

- **Backend Integration** — Connect to a REST API or GraphQL server for real product data, authentication, and order management
- **User Authentication** — Login/signup for persistent order history across devices
- **Search Functionality** — Full-text product search (the search bar UI is present but currently links to the catalog)
- **Admin Dashboard** — Manage product inventory, update order statuses, view analytics
- **Payment Gateway** — Integrate Razorpay or Stripe for real card transactions
- **PDF Invoice Generation** — Generate and download actual PDF receipts for orders
- **Email Notifications** — Send order confirmation emails via a backend service
- **Wishlist / Saved Items** — Allow users to save products for later ordering

---

## 📄 License

This project is for educational and portfolio purposes. All product images are sourced from [Unsplash](https://unsplash.com/) under the Unsplash License.

---

<p align="center">Built with ❤️ using React, Redux Toolkit & Tailwind CSS</p>

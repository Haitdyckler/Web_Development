# Two Leaves and a Bud — React Conversion

A full React + Vite conversion of the Two Leaves and a Bud organic tea e-commerce landing page. Modern component-based architecture with React Context for state, CSS Modules for scoped styling, and custom hooks for shared logic.

---

## File Structure

```
twoleavestea/
├── index.html                        # Vite HTML entry point
├── vite.config.js                    # Vite + React plugin config
├── package.json                      # Dependencies (React 18, Vite 5)
├── README.md                         # This file
│
├── public/
│   └── assets/                       # Static images (logos, banners, product photos)
│       ├── two_leaves_logo.png
│       ├── two_leaves_logo_blue.png
│       ├── AlpineBerry.png
│       ├── Two_Leaves_Tea_banner.png
│       └── Our_Cafe_Wholesale_Partners.png
│
└── src/
    ├── main.jsx                      # React DOM root mount
    ├── App.jsx                       # Root component — composes all sections
    │
    ├── context/
    │   └── CartContext.jsx           # Global cart state (items, open/close, add, qty)
    │
    ├── data/
    │   └── content.js                # All static content arrays (products, reviews, etc.)
    │
    ├── hooks/
    │   ├── useScrolled.js            # Detects scroll past a threshold (nav shrink)
    │   └── useIntersection.js        # IntersectionObserver hook for scroll animations
    │
    ├── styles/
    │   └── globals.css               # CSS custom properties, resets, keyframes, utilities
    │
    └── components/
        ├── AnnouncementBar.jsx / .module.css   # Top shipping promo bar
        ├── Nav.jsx / .module.css               # Dynamic Island nav with dropdowns
        ├── Hero.jsx / .module.css              # Full-screen hero with background image
        ├── Motto.jsx / .module.css             # Brand statement section
        ├── BestSellers.jsx / .module.css       # Horizontal carousel of product cards
        ├── Discover.jsx / .module.css          # Search input + vibe tag filters
        ├── OurOrigin.jsx / .module.css         # Brand origin full-screen section
        ├── Reviews.jsx / .module.css           # Customer review cards grid
        ├── CafePartners.jsx / .module.css      # Cafe & wholesale split section
        ├── OurLattes.jsx / .module.css         # Animated latte product carousel
        ├── Journal.jsx / .module.css           # Blog/journal horizontal carousel
        ├── About.jsx / .module.css             # About card over background image
        ├── Footer.jsx / .module.css            # Newsletter, link grid, social, copyright
        ├── CartDrawer.jsx / .module.css        # Slide-in cart with gift note
        └── MobileMenu.jsx / .module.css        # Full-height mobile nav drawer
```

---

## File-by-File Explanation

### `index.html`
Vite's HTML shell. Contains the `<div id="root">` mount point and the Google Fonts preconnect. All other head tags (viewport, charset, title) live here; the React app injects itself via `/src/main.jsx`.

### `vite.config.js`
Minimal Vite config using `@vitejs/plugin-react` for JSX transform and fast HMR. No custom aliases or extra plugins needed.

### `src/main.jsx`
Standard React 18 root mount using `createRoot`. Wraps the app in `StrictMode` for development warnings.

### `src/App.jsx`
The root component. Renders `CartProvider` at the top level so every child can access cart state. Holds a single piece of local state — `mobileMenuOpen` — and passes the toggle down to `Nav` and `MobileMenu`. All page sections are composed here in document order.

---

### `src/context/CartContext.jsx`
**Key feature: global cart state via React Context.**

Manages:
- `cartItems` — array of `{ name, price, qty, bg }` objects
- `cartOpen` — boolean controlling the drawer visibility
- `addToCart(name, price, bg)` — adds a new item or increments qty of an existing one
- `changeQty(index, delta)` — increments or decrements; removes the item when qty hits 0
- `totalQty` / `totalPrice` — derived values for the badge and shipping bar

`useCart()` is the consumer hook — throws if used outside the provider, preventing silent bugs.

---

### `src/data/content.js`
**Single source of truth for all static content.** Exports five arrays:

| Export | Used by | Contains |
|---|---|---|
| `BEST_SELLERS` | BestSellers | 8 product objects with name, price, badge, stars, bg color, description |
| `REVIEWS` | Reviews | 5 customer quote objects |
| `LATTES` | OurLattes | 3 latte slide objects with per-slide theme colors |
| `JOURNAL_CARDS` | Journal | 6 article cards with badge and title |
| `VIBE_TAGS` | Discover | 16 filter tag strings |

Centralising content here means copy changes never require touching component logic.

---

### `src/hooks/useScrolled.js`
Listens to the `scroll` event (passive) and returns a boolean that flips `true` once `window.scrollY` exceeds a threshold (default 80px). Used by `Nav` to trigger the "Dynamic Island shrink" — border-radius collapses and the nav snaps to a full-width bar.

### `src/hooks/useIntersection.js`
Wraps `IntersectionObserver` with a `useRef` + `useState` pair. Returns `[ref, inView]`. Once the element enters the viewport the observer fires once and disconnects (fire-and-forget). Used across Motto, OurOrigin, BestSellers, and Journal to gate scroll-triggered CSS animations.

---

### `src/styles/globals.css`
**Converted from the original `styles.css` base layer.** Contains:

- All 14 CSS custom properties (`--cream`, `--blue`, `--serif`, etc.)
- Four `@font-face` declarations loading Reckless, Midnight, Roboto Mono, and Figtree from the CDN
- CSS reset (`box-sizing`, margin/padding zeroed)
- Scrollbar styling
- Shared `.section-title` badge class (rotated, bordered pill)
- Animation `@keyframes`: `dropFromTop`, `heroZoomOut`, `fadeUp`, `fadeDown`, `wordFadeUp`
- Utility animation classes: `.anim-fade-up`, `.anim-fade-down`, `.word`
- Global `.slider-btn` style used by BestSellers and Journal carousels

---

### `AnnouncementBar`
Single `<div>` with the promo text. Plays a `dropFromTop` entrance animation on page load (0.05s delay). No props or state.

---

### `Nav`
**Most complex component in the project.**

- Uses `useScrolled(80)` to toggle the `.scrolled` CSS class, which collapses border-radius and switches to a flat top bar
- Uses `useCart()` to read `totalQty` (cart badge) and call `setCartOpen(true)` on cart icon click
- **Shop dropdown** — full-width mega-menu with three columns: Tea Varieties, Collections, and Best Sellers product tiles. Triggered by CSS `:hover` on `.dropdownWrap`
- **Learn dropdown** — three image cards (Our Story, Our Spirit, For Cafes) also CSS hover-driven
- **Hamburger button** — visible only on mobile (CSS `display: none` on desktop), calls the `onMenuOpen` prop to lift state up to `App`

---

### `Hero`
Full-viewport `<section>` with a CSS background image (`AlpineBerry.png`). The `<h1>`, `<p>`, and "Shop Now" button each have staggered `fadeUp` CSS animations (delays of 0.3s, 0.5s, 0.7s respectively) that run once on page load. No JS animation logic — pure CSS.

---

### `Motto`
Uses `useIntersection` to watch the `<h2>`. When it enters the viewport a `.visible` class triggers the container fade-in. Simple and lightweight — no word-splitter needed since the original effect is replicated with a single CSS transition.

---

### `BestSellers`
**Horizontal carousel with JS-driven transform.**

- Products rendered from `BEST_SELLERS` data array
- `index` state tracks the current scroll position; `scroll(dir)` clamps between 0 and `maxIndex`
- Carousel moves via `transform: translateX(-${offset}%)` where offset is `index × (100 / VISIBLE)` — VISIBLE is 4.2 so a partial card always peeks at the right
- Previous button hidden at index 0; Next button disabled at `maxIndex`
- `useIntersection` on the wrapper triggers staggered `fade-up` animations on cards when the section enters view
- "Explore All Teas" CTA at the bottom

---

### `Discover`
Search and filter section.

- Controlled `<input>` for tea search (value in local state)
- Vibe tags rendered from `VIBE_TAGS` array; clicking a tag toggles it in/out of an active `Set` (local state)
- Active tags receive a darker background via the `.active` CSS class

---

### `OurOrigin`
Full-screen section with a repeating diagonal CSS gradient background (no image dependency). Uses `useIntersection` to fade in the body copy paragraph when it scrolls into view. The "BORN IN COLORADO" headline uses `clamp()` for fluid responsive sizing.

---

### `Reviews`
Maps `REVIEWS` data into cards. Each card has a quote body (top) and a product footer (bottom). On mobile the grid becomes a horizontal scrollable row using `overflow-x: auto` and `scroll-snap-type: x mandatory` — no JS needed.

---

### `CafePartners`
Simple two-column split: left is a full-bleed image, right is a dark blue content panel with heading, subtext, and CTA. Stacks to a single column on mobile via a media query.

---

### `OurLattes`
**Per-slide theme carousel.**

- `currentSlide` state (0–2) drives both the carousel position and all theme colors
- `LATTES` data includes per-slide `sectionBg`, `cardBg`, `badgeBg`, and `textColor` — applied as inline styles so background transitions are pure CSS `transition: background-color 0.5s ease`
- Carousel track moves by `translateX(-${currentSlide * 100}%)` — each slide is 100% wide
- Prev/Next arrows wrap around using modulo arithmetic

---

### `Journal`
**Mirrors BestSellers carousel logic**, adapted for article cards.

- Cards rendered from `JOURNAL_CARDS` data
- Same index-based `translateX` transform approach
- `useIntersection` triggers staggered card fade-ins
- Cards have a hover scale on the inner image and a badge rotation effect — both pure CSS

---

### `About`
Positioned layout: full-bleed background image with an absolutely positioned orange card overlaid on the left. On mobile the card becomes a static block below the image.

---

### `Footer`
Three-zone footer:

1. **Newsletter bar** — email input + submit button + social icon links (Facebook, Instagram, LinkedIn as inline SVGs)
2. **Link grid** — `FOOTER_COLS` array (7 columns) rendered with CSS Grid. On mobile each column becomes an accordion: clicking the heading toggles `.open` which expands `max-height` from 0 via CSS transition. The `openCol` index is tracked in local state
3. **Footer bottom** — logo, copyright text, and site credit

---

### `CartDrawer`
**Slide-in drawer with full cart functionality.**

- Reads from `CartContext`: `cartItems`, `cartOpen`, `setCartOpen`, `changeQty`, `totalPrice`
- Overlay darkens the page; clicking it closes the drawer
- Shipping bar counts down to free shipping ($75 threshold) or confirms once met
- Each cart item shows a color swatch (the product's `bg`), name, total price, and +/− quantity controls
- Gift note: checkbox reveals a `<textarea>` via local `giftChecked` state; unchecking resets the note
- Close button (×) is positioned just outside the drawer's left edge and animates in alongside it

---

### `MobileMenu`
Full-height left-side drawer for mobile navigation.

- Controlled by `isOpen` prop passed from `App`
- `MENU_SECTIONS` array defines the sections and their links, rendered in a loop
- Overlay tap calls `onClose`
- CSS `transform: translateX(-100%)` → `translateX(0)` transition drives the slide-in

---

## Key Features

### State Management
All cart state lives in `CartContext`. No external library needed. Component-local UI state (carousel index, tag selection, accordion open/close) stays in the component that owns it.

### CSS Architecture
Every component has its own `.module.css` file. Class names are locally scoped by Vite's CSS Modules transform, so `.title` in `BestSellers.module.css` never collides with `.title` in `Reviews.module.css`. Global styles (CSS variables, keyframes, resets, shared utility classes) live exclusively in `globals.css`.

### Scroll Animations
Two patterns are used:
- **CSS-only entrance** (AnnouncementBar, Nav, Hero) — `animation` with `opacity: 0` initial state, runs once on mount
- **Scroll-triggered** (section titles, carousels, body copy) — `useIntersection` fires once when the element enters the viewport, then a class is toggled to start the CSS animation

### Responsive Design
All mobile breakpoints from the original `mobile.css` are ported into each component's `.module.css` file under `@media (max-width: 768px)`. The hamburger, mobile drawer, cart full-width mode, footer accordion, and review swipe row all activate at this breakpoint.

### Data-Driven Components
BestSellers, Reviews, Lattes, Journal, and Footer all render entirely from data arrays in `content.js`. Adding or removing a product card, review, or footer column only requires a change to the data file — no JSX edits needed.

---

## Getting Started

```bash
npm install

# Start development server (http://localhost:5173)
npm run dev
npm run build
npm run preview
```

### Adding Real Assets
Drop image files into `/public/assets/` and reference them as `/assets/filename.png` in JSX. Vite serves the `public/` directory at the root path automatically.

### Connecting a Real Cart or CMS
Replace the `CartContext` dispatch calls with API calls to your commerce backend (Shopify Storefront API, Swell, etc.). The `addToCart` and `changeQty` functions in `CartContext.jsx` are the only two integration points.

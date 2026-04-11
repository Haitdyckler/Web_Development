## How to Run

```bash
cd ~/locavore_Demo_React
npm install
npm start
```

## File Structure

```
locavore_Demo_React/
├── public/
│   ├── index.html
|   └── assets/
│   │   ├── logo.svg
│   │   ├── hero_logo.svg
│   │   ├── store.png
│   │   └── duck.png
├── src/
│   ├── fonts/
│   │   ├── LT_rounded_bold.woff
│   │   ├── LT_rounded_bold.woff2
│   │   ├── PPNeueMontreal-Medium.woff
│   │   ├── PPNeueMontreal-Medium.woff2
│   │   ├── PPNeueMontreal-Regular.woff
│   │   ├── PPNeueMontreal-Regular.woff2
│   │   └── fake-receipt.woff
│   ├── data/
│   │   └── brands.js            ← all 26 letters of brand data
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Nav.module.css       
│   │   ├── Hero.jsx             ← SVG logo w/ letter hover
│   │   ├── Hero.module.css
│   │   ├── Tagline.jsx
│   │   ├── Tagline.module.css
│   │   ├── Featured.jsx         ← flip card + duck
│   │   ├── Featured.module.css
│   │   ├── Brands.jsx
│   │   ├── Brands.module.css
│   │   ├── FooterCTA.jsx
│   │   └── FooterCTA.module.css
│   ├── App.jsx                  ← root component
│   ├── index.js                 ← entry point
│   └── index.css                ← global CSS variables & reset
├── package.json
└── package-lock.json
```

## Tech Stack

- React 18
- CSS Modules
- Create React App

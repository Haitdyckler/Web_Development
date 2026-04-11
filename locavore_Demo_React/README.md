# How to run

//bash commands

cd ~/locavore_Demo_React
npm install
npm start


# <file structure>
locavore_Demo_React/
├── public/
│   └── index.html
├── src/
│   ├── data/               ← assets(SVG & PNG)
│   |   ├── logo.svg
|   |   ├── hero_logo.svg
|   |   ├── store.png
|   |   └──duck.png
|   ├── fonts/              ← fonts
|   |   ├── LT_rounded_bold.woff
|   |   ├── LT_rounded_bold.woff2
|   |   ├── PPNeueMontreal-Medium.woff
|   |   ├── PPNeueMontreal-Medium.woff2
|   |   ├── PPNeueMontreal-Regular.woff
|   |   ├── PPNeueMontreal-Regular.woff2
|   |   └── fake-receipt.woff
│   ├── index.js             ← entry point
│   ├── index.css            ← global CSS variables & reset
│   ├── App.jsx              ← root component
│   ├── data/
│   │   └── brands.js        ← all 26 letters of brand data
│   └── components/
│       ├── Nav.jsx + .module.css
│       ├── Hero.jsx + .module.css        ← SVG logo w/ letter hover
│       ├── Tagline.jsx + .module.css
│       ├── Featured.jsx + .module.css    ← flip card + duck
│       ├── Brands.jsx + .module.css
│       └── FooterCTA.jsx + .module.css
├── package.json
└── package-lock.json




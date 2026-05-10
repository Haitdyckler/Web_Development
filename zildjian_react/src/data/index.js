export const PRICES = {
  "K Sweet Crashes": 359.95,
  "A Zildjian New Beat HiHats": 194.95,
  "K Paper Thin Crashes": 419.95,
  "Zildjian Classic Logo Tee": 30,
  "Z Custom Bundle": 69.99,
  "FX Stacks": 194.95,
  "Zildjian Blackout Hat": 33,
  "K Projection Ride": 524.95,
  "Zildjian ALCHEM-E Headphones": 299.99,
  "Drumstick Custom Bundle": 69.99,
};

export const PRODUCTS = [
  { id: 1,  name: "K Sweet Crashes",                    vendor: "K Family",        stars: "★★★★★", reviews: 21,  bg: "linear-gradient(135deg,#f5f5f0,#e8e4d8)", icon: "cymbal2" },
  { id: 2,  name: "Zildjian ALCHEM-E Headphones",        vendor: "ALCHEM-E",        stars: "★★★★★", reviews: 27,  bg: "linear-gradient(135deg,#f0ede4,#ddd9ca)", icon: "headphone" },
  { id: 3,  name: "A Zildjian New Beat HiHats",          vendor: "A Family",        stars: "★★★★★", reviews: 8,   bg: "linear-gradient(135deg,#ede8dc,#d4cfbf)", icon: "hihat" },
  { id: 4,  name: "Zildjian Classic Logo Tee",           vendor: "Apparel",         stars: "★★★★½", reviews: 107, bg: "linear-gradient(135deg,#e8e8e8,#d0d0d0)", icon: "shirt" },
  { id: 5,  name: "Drumstick Custom Bundle",             vendor: "Limited Edition", stars: "★★★☆☆", reviews: 44,  bg: "linear-gradient(135deg,#f0ece0,#e0d8c0)", icon: "sticks", isNew: true },
  { id: 6,  name: "K Paper Thin Crashes",                vendor: "K Family",        stars: "★★★★★", reviews: 14,  bg: "linear-gradient(135deg,#f2ede0,#dfd7c0)", icon: "crash" },
  { id: 7,  name: "FX Stacks",                           vendor: "FX Family",       stars: "★★★★★", reviews: 6,   bg: "linear-gradient(135deg,#f8f4ec,#ede6d0)", icon: "stack",  isNew: true },
  { id: 8,  name: '21" K Zildjian Projection Ride',      vendor: "K Family",        stars: "★★★★★", reviews: 19,  bg: "linear-gradient(135deg,#e8dfc8,#d4c9a8)", icon: "ride",   isNew: true },
];

export const ARTISTS = [
  { name: "Craig Reynolds",   band: "Stray From The Path" },
  { name: "Roni Kaspi",       band: "Avishai Cohen Trio" },
  { name: "Russell Holzman",  band: "Caroline Polachek" },
  { name: "Deven Trusclair",  band: "Dumpstaphunk" },
];

export const NAV_ITEMS = [
  { label: "Cymbals",               subs: ["Hi-Hat", "Crash", "Ride", "K Family", "A Family", "Z Family"] },
  { label: "E-Kit",                  subs: ["ALCHEM-E Bronze EX", "ALCHEM-E Gold", "ALCHEM-E Gold EX"] },
  { label: "Headphones" },
  { label: "Sticks & Mallets",       subs: ["Z Custom Sticks", "Hickory Series", "Artist Series", "Mallets"] },
  { label: "Apparel & Accessories" },
  { label: "Artists" },
  { label: "Education" },
];

export const CATEGORIES = [
  { label: "Cymbals",              img: "assets/Cymbals-4.png" },
  { label: "Sticks & Mallets",     img: "assets/Sticks-_-Mallets.png" },
  { label: "Apparel & Gifts",      img: "assets/Apparel-_-More.png" },
  { label: "Drummer Accessories",  img: "assets/Accesories-Catagory-Banner.png" },
];

export const IG_PLACEHOLDERS = [
  { bg: "linear-gradient(135deg,#1a1a1a,#2a2a2a)", icon: "♪",  gold: true },
  { bg: "linear-gradient(135deg,#e8e0cc,#c8bfa0)", icon: "🥁", gold: false },
  { bg: "linear-gradient(135deg,#111,#1a1a2e)",    icon: "♫",  gold: true },
  { bg: "linear-gradient(135deg,#2a1a1a,#1a1a1a)", icon: "🎵", gold: true },
  { bg: "linear-gradient(135deg,#e8dfc8,#d4c9a8)", icon: "🥁", gold: false },
];

export const SLIDES = [
  {
    bg: "linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 50%,#111 100%)",
    align: "flex-end", textAlign: "right",
    tag: "A Family Cymbals",
    title: "Find Your\nSound",
    body: "Classic sound, endless possibility. The A Family delivers the iconic tone that defined generations of music.",
    btnLabel: "Shop Now", btnClass: "zd-btn zd-btn-gold",
  },
  {
    bg: "linear-gradient(135deg,#0d0d0d 0%,#1a1008 50%,#0d0d0d 100%)",
    align: "flex-start", textAlign: "left",
    tag: "Young Drummer of the Year",
    title: "The Future\nof Drumming",
    body: "Celebrating the next generation of world-class drummers. Enter now for your chance to be recognized.",
    btnLabel: "Learn More", btnClass: "zd-btn", btnStyle: { background: "white", color: "black", borderColor: "white" },
  },
  {
    bg: "linear-gradient(135deg,#111 0%,#1c1010 50%,#111 100%)",
    align: "center", textAlign: "center",
    tag: "Exclusive Series",
    title: "Foundry\nSessions",
    body: "Behind-the-scenes access to the Zildjian factory. Watch world-class cymbals come to life.",
    btnLabel: "Watch Now", btnClass: "zd-btn zd-btn-gold",
  },
];

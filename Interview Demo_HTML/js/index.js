/* ── LETTER HOVER COLORS ────────────────────────────────────────────────────── */
const hoverColors = ['#f56a2a','#e94e77','#3a7bd5','#f5c518','#2ecf8e','#9b59b6','#e74c3c'];

function applyLetterHover(elements) {
  elements.forEach((el, i) => {
    const color = hoverColors[i % hoverColors.length];
    el.addEventListener('mouseenter', () => {   
      el.style.color = color;
      /* For SVG paths, swap fill instead */
      if (el.tagName === 'path' || el.tagName === 'g') {
        el.style.fill = color;
      }
    });
    el.addEventListener('mouseleave', () => {
      el.style.color = '';
      el.style.fill = '';
    });
  });
}
const svgLetters = document.querySelectorAll('.logo-letter');
if (svgLetters.length > 0) {
  applyLetterHover(svgLetters);
}
const flyerContainer = document.getElementById('flyer-container');
const flyerFlipper = document.getElementById('flyer-flipper');

if (flyerContainer && flyerFlipper) {
    flyerContainer.addEventListener('click', function() {
        flyerFlipper.classList.toggle('is-flipped');
    });
}
/* ── BUILD FALLBACK TEXT LOGO WITH PER-LETTER SPANS ────────────────────────── */
function buildLetterSpans(container, word) {
  container.innerHTML = '';
  [...word].forEach((char, i) => {
    const span = document.createElement('span');
    span.className = 'logo-letter';
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    container.appendChild(span);
  });
}

const varietyEl = document.getElementById('word-variety');
const storeEl   = document.getElementById('word-store');

if (varietyEl) buildLetterSpans(varietyEl, 'VARIETY');
if (storeEl)   buildLetterSpans(storeEl,   'STORE');

const allLetters = document.querySelectorAll('.logo-letter');
applyLetterHover(allLetters);

/* ── BRANDS GRID DATA ───────────────────────────────────────────────────────── */
const brandsData = {
  A: ['Acorn Farm','Alleyne&apos;s Honey','Alto Olives','Anchor Pickle'],
  B: ['Baked In Brooklyn','Barleycorn Rye','Blue Hill Dairy','Borough Broth','Bronx Roasters'],
  C: ['Canal Street Cure','Catskill Creamery','Cedar Ridge Farm','Cobble Hill Candles','Crown Ferments'],
  D: ['Dutch Kills Spirits','Dough & Co','Downtown Dill','Dry Dock Farms','Dunwoodie Grains','Dusty Knuckle'],
  E: ['East End Eggs','Elm City Honey','Esplanade Spice'],
  F: ['Flatbush Flour','Flushing Meadow Tea','Fort Greene Greens','Franklin Provisions'],
  G: ['Garden State Ginger','Gowanus Grains','Greenmarket Gold','Green-Wood Soap'],
  H: ['Harbor Herb Co.','Harlem Honey','Hell Gate Pickles','Hudson Valley Jam','Hunts Point Harvest'],
  I: ['Inwood Infusions','Irving Farm','Isley Soaps'],
  J: ['Jamaica Plain Jams','Javits Jerky','Jersey Shore Salt','Just Roots'],
  K: ['Kingsbridge Kvass','Knickerbocker Nuts','Knoll Crest Farm'],
  L: ['Lenox Hill Lavender','Liberty Lard','Long Island Larder'],
  M: ['Maspeth Mead','Metropolitan Mushrooms','Mill Basin Miso'],
  N: ['Narrows Noodle','New Utrecht Nuts','North Fork Naturals','Nostrand Nectars'],
  O: ['Old Orchard Oils','Olmsted Organics','Ozone Park Orchards'],
  P: ['Park Slope Pantry','Pelham Pickles','Port Morris Provisions','Prospect Preserve'],
  Q: ['Queens County Farms','Quince & Co'],
  R: ['Red Hook Roasters','Rikers Rye','Riverdale Root','Rockaway Rum','Roosevelt Island Relish'],
  S: ['Sag Harbor Salt','Sheepshead Syrups','Spuyten Duyvil Spice','Staten Island Smoke','Sutton Place Soap'],
  T: ['Throgs Neck Tea','Tompkins Tallow','Tremont Tinctures','Tri-State Tempeh'],
  U: ['Union Square Umami','Utica Ave Vinegar','Utopia Pkwy Herbs'],
  V: ['Van Cortlandt Veg','Vandam Vinegar','Verrazano Vanilla'],
  W: ['Wallabout Wax','Wantagh Wildflower','Washington Heights Water','West Farms Wheat'],
  X: ['Xenia Herbs Co.'],
  Y: ['Yankee Doodle Dairy','Yonkers Yeast','York Ave Yogurt'],
  Z: ['Zerega Ave Zest','Zoological Botanicals'],
};

const grid = document.getElementById('brands-grid');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildBrandsGrid() {
  grid.innerHTML = '';

  // Create the groups and append them DIRECTLY to the grid.
  // CSS grid-template-rows + grid-auto-flow: column handles the rest.
  letters.forEach(letter => {
    const group = document.createElement('div');
    group.className = 'alpha-group';

    const heading = document.createElement('div');
    heading.className = 'alpha-letter';
    heading.textContent = letter;
    group.appendChild(heading);

    const brands = brandsData[letter] || ['Brand Name'];
    brands.forEach(name => {
      const a = document.createElement('a');
      a.className = 'brand-name-item';
      a.textContent = name;
      a.href = '#';
      group.appendChild(a);
    });

    grid.appendChild(group);
  });
}

buildBrandsGrid();

/* ── FORM SUBMIT ────────────────────────────────────────────────────────────── */
document.querySelector('.submit-btn').addEventListener('click', function() {
  this.textContent = 'Sent ✓';
  this.style.background = '#2ecf8e';
  setTimeout(() => {
    this.textContent = 'Submit';
    this.style.background = '';
  }, 3000);
});
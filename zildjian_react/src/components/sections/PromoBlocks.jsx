// src/components/sections/PromoBlocks.jsx
export default function PromoBlocks() {
  return (
    <section style={{ maxWidth: 1600, margin: "30px auto", padding: "0 40px" }}>
      <div className="zd-promo-grid">

        {/* Large promo — left */}
        <div>
          <div className="zd-promo-large">
            <img src="assets/A-Family-Promo-Block-.png" alt="A Family" />
            <span className="zd-promo-badge">Shop Now</span>
          </div>
          <div className="zd-promo-text">
            <h3 className="zd-promo-title">A Family - Classic Sound, Endless Possibility</h3>
            <a href="#" className="zd-promo-link">Shop Now →</a>
          </div>
        </div>

        {/* Stacked promos — right */}
        <div>
          <div className="zd-promo-stack">
            <div>
              <div className="zd-promo-small">
                <img src="assets/Z-Custom-Promotion-Collections-Banner_mobile.png" alt="Z Custom" />
                <span className="zd-promo-badge">Shop Now</span>
              </div>
              <div className="zd-promo-text">
                <h3 className="zd-promo-title">Z Custom - Made for Metal</h3>
                <a href="#" className="zd-promo-link">Shop Now →</a>
              </div>
            </div>
            <div>
              <div className="zd-promo-small">
                <img src="assets/Zildjian-ALCHEM-E-Perfect-Tune-Headphones-Promo-Block-2.png" alt="ALCHEM-E Headphones" />
                <span className="zd-promo-badge">Shop Now</span>
              </div>
              <div className="zd-promo-text">
                <h3 className="zd-promo-title">Zildjian ALCHEM-E Perfect Tune Headphones</h3>
                <a href="#" className="zd-promo-link">Shop Now →</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

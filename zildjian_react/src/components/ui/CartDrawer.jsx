// src/components/ui/CartDrawer.jsx
export default function CartDrawer({ open, onClose, cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className={`zd-cart-overlay${open ? " open" : ""}`} onClick={onClose} />

      <div className={`zd-cart-drawer${open ? " open" : ""}`}>
        <div className="zd-cart-header">
          <h2>Your Bag</h2>
          <button className="zd-cart-close" onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="zd-cart-empty">
            <p>Your cart is empty</p>
            <button className="zd-btn" onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div style={{ padding: "16px 24px" }}>
              {cart.map(item => (
                <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--gray-mid)" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "var(--gray-text)", marginTop: 2 }}>${item.price.toFixed(2)} × {item.qty}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 700 }}>${(item.price * item.qty).toFixed(2)}</span>
                    <button onClick={() => onRemove(item.name)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--gray-text)", fontSize: 18, lineHeight: 1 }}>×</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: "16px 24px", borderTop: "1px solid var(--gray-mid)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontWeight: 700 }}>
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="zd-btn" style={{ display: "block", textAlign: "center", width: "100%", marginBottom: 10 }}>Checkout</button>
              <button className="zd-btn" style={{ display: "block", textAlign: "center", width: "100%", background: "transparent", color: "var(--black)" }} onClick={onClose}>View Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

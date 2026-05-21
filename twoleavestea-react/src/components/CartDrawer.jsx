import { useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const { cartItems, cartOpen, setCartOpen, changeQty, totalPrice } = useCart();
  const [giftChecked, setGiftChecked] = useState(false);
  const [giftNote, setGiftNote] = useState("");

  const remaining = Math.max(0, 75 - totalPrice).toFixed(2);
  const hasItems = cartItems.length > 0;

  const close = () => setCartOpen(false);

  return (
    <>
      <div
        className={`${styles.overlay} ${cartOpen ? styles.overlayOpen : ""}`}
        onClick={close}
      />
      <button
        className={`${styles.closeBtn} ${cartOpen ? styles.closeBtnOpen : ""}`}
        onClick={close}
        aria-label="Close cart"
      >
        ×
      </button>
      <div className={`${styles.drawer} ${cartOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.header}>
          <h2>My Cart</h2>
          <div className={styles.shippingBar}>
            {totalPrice >= 75
              ? "You have free shipping!"
              : `YOU ARE $${remaining} AWAY FROM FREE SHIPPING!`}
          </div>
        </div>

        <div className={styles.body}>
          {!hasItems ? (
            <p className={styles.empty}>Your Cart is Empty</p>
          ) : (
            <div className={styles.items}>
              {cartItems.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  <div className={styles.itemSwatch} style={{ background: item.bg }} />
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</p>
                    <div className={styles.qtyRow}>
                      <button onClick={() => changeQty(idx, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => changeQty(idx, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.giftRow}>
            <div className={styles.giftCheck}>
              <input
                type="checkbox"
                id="giftCheck"
                checked={giftChecked}
                onChange={(e) => {
                  setGiftChecked(e.target.checked);
                  if (!e.target.checked) setGiftNote("");
                }}
              />
              <label htmlFor="giftCheck">Is this a gift?</label>
            </div>
            {giftChecked && (
              <textarea
                className={styles.giftNote}
                placeholder="Write your note"
                value={giftNote}
                onChange={(e) => setGiftNote(e.target.value)}
              />
            )}
          </div>
          <button className={styles.checkoutBtn}>Checkout</button>
          <p className={styles.shippingNote}>
            <a href="#">Shipping</a> and taxes calculated at checkout
          </p>
        </div>
      </div>
    </>
  );
}

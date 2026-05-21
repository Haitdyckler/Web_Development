import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((name, price = 11.95, bg = "#b5d98a") => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) =>
          i.name === name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { name, price, qty: 1, bg }];
    });
    setCartOpen(true);
  }, []);

  const changeQty = useCallback((index, delta) => {
    setCartItems((prev) => {
      const updated = prev.map((item, i) =>
        i === index ? { ...item, qty: item.qty + delta } : item
      );
      return updated.filter((item) => item.qty > 0);
    });
  }, []);

  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartOpen,
        setCartOpen,
        addToCart,
        changeQty,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

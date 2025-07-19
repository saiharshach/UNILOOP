import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev;
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = id => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.new_price * item.qty, 0);

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

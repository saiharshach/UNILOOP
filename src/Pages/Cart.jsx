import React, { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, getTotal } = useContext(CartContext);
  const nav = useNavigate();

  if (!cartItems.length) return <h2>Your cart is empty</h2>;

  return (
    <div className="cart-container">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt="" />
          <span className="cart-name">{item.name}</span>
          <span className='cart-pri'>Rs. {item.new_price}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: Rs. {getTotal().toFixed(2)}</h3>
        <button onClick={() => nav('/checkout')}>Checkout</button>
      </div>
    </div>
  );
}
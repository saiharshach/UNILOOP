
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Pages/CartContext';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Checkout.css';

export default function Checkout() {
  const { clearCart } = useContext(CartContext);
  const [done, setDone] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      clearCart();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="checkout-page">
      {!done ? (
        <div className="loader">Verifying your order...</div>
      ) : (
        <div className="done">
          <h1>Checkout Complete!</h1>
            <DotLottieReact
                src="https://lottie.host/b681586c-cf0c-4cce-ac7a-23ed57cedc49/YxPcEucApb.lottie"
                loop
                autoplay
                className='lottie-success'
            />
           <p>Here’s your verification code:</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=VerifiedOrder123&size=150x150"
            alt="QR Code"
            className="qr-code"
          />
          <a
            href="https://api.qrserver.com/v1/create-qr-code/?data=VerifiedOrder123&size=150x150"
            download="verification-qr.png"
            className="download-btn"
          >
            Download QR Code
          </a>
          <p className="shopping-msg">Happy shopping!</p>
          <button className="continue-btn" onClick={() => nav('/Shop')}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}
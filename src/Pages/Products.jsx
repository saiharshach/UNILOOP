
import React, {useContext} from 'react'
import { CartContext } from './CartContext';
import './Products.css'
import { useNavigate, useParams } from 'react-router-dom'
import Allprods from './Items/Allprods';

const Product = () => {
  const { id } = useParams();
  const product = Allprods.find((item) => item.id === parseInt(id));
  if (!product) {
    return <h2>Product not found</h2>
  }
const {addToCart} =useContext(CartContext);
const nav = useNavigate();

  return (
    <div className="product-container">
      <h1 className="product-title">{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      
      <div className="price-section">
        <span className="new-price">Rs. {product.new_price}</span>
        <span className="old-price">Rs. {product.old_price}</span>
      </div>

      <button className="add-to-cart" onClick={()=>{
        addToCart(product);
        nav('/cart');
      }}
      >🛒 Add to Cart</button>
    </div>

  )
}

export default Product;
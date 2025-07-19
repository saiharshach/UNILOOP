import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Lineup.css';

const Lineup = () => {
  const navigate = useNavigate();
  return (
    <div className='hero-contai'>
        <div className="shops-navbar">
        <div className="items" onClick={()=>navigate("/Mens")}>MENS</div>
        <div className="items" onClick={()=>navigate("/Womens")}>WOMENS</div>
        <div className="items" onClick={()=>navigate("/Cart")}>CART</div>
        <div className="items" onClick={()=>navigate("/Account")}>ACCOUNT</div>
      </div>
    </div>
  )
}

export default Lineup
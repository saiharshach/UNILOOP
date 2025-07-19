
import React from 'react';
import './VogueCollage.css';
import centerImg from '../Components/Assets/girlchic.jpeg';
import leftImg from '../Components/Assets/BOSS.jpeg';     
import rightImg from '../Components/Assets/johnny kavanagh.jpeg';   

const VogueCollage = () => {
  return (
    <>
      <div className="vogue-wrapper">
        <h1 className="vogue-heading">Make it <span>Mine</span></h1>
        <p className="vogue-subtext"> Campus Closet. Curated for You.</p>
        <button className="vogue-btn">Fashion that turns heads (again).</button>

        <div className="vogue-gallery">
          <img src={leftImg} alt="look1" />
          <img src={centerImg} alt="look2" />
          <img src={rightImg} alt="look3" />
        </div>

        <div className="brand-logos">
          <p>STYLE.</p>
          <p>SWIPE.</p>
          <p>SNAG.</p>
          <p>SLAY.</p>
        </div>
      </div>
      <div className="vogue-footer">
        <div className="footer-top">
          <p className="empor-logo">UniLoop</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-tiktok"></i>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 UniLoop. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VogueCollage;
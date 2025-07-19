import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  let activeMenu = '';
  if (location.pathname === '/') activeMenu = 'what';
  else if (location.pathname === '/Loginsignup') activeMenu = 'Loginsignup';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="UniLoop Logo" />
        <p>UniLoop</p>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to='/' className='btn' onClick={() => setMenuOpen(false)}>
            What's UniLoop?
          </Link>
          {activeMenu === "what" && <hr />}
        </li>
        <li>
          <Link to='/Loginsignup' className='btn' onClick={() => setMenuOpen(false)}>
            Login/SignUp
          </Link>
          {activeMenu === "Loginsignup" && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
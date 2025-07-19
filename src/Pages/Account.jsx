import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductList from './Productlist';
import './Accounts.css'; 

const Account = () => {
  const [activePage, setActivePage] = useState('add');

  return (
    <div className="account-container">
      <div className="sidebar">
        <button onClick={() => setActivePage('add')} className={`account-btn $activePage === 'add' ? 'active' : ''}`}>
          🛒 Add Product
        </button>
        <button onClick={() => setActivePage('list')} className={`account-btn $activePage === 'list' ? 'active' : ''}`}>
          📂 Product List
        </button>
      </div>

      <div className="content">
        {activePage === 'add' ? <AddProduct /> : <ProductList />}
      </div>
    </div>
  );
};

export default Account;
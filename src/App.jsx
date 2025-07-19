import React, { useContext } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Loginsignup from './Pages/Loginsignup';
import Shop from './Pages/Shop';
import Hero from './Components/Hero/Hero';
import Womens from './Pages/Womens';
import Mens from './Pages/Mens';
import Lineup from './Pages/Lineup';
import Account from './Pages/Account';
import { LoginProvider, LoginContext } from './Components/LoginContext'; 
import ChatPage from './Pages/ChatPage';

const Home = () => <><Hero /></>;

const Layout = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const location = useLocation();

  const showLineup = isLoggedIn && location.pathname !== '/' && location.pathname !== '/Loginsignup';

  return (
    <>
      <Navbar />
      {showLineup && <Lineup />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Loginsignup" element={<Loginsignup />} />
        <Route path="/item/:id" element={<Products />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/chat/:uploaderId" element={<ChatPage />} />
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <LoginProvider>
      <Layout />
    </LoginProvider>
  </BrowserRouter>
);

export default App;
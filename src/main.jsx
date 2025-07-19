import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Pages/CartContext.jsx'
import { LoginProvider } from './Components/LoginContext.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </CartProvider>
  </StrictMode>,
)

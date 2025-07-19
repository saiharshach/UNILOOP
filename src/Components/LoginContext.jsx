// import { createContext, useState } from 'react';

// export const LoginContext = createContext();

// export const LoginProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // starts as false

//   return (
//     <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

// Components/LoginContext.jsx

import React, { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  // Initialize from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem('isLoggedIn');
    return storedValue === 'true'; // if not found, defaults to false
  });

  // Sync with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
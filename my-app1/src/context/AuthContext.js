// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from session storage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login method to update state and session storage
  const login = (userData) => {

    console.log(userData)
   localStorage.setItem('authUser', JSON.stringify(userData));
    setUser(userData);
  };

  // Logout method to clear session
  const logout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Custom Hook for Easy Access   
                                                      // const { user, login, logout } = useAuth();  for use like this 



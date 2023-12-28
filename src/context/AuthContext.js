'use client'

import { createContext, useContext, useState } from 'react';
import pb from '../db/db';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(pb.authStore.isValid);

  const AuthRefresh = () => {
    setLoggedIn(pb.authStore.isValid);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, AuthRefresh }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

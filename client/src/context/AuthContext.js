import React, { createContext, useState, useEffect } from 'react';
import { fetchUserProfile } from '../utils/api';  // Fetch user data from backend

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const profile = await fetchUserProfile();  // Fetch profile from backend
        setUser(profile);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

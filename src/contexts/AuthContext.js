
'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

// Simple hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@dashboard.com',
  password: 'admin123',
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const signIn = async (email, password) => {
    try {
      setLoading(true);

      // Simple credential check
      if (
        email === ADMIN_CREDENTIALS.email &&
        password === ADMIN_CREDENTIALS.password
      ) {
        const userData = {
          id: 'admin-user',
          email: email,
          name: 'Admin User',
        };

        setUser(userData);
        setIsAdmin(true);

        return { data: { user: userData }, error: null };
      } else {
        return {
          data: null,
          error: { message: 'Invalid email or password' },
        };
      }
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      setIsAdmin(false);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
    user,
    isAdmin,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

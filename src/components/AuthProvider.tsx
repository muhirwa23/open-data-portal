"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface User {
  id: string;
  name: string;
  email: string;
  organization?: string;
  role?: string;
  apikey?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  register: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for cached user in localStorage
    const saved = localStorage.getItem('nisr_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse user session");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    // Mock login for the portal restoration; to be connected to CKAN backends
    if (email.includes('statistics.gov.rw')) {
      const mockUser = {
        id: 'u1',
        name: email.split('@')[0],
        email: email,
        organization: 'NISR Central',
        role: 'editor',
        apikey: '8fa9-4bba-912c-da82'
      };
      setUser(mockUser);
      localStorage.setItem('nisr_user', JSON.stringify(mockUser));
      router.push('/dashboard');
    } else {
      throw new Error("Only institutional accounts are permitted.");
    }
  };

  const register = async (name: string, email: string, pass: string) => {
    toast.success('Membership Request Submitted');
    router.push('/login');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nisr_user');
    router.push('/');
    toast.success('Session Terminated');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      register, 
      logout, 
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

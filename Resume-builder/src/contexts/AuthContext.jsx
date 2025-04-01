import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check for stored auth state on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email) => {
    try {
      // Simulate API call
      const userData = {
        email,
        name: email.split('@')[0], // Simple way to generate a display name
        createdAt: new Date().toISOString()
      };

      // Store user data
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);

      // Show success message
      toast.success('Successfully logged in!', {
        style: {
          background: '#6D28D9',
          color: '#fff'
        }
      });

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to log in. Please try again.', {
        style: {
          background: '#DC2626',
          color: '#fff'
        }
      });
      console.error('Login error:', error);
    }
  };

  const register = async (email, name) => {
    try {
      // Simulate API call
      const userData = {
        email,
        name,
        createdAt: new Date().toISOString()
      };

      // Store user data
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);

      // Show success message
      toast.success('Registration successful!', {
        style: {
          background: '#6D28D9',
          color: '#fff'
        }
      });

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to register. Please try again.', {
        style: {
          background: '#DC2626',
          color: '#fff'
        }
      });
      console.error('Registration error:', error);
    }
  };

  const logout = () => {
    // Clear stored data
    localStorage.removeItem('user');
    setUser(null);

    // Show success message
    toast.success('Successfully logged out!', {
      style: {
        background: '#6D28D9',
        color: '#fff'
      }
    });

    // Redirect to home
    navigate('/');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 
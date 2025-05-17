import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CredentialResponse } from '@react-oauth/google';

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  sub: string; // Google's unique identifier
  isAdmin?: boolean; // Optional admin flag
}

interface GoogleAuthContextType {
  googleUser: GoogleUser | null;
  handleGoogleSuccess: (credentialResponse: CredentialResponse) => void;
  handleGoogleError: () => void;
  logout: () => void;
}

const GoogleAuthContext = createContext<GoogleAuthContextType | undefined>(undefined);

export function GoogleAuthProvider({ children }: { children: React.ReactNode }) {
  const [googleUser, setGoogleUser] = useState<GoogleUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('googleUser');
    if (savedUser) {
      setGoogleUser(JSON.parse(savedUser));
    }
    console.log('Google Auth Provider initialized');
  }, []);

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    console.log('Google Sign-In Success:', credentialResponse);
    try {
      // Decode the JWT token to get user information
      const decoded = JSON.parse(atob(credentialResponse.credential!.split('.')[1]));
      console.log('Decoded Google user info:', decoded);
      
      const user: GoogleUser = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        sub: decoded.sub,
        isAdmin: false, // By default, Google users are not admins
      };

      setGoogleUser(user);
      localStorage.setItem('googleUser', JSON.stringify(user));
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Error processing Google login:', error);
    }
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
  };

  const logout = () => {
    setGoogleUser(null);
    localStorage.removeItem('googleUser');
    navigate('/');
  };

  return (
    <GoogleAuthContext.Provider
      value={{
        googleUser,
        handleGoogleSuccess,
        handleGoogleError,
        logout,
      }}
    >
      {children}
    </GoogleAuthContext.Provider>
  );
}

export function useGoogleAuth() {
  const context = useContext(GoogleAuthContext);
  if (context === undefined) {
    throw new Error('useGoogleAuth must be used within a GoogleAuthProvider');
  }
  return context;
} 
import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import {
  deleteAccessToken,
  getAccessToken,
  saveAccessToken,
} from "../../apis/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (accessToken: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (accessToken: string) => {
    await saveAccessToken(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await deleteAccessToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);

"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(false);

  const Auth = async () => {
    try {
      const response = await axios.get("/api/auth");
      let admin = response.data.admin.isAdmin;
      setAdmin(admin);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Auth();
  }, []);
  const value = {
    isAdmin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

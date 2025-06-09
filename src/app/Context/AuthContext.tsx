"use client";

import React, { createContext, useEffect, useState } from "react";
import * as Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  token: string | null;
  userData: string;
  isMobile: boolean;
}

interface TokenPayload {
  userName: string;
  email: string;
  sub: string;
  userImg: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userData, setUserData] = useState<TokenPayload>({
    userName: "",
    email: "",
    sub: "",
    userImg: "",
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize(); // define valor inicial no client
    window.addEventListener("resize", updateScreenSize);

    const newToken = Cookies.default.get("token");
    setToken(newToken || "");

    if (newToken) {
      const decodedToken = jwtDecode<TokenPayload>(newToken);

      const newUserData = {
        userName: decodedToken.userName,
        email: decodedToken.email,
        sub: decodedToken.sub,
        userImg: decodedToken.userImg,
      };

      setUserData(newUserData);
    }

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  return (
    <AuthContext.Provider
      value={{ token, userData: JSON.stringify(userData), isMobile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { WindowsSize } from "../interfaces/WindowSize";
import { UserPayload } from "../interfaces/User";

const WindowSizeContext = createContext<WindowsSize | undefined>(undefined);
const UserContext = createContext<{
  user: UserPayload | null;
  setUser: (user: UserPayload | null) => void;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [windowSize, setWindowSize] = useState<WindowsSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [user, setUser] = useState<UserPayload | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </WindowSizeContext.Provider>
  );
}

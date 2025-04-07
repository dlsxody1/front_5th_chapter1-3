/* eslint-disable prettier/prettier */
import React, { ReactNode, useMemo } from "react";
import ThemeContext from "../context/ThemeContext";
import { useTheme } from "../@lib/hooks/useTheme";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

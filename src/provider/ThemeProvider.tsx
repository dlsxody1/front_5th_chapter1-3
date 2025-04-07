import React, { ReactNode, useMemo } from "react";
import ThemeContext from "../context/ThemeContext";
import { useTheme } from "../@lib/hooks/useTheme";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  // useMemo로 context 값 메모이제이션
  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

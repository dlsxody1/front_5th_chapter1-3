import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevThem) => (prevThem === "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };
};

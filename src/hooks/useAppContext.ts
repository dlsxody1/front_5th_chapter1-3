import { useContext } from "react";
import ThemContext from "../context/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

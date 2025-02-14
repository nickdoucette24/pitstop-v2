import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Custom Hook for accessing ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return { theme: "light", toggleTheme: () => {} }; // Fallback for production
  }

  return context;
};

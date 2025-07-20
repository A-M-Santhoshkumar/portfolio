// src/context/ThemeContext.jsx
import { createContext, useContext, useState } from "react";
import { useAnimation } from "framer-motion";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const controls = useAnimation();

  // Centralized animation variants
  const animationVariants = {
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, controls, animationVariants }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

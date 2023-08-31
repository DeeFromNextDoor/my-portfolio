import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const [navVisible, setvisibility] = useState(true);
  let previousPosition = null;

  const handleNavScroll = () => {
    const currentPosition = window.pageYOffset;

    if (previousPosition > currentPosition && currentPosition > 0) {
      setvisibility(true);
    } else if (previousPosition < currentPosition) {
      setvisibility(false);
    }
    previousPosition = currentPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  return (
    <AppContext.Provider value={{ toggleTheme, darkMode, navVisible }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

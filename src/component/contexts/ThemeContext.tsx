import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { JSX } from 'react'; 

type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeIcon: JSX.Element; // ✅ now JSX.Element, not string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('theme1');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // ✅ JSX icon component (emoji wrapped in span)
  const getThemeIcon = (): JSX.Element => {
    switch (theme) {
      case 'theme1':
        return <span role="img" aria-label="sun" className="text-2xl"></span>;
      case 'theme2':
        return <span role="img" aria-label="moon" className="text-2xl"></span>;
      case 'theme3':
        return <span role="img" aria-label="contrast" className="text-2xl"></span>;
      default:
        return <span role="img" aria-label="sun" className="text-2xl"></span>;
    }
  };

  const themeIcon = getThemeIcon();

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, themeIcon }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

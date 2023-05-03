import React, { createContext, useContext, useState } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  }
}

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
  children?: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<IThemeContext> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>((light));
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    localStorage.setItem('@budget:theme', JSON.stringify(theme));
  }
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };

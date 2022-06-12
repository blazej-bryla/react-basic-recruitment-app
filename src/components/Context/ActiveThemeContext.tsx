import React, {
  useState,
  ReactNode,
} from "react";
import {ThemeProvider } from "@mui/material";
import { lightTheme } from "../../theme";

type ThemeContextProps = {
  children: ReactNode;
};
export type ThemeContextType = {
  currentTheme: object | undefined;
  setCurrentTheme: (name: object) => void;
};

const ActiveThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const ActiveThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<object>(lightTheme);

  const _setCurrentTheme = (name: object) => {
    setCurrentTheme(name);
  };

  const contextValue = {
    currentTheme,
    setCurrentTheme: _setCurrentTheme,
  };

  return (
    <ActiveThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ActiveThemeContext.Provider>
  );
};

export { ActiveThemeProvider, ActiveThemeContext };

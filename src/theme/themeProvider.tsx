import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import { theme as base } from './theme';

const ThemeContext = createContext(base);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemMode = useColorScheme(); // "light" | "dark" | null

  const mergedTheme = useMemo(() => {
    const modeTheme = systemMode === 'dark' ? darkTheme : lightTheme;
    return {
      ...base,
      colors: {
        ...base.colors,
        ...modeTheme.colors,
      },
    };
  }, [systemMode]);

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

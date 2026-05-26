'use client';

import React, { createContext, useContext } from 'react';

interface ThemeContextType {
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ toggleTheme: () => {} });

/** Directly toggles html.dark class and persists to localStorage. */
function applyToggle() {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  if (isDark) {
    root.classList.remove('dark');
    try {
      localStorage.setItem('theme', 'light');
    } catch {
      /* ignore */
    }
  } else {
    root.classList.add('dark');
    try {
      localStorage.setItem('theme', 'dark');
    } catch {
      /* ignore */
    }
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ toggleTheme: applyToggle }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

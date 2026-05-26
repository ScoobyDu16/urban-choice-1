'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

/**
 * Theme toggle button.
 *
 * Both icons are always rendered — CSS (via the `html.dark` class set by the
 * inline script in layout.tsx) controls which one is visible.  This avoids
 * hydration mismatches and the react-hooks/set-state-in-effect lint rule.
 */
export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white"
      aria-label="Toggle light / dark theme"
      title="Toggle light / dark theme"
    >
      {/* Sun — shown only in dark mode (click to go light) */}
      <Sun className="theme-icon-sun h-5 w-5" aria-hidden="true" />
      {/* Moon — shown only in light mode (click to go dark) */}
      <Moon className="theme-icon-moon h-5 w-5" aria-hidden="true" />
    </button>
  );
}

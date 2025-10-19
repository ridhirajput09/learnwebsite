import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark, FOUC script handles initial render

  useEffect(() => {
    // This effect runs on mount and sets the theme state from what the FOUC script determined
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';
        const root = window.document.documentElement;
        
        root.classList.remove(prevTheme);
        root.classList.add(newTheme);

        localStorage.setItem('theme', newTheme);
        return newTheme;
    });
  }, []);

  return [theme, toggleTheme];
};

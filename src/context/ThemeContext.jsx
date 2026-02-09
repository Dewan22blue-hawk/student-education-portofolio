import { createContext, useContext, useEffect, useState } from 'react';

/**
 * ThemeContext - Global theme state management
 * Features: OS preference detection, localStorage persistence, smooth transitions
 */
const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // 1. Check localStorage first
        const savedTheme = localStorage.getItem('portfolio-theme-preference');
        if (savedTheme) return savedTheme;

        // 2. Check OS preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        // 3. Default to dark
        return 'dark';
    });

    useEffect(() => {
        // Apply theme to document
        const root = document.documentElement;

        // Remove previous theme
        root.classList.remove('light', 'dark');

        // Add current theme with smooth transition
        root.style.setProperty('color-scheme', theme);
        root.classList.add(theme);

        // Save to localStorage
        localStorage.setItem('portfolio-theme-preference', theme);
    }, [theme]);

    useEffect(() => {
        // Listen to OS theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            // Only auto-switch if user hasn't manually set preference
            const savedTheme = localStorage.getItem('portfolio-theme-preference');
            if (!savedTheme) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const value = {
        theme,
        toggleTheme,
        setTheme,
        isDark: theme === 'dark',
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

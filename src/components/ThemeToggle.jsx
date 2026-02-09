import { useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import gsap from 'gsap';

/**
 * ThemeToggle - Interactive theme switcher with GSAP animations
 * Features: Smooth icon transitions, glassmorphism style, accessible
 */
const ThemeToggle = () => {
    const { theme, toggleTheme, isDark } = useTheme();
    const iconRef = useRef(null);

    useEffect(() => {
        if (!iconRef.current) return;

        // Animate icon change with flip effect
        gsap.timeline()
            .to(iconRef.current, {
                rotationY: 90,
                duration: 0.2,
                ease: 'power2.in',
            })
            .set(iconRef.current, { rotationY: -90 })
            .to(iconRef.current, {
                rotationY: 0,
                duration: 0.2,
                ease: 'power2.out',
            });
    }, [theme]);

    const handleToggle = () => {
        toggleTheme();
    };

    return (
        <button
            onClick={handleToggle}
            className="p-3 rounded-full glass-strong hover:bg-white/20 dark:hover:bg-white/10 transition-all group relative"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div ref={iconRef} className="w-5 h-5">
                {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                ) : (
                    <Moon className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                )}
            </div>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {isDark ? 'Light mode' : 'Dark mode'}
            </span>
        </button>
    );
};

export default ThemeToggle;

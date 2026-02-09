import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Home, User, Code, Server, FolderOpen, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import gsap from 'gsap';

/**
 * BottomNavigation - Modern pill-shaped navigation inspired by ifalf.com
 * Responsive: Bottom bar (mobile) / Left sidebar (desktop)
 */
const BottomNavigation = () => {
    const { isDark } = useTheme();
    const activeIndicatorRef = useRef(null);

    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: User, label: 'About', path: '/about' },
        { icon: Code, label: 'Developer', path: '/developer' },
        { icon: Server, label: 'SysAdmin', path: '/sysadmin' },
        { icon: FolderOpen, label: 'Projects', path: '/projects' },
        { icon: Mail, label: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        // Animate active indicator on mount
        if (activeIndicatorRef.current) {
            gsap.fromTo(
                activeIndicatorRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
            );
        }
    }, []);

    return (
        <>
            {/* Mobile: Bottom Navigation */}
            <nav
                className={`
          md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-1 px-4 py-3 rounded-full
          backdrop-blur-lg border shadow-lg
          transition-all duration-300
          ${isDark
                        ? 'bg-gray-900/80 border-white/10 shadow-black/20'
                        : 'bg-white/80 border-gray-200/20 shadow-gray-900/10'
                    }
        `}
            >
                {navItems.map(({ icon: Icon, label, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) => `
              relative p-3 rounded-full transition-all duration-300
              ${isActive
                                ? `${isDark ? 'text-primary-400 bg-primary-500/10' : 'text-primary-600 bg-primary-500/10'}`
                                : `${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} hover:bg-gray-500/10`
                            }
            `}
                        aria-label={label}
                        title={label}
                    >
                        {({ isActive }) => (
                            <>
                                <Icon className="w-5 h-5" />
                                {isActive && (
                                    <span
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500"
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
                <div className="w-px h-6 bg-gray-300/20 mx-1" />
                <ThemeToggle />
            </nav>

            {/* Desktop: Left Sidebar Navigation */}
            <nav
                className={`
          hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50
          flex-col items-center gap-1 px-3 py-4 rounded-full
          backdrop-blur-lg border shadow-lg
          transition-all duration-300
          ${isDark
                        ? 'bg-gray-900/80 border-white/10 shadow-black/20'
                        : 'bg-white/80 border-gray-200/20 shadow-gray-900/10'
                    }
        `}
            >
                {navItems.map(({ icon: Icon, label, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) => `
              relative p-3 rounded-full transition-all duration-300 group
              ${isActive
                                ? `${isDark ? 'text-primary-400 bg-primary-500/10' : 'text-primary-600 bg-primary-500/10'} scale-110`
                                : `${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} hover:bg-gray-500/10 hover:scale-105`
                            }
            `}
                        aria-label={label}
                    >
                        {({ isActive }) => (
                            <>
                                <Icon className="w-5 h-5" />
                                {/* Tooltip */}
                                <span className={`
                  absolute left-full ml-4 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap
                  opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                  ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
                `}>
                                    {label}
                                </span>
                                {isActive && (
                                    <span
                                        ref={activeIndicatorRef}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-primary-500"
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
                <div className="w-6 h-px bg-gray-300/20 my-1" />
                <ThemeToggle />
            </nav>
        </>
    );
};

export default BottomNavigation;

import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutEffect, useState, Suspense } from 'react';
import { useTheme } from '../context/ThemeContext';
import BottomNavigation from '../components/BottomNavigation';
import gsap from 'gsap';

/**
 * MainLayout - Shared layout wrapper for all pages
 * Features: Page transitions, persistent navigation, theme-aware styling
 */
const MainLayout = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const { isDark } = useTheme();

    useLayoutEffect(() => {
        const pageContent = document.querySelector('.page-transition');
        if (!pageContent) return;

        // GSAP page transition animation
        const tl = gsap.timeline({
            onComplete: () => {
                setDisplayLocation(location);
                window.scrollTo(0, 0); // Scroll to top on route change
            }
        });

        tl.to(pageContent, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.in',
        })
            .set(pageContent, { y: 20 })
            .to(pageContent, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
            });

        return () => tl.kill();
    }, [location]);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark
                ? 'bg-gray-950 text-white'
                : 'bg-gray-50 text-gray-900'
            }`}>
            {/* Page Content with Transition */}
            <div className="page-transition pb-20 md:pb-0 md:pl-20">
                <Suspense
                    fallback={
                        <div className="min-h-screen flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-gray-400">Loading...</p>
                            </div>
                        </div>
                    }
                >
                    <Outlet context={{ location: displayLocation }} />
                </Suspense>
            </div>

            {/* Persistent Bottom Navigation */}
            <BottomNavigation />
        </div>
    );
};

export default MainLayout;

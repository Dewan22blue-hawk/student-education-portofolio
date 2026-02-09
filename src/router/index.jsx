import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy load pages for code splitting
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const DeveloperPortfolio = lazy(() => import('../pages/DeveloperPortfolio'));
const SysAdminPortfolio = lazy(() => import('../pages/SysAdminPortfolio'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

/**
 * Router Configuration
 * Uses React Router v6 with nested routes and lazy loading
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'developer',
                element: <DeveloperPortfolio />,
            },
            {
                path: 'sysadmin',
                element: <SysAdminPortfolio />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);

export default router;

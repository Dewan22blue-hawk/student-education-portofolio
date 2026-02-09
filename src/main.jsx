import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import router from './router';
import './index.css';

/**
 * Application Entry Point
 * Integrates React Router with Theme Context
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading portfolio...</p>
            </div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);


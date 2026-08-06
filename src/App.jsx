import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import Dashboard from './pages/Dashboard';









const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      


      { path: '*', element: <Dashboard /> },
    ],
  },
  
]);

export default router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components/MainLayout';

import Dashboard from './Pages/Dashboard';
import DetailsPage from './Pages/Customerdetails/detailspage'; // 1. Import DetailsPage

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'customer-details', element: <DetailsPage /> },

      // 2. Add the path matching your browser URL
      { path: 'base-ui/accordion', element: <DetailsPage /> },

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;
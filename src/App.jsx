import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import Dashboard from './pages/Dashboard';
import Calendar from "./Pages/Support/Calendar";









const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'calendar', element: <Calendar /> },

      


      { path: '*', element: <Dashboard /> },
    ],
  },
  
]);

export default router;
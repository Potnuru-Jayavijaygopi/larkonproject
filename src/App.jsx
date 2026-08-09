import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './Components/MainLayout';

import Dashboard from './Pages/Dashboard';
import DetailsPage from './Pages/Customerdetails/detailspage';

import SellerList from './Pages/Pages2/sellerlist';
import SellerDetails from './Pages/Pages2/sellerdetails';
import SellerEdit from './Pages/Pages2/selleredit';
import SellerCreate from './Pages/Pages2/sellercreate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      { path: 'customer-details', element: <DetailsPage /> },
      { path: 'customers/details', element: <DetailsPage /> },
      { path: 'customers/customer-details', element: <DetailsPage /> },
      { path: 'customers/Customer Details', element: <DetailsPage /> },

      { path: 'sellers/list', element: <SellerList /> },
      { path: 'seller-list', element: <SellerList /> },

      { path: 'sellers/details', element: <SellerDetails /> },
      { path: 'sellers/details/:id', element: <SellerDetails /> },
      { path: 'seller-details', element: <SellerDetails /> },

      { path: 'sellers/edit', element: <SellerEdit /> },
      { path: 'sellers/edit/:id', element: <SellerEdit /> },
      { path: 'seller-edit', element: <SellerEdit /> },

      { path: 'sellers/create', element: <SellerCreate /> },
      { path: 'sellers/add', element: <SellerCreate /> },
      { path: 'seller-create', element: <SellerCreate /> },

      { path: 'base-ui/accordion', element: <Dashboard /> },

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;
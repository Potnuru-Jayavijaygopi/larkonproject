import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components/MainLayout';

import Dashboard from './Pages/Dashboard';

import ProductList from './Pages/product/ProductList';
import ProductGrid from './Pages/product/ProductGrid';
import ProductDetails from './Pages/product/ProductDetails';
import AddProduct from './Pages/product/AddProduct';
import CreateProduct from './Pages/product/CreateProduct';

import ComingSoon from './Pages/pages1/ComingSoon';
import Maintenance from './Pages/pages1/Maintenance';
import Error404 from './Pages/pages1/Error404';
import Timeline from './Pages/pages1/Timeline';
import Pricing from './Pages/pages1/Pricing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      // Product routes
      { path: 'products/list', element: <ProductList /> },
      { path: 'products/grid', element: <ProductGrid /> },
      { path: 'products/details', element: <ProductDetails /> },
      { path: 'products/details/:id', element: <ProductDetails /> },
      { path: 'products/add', element: <AddProduct /> },
      { path: 'products/add/:id', element: <AddProduct /> },
      { path: 'products/edit/:id', element: <AddProduct /> },
      { path: 'products/create', element: <CreateProduct /> },

      // Pages1 routes
      { path: 'pages/coming-soon', element: <ComingSoon /> },
      { path: 'pages/maintenance', element: <Maintenance /> },
      { path: 'pages/error-404', element: <Error404 /> },
      { path: 'pages/timeline', element: <Timeline /> },
      { path: 'pages/pricing', element: <Pricing /> },

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;

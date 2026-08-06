import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import Dashboard from './pages/Dashboard';

import ProductList from './pages/product/ProductList';
import ProductGrid from './pages/product/ProductGrid';
import ProductDetails from './pages/product/ProductDetails';
import AddProduct from './pages/product/AddProduct';
import CreateProduct from './pages/product/CreateProduct';


import ComingSoon from './pages/pages1/ComingSoon';
import Maintenance from './pages/pages1/Maintenance';
import Error404 from './pages/pages1/Error404';
import Timeline from './pages/pages1/Timeline';
import Pricing from './pages/pages1/Pricing';




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },

      { path: 'products/list', element: <ProductList /> },
      { path: 'products/grid', element: <ProductGrid /> },
      { path: 'products/details', element: <ProductDetails /> },
      { path: 'products/add', element: <AddProduct /> },
      { path: 'products/create', element: <CreateProduct /> },

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

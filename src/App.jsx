import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';

import ProductList from './pages/product/ProductList';
import ProductGrid from './pages/product/ProductGrid';
import ProductDetails from './pages/product/ProductDetails';
import AddProduct from './pages/product/AddProduct';
import CreateProduct from './pages/product/CreateProduct';



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

      { path: '*', element: <Dashboard /> },
    ],
  },
]);

export default router;
